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
import { getInitialValuesPage18 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { NestedCheckBox } from '../../../../components/shared/NestedCheckBoxComponent';
import { opt34_14_1, opt35_14_1, opt36_14_1, opt37_14_1, opt34_14_2, opt35_14_2, opt36_14_2, opt37_14_2, opt34_14_3, opt35_14_3, opt36_14_3, opt37_14_3, opt34_14_4, opt35_14_4, opt36_14_4, opt37_14_4, opt34_14_5, opt35_14_5, opt36_14_5, opt37_14_5, opt34_14_6, opt35_14_6, opt36_14_6, opt37_14_6, opt34_14_7, opt35_14_7, opt36_14_7, opt37_14_7, opt39, opt40, opt41 } from '../../../../../utils/cap5/categoriesPage18';
import { DropDownComponent } from '../../../../components/shared/DropDownComponent';

export interface FormValues {
    P34_14_1: FormTemplate;
    P35_14_1: FormTemplate;
    P36_14_1: FormTemplate;
    P37_14_1: FormTemplate;
    P38_14_1: FormTemplate;
    P34_14_2: FormTemplate;
    P35_14_2: FormTemplate;
    P36_14_2: FormTemplate;
    P37_14_2: FormTemplate;
    P38_14_2: FormTemplate;
    P34_14_3: FormTemplate;
    P35_14_3: FormTemplate;
    P36_14_3: FormTemplate;
    P37_14_3: FormTemplate;
    P38_14_3: FormTemplate;
    P34_14_4: FormTemplate;
    P35_14_4: FormTemplate;
    P36_14_4: FormTemplate;
    P37_14_4: FormTemplate;
    P38_14_4: FormTemplate;
    P34_14_5: FormTemplate;
    P35_14_5: FormTemplate;
    P36_14_5: FormTemplate;
    P37_14_5: FormTemplate;
    P38_14_5: FormTemplate;
    P34_14_6: FormTemplate;
    P35_14_6: FormTemplate;
    P36_14_6: FormTemplate;
    P37_14_6: FormTemplate;
    P38_14_6: FormTemplate;
    P34_14_7: FormTemplate;
    P35_14_7: FormTemplate;
    P36_14_7: FormTemplate;
    P37_14_7: FormTemplate;
    P38_14_7: FormTemplate;
    P39: FormTemplate;
    P40: FormTemplate;
    P41: FormTemplate;
    
}



export const FormPage18 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage18();
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
                <Text style={globalStyles.Title}>14. Afectaciones, daños o perjuicios causados o derivados del conflicto armado o problemas de orden público</Text>
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
                    navigation.navigate('page19' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        
                        <NestedCheckBox
                            mainOptions={opt34_14_1}
                            subOptions={[opt35_14_1,opt36_14_1,opt37_14_1]}
                            mainName='P34_14_1.response[0].responseuser'
                            subNames={['P35_14_1.response[0].responseuser','P36_14_1.response[0].responseuser','P37_14_1.response[0].responseuser']}
                            counterName='P38_14_1.response[0].responseuser'
                            mainQTitle='14.1 Desplazamiento forzado y desaparición forzada'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_14_2}
                            subOptions={[opt35_14_2,opt36_14_2,opt37_14_2]}
                            mainName='P34_14_2.response[0].responseuser'
                            subNames={['P35_14_2.response[0].responseuser','P36_14_2.response[0].responseuser','P37_14_2.response[0].responseuser']}
                            counterName='P38_14_2.response[0].responseuser'
                            mainQTitle='14.2 Agresiones por la Policía o las Fuerzas Militares (batidas ilegales, falsos positivos, ejecuciones extrajudiciales, etc.)'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_14_3}
                            subOptions={[opt35_14_3,opt36_14_3,opt37_14_3]}
                            mainName='P34_14_3.response[0].responseuser'
                            subNames={['P35_14_3.response[0].responseuser','P36_14_3.response[0].responseuser','P37_14_3.response[0].responseuser']}
                            counterName='P38_14_3.response[0].responseuser'
                            mainQTitle='14.3 Incumplimiento en la sustitución de cultivos ilícitos'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_14_4}
                            subOptions={[opt35_14_4,opt36_14_4,opt37_14_4]}
                            mainName='P34_14_4.response[0].responseuser'
                            subNames={['P35_14_4.response[0].responseuser','P36_14_4.response[0].responseuser','P37_14_4.response[0].responseuser']}
                            counterName='P38_14_4.response[0].responseuser'
                            mainQTitle='14.4 Delitos contra la vida y/o la integridad personal ocurridos con ocasión del conflicto armado (tortura, homicidio, secuestro, violencia sexual, minas antipersona)'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_14_5}
                            subOptions={[opt35_14_5,opt36_14_5,opt37_14_5]}
                            mainName='P34_14_5.response[0].responseuser'
                            subNames={['P35_14_5.response[0].responseuser','P36_14_5.response[0].responseuser','P37_14_5.response[0].responseuser']}
                            counterName='P38_14_5.response[0].responseuser'
                            mainQTitle='14.5 Delitos contra el patrimonio ocurridos con ocasión del conflicto armado (extorsión, hurto, daño en bien ajeno)'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_14_6}
                            subOptions={[opt35_14_6,opt36_14_6,opt37_14_6]}
                            mainName='P34_14_6.response[0].responseuser'
                            subNames={['P35_14_6.response[0].responseuser','P36_14_6.response[0].responseuser','P37_14_6.response[0].responseuser']}
                            counterName='P38_14_6.response[0].responseuser'
                            mainQTitle='14.6 Terrorismo y amenazas'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <NestedCheckBox
                            mainOptions={opt34_14_7}
                            subOptions={[opt35_14_7,opt36_14_7,opt37_14_7]}
                            mainName='P34_14_7.response[0].responseuser'
                            subNames={['P35_14_7.response[0].responseuser','P36_14_7.response[0].responseuser','P37_14_7.response[0].responseuser']}
                            counterName='P38_14_7.response[0].responseuser'
                            mainQTitle='14.7 Despojo de tierras'
                            subQTitles={['P35. ¿En qué zonas del municipio se están presentando estos problemas / desacuerdos / conflictos y disputas?',
                            'P36. ¿Existe ruta/protocolo de atención para estos problemas / desacuerdos / conflictos y disputas?',
                            'P37. ¿Existe material pedagógico para comunicar la ruta/protocolo de atención a la comunidad?']}
                            counterQTitle='P38. ¿Cuántos casos de este tipo de problemas se atienden mensualmente?'
                        />

                        <DropDownComponent
                            values={values.P39.response[0].responseuser}
                            setFieldValue={(value) => setFieldValue('P39.response[0].responseuser[0]', value)}
                            qTitle='P39. ¿Existe algún tipo de coordinación con autoridades indígenas para el trámite de los casos que usted atiende y que tengan relación con estas comunidades?'
                            opValues={opt39}
                        />

                        <DropDownComponent
                            values={values.P40.response[0].responseuser}
                            setFieldValue={(value) => setFieldValue('P40.response[0].responseuser[0]', value)}
                            qTitle='P40. ¿Existe algún tipo de coordinación con comunidades negras y afrocolombianas para el trámite de los casos que usted atiende y que tengan relación con estas comunidades?'
                            opValues={opt40}
                        />

                        <DropDownComponent
                            values={values.P41.response[0].responseuser}
                            setFieldValue={(value) => setFieldValue('P41.response[0].responseuser[0]', value)}
                            qTitle='P41. ¿Usted ha identificado algún conflicto entre empresas y comunidad en el municipio?'
                            opValues={opt41}
                        />

                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page17' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}