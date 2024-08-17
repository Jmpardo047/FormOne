import React from 'react'
import { Alert, Button, KeyboardAvoidingView, Platform, Text, View } from 'react-native'
import { globalStyles } from '../../../../theme/theme'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { InputComponent } from '../../../../components/shared/InputComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { NextComponent } from '../../../../components/shared/NextComponent';
import { Prevcomponent } from '../../../../components/shared/PrevComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'
import { UseSaveData } from '../../../../hooks/UseSaveData';

export interface FormTemplate{
  qId: string;
  qFather: string;
  response:[string];
}
export interface FormValues {
  q1: FormTemplate;
  q2: FormTemplate;
  q3: FormTemplate;
  q4: FormTemplate;
  q5: FormTemplate;
  q6: FormTemplate;
  q7: FormTemplate;
  q8: FormTemplate;
}

const myInitialValues:FormValues = {
  q1: {
    qId: 'P1',
    qFather: '',
    response:[""]
  },
  q2: {
    qId: 'P2',
    qFather: '',
    response:[""]
  },
  q3: {
    qId: 'P3',
    qFather: '',
    response:[""]
  },
  q4: {
    qId: 'P4',
    qFather: '',
    response:[""]
  },
  q5: {
    qId: 'P5',
    qFather: '',
    response:[""]
  },
  q6: {
    qId: 'P6',
    qFather: '',
    response:[""]
  },
  q7: {
    qId: 'P7',
    qFather: '',
    response:[""]
  },
  q8: {
    qId: 'P8',
    qFather: '',
    response:[""]
  },
}

const keys = ['q1', 'q2', 'q3','q4','q5','q6','q7','q8'];

const saveLocalData = async (data: Record<string, any>) =>{
  try {
    const savePromises = Object.keys(data).map(async (key) =>{
      const value = JSON.stringify(data[key]);
      await AsyncStorage.setItem(`@${key}`,value)
    });
    await Promise.all(savePromises);
    Alert.alert('Data saved locally')
  } catch (e) {
    console.log('Falied to save info in local storage',e)
  }
}

let now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const fileName = `${year}-${month}-${day}`;

export const FormPage1 = () => {

  const navigation = useNavigation();
  const {saveAllData, getAllData} = UseSaveData();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
        <View style={globalStyles.CapTitle}>
          <Text style={globalStyles.Title}>Capítulo 1.  Características sociodemográficas del encuestado</Text>
        </View>
        <Formik
          initialValues={myInitialValues}
          onSubmit={ async(
            values: FormValues,
            {setSubmitting} : FormikHelpers<FormValues>
          ) => {
            try{
              await saveAllData(`${fileName}.json`,values);
            }
            finally{
              setSubmitting(false);
              navigation.navigate('page2' as never)
            }
          }
          }>
          {({handleChange, handleBlur,handleSubmit,values}) =>(
              <View>
                <InputComponent
                  info='q1'
                  textTitle='P1. Nombre completo del encuestado:'
                  handleChange={(value) => handleChange('q1.response', value)}
                  handleBlur={handleBlur}
                  values={values.q1.response}
                />
                <InputComponent
                  info='q2'
                  textTitle='P2. Nombre de entidad, organización o comunidad a la que representa:'
                  handleChange={(value) => handleChange('q2.response', value)}
                  handleBlur={handleBlur}
                  values={values.q2.response}
                />
                <InputComponent
                  info='q3'
                  textTitle='P3. Número de celular:'
                  handleChange={(value) => handleChange('q3.response', value)}
                  handleBlur={handleBlur}
                  values={values.q3.response}
                />
                <InputComponent
                  info='q4'
                  textTitle='P4. Correo electrónico:'
                  handleChange={(value) => handleChange('q4.response', value)}
                  handleBlur={handleBlur}
                  values={values.q4.response}
                />
                <InputComponent
                  info='q5'
                  textTitle='P5. Nombre departamento:'
                  handleChange={(value) => handleChange('q5.response', value)}
                  handleBlur={handleBlur}
                  values={values.q5.response}
                />
                <InputComponent
                  info='q6'
                  textTitle='P6. Código departamento:'
                  handleChange={(value) => handleChange('q6.response', value)}
                  handleBlur={handleBlur}
                  values={values.q6.response}
                />
                <InputComponent
                  info='q7'
                  textTitle='Nombre municipio:'
                  handleChange={(value) => handleChange('q7.response', value)}
                  handleBlur={handleBlur}
                  values={values.q7.response}
                />
                <InputComponent
                  info='q8'
                  textTitle='P8. Código municipio:'
                  handleChange={(value) => handleChange('q8.response', value)}
                  handleBlur={handleBlur}
                  values={values.q8.response}
                />
                <Button  onPress={handleSubmit as (event:any) => void} title='Submit'/>
                  <View style={globalStyles.buttonsBanner}>
                    <Prevcomponent/>
                    <NextComponent onNextPress={handleSubmit} />
                  </View>
              </View>
            )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
