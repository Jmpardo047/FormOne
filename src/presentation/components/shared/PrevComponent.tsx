import React from 'react'
import { Pressable, View } from 'react-native'
import { Button, FAB } from 'react-native-paper'
import Icon from "react-native-vector-icons/Ionicons"
import { globalStyles } from '../../theme/theme'
export const Prevcomponent = () => {
  return (
        <FAB
            style={globalStyles.fab}
            color='blue'
            icon={() => <Icon name="caret-back-outline" size={25} color={'white'}/>}
        />
  )
}
