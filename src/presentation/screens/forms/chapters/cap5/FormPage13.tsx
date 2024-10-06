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
import { getInitialValuesPage13 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt34_7_1, opt35_7_1, opt36_7_1, opt37_7_1, opt34_7_2, opt35_7_2, opt36_7_2, opt37_7_2, opt34_7_3, opt35_7_3, opt36_7_3, opt37_7_3, opt34_7_4, opt35_7_4, opt36_7_4, opt37_7_4, opt34_8_1, opt35_8_1, opt36_8_1, opt37_8_1, opt34_8_2, opt35_8_2, opt36_8_2, opt37_8_2, opt34_8_3, opt35_8_3, opt36_8_3, opt37_8_3, opt34_8_4, opt35_8_4, opt36_8_4, opt37_8_4, opt34_8_5, opt35_8_5, opt36_8_5, opt37_8_5, opt34_8_6, opt35_8_6, opt36_8_6, opt37_8_6 } from '../../../../../utils/cap5/categoriesPage13';

export interface FormValues {
    P34_7_1: FormTemplate;
    P35_7_1: FormTemplate;
    P36_7_1: FormTemplate;
    P37_7_1: FormTemplate;
    P38_7_1: FormTemplate;
    P34_7_2: FormTemplate;
    P35_7_2: FormTemplate;
    P36_7_2: FormTemplate;
    P37_7_2: FormTemplate;
    P38_7_2: FormTemplate;
    P34_7_3: FormTemplate;
    P35_7_3: FormTemplate;
    P36_7_3: FormTemplate;
    P37_7_3: FormTemplate;
    P38_7_3: FormTemplate;
    P34_7_4: FormTemplate;
    P35_7_4: FormTemplate;
    P36_7_4: FormTemplate;
    P37_7_4: FormTemplate;
    P38_7_4: FormTemplate;
    P34_8_1: FormTemplate;
    P35_8_1: FormTemplate;
    P36_8_1: FormTemplate;
    P37_8_1: FormTemplate;
    P38_8_1: FormTemplate;
    P34_8_2: FormTemplate;
    P35_8_2: FormTemplate;
    P36_8_2: FormTemplate;
    P37_8_2: FormTemplate;
    P38_8_2: FormTemplate;
    P34_8_3: FormTemplate;
    P35_8_3: FormTemplate;
    P36_8_3: FormTemplate;
    P37_8_3: FormTemplate;
    P38_8_3: FormTemplate;
    P34_8_4: FormTemplate;
    P35_8_4: FormTemplate;
    P36_8_4: FormTemplate;
    P37_8_4: FormTemplate;
    P38_8_4: FormTemplate;
    P34_8_5: FormTemplate;
    P35_8_5: FormTemplate;
    P36_8_5: FormTemplate;
    P37_8_5: FormTemplate;
    P38_8_5: FormTemplate;
    P34_8_6: FormTemplate;
    P35_8_6: FormTemplate;
    P36_8_6: FormTemplate;
    P37_8_6: FormTemplate;
    P38_8_6: FormTemplate;


}



