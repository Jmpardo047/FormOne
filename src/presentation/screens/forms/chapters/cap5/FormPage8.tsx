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
import { getInitialValuesPage8 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt34_1, opt34_2, opt34_3, opt34_4, opt34_5, opt34_6, opt34_7, opt35_1, opt35_2, opt35_3, 
    opt35_4, opt35_5, opt35_6, opt35_7, opt36_1, opt36_2, opt36_3, opt36_4, opt36_5, opt36_6, 
    opt36_7, opt37_1, opt37_2, opt37_3, opt37_4, opt37_5, opt37_6, opt37_7 } from '../../../../../utils/cap5/categoriesPage8';

export interface FormValues{
    P34_1:FormTemplate;
    P35_1:FormTemplate;
    P36_1:FormTemplate;
    P37_1:FormTemplate;
    P38_1:FormTemplate;
    P34_2:FormTemplate;
    P35_2:FormTemplate;
    P36_2:FormTemplate;
    P37_2:FormTemplate;
    P38_2:FormTemplate;
    P34_3:FormTemplate;
    P35_3:FormTemplate;
    P36_3:FormTemplate;
    P37_3:FormTemplate;
    P38_3:FormTemplate;
    P34_4:FormTemplate;
    P35_4:FormTemplate;
    P36_4:FormTemplate;
    P37_4:FormTemplate;
    P38_4:FormTemplate;
    P34_5:FormTemplate;
    P35_5:FormTemplate;
    P36_5:FormTemplate;
    P37_5:FormTemplate;
    P38_5:FormTemplate;
    P34_6:FormTemplate;
    P35_6:FormTemplate;
    P36_6:FormTemplate;
    P37_6:FormTemplate;
    P38_6:FormTemplate;
    P34_7:FormTemplate;
    P35_7:FormTemplate;
    P36_7:FormTemplate;
    P37_7:FormTemplate;
    P38_7:FormTemplate;
}


export const FormPage8 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage8();
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
                <Text style={globalStyles.Title}>1. Familiares</Text>
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
                    navigation.navigate('page9' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>

                        <Text>
                        P34. ¿Cuáles de las siguientes tipologías de problemas 
                        se tramitan con mayor frecuencia desde su competencia?Marcar con X
                        </Text>
                        
                        <NestedCheckBox
                            mainOptions={opt34_1}
                            subOptions={[opt35_1,opt36_1,opt37_1]}
                            mainName='P34_1.response[0].responseuser'
                            subNames={['P35_1.response[0].responseuser','P36_1.response[0].responseuser','P37_1.response[0].responseuser']}
                            counterName='P38_1.response[0].responseuser'
                            mainQTitle='1.1 Paternidad / maternidad o adopción'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_2}
                            subOptions={[opt35_2,opt36_2,opt37_2]}
                            mainName='P34_2.response[0].responseuser'
                            subNames={['P35_2.response[0].responseuser','P36_2.response[0].responseuser','P37_2.response[0].responseuser']}
                            counterName='P38_2.response[0].responseuser'
                            mainQTitle='1.2 Cuota de alimentos, custodia, patria potestad, visitas'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_3}
                            subOptions={[opt35_3,opt36_3,opt37_3]}
                            mainName='P34_3.response[0].responseuser'
                            subNames={['P35_3.response[0].responseuser','P36_3.response[0].responseuser','P37_3.response[0].responseuser']}
                            counterName='P38_3.response[0].responseuser'
                            mainQTitle='1.3 Separación, divorcio, liquidación, unión libre'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_4}
                            subOptions={[opt35_4,opt36_4,opt37_4]}
                            mainName='P34_4.response[0].responseuser'
                            subNames={['P35_4.response[0].responseuser','P36_4.response[0].responseuser','P37_4.response[0].responseuser']}
                            counterName='P38_4.response[0].responseuser'
                            mainQTitle='1.4 División de propiedad / Separación de bienes'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_5}
                            subOptions={[opt35_5,opt36_5,opt37_5]}
                            mainName='P34_5.response[0].responseuser'
                            subNames={['P35_5.response[0].responseuser','P36_5.response[0].responseuser','P37_5.response[0].responseuser']}
                            counterName='P38_5.response[0].responseuser'
                            mainQTitle='1.5 Herencias, sucesiones, testamentos'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_6}
                            subOptions={[opt35_6,opt36_6,opt37_6]}
                            mainName='P34_6.response[0].responseuser'
                            subNames={['P35_6.response[0].responseuser','P36_6.response[0].responseuser','P37_6.response[0].responseuser']}
                            counterName='P38_6.response[0].responseuser'
                            mainQTitle='1.6 Cuidado de personas que más lo requieren (niños, niñas y adolescentes, personas enfermas, personas con discapacidad, personas mayores'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_7}
                            subOptions={[opt35_7,opt36_7,opt37_7]}
                            mainName='P34_7.response[0].responseuser'
                            subNames={['P35_7.response[0].responseuser','P36_7.response[0].responseuser','P37_7.response[0].responseuser']}
                            counterName='P38_7.response[0].responseuser'
                            mainQTitle='1.7 Quien asume los gastos del hogar'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page7' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}