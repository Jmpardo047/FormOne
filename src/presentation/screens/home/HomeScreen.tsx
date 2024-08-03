import React from 'react'
import { Text, View } from 'react-native'
import { MainButton } from '../../components/shared/MainButton'
import { globalStyles } from '../../theme/theme'
import { useNavigation } from '@react-navigation/native'

export const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={globalStyles.HomeScreenContainer}>
        <MainButton label='Nueva encuesta' onPress={() => navigation.navigate('page1' as never)}/>
        <MainButton label='Procesar encuestas' onPress={() => navigation.navigate('page1' as never)}/>
    </View>
  )
}
