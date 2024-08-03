import React from 'react'
import { Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { globalStyles } from '../../theme/theme';

interface Props{
    textTitle:string;
    info:string;
    handleChange: (field: string) => (e:string | React.ChangeEvent<any>) => void;
    handleBlur: (field:string) => (e:any) => void;
    values: {
        [key: string]: any;
    };
}

export const InputComponent = ({textTitle, info, handleBlur, handleChange, values}:Props) => {
  return (
    <View>
        <Text style={globalStyles.questionTitle}>{textTitle}</Text>
        <TextInput
        onChangeText={handleChange(info)}
        onBlur={(e) => handleBlur(info)(e)}
        value={values[info]}
        style={globalStyles.input}
        placeholder={info}
        placeholderTextColor="#888">
        </TextInput>
    </View>
  )
}
