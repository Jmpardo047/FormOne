import React from 'react'
import { Alert, Button, KeyboardAvoidingView, Platform, Text, View } from 'react-native'
import { globalStyles } from '../../../../theme/theme'
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { InputComponent } from '../../../../components/shared/InputComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { NextComponent } from '../../../../components/shared/NextComponent';
import { Prevcomponent } from '../../../../components/shared/PrevComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
export interface FormValues {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
}

const myInitialValues:FormValues = {
  q1: "",
  q2: "",
  q3: "",
  q4: "",
  q5: "",
  q6: "",
  q7: "",
  q8: "",
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

export const FormPage1 = () => {

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
          onSubmit={async (values:FormValues, { setSubmitting }) => {
            await saveLocalData(values);
            Alert.alert(JSON.stringify(values,null,2));
            setSubmitting(false);
          }}
        >
          {({handleChange, handleBlur,handleSubmit,values}) =>(
              <View>
                <InputComponent
                  info='q1'
                  textTitle='P1. Nombre completo del encuestado:'
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                />
                <InputComponent
                  info='q2'
                  textTitle='P2. Nombre de entidad, organización o comunidad a la que representa:'
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                />
                <InputComponent
                  info='q3'
                  textTitle='P3. Número de celular:'
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                />
                <InputComponent
                  info='q4'
                  textTitle='P4. Correo electrónico:'
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                />
                <InputComponent
                  info='q5'
                  textTitle='P5. Nombre departamento:'
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                />
                <InputComponent
                  info='q6'
                  textTitle='P6. Código departamento:'
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                />
                <InputComponent
                  info='q7'
                  textTitle='Nombre municipio:'
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                />
                <InputComponent
                  info='q8'
                  textTitle='P8. Código municipio:'
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                />
                <Button  onPress={handleSubmit as (event:any) => void} title='Submit'/>
                  <View style={globalStyles.buttonsBanner}>
                    <Prevcomponent/>
                    <NextComponent onNextPress={handleSubmit as (Event:any) => void} />
                  </View>
              </View>
            )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
