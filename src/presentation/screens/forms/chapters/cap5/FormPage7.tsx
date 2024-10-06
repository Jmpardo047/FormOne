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
import { getInitialValuesPage7 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { DropDownComponent } from '../../../../components/shared/DropDownComponent';
import { opt33_1, opt33_10, opt33_11, opt33_12, opt33_13, opt33_14, opt33_2, opt33_3, opt33_4, opt33_5, opt33_6, opt33_7, opt33_8, opt33_9 } from '../../../../../utils/cap5/categoriesPage7';

export interface FormValues{
    P33_1:FormTemplate;
    P33_2:FormTemplate;
    P33_3:FormTemplate;
    P33_4:FormTemplate;
    P33_5:FormTemplate;
    P33_6:FormTemplate;
    P33_7:FormTemplate;
    P33_8:FormTemplate;
    P33_9:FormTemplate;
    P33_10:FormTemplate;
    P33_11:FormTemplate;
    P33_12:FormTemplate;
    P33_13:FormTemplate;
    P33_14:FormTemplate;
}


export const FormPage7 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage7();
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>

            <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>Capítulo 5. Conflictividades</Text>
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
                    navigation.navigate('page8' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>

                        <Text style = {globalStyles.Titleout}>P33. Del siguiente listado de problemas / desacuerdos / conflictos y disputas 
                        ¿Cuáles tramita usted con mayor frecuencia, de conformidad al cargo u ocupación que desempeña en la entidad / organización o comunidad que representa?</Text>

                        <DropDownComponent
                            values={values.P33_1.response[0].responseuser}
                            setFieldValue={(value) => setFieldValue('P33_1.response[0].responseuser[0]', value)}
                            qTitle='P33_1. Problemas relacionados con familiares como separación o divorcio, cuotas de alimentos, herencias o sucesiones, paternidad / maternidad, cuidado de personas que más lo requieren y gastos del hogar.'
                            opValues={opt33_1}
                        />

                        <DropDownComponent
                            values={values.P33_2.response[0].responseuser}
                            setFieldValue={(value) => setFieldValue('P33_2.response[0].responseuser[0]', value)}
                            qTitle='P33_2. Problemas relacionados con el consumo de un producto, bien o servicio (telefonía celular, televisión por cable, internet, transporte, alimentos, electrodomésticos y servicios técnicos o profesionales). Se excluyen los servicios públicos domiciliarios'
                            opValues={opt33_2}
                        />

                        <DropDownComponent
                            values={values.P33_3.response[0].responseuser}
                            setFieldValue={(value) => setFieldValue('P33_3.response[0].responseuser[0]', value)}
                            qTitle='P33_3. Problemas relacionados con la prestación de un servicio público domiciliario como agua, luz, gas, alcantarillado o basuras.'
                            opValues={opt33_3}
                        />

                        <DropDownComponent
                            values={values.P33_4.response[0].responseuser}
                            setFieldValue={(value) => setFieldValue('P33_4.response[0].responseuser[0]', value)}
                            qTitle='P33_4. Problemas relacionados con su trabajo o empleo, como falta de pago de salarios, reconocimiento o formalización de la relación laboral, cambio en las condiciones laborales, despido, acoso.'
                            opValues={opt33_4}
                        />

                        <DropDownComponent
                            values={values.P33_5.response[0].responseuser}
                            setFieldValue={(value) => setFieldValue('P33_5.response[0].responseuser[0]', value)}
                            qTitle='P33_5. Problemas relacionados con deudas contraídas con el sector financiero, solidario o particulares, respecto a intereses elevados, hipotecas, embargos, quiebras, reportes a centrales de riesgo, deudas educativas.'
                            opValues={opt33_5}
                        />
                        
                        <DropDownComponent
                            values={values.P33_6.response[0].responseuser}
                            setFieldValue={(value) => setFieldValue('P33_6.response[0].responseuser[0]', value)}
                            qTitle='P33_6. Problemas relacionados con la vivienda en la que habita o de la que es dueño, o problemas con vecinos por ruidos, malos olores, mascotas, chismes y otros.'
                            opValues={opt33_6}
                        />

                        <DropDownComponent
                            values={values.P33_7.response[0].responseuser}
                            setFieldValue={(value) => setFieldValue('P33_7.response[0].responseuser[0]', value)}
                            qTitle='P33_7. Problemas relacionados con el entorno o el espacio público, como el daño, deterioro o falta de paraderos, bancas, calles, puentes; invasión, uso indebido del espacio público o perjuicios por la ejecución de obras públicas.'
                            opValues={opt33_7}
                        />

                        <DropDownComponent
                            values={values.P33_8.response[0].responseuser}
                            setFieldValue={(value) => setFieldValue('P33_8.response[0].responseuser[0]', value)}
                            qTitle='P33_8. Problemas relacionados con la propiedad, uso y tenencia de la tierra como disputas sobre títulos, linderos, registro catastral o extinción de dominio.'
                            opValues={opt33_8}
                        />

                        <DropDownComponent
                            values={values.P33_9.response[0].responseuser}
                            setFieldValue={(value) => setFieldValue('P33_9.response[0].responseuser[0]', value)}
                            qTitle='P33_9. Problemas relacionados con el medio ambiente o el acceso a recursos comunitarios, como conflictos por el acceso a fuentes de agua, explotación ilegal de recursos ambientales o contaminación.'
                            opValues={opt33_9}
                        />

                        <DropDownComponent
                            values={values.P33_10.response[0].responseuser}
                            setFieldValue={(value) => setFieldValue('P33_10.response[0].responseuser[0]', value)}
                            qTitle='P33_10. Problemas relacionados con la prestación de los servicios de salud, pensión, riesgos laborales, como en la asignación de citas, medicamentos, calidad, oportunidad, afiliación, negación, reconocimiento o pago de la mesada pensional.'
                            opValues={opt33_10}
                        />

                        <DropDownComponent
                            values={values.P33_11.response[0].responseuser}
                            setFieldValue={(value) => setFieldValue('P33_11.response[0].responseuser[0]', value)}
                            qTitle='P33_11. Problemas en su relación con el Estado, referentes a multas, comparendos, pago de impuestos, expropiaciones, deficiencia en los servicios prestados, abuso de autoridad por policía y ejército o trámites de migrantes.'
                            opValues={opt33_11}
                        />
                        
                        <DropDownComponent
                            values={values.P33_12.response[0].responseuser}
                            setFieldValue={(value) => setFieldValue('P33_12.response[0].responseuser[0]', value)}
                            qTitle='P33_12. Problemas relacionados con el servicio de educación y formación, como el acceso, la calidad, y el ambiente educativo (matoneo).'
                            opValues={opt33_12}
                        />

                        <DropDownComponent
                            values={values.P33_13.response[0].responseuser}
                            setFieldValue={(value) => setFieldValue('P33_13.response[0].responseuser[0]', value)}
                            qTitle='P33_13. Problemas relacionados con afectaciones, daños o perjuicios causados o derivados de delitos, como hurto, lesiones, calumnias, daños a la propiedad, secuestro, homicidio, ciberdelito, violencia sexual y violencia intrafamiliar.'
                            opValues={opt33_13}
                        />

                        <DropDownComponent
                            values={values.P33_14.response[0].responseuser}
                            setFieldValue={(value) => setFieldValue('P33_14.response[0].responseuser[0]', value)}
                            qTitle='P33_14. Problemas relacionados con afectaciones, daños o perjuicios causados o derivados del conflicto armado o problemas de orden público como desplazamiento forzado, terrorismo, despojo de tierras, extorsión.'
                            opValues={opt33_14}
                        />

                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page6' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}