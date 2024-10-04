import { useField } from 'formik';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View, TextInput } from 'react-native';
import { globalStyles } from '../../theme/theme';

interface CheckboxProps {
  options: { label: string, value: string }[];
  name: string;
  qTitle: string;
}

export const MultiCheckBox = ({ options: initialOptions, name, qTitle }: CheckboxProps) => {
  const [field, meta, helpers] = useField(name);  
  const { value } = field;  
  const { setValue } = helpers;  

  const [options, setOptions] = useState(initialOptions);
  const [otherValue, setOtherValue] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleCheckboxChange = (selectedValue: string) => {
    const currentValues = value || [];  
    if (currentValues.includes(selectedValue)) {
      setValue(currentValues.filter((item: string) => item !== selectedValue));
      if (selectedValue === '61') {
        setShowOtherInput(false);
        setOtherValue('');
      }
    } else {
      setValue([...currentValues, selectedValue]);
      if (selectedValue === '61') {
        setShowOtherInput(true);
      }
    }
  };

  const handleAddOther = () => {
    if (otherValue.trim()) {
      const newOption = { label: otherValue, value: otherValue.toLowerCase().replace(/\s+/g, '-') };
      setOptions([...options, newOption]);
      setValue([...value, newOption.value]);
      setOtherValue('');
      setShowOtherInput(false);
    }
  };

  return (
    <View>
      <Text style={globalStyles.questionTitle}>{qTitle}</Text>
      <View>
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}
            onPress={() => handleCheckboxChange(option.value)}
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
              {value?.includes(option.value) && (
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
        ))}
      </View>
      {showOtherInput && (
        <View style={{ marginTop: 10 }}>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: '#000',
              borderRadius: 3,
              padding: 5,
              marginBottom: 5,
            }}
            value={otherValue}
            onChangeText={setOtherValue}
            placeholder="cuál?"
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#000',
              padding: 10,
              borderRadius: 3,
              alignItems: 'center',
            }}
            onPress={handleAddOther}
          >
            <Text style={{ color: '#fff' }}>Agregar</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};  