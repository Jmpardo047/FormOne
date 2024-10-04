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
import { getInitialValuesPage11 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt34_5_1, opt34_5_10, opt34_5_2, opt34_5_3, opt34_5_4, opt34_5_5, opt34_5_6, opt34_5_7, opt34_5_8, opt34_5_9, opt35_5_1, opt35_5_10, opt35_5_2, opt35_5_3, opt35_5_4, opt35_5_5, opt35_5_6, opt35_5_7, opt35_5_8, opt35_5_9, opt36_5_1, opt36_5_10, opt36_5_2, opt36_5_3, opt36_5_4, opt36_5_5, opt36_5_6, opt36_5_7, opt36_5_8, opt36_5_9, opt37_5_1, opt37_5_10, opt37_5_2, opt37_5_3, opt37_5_4, opt37_5_5, opt37_5_6, opt37_5_7, opt37_5_8, opt37_5_9 } from '../../../../../utils/cap5/categoriesPage11';

export interface FormValues {
    P34_5_1: FormTemplate;
    P35_5_1: FormTemplate;
    P36_5_1: FormTemplate;
    P37_5_1: FormTemplate;
    P38_5_1: FormTemplate;
    P34_5_2: FormTemplate;
    P35_5_2: FormTemplate;
    P36_5_2: FormTemplate;
    P37_5_2: FormTemplate;
    P38_5_2: FormTemplate;
    P34_5_3: FormTemplate;
    P35_5_3: FormTemplate;
    P36_5_3: FormTemplate;
    P37_5_3: FormTemplate;
    P38_5_3: FormTemplate;
    P34_5_4: FormTemplate;
    P35_5_4: FormTemplate;
    P36_5_4: FormTemplate;
    P37_5_4: FormTemplate;
    P38_5_4: FormTemplate;
    P34_5_5: FormTemplate;
    P35_5_5: FormTemplate;
    P36_5_5: FormTemplate;
    P37_5_5: FormTemplate;
    P38_5_5: FormTemplate;
    P34_5_6: FormTemplate;
    P35_5_6: FormTemplate;
    P36_5_6: FormTemplate;
    P37_5_6: FormTemplate;
    P38_5_6: FormTemplate;
    P34_5_7: FormTemplate;
    P35_5_7: FormTemplate;
    P36_5_7: FormTemplate;
    P37_5_7: FormTemplate;
    P38_5_7: FormTemplate;
    P34_5_8: FormTemplate;
    P35_5_8: FormTemplate;
    P36_5_8: FormTemplate;
    P37_5_8: FormTemplate;
    P38_5_8: FormTemplate;
    P34_5_9: FormTemplate;
    P35_5_9: FormTemplate;
    P36_5_9: FormTemplate;
    P37_5_9: FormTemplate;
    P38_5_9: FormTemplate;
    P34_5_10: FormTemplate;
    P35_5_10: FormTemplate;
    P36_5_10: FormTemplate;
    P37_5_10: FormTemplate;
    P38_5_10: FormTemplate;
}



