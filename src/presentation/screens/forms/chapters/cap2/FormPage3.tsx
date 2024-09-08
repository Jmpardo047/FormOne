import React, { useContext } from 'react';
import { View, Text, Button, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { Prevcomponent } from '../../../../components/shared/PrevComponent';
import { NextComponent } from '../../../../components/shared/NextComponent';
import { globalStyles } from '../../../../theme/theme';
import { SurveyContext } from '../../../../../context/SurveyContext';
import { UseSaveData } from '../../../../hooks/UseSaveData';
import { useNavigation } from '@react-navigation/native'
import { InputComponent } from '../../../../components/shared/InputComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { FormTemplate } from '../../../../../utils/FormInterfaces';
export interface FormValues{
    P14:FormTemplate
}

const initialValues:FormValues = {
    P14: { 
        qId: 'P14', 
        qFather: '', 
        surveyId: "1",
        chapterId: "1",
        response:[
          {
            idoptresponse: "1",
            responseuser: [""]
          }
        ] 
    },
}

let now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const fileName = `${year}-${month}-${day}`;

export const FormPage3 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";

    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
            <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>Capítulo 2. Información laboral</Text>
            </View>

            <Formik
                initialValues={initialValues}
                onSubmit={ async(
                values: FormValues,
                {setSubmitting} : FormikHelpers<FormValues>
                ) => {
                try{
                    await saveAllData(`${fileName}.json`,values,finalSurveyId);
                }
                finally{
                    setSubmitting(false);
                    navigation.navigate('page2' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched}) =>(
                    <InputComponent 
                    info='P14'
                    textTitle='P14.¿Cuál es el nombre completo del cargo, ocupación o rol que usted desempeña actualmente?'
                    handleChange={(value: string) => setFieldValue('P14.response[0].responseuser', value)}
                    handleBlur={() => setFieldTouched('P14.response[0].responseuser')}
                    values={values.P14.response[0].responseuser}
                    />
                )}
            </Formik>

            <View style={globalStyles.buttonsBanner}>
                <Prevcomponent onPrevPressed={() => navigation.navigate('page2' as never)}/>
                <NextComponent onNextPress={() => navigation.navigate('page1' as never)} />
            </View> 

        </ScrollView>
    </KeyboardAvoidingView>
  )
}
