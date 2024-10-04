import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useField } from 'formik';
import { globalStyles } from '../../theme/theme';

interface Option {
  label: string;
  value: string;
}

interface ConditionalMultiCheckBoxProps {
  checkboxName: string;
  dropdownName: string;
  qTitle: string;
  checkboxOptions: Option[];
  dropdownOptions: Option[];
}

export const ConditionalMultiCheckBox = ({ 
  checkboxName, 
  dropdownName, 
  qTitle, 
  checkboxOptions, 
  dropdownOptions 
}: ConditionalMultiCheckBoxProps) => {
  const [checkboxField, checkboxMeta, checkboxHelpers] = useField(checkboxName);
  const [dropdownField, dropdownMeta, dropdownHelpers] = useField(dropdownName);

  const [showMultiCheckBox, setShowMultiCheckBox] = useState(false);
  const [options, setOptions] = useState(checkboxOptions);
  const [otherValue, setOtherValue] = useState('');
  const [showOtherInput, setShowOtherInput] = useState(false);

  const handleDropDownChange = (selectedValue: string) => {
    dropdownHelpers.setValue(selectedValue);
    setShowMultiCheckBox(selectedValue === dropdownOptions.find(option => option.label === 'Si')?.value);
    if (selectedValue !== dropdownOptions.find(option => option.label === 'Si')?.value) {
      checkboxHelpers.setValue([]);
    }
  };

  const handleCheckboxChange = (selectedValue: string) => {
    const currentValues = checkboxField.value || [];
    if (currentValues.includes(selectedValue)) {
      checkboxHelpers.setValue(currentValues.filter((item: string) => item !== selectedValue));
      if (selectedValue === '61') {
        setShowOtherInput(false);
        setOtherValue('');
      }
    } else {
      checkboxHelpers.setValue([...currentValues, selectedValue]);
      if (selectedValue === '61') {
        setShowOtherInput(true);
      }
    }
  };

  const handleAddOther = () => {
    if (otherValue.trim()) {
      const newOption = { label: otherValue, value: otherValue.toLowerCase().replace(/\s+/g, '-') };
      setOptions([...options, newOption]);
      checkboxHelpers.setValue([...checkboxField.value, newOption.value]);
      setOtherValue('');
      setShowOtherInput(false);
    }
  };

  return (
    <View>
      <Text style={globalStyles.questionTitle}>{qTitle}</Text>
      <View style={globalStyles.picker}>
        <Picker
          selectedValue={dropdownField.value}
          onValueChange={handleDropDownChange}
        >
          <Picker.Item label="Seleccione una opción" value="" />
          {dropdownOptions.map((option) => (
            <Picker.Item key={option.value} label={option.label} value={option.value} />
          ))}
        </Picker>
      </View>
      {showMultiCheckBox && (
        <View>
          <Text>P. 32. ¿Cuáles de las siguientes subcategorías de barreras de acceso 
          a la justicia se presentan en el municipio?Marcar con X
          </Text>
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
                {checkboxField.value?.includes(option.value) && (
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
      )}
    </View>
  );
};