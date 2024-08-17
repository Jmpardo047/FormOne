import React from 'react'
import { Pressable, View } from 'react-native'
import { Button, FAB } from 'react-native-paper'
import Icon from "react-native-vector-icons/Ionicons"
import { globalStyles } from '../../theme/theme'

interface Props{
  onNextPress: () => void;
}

export const NextComponent = ({onNextPress}:Props) => {
  return (
        <FAB
            style={globalStyles.fab}
            color='blue'
            icon={() => <Icon name="caret-forward-outline" size={25} color={'white'}/>}
            onPress={onNextPress}
        />
  )
}
