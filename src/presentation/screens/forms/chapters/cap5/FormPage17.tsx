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
import { getInitialValuesPage17 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt34_13_1, opt35_13_1, opt36_13_1, opt37_13_1, opt34_13_2, opt35_13_2, opt36_13_2, opt37_13_2, opt34_13_3, opt35_13_3, opt36_13_3, opt37_13_3, opt34_13_4, opt35_13_4, opt36_13_4, opt37_13_4, opt34_13_5, opt35_13_5, opt36_13_5, opt37_13_5, opt34_13_6, opt35_13_6, opt36_13_6, opt37_13_6, opt34_13_7, opt35_13_7, opt36_13_7, opt37_13_7, opt34_13_8, opt35_13_8, opt36_13_8, opt37_13_8, opt34_13_9, opt35_13_9, opt36_13_9, opt37_13_9, opt34_13_10, opt35_13_10, opt36_13_10, opt37_13_10, opt34_13_11, opt35_13_11, opt36_13_11, opt37_13_11 } from '../../../../../utils/cap5/categoriesPage17';

export interface FormValues {
    P34_13_1: FormTemplate;
    P35_13_1: FormTemplate;
    P36_13_1: FormTemplate;
    P37_13_1: FormTemplate;
    P38_13_1: FormTemplate;
    P34_13_2: FormTemplate;
    P35_13_2: FormTemplate;
    P36_13_2: FormTemplate;
    P37_13_2: FormTemplate;
    P38_13_2: FormTemplate;
    P34_13_3: FormTemplate;
    P35_13_3: FormTemplate;
    P36_13_3: FormTemplate;
    P37_13_3: FormTemplate;
    P38_13_3: FormTemplate;
    P34_13_4: FormTemplate;
    P35_13_4: FormTemplate;
    P36_13_4: FormTemplate;
    P37_13_4: FormTemplate;
    P38_13_4: FormTemplate;
    P34_13_5: FormTemplate;
    P35_13_5: FormTemplate;
    P36_13_5: FormTemplate;
    P37_13_5: FormTemplate;
    P38_13_5: FormTemplate;
    P34_13_6: FormTemplate;
    P35_13_6: FormTemplate;
    P36_13_6: FormTemplate;
    P37_13_6: FormTemplate;
    P38_13_6: FormTemplate;
    P34_13_7: FormTemplate;
    P35_13_7: FormTemplate;
    P36_13_7: FormTemplate;
    P37_13_7: FormTemplate;
    P38_13_7: FormTemplate;
    P34_13_8: FormTemplate;
    P35_13_8: FormTemplate;
    P36_13_8: FormTemplate;
    P37_13_8: FormTemplate;
    P38_13_8: FormTemplate;
    P34_13_9: FormTemplate;
    P35_13_9: FormTemplate;
    P36_13_9: FormTemplate;
    P37_13_9: FormTemplate;
    P38_13_9: FormTemplate;
    P34_13_10: FormTemplate;
    P35_13_10: FormTemplate;
    P36_13_10: FormTemplate;
    P37_13_10: FormTemplate;
    P38_13_10: FormTemplate;
    P34_13_11: FormTemplate;
    P35_13_11: FormTemplate;
    P36_13_11: FormTemplate;
    P37_13_11: FormTemplate;
    P38_13_11: FormTemplate;
}



