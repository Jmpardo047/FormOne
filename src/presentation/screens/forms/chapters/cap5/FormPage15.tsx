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
import { getInitialValuesPage15 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt34_11_1, opt35_11_1, opt36_11_1, opt37_11_1, opt34_11_2, opt35_11_2, opt36_11_2, opt37_11_2, opt34_11_3, opt35_11_3, opt36_11_3, opt37_11_3, opt34_11_4, opt35_11_4, opt36_11_4, opt37_11_4, opt34_11_5, opt35_11_5, opt36_11_5, opt37_11_5, opt34_11_6, opt35_11_6, opt36_11_6, opt37_11_6, opt34_11_7, opt35_11_7, opt36_11_7, opt37_11_7, opt34_11_8, opt35_11_8, opt36_11_8, opt37_11_8, opt34_11_9, opt35_11_9, opt36_11_9, opt37_11_9, opt34_11_10, opt35_11_10, opt36_11_10, opt37_11_10 } from '../../../../../utils/cap5/categoriesPage15';

export interface FormValues {
    P34_11_1: FormTemplate;
    P35_11_1: FormTemplate;
    P36_11_1: FormTemplate;
    P37_11_1: FormTemplate;
    P38_11_1: FormTemplate;
    P34_11_2: FormTemplate;
    P35_11_2: FormTemplate;
    P36_11_2: FormTemplate;
    P37_11_2: FormTemplate;
    P38_11_2: FormTemplate;
    P34_11_3: FormTemplate;
    P35_11_3: FormTemplate;
    P36_11_3: FormTemplate;
    P37_11_3: FormTemplate;
    P38_11_3: FormTemplate;
    P34_11_4: FormTemplate;
    P35_11_4: FormTemplate;
    P36_11_4: FormTemplate;
    P37_11_4: FormTemplate;
    P38_11_4: FormTemplate;
    P34_11_5: FormTemplate;
    P35_11_5: FormTemplate;
    P36_11_5: FormTemplate;
    P37_11_5: FormTemplate;
    P38_11_5: FormTemplate;
    P34_11_6: FormTemplate;
    P35_11_6: FormTemplate;
    P36_11_6: FormTemplate;
    P37_11_6: FormTemplate;
    P38_11_6: FormTemplate;
    P34_11_7: FormTemplate;
    P35_11_7: FormTemplate;
    P36_11_7: FormTemplate;
    P37_11_7: FormTemplate;
    P38_11_7: FormTemplate;
    P34_11_8: FormTemplate;
    P35_11_8: FormTemplate;
    P36_11_8: FormTemplate;
    P37_11_8: FormTemplate;
    P38_11_8: FormTemplate;
    P34_11_9: FormTemplate;
    P35_11_9: FormTemplate;
    P36_11_9: FormTemplate;
    P37_11_9: FormTemplate;
    P38_11_9: FormTemplate;
    P34_11_10: FormTemplate;
    P35_11_10: FormTemplate;
    P36_11_10: FormTemplate;
    P37_11_10: FormTemplate;
    P38_11_10: FormTemplate;
    
}



