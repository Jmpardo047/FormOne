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
import { getInitialValuesPage14 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt34_9_1, opt35_9_1, opt36_9_1, opt37_9_1, opt34_9_2, opt35_9_2, opt36_9_2, opt37_9_2, opt34_9_3, opt35_9_3, opt36_9_3, opt37_9_3, opt34_9_4, opt35_9_4, opt36_9_4, opt37_9_4, opt34_10_1, opt34_10_10, opt34_10_11, opt34_10_12, opt34_10_2, opt34_10_3, opt34_10_4, opt34_10_5, opt34_10_6, opt34_10_7, opt34_10_8, opt34_10_9, opt35_10_1, opt35_10_10, opt35_10_11, opt35_10_12, opt35_10_2, opt35_10_3, opt35_10_4, opt35_10_5, opt35_10_6, opt35_10_7, opt35_10_8, opt35_10_9, opt36_10_1, opt36_10_10, opt36_10_11, opt36_10_12, opt36_10_2, opt36_10_3, opt36_10_4, opt36_10_5, opt36_10_6, opt36_10_7, opt36_10_8, opt36_10_9, opt37_10_1, opt37_10_10, opt37_10_11, opt37_10_12, opt37_10_2, opt37_10_3, opt37_10_4, opt37_10_5, opt37_10_6, opt37_10_7, opt37_10_8, opt37_10_9 } from '../../../../../utils/cap5/categoriesPage14';

export interface FormValues {
    P34_9_1: FormTemplate;
    P35_9_1: FormTemplate;
    P36_9_1: FormTemplate;
    P37_9_1: FormTemplate;
    P38_9_1: FormTemplate;
    P34_9_2: FormTemplate;
    P35_9_2: FormTemplate;
    P36_9_2: FormTemplate;
    P37_9_2: FormTemplate;
    P38_9_2: FormTemplate;
    P34_9_3: FormTemplate;
    P35_9_3: FormTemplate;
    P36_9_3: FormTemplate;
    P37_9_3: FormTemplate;
    P38_9_3: FormTemplate;
    P34_9_4: FormTemplate;
    P35_9_4: FormTemplate;
    P36_9_4: FormTemplate;
    P37_9_4: FormTemplate;
    P38_9_4: FormTemplate;
    P34_10_1: FormTemplate;
    P35_10_1: FormTemplate;
    P36_10_1: FormTemplate;
    P37_10_1: FormTemplate;
    P38_10_1: FormTemplate;
    P34_10_2: FormTemplate;
    P35_10_2: FormTemplate;
    P36_10_2: FormTemplate;
    P37_10_2: FormTemplate;
    P38_10_2: FormTemplate;
    P34_10_3: FormTemplate;
    P35_10_3: FormTemplate;
    P36_10_3: FormTemplate;
    P37_10_3: FormTemplate;
    P38_10_3: FormTemplate;
    P34_10_4: FormTemplate;
    P35_10_4: FormTemplate;
    P36_10_4: FormTemplate;
    P37_10_4: FormTemplate;
    P38_10_4: FormTemplate;
    P34_10_5: FormTemplate;
    P35_10_5: FormTemplate;
    P36_10_5: FormTemplate;
    P37_10_5: FormTemplate;
    P38_10_5: FormTemplate;
    P34_10_6: FormTemplate;
    P35_10_6: FormTemplate;
    P36_10_6: FormTemplate;
    P37_10_6: FormTemplate;
    P38_10_6: FormTemplate;
    P34_10_7: FormTemplate;
    P35_10_7: FormTemplate;
    P36_10_7: FormTemplate;
    P37_10_7: FormTemplate;
    P38_10_7: FormTemplate;
    P34_10_8: FormTemplate;
    P35_10_8: FormTemplate;
    P36_10_8: FormTemplate;
    P37_10_8: FormTemplate;
    P38_10_8: FormTemplate;
    P34_10_9: FormTemplate;
    P35_10_9: FormTemplate;
    P36_10_9: FormTemplate;
    P37_10_9: FormTemplate;
    P38_10_9: FormTemplate;
    P34_10_10: FormTemplate;
    P35_10_10: FormTemplate;
    P36_10_10: FormTemplate;
    P37_10_10: FormTemplate;
    P38_10_10: FormTemplate;
    P34_10_11: FormTemplate;
    P35_10_11: FormTemplate;
    P36_10_11: FormTemplate;
    P37_10_11: FormTemplate;
    P38_10_11: FormTemplate;
    P34_10_12: FormTemplate;
    P35_10_12: FormTemplate;
    P36_10_12: FormTemplate;
    P37_10_12: FormTemplate;
    P38_10_12: FormTemplate;
}



