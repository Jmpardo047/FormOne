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
import { getInitialValuesPage12 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt34_6_1, opt35_6_1, opt36_6_1, opt34_6_2, opt35_6_2, opt36_6_2, opt37_6_2, opt34_6_3, opt35_6_3, opt36_6_3, opt37_6_3, opt34_6_4, opt35_6_4, opt36_6_4, opt37_6_4, opt34_6_5, opt35_6_5, opt36_6_5, opt37_6_5, opt34_6_6, opt35_6_6, opt36_6_6, opt37_6_6, opt34_6_7, opt35_6_7, opt36_6_7, opt37_6_7, opt34_6_8, opt35_6_8, opt36_6_8, opt37_6_8, opt34_6_9, opt35_6_9, opt36_6_9, opt37_6_9, opt37_6_1 } from '../../../../../utils/cap5/categoriesPage12';

export interface FormValues {
    P34_6_1: FormTemplate;
    P35_6_1: FormTemplate;
    P36_6_1: FormTemplate;
    P37_6_1: FormTemplate;
    P38_6_1: FormTemplate;
    P34_6_2: FormTemplate;
    P35_6_2: FormTemplate;
    P36_6_2: FormTemplate;
    P37_6_2: FormTemplate;
    P38_6_2: FormTemplate;
    P34_6_3: FormTemplate;
    P35_6_3: FormTemplate;
    P36_6_3: FormTemplate;
    P37_6_3: FormTemplate;
    P38_6_3: FormTemplate;
    P34_6_4: FormTemplate;
    P35_6_4: FormTemplate;
    P36_6_4: FormTemplate;
    P37_6_4: FormTemplate;
    P38_6_4: FormTemplate;
    P34_6_5: FormTemplate;
    P35_6_5: FormTemplate;
    P36_6_5: FormTemplate;
    P37_6_5: FormTemplate;
    P38_6_5: FormTemplate;
    P34_6_6: FormTemplate;
    P35_6_6: FormTemplate;
    P36_6_6: FormTemplate;
    P37_6_6: FormTemplate;
    P38_6_6: FormTemplate;
    P34_6_7: FormTemplate;
    P35_6_7: FormTemplate;
    P36_6_7: FormTemplate;
    P37_6_7: FormTemplate;
    P38_6_7: FormTemplate;
    P34_6_8: FormTemplate;
    P35_6_8: FormTemplate;
    P36_6_8: FormTemplate;
    P37_6_8: FormTemplate;
    P38_6_8: FormTemplate;
    P34_6_9: FormTemplate;
    P35_6_9: FormTemplate;
    P36_6_9: FormTemplate;
    P37_6_9: FormTemplate;
    P38_6_9: FormTemplate;
}



export const FormPage12 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage12();
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
                    navigation.navigate('page13' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        
                        <NestedCheckBox
                            mainOptions={opt34_6_1}
                            subOptions={[opt35_6_1,opt36_6_1,opt37_6_1]}
                            mainName='P34_6_1.response[0].responseuser'
                            subNames={['P35_6_1.response[0].responseuser','P36_6_1.response[0].responseuser','P37_6_1.response[0].responseuser']}
                            counterName='P38_6_1.response[0].responseuser'
                            mainQTitle='6.1 Propiedad'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_6_2}
                            subOptions={[opt35_6_2,opt36_6_2,opt37_6_2]}
                            mainName='P34_6_2.response[0].responseuser'
                            subNames={['P35_6_2.response[0].responseuser','P36_6_2.response[0].responseuser','P37_6_2.response[0].responseuser']}
                            counterName='P38_6_2.response[0].responseuser'
                            mainQTitle='6.2 Invasión, ocupación indebida'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_6_3}
                            subOptions={[opt35_6_3,opt36_6_3,opt37_6_3]}
                            mainName='P34_6_3.response[0].responseuser'
                            subNames={['P35_6_3.response[0].responseuser','P36_6_3.response[0].responseuser','P37_6_3.response[0].responseuser']}
                            counterName='P38_6_3.response[0].responseuser'
                            mainQTitle='6.3 Daños, afectaciones, calidad del inmueble'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_6_4}
                            subOptions={[opt35_6_4,opt36_6_4,opt37_6_4]}
                            mainName='P34_6_4.response[0].responseuser'
                            subNames={['P35_6_4.response[0].responseuser','P36_6_4.response[0].responseuser','P37_6_4.response[0].responseuser']}
                            counterName='P38_6_4.response[0].responseuser'
                            mainQTitle='6.4 Arrendamiento'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_6_5}
                            subOptions={[opt35_6_5,opt36_6_5,opt37_6_5]}
                            mainName='P34_6_5.response[0].responseuser'
                            subNames={['P35_6_5.response[0].responseuser','P36_6_5.response[0].responseuser','P37_6_5.response[0].responseuser']}
                            counterName='P38_6_5.response[0].responseuser'
                            mainQTitle='6.5 Administración'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_6_6}
                            subOptions={[opt35_6_6,opt36_6_6,opt37_6_6]}
                            mainName='P34_6_6.response[0].responseuser'
                            subNames={['P35_6_6.response[0].responseuser','P36_6_6.response[0].responseuser','P37_6_6.response[0].responseuser']}
                            counterName='P38_6_6.response[0].responseuser'
                            mainQTitle='6.6 Ruidos, malos olores y basuras'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_6_7}
                            subOptions={[opt35_6_7,opt36_6_7,opt37_6_7]}
                            mainName='P34_6_7.response[0].responseuser'
                            subNames={['P35_6_7.response[0].responseuser','P36_6_7.response[0].responseuser','P37_6_7.response[0].responseuser']}
                            counterName='P38_6_7.response[0].responseuser'
                            mainQTitle='6.7 Problemas relacionados con mascotas u otros animales domésticos'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_6_8}
                            subOptions={[opt35_6_8,opt36_6_8,opt37_6_8]}
                            mainName='P34_6_8.response[0].responseuser'
                            subNames={['P35_6_8.response[0].responseuser','P36_6_8.response[0].responseuser','P37_6_8.response[0].responseuser']}
                            counterName='P38_6_8.response[0].responseuser'
                            mainQTitle='6.8 Buen nombre, rumores, chismes'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_6_9}
                            subOptions={[opt35_6_9,opt36_6_9,opt37_6_9]}
                            mainName='P34_6_9.response[0].responseuser'
                            subNames={['P35_6_9.response[0].responseuser','P36_6_9.response[0].responseuser','P37_6_9.response[0].responseuser']}
                            counterName='P38_6_9.response[0].responseuser'
                            mainQTitle='6.9 Daños a cultivos, conflictos por fuentes y acceso al agua'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />


                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page11' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}