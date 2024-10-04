import { useField } from 'formik';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import { globalStyles } from '../../theme/theme';

export interface SubOption {
  label: string;
  value: string;
}

interface NestedCheckboxProps {
  mainOptions: { label: string; value: string }[];
  subOptions: [SubOption[], SubOption[], SubOption[]];
  mainName: string;
  subNames: [string, string, string];
  counterName: string;
  mainQTitle: string;
  subQTitles: [string, string, string];
  counterQTitle: string;
}

export const NestedCheckBox = ({ 
  mainOptions, 
  subOptions, 
  mainName, 
  subNames, 
  counterName,
  mainQTitle, 
  subQTitles,
  counterQTitle
}: NestedCheckboxProps) => {
  const [mainField, mainMeta, mainHelpers] = useField(mainName);
  const subFields = subNames.map(name => useField(name));
  const [counterField, counterMeta, counterHelpers] = useField(counterName);

  const [expandedOption, setExpandedOption] = useState<string | null>(null);

  const handleMainCheckboxChange = (selectedValue: string) => {
    const currentValues = mainField.value || [];
    if (currentValues.includes(selectedValue)) {
      mainHelpers.setValue(currentValues.filter((item: string) => item !== selectedValue));
      setExpandedOption(null);
      // Deselect all sub-options and reset counter when main option is deselected
      subFields.forEach(([_, __, subHelper]) => {
        subHelper.setValue([]);
      });
      counterHelpers.setValue('');
    } else {
      mainHelpers.setValue([...currentValues, selectedValue]);
      setExpandedOption(selectedValue);
    }
  };

  const handleSubCheckboxChange = (subIndex: number, selectedValue: string) => {
    const [subField, _, subHelper] = subFields[subIndex];
    const currentValues = subField.value || [];
    if (currentValues.includes(selectedValue)) {
      subHelper.setValue(currentValues.filter((item: string) => item !== selectedValue));
    } else {
      subHelper.setValue([...currentValues, selectedValue]);
    }
  };

  const handleCounterChange = (value: string) => {
    counterHelpers.setValue(value);
  };

  const renderMainCheckbox = (option: { label: string; value: string }) => (
    <View key={option.value}>
      <TouchableOpacity
        style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}
        onPress={() => handleMainCheckboxChange(option.value)}
      >
        <View
          style={{
            height: 20,
            width: 20,
            borderRadius: 3,
            borderWidth: 2,
            borderColor: '#000',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10,
          }}
        >
          {mainField.value?.includes(option.value) && (
            <View
              style={{
                height: 12,
                width: 12,
                backgroundColor: '#000',
              }}
            />
          )}
        </View>
        <Text>{option.label}</Text>
      </TouchableOpacity>
      {expandedOption === option.value && renderSubOptions()}
    </View>
  );

  const renderSubOptions = () => (
    <View style={{ marginLeft: 20 }}>
      {subNames.map((subName, index) => (
        <View key={subName}>
          <Text style={globalStyles.questionTitle}>{subQTitles[index]}</Text>
          {subOptions[index].map((subOption) => (
            <TouchableOpacity
              key={`${subName}-${subOption.value}`}
              style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}
              onPress={() => handleSubCheckboxChange(index, subOption.value)}
            >
              <View
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 3,
                  borderWidth: 2,
                  borderColor: '#000',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}
              >
                {subFields[index][0].value?.includes(subOption.value) && (
                  <View
                    style={{
                      height: 12,
                      width: 12,
                      backgroundColor: '#000',
                    }}
                  />
                )}
              </View>
              <Text>{subOption.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <View>
        <Text style={globalStyles.questionTitle}>{counterQTitle}</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#000',
            borderRadius: 3,
            padding: 5,
            marginTop: 5,
            width: 100,
          }}
          keyboardType="numeric"
          value={counterField.value}
          onChangeText={handleCounterChange}
        />
      </View>
    </View>
  );

  return (
    <View>
      <View>
        {mainOptions.map(renderMainCheckbox)}
      </View>
    </View>
  );
};