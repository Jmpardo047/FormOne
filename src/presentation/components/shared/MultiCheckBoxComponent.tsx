import { useField } from 'formik';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../../theme/theme';

interface CheckboxProps {
  options: { label: string, value: string }[];
  name: string;
  qTitle: string;
}

export const MultiCheckBox = ({ options, name, qTitle }: CheckboxProps) => {
  const [field, meta, helpers] = useField(name);  
  const { value } = field;  
  const { setValue } = helpers;  


  const handleCheckboxChange = (selectedValue: string) => {
    const currentValues = value || [];  
    if (currentValues.includes(selectedValue)) {

      setValue(currentValues.filter((item: string) => item !== selectedValue));
    } else {

      setValue([...currentValues, selectedValue]);
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
    </View>
  );
};
