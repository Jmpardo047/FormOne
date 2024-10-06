import React, { useContext } from 'react';
import { View, Text, Button, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { Prevcomponent } from '../../../../components/shared/PrevComponent';
import { NextComponent } from '../../../../components/shared/NextComponent';
import { globalStyles } from '../../../../theme/theme';
import { SurveyContext } from '../../../../../context/SurveyContext';
import { UseSaveData } from '../../../../hooks/UseSaveData';
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';
import { FormTemplate } from '../../../../../utils/FormInterfaces';
import { fileName } from '../../../../../utils/generateFilename';
import { getInitialValuesPage19 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { DropDownComponent } from '../../../../components/shared/DropDownComponent';
import { opt42 } from '../../../../../utils/cap6/categoriesPage19';
import { InputComponent } from '../../../../components/shared/InputComponent';

export interface FormValues {
    P42: FormTemplate;
    P43: FormTemplate;
    P44: FormTemplate;
    P45: FormTemplate;
    P45A: FormTemplate;
    P46: FormTemplate;
}



export const FormPage19 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage19();
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>

            <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>Capítulo 6.  Política pública de acceso a la justicia</Text>
            </View>

            <Text style = {{color: 'red'}}>Nota: Las preguntas 42, 43 y 44 son exclusivas para el secretario de gobierno / interior</Text>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemaPage3}
                onSubmit={ async(
                    values: FormValues,
                    {setSubmitting} : FormikHelpers<FormValues>
                    ) => {
                    try{
                        await saveAllData(`${fileName}.json`,values,finalSurveyId);
                    }
                    finally{
                        setSubmitting(false);
                        navigation.navigate('page20' as never)
                    }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View> 

                        <DropDownComponent
                            values={values.P42.response[0].responseuser}
                            setFieldValue={(value) => setFieldValue('P42.response[0].responseuser[0]', value)}
                            qTitle='P42. ¿El municipio cuenta con una política pública de acceso a la justicia?'
                            opValues={opt42}
                        />

                        <InputComponent
                            info='P43' 
                            textTitle='P43. Describa brevemente los énfasis que tiene la política pública de acceso a la justicia a nivel municipal. Incluir el nombre de la política pública y si se encuentra disponible para consulta de la ciudadanía.'
                            handleChange={(value: string) => setFieldValue('P43.response[0].responseuser[0]', value)}
                            handleBlur={() => setFieldTouched('P43.response[0].responseuser[0]')}
                            values={values.P43.response[0].responseuser} 
                        />

                        <InputComponent
                            info='P44' 
                            textTitle='P44. ¿Qué acciones ha emprendido la administración para fortalecer la justicia a nivel municipal?'
                            handleChange={(value: string) => setFieldValue('P44.response[0].responseuser[0]', value)}
                            handleBlur={() => setFieldTouched('P44.response[0].responseuser[0]')}
                            values={values.P44.response[0].responseuser} 
                        />

                        <InputComponent
                            info='P45' 
                            textTitle='P45. ¿Qué apoyo o articulación ustedes necesitan con la institucionalidad nacional o departamental para fortalecer la justicia en su municipio?'
                            handleChange={(value: string) => setFieldValue('P45.response[0].responseuser[0]', value)}
                            handleBlur={() => setFieldTouched('P45.response[0].responseuser[0]')}
                            values={values.P45.response[0].responseuser} 
                        />

                        <InputComponent
                            info='P45A' 
                            textTitle='P45A. ¿Cuál es el presupuesto anual disponible en su entidad u organismo que usted representa para proyectos relacionados con acceso a la justicia en el municipio?'
                            handleChange={(value: string) => setFieldValue('P45A.response[0].responseuser[0]', value)}
                            handleBlur={() => setFieldTouched('P45A.response[0].responseuser[0]')}
                            values={values.P45A.response[0].responseuser} 
                        />

                        <InputComponent
                            info='P46' 
                            textTitle='P46.	Para finalizar esta encuesta, usted desearía agregar algún comentario o recomendación'
                            handleChange={(value: string) => setFieldValue('P46.response[0].responseuser[0]', value)}
                            handleBlur={() => setFieldTouched('P46.response[0].responseuser[0]')}
                            values={values.P46.response[0].responseuser} 
                        />
                        
                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page18' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}