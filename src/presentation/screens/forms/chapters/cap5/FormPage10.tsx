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
import { getInitialValuesPage10 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt34_4_1, opt34_4_2, opt34_4_3, opt34_4_4, opt34_4_5, opt34_4_6, opt34_4_7, opt35_4_1, opt35_4_2, opt35_4_3, opt35_4_4, opt35_4_5, opt35_4_6, opt35_4_7, opt36_4_1, opt36_4_2, opt36_4_3, opt36_4_4, opt36_4_5, opt36_4_6, opt36_4_7, opt37_4_1, opt37_4_2, opt37_4_3, opt37_4_4, opt37_4_5, opt37_4_6, opt37_4_7 } from '../../../../../utils/cap5/categoriesPage10';

export interface FormValues{
    P34_4_1:FormTemplate;
    P35_4_1:FormTemplate;
    P36_4_1:FormTemplate;
    P37_4_1:FormTemplate;
    P38_4_1:FormTemplate;
    P34_4_2:FormTemplate;
    P35_4_2:FormTemplate;
    P36_4_2:FormTemplate;
    P37_4_2:FormTemplate;
    P38_4_2:FormTemplate;
    P34_4_3:FormTemplate;
    P35_4_3:FormTemplate;
    P36_4_3:FormTemplate;
    P37_4_3:FormTemplate;
    P38_4_3:FormTemplate;
    P34_4_4:FormTemplate;
    P35_4_4:FormTemplate;
    P36_4_4:FormTemplate;
    P37_4_4:FormTemplate;
    P38_4_4:FormTemplate;
    P34_4_5:FormTemplate;
    P35_4_5:FormTemplate;
    P36_4_5:FormTemplate;
    P37_4_5:FormTemplate;
    P38_4_5:FormTemplate;
    P34_4_6:FormTemplate;
    P35_4_6:FormTemplate;
    P36_4_6:FormTemplate;
    P37_4_6:FormTemplate;
    P38_4_6:FormTemplate;
    P34_4_7:FormTemplate;
    P35_4_7:FormTemplate;
    P36_4_7:FormTemplate;
    P37_4_7:FormTemplate;
    P38_4_7:FormTemplate;
}


export const FormPage10 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage10();
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
                <Text style={globalStyles.Title}>4. Trabajo o empleo</Text>
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
                    navigation.navigate('page11' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        
                        <NestedCheckBox
                            mainOptions={opt34_4_1}
                            subOptions={[opt35_4_1,opt36_4_1,opt37_4_1]}
                            mainName='P34_4_1.response[0].responseuser'
                            subNames={['P35_4_1.response[0].responseuser','P36_4_1.response[0].responseuser','P37_4_1.response[0].responseuser']}
                            counterName='P38_4_1.response[0].responseuser'
                            mainQTitle='4.1 Reconocimiento y formalización de relación laboral o contractual'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_4_2}
                            subOptions={[opt35_4_2,opt36_4_2,opt37_4_2]}
                            mainName='P34_4_2.response[0].responseuser'
                            subNames={['P35_4_2.response[0].responseuser','P36_4_2.response[0].responseuser','P37_4_2.response[0].responseuser']}
                            counterName='P38_4_2.response[0].responseuser'
                            mainQTitle='4.2 Despido y liquidación de relación laboral y contractual'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_4_3}
                            subOptions={[opt35_4_3,opt36_4_3,opt37_4_3]}
                            mainName='P34_4_3.response[0].responseuser'
                            subNames={['P35_4_3.response[0].responseuser','P36_4_3.response[0].responseuser','P37_4_3.response[0].responseuser']}
                            counterName='P38_4_3.response[0].responseuser'
                            mainQTitle='4.3 Remuneración, pago de salario, jornal, pagos en especie, liquidación de prestaciones sociales (vacaciones, horas extra, cesantías, primas'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_4_4}
                            subOptions={[opt35_4_4,opt36_4_4,opt37_4_4]}
                            mainName='P34_4_4.response[0].responseuser'
                            subNames={['P35_4_4.response[0].responseuser','P36_4_4.response[0].responseuser','P37_4_4.response[0].responseuser']}
                            counterName='P38_4_4.response[0].responseuser'
                            mainQTitle='4.4 Perjuicios ocasionados por las condiciones en el ejercicio del trabajo, lugar de trabajo, dotación, no pago de aportes a seguridad social y riesgos laborales'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_4_5}
                            subOptions={[opt35_4_5,opt36_4_5,opt37_4_5]}
                            mainName='P34_4_5.response[0].responseuser'
                            subNames={['P35_4_5.response[0].responseuser','P36_4_5.response[0].responseuser','P37_4_5.response[0].responseuser']}
                            counterName='P38_4_5.response[0].responseuser'
                            mainQTitle='4.5 Pertenecer a un sindicato, participar en huelgas, incumplimiento de convenciones colectivas o pactos laborales'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_4_6}
                            subOptions={[opt35_4_6,opt36_4_6,opt37_4_6]}
                            mainName='P34_4_6.response[0].responseuser'
                            subNames={['P35_4_6.response[0].responseuser','P36_4_6.response[0].responseuser','P37_4_6.response[0].responseuser']}
                            counterName='P38_4_6.response[0].responseuser'
                            mainQTitle='4.6 Maltrato y acoso laboral'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_4_7}
                            subOptions={[opt35_4_7,opt36_4_7,opt37_4_7]}
                            mainName='P34_4_7.response[0].responseuser'
                            subNames={['P35_4_7.response[0].responseuser','P36_4_7.response[0].responseuser','P37_4_7.response[0].responseuser']}
                            counterName='P38_4_7.response[0].responseuser'
                            mainQTitle='4.7 Negación de licencias (maternidad, paternidad, luto, no remuneradas) o indemnizaciones.'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page9' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}