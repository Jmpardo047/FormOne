import { Field, useField } from 'formik'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { globalStyles } from '../../theme/theme';

interface RadioButtonProps {
  options : {label: string, value: string}[];
  name:string;
  qTitle : string;
}

export const RadioButton = ({options, name, qTitle}:RadioButtonProps) => {

  const [field, meta, helpers] = useField(name);

  const { value } = field;
  const { setValue } = helpers;

  return (
    <View>
      <Text style={globalStyles.questionTitle}>{qTitle}</Text>
      <View
        style = {{
          flexDirection: 'row',
          alignItems: 'center',
          width: "20%",
        }}>
          {options.map((option) => (
            <TouchableOpacity
              key = {option.value}
              style = {globalStyles.radioButton}
              onPress={() => setValue(option.value)}
            >
              <View
                style={globalStyles.ButtonSelector}
              >
                {value == option.value && (
                  <View
                    style={{
                      height: 10,
                      width: 10,
                      borderRadius: 5,
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
  )
}