export const FormPage13 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage13();
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
                <Text style={globalStyles.Title}>7. Entorno y espacio público</Text>
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
                    navigation.navigate('page14' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        
                        <NestedCheckBox
                            mainOptions={opt34_7_1}
                            subOptions={[opt35_7_1,opt36_7_1,opt37_7_1]}
                            mainName='P34_7_1.response[0].responseuser'
                            subNames={['P35_7_1.response[0].responseuser','P36_7_1.response[0].responseuser','P37_7_1.response[0].responseuser']}
                            counterName='P38_7_1.response[0].responseuser'
                            mainQTitle='7.1 Invasión, ocupación indebida'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_7_2}
                            subOptions={[opt35_7_2,opt36_7_2,opt37_7_2]}
                            mainName='P34_7_2.response[0].responseuser'
                            subNames={['P35_7_2.response[0].responseuser','P36_7_2.response[0].responseuser','P37_7_2.response[0].responseuser']}
                            counterName='P38_7_2.response[0].responseuser'
                            mainQTitle='7.2 Perjuicios ocasionados por las condiciones o ausencia de equipamiento y mobiliario urbano (puentes peatonales, calles, andenes, paraderos, botes de basura, escaños, bancas, materas, luminarias, bolardos, jardineras, juegos infantiles y de ejercicio, semáforos, etc.)'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_7_3}
                            subOptions={[opt35_7_3,opt36_7_3,opt37_7_3]}
                            mainName='P34_7_3.response[0].responseuser'
                            subNames={['P35_7_3.response[0].responseuser','P36_7_3.response[0].responseuser','P37_7_3.response[0].responseuser']}
                            counterName='P38_7_3.response[0].responseuser'
                            mainQTitle='7.3 Perjuicios ocasionados por obras públicas (rampas, señalización, ruidos, escombros, duración)'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_7_4}
                            subOptions={[opt35_7_4,opt36_7_4,opt37_7_4]}
                            mainName='P34_7_4.response[0].responseuser'
                            subNames={['P35_7_4.response[0].responseuser','P36_7_4.response[0].responseuser','P37_7_4.response[0].responseuser']}
                            counterName='P38_7_4.response[0].responseuser'
                            mainQTitle='7.4 Mal uso de espacios de uso común (parques, calles, plazas, playas, andenes)'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <View style={globalStyles.CapTitle}>
                            <Text style={globalStyles.Title}>8. Propiedad uso y tenencia de la tierra</Text>
                        </View>

                        <NestedCheckBox
                            mainOptions={opt34_8_1}
                            subOptions={[opt35_8_1,opt36_8_1,opt37_8_1]}
                            mainName='P34_8_1.response[0].responseuser'
                            subNames={['P35_8_1.response[0].responseuser','P36_8_1.response[0].responseuser','P37_8_1.response[0].responseuser']}
                            counterName='P38_8_1.response[0].responseuser'
                            mainQTitle='8.1 Conflictos derivados de la inexistencia de información o desactualización de los registros catastrales y registrales (mercado inmobiliario)'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_8_2}
                            subOptions={[opt35_8_2,opt36_8_2,opt37_8_2]}
                            mainName='P34_8_2.response[0].responseuser'
                            subNames={['P35_8_2.response[0].responseuser','P36_8_2.response[0].responseuser','P37_8_2.response[0].responseuser']}
                            counterName='P38_8_2.response[0].responseuser'
                            mainQTitle='8.2 Formalización, adjudicación o titulación de tierras, mojones y definición de linderos'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_8_3}
                            subOptions={[opt35_8_3,opt36_8_3,opt37_8_3]}
                            mainName='P34_8_3.response[0].responseuser'
                            subNames={['P35_8_3.response[0].responseuser','P36_8_3.response[0].responseuser','P37_8_3.response[0].responseuser']}
                            counterName='P38_8_3.response[0].responseuser'
                            mainQTitle='8.3 Servidumbre sobre un predio (de paso de agua, servicios públicos)'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_8_4}
                            subOptions={[opt35_8_4,opt36_8_4,opt37_8_4]}
                            mainName='P34_8_4.response[0].responseuser'
                            subNames={['P35_8_4.response[0].responseuser','P36_8_4.response[0].responseuser','P37_8_4.response[0].responseuser']}
                            counterName='P38_8_4.response[0].responseuser'
                            mainQTitle='8.4 Invasión, ocupación indebida del terreno'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_8_5}
                            subOptions={[opt35_8_5,opt36_8_5,opt37_8_5]}
                            mainName='P34_8_5.response[0].responseuser'
                            subNames={['P35_8_5.response[0].responseuser','P36_8_5.response[0].responseuser','P37_8_5.response[0].responseuser']}
                            counterName='P38_8_5.response[0].responseuser'
                            mainQTitle='8.5 Recuperación de terrenos'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_8_6}
                            subOptions={[opt35_8_6,opt36_8_6,opt37_8_6]}
                            mainName='P34_8_6.response[0].responseuser'
                            subNames={['P35_8_6.response[0].responseuser','P36_8_6.response[0].responseuser','P37_8_6.response[0].responseuser']}
                            counterName='P38_8_6.response[0].responseuser'
                            mainQTitle='8.6 Extinción de dominio'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page12' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}