export const FormPage11 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage11();
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
                <Text style={globalStyles.Title}>6. Deudas y dinero</Text>
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
                            mainOptions={opt34_5_1}
                            subOptions={[opt35_5_1,opt36_5_1,opt37_5_1]}
                            mainName='P34_5_1.response[0].responseuser'
                            subNames={['P35_5_1.response[0].responseuser','P36_5_1.response[0].responseuser','P37_5_1.response[0].responseuser']}
                            counterName='P38_5_1.response[0].responseuser'
                            mainQTitle='5.1 Deudas en forma de letras de cambio, pagarés u otros instrumentos contraídos con particulares'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_5_2}
                            subOptions={[opt35_5_2,opt36_5_2,opt37_5_2]}
                            mainName='P34_5_2.response[0].responseuser'
                            subNames={['P35_5_2.response[0].responseuser','P36_5_2.response[0].responseuser','P37_5_2.response[0].responseuser']}
                            counterName='P38_5_2.response[0].responseuser'
                            mainQTitle='5.2 Usura o intereses elevados en préstamos con particulares'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_5_3}
                            subOptions={[opt35_5_3,opt36_5_3,opt37_5_3]}
                            mainName='P34_5_3.response[0].responseuser'
                            subNames={['P35_5_3.response[0].responseuser','P36_5_3.response[0].responseuser','P37_5_3.response[0].responseuser']}
                            counterName='P38_5_3.response[0].responseuser'
                            mainQTitle='5.3 Embargo y secuestro del bien por deudas contraidas con particulares'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_5_4}
                            subOptions={[opt35_5_4,opt36_5_4,opt37_5_4]}
                            mainName='P34_5_4.response[0].responseuser'
                            subNames={['P35_5_4.response[0].responseuser','P36_5_4.response[0].responseuser','P37_5_4.response[0].responseuser']}
                            counterName='P38_5_4.response[0].responseuser'
                            mainQTitle='5.4 Deudas como tarjetas de crédito, libre inversión, créditos hipotecarios y otras carteras con entidades financieras y solidarias'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_5_5}
                            subOptions={[opt35_5_5,opt36_5_5,opt37_5_5]}
                            mainName='P34_5_5.response[0].responseuser'
                            subNames={['P35_5_5.response[0].responseuser','P36_5_5.response[0].responseuser','P37_5_5.response[0].responseuser']}
                            counterName='P38_5_5.response[0].responseuser'
                            mainQTitle='5.5 Usura o intereses elevados en préstamos con el sector financiero y solidario'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_5_6}
                            subOptions={[opt35_5_6,opt36_5_6,opt37_5_6]}
                            mainName='P34_5_6.response[0].responseuser'
                            subNames={['P35_5_6.response[0].responseuser','P36_5_6.response[0].responseuser','P37_5_6.response[0].responseuser']}
                            counterName='P38_5_6.response[0].responseuser'
                            mainQTitle='5.6 Procesos ejecutivos, embargo, secuestro del bien, hipotecas, remates y lanzamientos con el sector financiero y solidario'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_5_7}
                            subOptions={[opt35_5_7,opt36_5_7,opt37_5_7]}
                            mainName='P34_5_7.response[0].responseuser'
                            subNames={['P35_5_7.response[0].responseuser','P36_5_7.response[0].responseuser','P37_5_7.response[0].responseuser']}
                            counterName='P38_5_7.response[0].responseuser'
                            mainQTitle='5.7 Reportes a centrales de riesgo'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_5_8}
                            subOptions={[opt35_5_8,opt36_5_8,opt37_5_8]}
                            mainName='P34_5_8.response[0].responseuser'
                            subNames={['P35_5_8.response[0].responseuser','P36_5_8.response[0].responseuser','P37_5_8.response[0].responseuser']}
                            counterName='P38_5_8.response[0].responseuser'
                            mainQTitle='5.8 Deudas por créditos educativos'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_5_9}
                            subOptions={[opt35_5_9,opt36_5_9,opt37_5_9]}
                            mainName='P34_5_9.response[0].responseuser'
                            subNames={['P35_5_9.response[0].responseuser','P36_5_9.response[0].responseuser','P37_5_9.response[0].responseuser']}
                            counterName='P38_5_9.response[0].responseuser'
                            mainQTitle='5.9 Pago de intereses por deudas educativas'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_5_10}
                            subOptions={[opt35_5_10,opt36_5_10,opt37_5_10]}
                            mainName='P34_5_10.response[0].responseuser'
                            subNames={['P35_5_10.response[0].responseuser','P36_5_10.response[0].responseuser','P37_5_10.response[0].responseuser']}
                            counterName='P38_5_10.response[0].responseuser'
                            mainQTitle='5.10 Quiebra o insolvencia de personas naturales'
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