export const FormPage15 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage15();
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
                <Text style={globalStyles.Title}>11. Relación con el Estado</Text>
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
                    navigation.navigate('page16' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        
                        <NestedCheckBox
                            mainOptions={opt34_11_1}
                            subOptions={[opt35_11_1,opt36_11_1,opt37_11_1]}
                            mainName='P34_11_1.response[0].responseuser'
                            subNames={['P35_11_1.response[0].responseuser','P36_11_1.response[0].responseuser','P37_11_1.response[0].responseuser']}
                            counterName='P38_11_1.response[0].responseuser'
                            mainQTitle='11.1 Daños o perjuicios ocasionados por actuaciones de instituciones públicas o autoridades del Estado'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_11_2}
                            subOptions={[opt35_11_2,opt36_11_2,opt37_11_2]}
                            mainName='P34_11_2.response[0].responseuser'
                            subNames={['P35_11_2.response[0].responseuser','P36_11_2.response[0].responseuser','P37_11_2.response[0].responseuser']}
                            counterName='P38_11_2.response[0].responseuser'
                            mainQTitle='11.2 Expropiaciones'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_11_3}
                            subOptions={[opt35_11_3,opt36_11_3,opt37_11_3]}
                            mainName='P34_11_3.response[0].responseuser'
                            subNames={['P35_11_3.response[0].responseuser','P36_11_3.response[0].responseuser','P37_11_3.response[0].responseuser']}
                            counterName='P38_11_3.response[0].responseuser'
                            mainQTitle='11.3 Deficiencia en los servicios prestados por el Estado diferentes de los servicios públicos domiciliarios.'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_11_4}
                            subOptions={[opt35_11_4,opt36_11_4,opt37_11_4]}
                            mainName='P34_11_4.response[0].responseuser'
                            subNames={['P35_11_4.response[0].responseuser','P36_11_4.response[0].responseuser','P37_11_4.response[0].responseuser']}
                            counterName='P38_11_4.response[0].responseuser'
                            mainQTitle='11.4 Abuso de la autoridad estatal'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_11_5}
                            subOptions={[opt35_11_5,opt36_11_5,opt37_11_5]}
                            mainName='P34_11_5.response[0].responseuser'
                            subNames={['P35_11_5.response[0].responseuser','P36_11_5.response[0].responseuser','P37_11_5.response[0].responseuser']}
                            counterName='P38_11_5.response[0].responseuser'
                            mainQTitle='11.5 Pago y/o cobro de impuesto, multas y sanciones (asuntos de carácter tributario)'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_11_6}
                            subOptions={[opt35_11_6,opt36_11_6,opt37_11_6]}
                            mainName='P34_11_6.response[0].responseuser'
                            subNames={['P35_11_6.response[0].responseuser','P36_11_6.response[0].responseuser','P37_11_6.response[0].responseuser']}
                            counterName='P38_11_6.response[0].responseuser'
                            mainQTitle='11.6 Negación en obtención de documentos, en la realización de trámites, procesos ante el Estado'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_11_7}
                            subOptions={[opt35_11_7,opt36_11_7,opt37_11_7]}
                            mainName='P34_11_7.response[0].responseuser'
                            subNames={['P35_11_7.response[0].responseuser','P36_11_7.response[0].responseuser','P37_11_7.response[0].responseuser']}
                            counterName='P38_11_7.response[0].responseuser'
                            mainQTitle='11.7 Problemas relacionados con comparendos de tránsito, por contravenciones (notificación tardía, no conformidad)'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_11_8}
                            subOptions={[opt35_11_8,opt36_11_8,opt37_11_8]}
                            mainName='P34_11_8.response[0].responseuser'
                            subNames={['P35_11_8.response[0].responseuser','P36_11_8.response[0].responseuser','P37_11_8.response[0].responseuser']}
                            counterName='P38_11_8.response[0].responseuser'
                            mainQTitle='11.8 Ejecución o incumplimiento de un contrato estatal (menos contratos laborales)'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_11_9}
                            subOptions={[opt35_11_9,opt36_11_9,opt37_11_9]}
                            mainName='P34_11_9.response[0].responseuser'
                            subNames={['P35_11_9.response[0].responseuser','P36_11_9.response[0].responseuser','P37_11_9.response[0].responseuser']}
                            counterName='P38_11_9.response[0].responseuser'
                            mainQTitle='11.9 Trámites de naturalización de migrantes y expedición de documentos'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_11_10}
                            subOptions={[opt35_11_10,opt36_11_10,opt37_11_10]}
                            mainName='P34_11_10.response[0].responseuser'
                            subNames={['P35_11_10.response[0].responseuser','P36_11_10.response[0].responseuser','P37_11_10.response[0].responseuser']}
                            counterName='P38_11_10.response[0].responseuser'
                            mainQTitle='11.10 Daños o perjuicios ocasionados por actuaciones de funcionarios judiciales, auxiliares de la justicia y abogados litigantes.'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page14' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}