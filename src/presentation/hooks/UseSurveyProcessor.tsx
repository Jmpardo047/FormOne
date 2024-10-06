import { useState, useEffect } from 'react';
import RNFS from 'react-native-fs';
import { Alert } from 'react-native';

interface JsonFile {
  name: string;
  content: any;
  selected: boolean;
}

export const useSurveyProcessor = () => {
  const [files, setFiles] = useState<JsonFile[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    readJsonFiles();
  }, []);

  const readJsonFiles = async () => {
    try {
      const path = '/data/data/com.formone/files';
      const result = await RNFS.readDir(path);
      const jsonFiles = result.filter(file => file.name.endsWith('.json'));

      const fileContents = await Promise.all(
        jsonFiles.map(async (file) => {
          const content = await RNFS.readFile(file.path, 'utf8');
          return { name: file.name, content: JSON.parse(content), selected: false };
        })
      );

      setFiles(fileContents);
    } catch (err) {
      if (err instanceof Error) {
        setError('Error reading files: ' + err.message);
      } else {
        setError('An unknown error occurred while reading files');
      }
    }
  };

  const toggleFileSelection = (index: number) => {
    const updatedFiles = [...files];
    updatedFiles[index].selected = !updatedFiles[index].selected;
    setFiles(updatedFiles);
  };

  const processSurveys = async () => {
    const selectedFiles = files.filter(file => file.selected);
    if (selectedFiles.length === 0) {
      Alert.alert('No surveys selected', 'Please select at least one survey to process.');
      return;
    }

    setIsProcessing(true);
    try {
      // Replace this URL with your actual API endpoint
      const apiUrl = 'https://api.example.com/process-surveys';
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedFiles),
      });

      if (!response.ok) {
        throw new Error('Failed to process surveys');
      }

      const result = await response.json();
      Alert.alert('Success', 'Surveys processed successfully!');
      // Optionally, you can update the local state or perform any other actions here
    } catch (err) {
      if (err instanceof Error) {
        Alert.alert('Error', 'Failed to process surveys: ' + err.message);
      } else {
        Alert.alert('Error', 'An unknown error occurred while processing surveys');
      }
    } finally {
      setIsProcessing(false);
    }
  };

  return {
    files,
    error,
    isProcessing,
    toggleFileSelection,
    processSurveys
  };
};