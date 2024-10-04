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
import { getInitialValuesPage9 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt34_2_1, opt34_2_2, opt34_2_3, opt34_2_4, opt34_2_5, opt34_3_1, opt34_3_2, opt34_3_3, opt35_2_1, opt35_2_2, opt35_2_3, opt35_2_4, opt35_2_5, opt35_3_1, opt35_3_2, opt35_3_3, opt36_2_1, opt36_2_2, opt36_2_3, opt36_2_4, opt36_2_5, opt36_3_1, opt36_3_2, opt36_3_3, opt37_2_1, opt37_2_2, opt37_2_3, opt37_2_4, opt37_2_5, opt37_3_1, opt37_3_2, opt37_3_3 } from '../../../../../utils/cap5/categoriesPage9';

export interface FormValues{
    P34_2_1:FormTemplate;
    P35_2_1:FormTemplate;
    P36_2_1:FormTemplate;
    P37_2_1:FormTemplate;
    P38_2_1:FormTemplate;
    P34_2_2:FormTemplate;
    P35_2_2:FormTemplate;
    P36_2_2:FormTemplate;
    P37_2_2:FormTemplate;
    P38_2_2:FormTemplate;
    P34_2_3:FormTemplate;
    P35_2_3:FormTemplate;
    P36_2_3:FormTemplate;
    P37_2_3:FormTemplate;
    P38_2_3:FormTemplate;
    P34_2_4:FormTemplate;
    P35_2_4:FormTemplate;
    P36_2_4:FormTemplate;
    P37_2_4:FormTemplate;
    P38_2_4:FormTemplate;
    P34_2_5:FormTemplate;
    P35_2_5:FormTemplate;
    P36_2_5:FormTemplate;
    P37_2_5:FormTemplate;
    P38_2_5:FormTemplate;
    P34_3_1:FormTemplate;
    P35_3_1:FormTemplate;
    P36_3_1:FormTemplate;
    P37_3_1:FormTemplate;
    P38_3_1:FormTemplate;
    P34_3_2:FormTemplate;
    P35_3_2:FormTemplate;
    P36_3_2:FormTemplate;
    P37_3_2:FormTemplate;
    P38_3_2:FormTemplate;
    P34_3_3:FormTemplate;
    P35_3_3:FormTemplate;
    P36_3_3:FormTemplate;
    P37_3_3:FormTemplate;
    P38_3_3:FormTemplate;
}


export const FormPage9 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage9();
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
                <Text style={globalStyles.Title}>2. Consumo de producto, bien o servicio</Text>
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
                    navigation.navigate('page10' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        
                        <NestedCheckBox
                            mainOptions={opt34_2_1}
                            subOptions={[opt35_2_1,opt36_2_1,opt37_2_1]}
                            mainName='P34_2_1.response[0].responseuser'
                            subNames={['P35_2_1.response[0].responseuser','P36_2_1.response[0].responseuser','P37_2_1.response[0].responseuser']}
                            counterName='P38_2_1.response[0].responseuser'
                            mainQTitle='2.1 Mala calidad de los productos o servicios adquiridos'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_2_2}
                            subOptions={[opt35_2_2,opt36_2_2,opt37_2_2]}
                            mainName='P34_2_2.response[0].responseuser'
                            subNames={['P35_2_2.response[0].responseuser','P36_2_2.response[0].responseuser','P37_2_2.response[0].responseuser']}
                            counterName='P38_2_2.response[0].responseuser'
                            mainQTitle='2.2 Incumplimiento de contratos o garantías de productos o servicios'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        
                        <NestedCheckBox
                            mainOptions={opt34_2_3}
                            subOptions={[opt35_2_3,opt36_2_3,opt37_2_3]}
                            mainName='P34_2_3.response[0].responseuser'
                            subNames={['P35_2_3.response[0].responseuser','P36_2_3.response[0].responseuser','P37_2_3.response[0].responseuser']}
                            counterName='P38_2_3.response[0].responseuser'
                            mainQTitle='2.3 Manejo de datos personales'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_2_4}
                            subOptions={[opt35_2_4,opt36_2_4,opt37_2_4]}
                            mainName='P34_2_4.response[0].responseuser'
                            subNames={['P35_2_4.response[0].responseuser','P36_2_4.response[0].responseuser','P37_2_4.response[0].responseuser']}
                            counterName='P38_2_4.response[0].responseuser'
                            mainQTitle='2.4 Publicidad engañosa'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_2_5}
                            subOptions={[opt35_2_5,opt36_2_5,opt37_2_5]}
                            mainName='P34_2_5.response[0].responseuser'
                            subNames={['P35_2_5.response[0].responseuser','P36_2_5.response[0].responseuser','P37_2_5.response[0].responseuser']}
                            counterName='P38_2_5.response[0].responseuser'
                            mainQTitle='2.5 Sobrecostos en tarifas'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <View style={globalStyles.CapTitle}>
                            <Text style={globalStyles.Title}>3. Prestación de un servicio público domiciliario</Text>
                        </View>

                        <NestedCheckBox
                            mainOptions={opt34_3_1}
                            subOptions={[opt35_3_1,opt36_3_1,opt37_3_1]}
                            mainName='P34_3_1.response[0].responseuser'
                            subNames={['P35_3_1.response[0].responseuser','P36_3_1.response[0].responseuser','P37_3_1.response[0].responseuser']}
                            counterName='P38_3_1.response[0].responseuser'
                            mainQTitle='3.1 Carencia, desconexión, prestación inadecuada del servicio'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_3_2}
                            subOptions={[opt35_3_2,opt36_3_2,opt37_3_2]}
                            mainName='P34_3_2.response[0].responseuser'
                            subNames={['P35_3_2.response[0].responseuser','P36_3_2.response[0].responseuser','P37_3_2.response[0].responseuser']}
                            counterName='P38_3_2.response[0].responseuser'
                            mainQTitle='3.2 Facturación, tarifa y sobrecostos'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_3_3}
                            subOptions={[opt35_3_3,opt36_3_3,opt37_3_3]}
                            mainName='P34_3_3.response[0].responseuser'
                            subNames={['P35_3_3.response[0].responseuser','P36_3_3.response[0].responseuser','P37_3_3.response[0].responseuser']}
                            counterName='P38_3_3.response[0].responseuser'
                            mainQTitle='3.3 Instalación, uso ilegal de la instalación'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />



                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page8' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}