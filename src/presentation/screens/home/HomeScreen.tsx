import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { MainButton } from '../../components/shared/MainButton'
import { globalStyles } from '../../theme/theme'
import { useNavigation } from '@react-navigation/native'
import { generateId } from '../../../utils/generateId'
import { SurveyContext } from '../../../context/SurveyContext'


export const HomeScreen = () => {
  const navigation = useNavigation();
    const { setSurveyId } = useContext(SurveyContext);

    const handleNewSurvey = () => {
      const newSurveyId = generateId();
      setSurveyId(newSurveyId);
      console.log("Generated Survey ID:", newSurveyId);
      navigation.navigate('page1' as never);
    };
    
  return (
    <View style={globalStyles.HomeScreenContainer}>
        <MainButton label='Nueva encuesta' onPress={handleNewSurvey}/>
        <MainButton label='Procesar encuestas' onPress={() => navigation.navigate('page1' as never)}/>
    </View>
  )
}