export const FormPage14 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage14();
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
                <Text style={globalStyles.Title}>9. Medio ambiente y acceso a recursos comunitarios</Text>
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
                    navigation.navigate('page15' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        <NestedCheckBox
                            mainOptions={opt34_9_1}
                            subOptions={[opt35_9_1,opt36_9_1,opt37_9_1]}
                            mainName='P34_9_1.response[0].responseuser'
                            subNames={['P35_9_1.response[0].responseuser','P36_9_1.response[0].responseuser','P37_9_1.response[0].responseuser']}
                            counterName='P38_9_1.response[0].responseuser'
                            mainQTitle='9.1 Impacto ambiental producido por la actividad minero-energética'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_9_2}
                            subOptions={[opt35_9_2,opt36_9_2,opt37_9_2]}
                            mainName='P34_9_2.response[0].responseuser'
                            subNames={['P35_9_2.response[0].responseuser','P36_9_2.response[0].responseuser','P37_9_2.response[0].responseuser']}
                            counterName='P38_9_2.response[0].responseuser'
                            mainQTitle='9.2 Contaminación o deforestación ambiental (fumigaciones, aspersión con glifosato, tala de árboles, aguas, incendios, pesca)'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_9_3}
                            subOptions={[opt35_9_3,opt36_9_3,opt37_9_3]}
                            mainName='P34_9_3.response[0].responseuser'
                            subNames={['P35_9_3.response[0].responseuser','P36_9_3.response[0].responseuser','P37_9_3.response[0].responseuser']}
                            counterName='P38_9_3.response[0].responseuser'
                            mainQTitle='9.3 Extracción y explotación ilícita de recursos ambientales (minerales, madera, hidrocarburos, fuentes hídricas)'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_9_4}
                            subOptions={[opt35_9_4,opt36_9_4,opt37_9_4]}
                            mainName='P34_9_4.response[0].responseuser'
                            subNames={['P35_9_4.response[0].responseuser','P36_9_4.response[0].responseuser','P37_9_4.response[0].responseuser']}
                            counterName='P38_9_4.response[0].responseuser'
                            mainQTitle='9.4 Acceso a recursos comunitarios (agua, pesca, caza, vías terciarias)'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <View style={globalStyles.CapTitle}>
                            <Text style={globalStyles.Title}>10. Prestación de los servicios de salud, pensión y riesgos laborales</Text>
                        </View>

                        <NestedCheckBox
                            mainOptions={opt34_10_1}
                            subOptions={[opt35_10_1,opt36_10_1,opt37_10_1]}
                            mainName='P34_10_1.response[0].responseuser'
                            subNames={['P35_10_1.response[0].responseuser','P36_10_1.response[0].responseuser','P37_10_1.response[0].responseuser']}
                            counterName='P38_10_1.response[0].responseuser'
                            mainQTitle='10.1 Afiliación (Sistema general de seguridad social en salud y pensión, ARL y riesgos laborales)'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_10_2}
                            subOptions={[opt35_10_2,opt36_10_2,opt37_10_2]}
                            mainName='P34_10_2.response[0].responseuser'
                            subNames={['P35_10_2.response[0].responseuser','P36_10_2.response[0].responseuser','P37_10_2.response[0].responseuser']}
                            counterName='P38_10_2.response[0].responseuser'
                            mainQTitle='10.2 Registro y categorización del SISBEN / régimen subsidiado'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_10_3}
                            subOptions={[opt35_10_3,opt36_10_3,opt37_10_3]}
                            mainName='P34_10_3.response[0].responseuser'
                            subNames={['P35_10_3.response[0].responseuser','P36_10_3.response[0].responseuser','P37_10_3.response[0].responseuser']}
                            counterName='P38_10_3.response[0].responseuser'
                            mainQTitle='10.3 Servicios básicos (citas, autorizaciones de procedimientos y/o medicamentos, pagos)'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_10_4}
                            subOptions={[opt35_10_4,opt36_10_4,opt37_10_4]}
                            mainName='P34_10_4.response[0].responseuser'
                            subNames={['P35_10_4.response[0].responseuser','P36_10_4.response[0].responseuser','P37_10_4.response[0].responseuser']}
                            counterName='P38_10_4.response[0].responseuser'
                            mainQTitle='10.4 Servicio por enfermedades crónicas y enfermedades de alto costo (autorizaciones de procedimientos y/o cirugías, medicamentos, pagos)'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_10_5}
                            subOptions={[opt35_10_5,opt36_10_5,opt37_10_5]}
                            mainName='P34_10_5.response[0].responseuser'
                            subNames={['P35_10_5.response[0].responseuser','P36_10_5.response[0].responseuser','P37_10_5.response[0].responseuser']}
                            counterName='P38_10_5.response[0].responseuser'
                            mainQTitle='10.5 Negación del servicio'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_10_6}
                            subOptions={[opt35_10_6,opt36_10_6,opt37_10_6]}
                            mainName='P34_10_6.response[0].responseuser'
                            subNames={['P35_10_6.response[0].responseuser','P36_10_6.response[0].responseuser','P37_10_6.response[0].responseuser']}
                            counterName='P38_10_6.response[0].responseuser'
                            mainQTitle='10.6 Demora en la atención del servicio (citas, autorizaciones de procedimientos y/o medicamentos, pagos)'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_10_7}
                            subOptions={[opt35_10_7,opt36_10_7,opt37_10_7]}
                            mainName='P34_10_7.response[0].responseuser'
                            subNames={['P35_10_7.response[0].responseuser','P36_10_7.response[0].responseuser','P37_10_7.response[0].responseuser']}
                            counterName='P38_10_7.response[0].responseuser'
                            mainQTitle='10.7 Calidad del servicio'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_10_8}
                            subOptions={[opt35_10_8,opt36_10_8,opt37_10_8]}
                            mainName='P34_10_8.response[0].responseuser'
                            subNames={['P35_10_8.response[0].responseuser','P36_10_8.response[0].responseuser','P37_10_8.response[0].responseuser']}
                            counterName='P38_10_8.response[0].responseuser'
                            mainQTitle='10.8 Daños y perjuicios ocasionados por el uso de medicamentos o suplementos adulterados'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_10_9}
                            subOptions={[opt35_10_9,opt36_10_9,opt37_10_9]}
                            mainName='P34_10_9.response[0].responseuser'
                            subNames={['P35_10_9.response[0].responseuser','P36_10_9.response[0].responseuser','P37_10_9.response[0].responseuser']}
                            counterName='P38_10_9.response[0].responseuser'
                            mainQTitle='10.9 Errores médicos, equivocación del tratamiento'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_10_10}
                            subOptions={[opt35_10_10,opt36_10_10,opt37_10_10]}
                            mainName='P34_10_10.response[0].responseuser'
                            subNames={['P35_10_10.response[0].responseuser','P36_10_10.response[0].responseuser','P37_10_10.response[0].responseuser']}
                            counterName='P38_10_10.response[0].responseuser'
                            mainQTitle='10.10 Pago de la mesada pensional'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_10_11}
                            subOptions={[opt35_10_11,opt36_10_11,opt37_10_11]}
                            mainName='P34_10_11.response[0].responseuser'
                            subNames={['P35_10_11.response[0].responseuser','P36_10_11.response[0].responseuser','P37_10_11.response[0].responseuser']}
                            counterName='P38_10_11.response[0].responseuser'
                            mainQTitle='10.11 Acceso a pensión y reconocimiento de requisitos'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_10_12}
                            subOptions={[opt35_10_12,opt36_10_12,opt37_10_12]}
                            mainName='P34_10_12.response[0].responseuser'
                            subNames={['P35_10_12.response[0].responseuser','P36_10_12.response[0].responseuser','P37_10_12.response[0].responseuser']}
                            counterName='P38_10_12.response[0].responseuser'
                            mainQTitle='10.12 Traslados entre regímenes'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page13' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}