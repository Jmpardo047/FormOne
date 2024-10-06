import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import RNFS from 'react-native-fs';

interface JsonFile {
  name: string;
  content: any;
}

export const  JsonFileReader = () => {
  const [files, setFiles] = useState<JsonFile[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<JsonFile | null>(null);

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
          return { name: file.name, content: JSON.parse(content) };
        })
      );

      setFiles(fileContents);
    } catch (err) {
      setError('Error reading files: ' + err);
    }
  };

  const renderFileItem = ({ item }: { item: JsonFile }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => setSelectedFile(item)}
    >
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>JSON Files in /data/data/com.formone/files:</Text>
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={files}
          renderItem={renderFileItem}
          keyExtractor={(item) => item.name}
        />
      )}
      <Modal
        visible={selectedFile !== null}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedFile?.name}</Text>
            <Text style={styles.modalText}>
              {JSON.stringify(selectedFile?.content, null, 2)}
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setSelectedFile(null)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
  },
  error: {
    color: 'red',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 14,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ddd',
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});