export const FormPage17 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage17();
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
                <Text style={globalStyles.Title}>13. Afectaciones, daños o perjuicios causados o derivados de delitos</Text>
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
                    navigation.navigate('page18' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        
                        <NestedCheckBox
                            mainOptions={opt34_13_1}
                            subOptions={[opt35_13_1,opt36_13_1,opt37_13_1]}
                            mainName='P34_13_1.response[0].responseuser'
                            subNames={['P35_13_1.response[0].responseuser','P36_13_1.response[0].responseuser','P37_13_1.response[0].responseuser']}
                            counterName='P38_13_1.response[0].responseuser'
                            mainQTitle='13.1 Hurto, estafa, fraude, extorsión'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_13_2}
                            subOptions={[opt35_13_2,opt36_13_2,opt37_13_2]}
                            mainName='P34_13_2.response[0].responseuser'
                            subNames={['P35_13_2.response[0].responseuser','P36_13_2.response[0].responseuser','P37_13_2.response[0].responseuser']}
                            counterName='P38_13_2.response[0].responseuser'
                            mainQTitle='13.2 Daño en bienes muebles y/o inmuebles (patrimonio como vehículos o oficina)'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_13_3}
                            subOptions={[opt35_13_3,opt36_13_3,opt37_13_3]}
                            mainName='P34_13_3.response[0].responseuser'
                            subNames={['P35_13_3.response[0].responseuser','P36_13_3.response[0].responseuser','P37_13_3.response[0].responseuser']}
                            counterName='P38_13_3.response[0].responseuser'
                            mainQTitle='13.3 Amenazas, lesiones'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_13_4}
                            subOptions={[opt35_13_4,opt36_13_4,opt37_13_4]}
                            mainName='P34_13_4.response[0].responseuser'
                            subNames={['P35_13_4.response[0].responseuser','P36_13_4.response[0].responseuser','P37_13_4.response[0].responseuser']}
                            counterName='P38_13_4.response[0].responseuser'
                            mainQTitle='13.4 Contra los derechos de autor.'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_13_5}
                            subOptions={[opt35_13_5,opt36_13_5,opt37_13_5]}
                            mainName='P34_13_5.response[0].responseuser'
                            subNames={['P35_13_5.response[0].responseuser','P36_13_5.response[0].responseuser','P37_13_5.response[0].responseuser']}
                            counterName='P38_13_5.response[0].responseuser'
                            mainQTitle='13.5 Secuestros, tortura'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_13_6}
                            subOptions={[opt35_13_6,opt36_13_6,opt37_13_6]}
                            mainName='P34_13_6.response[0].responseuser'
                            subNames={['P35_13_6.response[0].responseuser','P36_13_6.response[0].responseuser','P37_13_6.response[0].responseuser']}
                            counterName='P38_13_6.response[0].responseuser'
                            mainQTitle='13.6 Injurias, calumnias'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_13_7}
                            subOptions={[opt35_13_7,opt36_13_7,opt37_13_7]}
                            mainName='P34_13_7.response[0].responseuser'
                            subNames={['P35_13_7.response[0].responseuser','P36_13_7.response[0].responseuser','P37_13_7.response[0].responseuser']}
                            counterName='P38_13_7.response[0].responseuser'
                            mainQTitle='13.7 Homicidio, feminicidio'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_13_8}
                            subOptions={[opt35_13_8,opt36_13_8,opt37_13_8]}
                            mainName='P34_13_8.response[0].responseuser'
                            subNames={['P35_13_8.response[0].responseuser','P36_13_8.response[0].responseuser','P37_13_8.response[0].responseuser']}
                            counterName='P38_13_8.response[0].responseuser'
                            mainQTitle='13.8 Ciberdelitos (hurto por medios informáticos, violación de datos personales)'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_13_9}
                            subOptions={[opt35_13_9,opt36_13_9,opt37_13_9]}
                            mainName='P34_13_9.response[0].responseuser'
                            subNames={['P35_13_9.response[0].responseuser','P36_13_9.response[0].responseuser','P37_13_9.response[0].responseuser']}
                            counterName='P38_13_9.response[0].responseuser'
                            mainQTitle='13.9 Plantaciones ilícitas, producción de drogas, tráfico de estupefacientes y sustancias químicas'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_13_10}
                            subOptions={[opt35_13_10,opt36_13_10,opt37_13_10]}
                            mainName='P34_13_10.response[0].responseuser'
                            subNames={['P35_13_10.response[0].responseuser','P36_13_10.response[0].responseuser','P37_13_10.response[0].responseuser']}
                            counterName='P38_13_10.response[0].responseuser'
                            mainQTitle='13.10 Violencia sexual'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_13_11}
                            subOptions={[opt35_13_11,opt36_13_11,opt37_13_11]}
                            mainName='P34_13_11.response[0].responseuser'
                            subNames={['P35_13_11.response[0].responseuser','P36_13_11.response[0].responseuser','P37_13_11.response[0].responseuser']}
                            counterName='P38_13_11.response[0].responseuser'
                            mainQTitle='13.11 Violencia intrafamiliar'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />


                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page16' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}