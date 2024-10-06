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
import { getInitialValuesPage16 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt34_12_1, opt35_12_1, opt36_12_1, opt37_12_1, opt34_12_2, opt35_12_2, opt36_12_2, opt37_12_2, opt34_12_3, opt35_12_3, opt36_12_3, opt37_12_3, opt34_12_4, opt35_12_4, opt36_12_4, opt37_12_4, opt34_12_5, opt35_12_5, opt36_12_5, opt37_12_5, opt34_12_6, opt35_12_6, opt36_12_6, opt37_12_6 } from '../../../../../utils/cap5/categoriesPage16';

export interface FormValues {
    P34_12_1: FormTemplate;
    P35_12_1: FormTemplate;
    P36_12_1: FormTemplate;
    P37_12_1: FormTemplate;
    P38_12_1: FormTemplate;
    P34_12_2: FormTemplate;
    P35_12_2: FormTemplate;
    P36_12_2: FormTemplate;
    P37_12_2: FormTemplate;
    P38_12_2: FormTemplate;
    P34_12_3: FormTemplate;
    P35_12_3: FormTemplate;
    P36_12_3: FormTemplate;
    P37_12_3: FormTemplate;
    P38_12_3: FormTemplate;
    P34_12_4: FormTemplate;
    P35_12_4: FormTemplate;
    P36_12_4: FormTemplate;
    P37_12_4: FormTemplate;
    P38_12_4: FormTemplate;
    P34_12_5: FormTemplate;
    P35_12_5: FormTemplate;
    P36_12_5: FormTemplate;
    P37_12_5: FormTemplate;
    P38_12_5: FormTemplate;
    P34_12_6: FormTemplate;
    P35_12_6: FormTemplate;
    P36_12_6: FormTemplate;
    P37_12_6: FormTemplate;
    P38_12_6: FormTemplate;
    
}



export const FormPage16 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage16();
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>

            <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>Capítulo 5. Conflictividades</Text>
            </View>

            <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>12. Educación y formación</Text>
            </View>

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
                    navigation.navigate('page17' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        
                        <NestedCheckBox
                            mainOptions={opt34_12_1}
                            subOptions={[opt35_12_1,opt36_12_1,opt37_12_1]}
                            mainName='P34_12_1.response[0].responseuser'
                            subNames={['P35_12_1.response[0].responseuser','P36_12_1.response[0].responseuser','P37_12_1.response[0].responseuser']}
                            counterName='P38_12_1.response[0].responseuser'
                            mainQTitle='12.1 Problemas en el acceso a la educación básica y media'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_12_2}
                            subOptions={[opt35_12_2,opt36_12_2,opt37_12_2]}
                            mainName='P34_12_2.response[0].responseuser'
                            subNames={['P35_12_2.response[0].responseuser','P36_12_2.response[0].responseuser','P37_12_2.response[0].responseuser']}
                            counterName='P38_12_2.response[0].responseuser'
                            mainQTitle='12.2 Problemas en el acceso a la educación superior'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_12_3}
                            subOptions={[opt35_12_3,opt36_12_3,opt37_12_3]}
                            mainName='P34_12_3.response[0].responseuser'
                            subNames={['P35_12_3.response[0].responseuser','P36_12_3.response[0].responseuser','P37_12_3.response[0].responseuser']}
                            counterName='P38_12_3.response[0].responseuser'
                            mainQTitle='12.3 Condiciones de calidad en la prestación del servicio, negacióno'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_12_4}
                            subOptions={[opt35_12_4,opt36_12_4,opt37_12_4]}
                            mainName='P34_12_4.response[0].responseuser'
                            subNames={['P35_12_4.response[0].responseuser','P36_12_4.response[0].responseuser','P37_12_4.response[0].responseuser']}
                            counterName='P38_12_4.response[0].responseuser'
                            mainQTitle='12.4 Derechos de gratuidad, matrícula de ingreso, materiales'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_12_5}
                            subOptions={[opt35_12_5,opt36_12_5,opt37_12_5]}
                            mainName='P34_12_5.response[0].responseuser'
                            subNames={['P35_12_5.response[0].responseuser','P36_12_5.response[0].responseuser','P37_12_5.response[0].responseuser']}
                            counterName='P38_12_5.response[0].responseuser'
                            mainQTitle='12.5 Acceso y prestación inadecuada del servicio en relación con necesidades específicas de la persona'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_12_6}
                            subOptions={[opt35_12_6,opt36_12_6,opt37_12_6]}
                            mainName='P34_12_6.response[0].responseuser'
                            subNames={['P35_12_6.response[0].responseuser','P36_12_6.response[0].responseuser','P37_12_6.response[0].responseuser']}
                            counterName='P38_12_6.response[0].responseuser'
                            mainQTitle='12.6 Ambiente educativo (matoneo, bullying, violencia).'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page15' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}