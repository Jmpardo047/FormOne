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
import { getInitialValuesPage3, getInitialValuesPage5 } from '../../../../../utils/initialValues';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { RadioButton } from '../../../../components/shared/RadioButtonComponent';
import { opt27, opt28, opt30A } from '../../../../../utils/cap3/categoriesPage5';
import { InputComponent } from '../../../../components/shared/InputComponent';
import { DropDownInputComponent } from '../../../../components/shared/DropDownInputComponent';
import { DropDownComponent } from '../../../../components/shared/DropDownComponent';

export interface FormValues{
    P27:FormTemplate;
    P28:FormTemplate;
    P29:FormTemplate;
    P30:FormTemplate;
    P30A:FormTemplate;
}


export const FormPage5 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage5();
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>

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
                    navigation.navigate('page6' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>

                        <DropDownInputComponent
                            categoryTitle="P27. ¿Cuál es la oferta de servicios de acceso a la justicia que ustedes brindan a la comunidad?"
                            textTitle='¿Cuál?'
                            categories={opt27}
                            selectedCategory={values.P27.response[0].responseuser[0]}
                            onCategoryChange={(value) => setFieldValue('P27.response[0].responseuser[0]', value)}
                            errors={errors.P27?.response?.[0]}
                            touched={touched.P27?.response?.[0]}
                            values={values.P27.response[0].responseuser} 
                            handleChange={(value: string) => setFieldValue('P27.response[0].responseuser[0]', value)}
                            handleBlur={() => setFieldTouched('P27.response[0].responseuser[0]')}
                            info='P27'
                        />

                        <DropDownInputComponent
                            categoryTitle="P28. ¿Cuáles de las siguientes acciones de comunicación y divulgación se realizan para que la comunidad conozca la oferta de servicios de acceso a la justicia?"
                            textTitle='¿Cuál?'
                            categories={opt28}
                            selectedCategory={values.P28.response[0].responseuser[0]}
                            onCategoryChange={(value) => setFieldValue('P28.response[0].responseuser[0]', value)}
                            errors={errors.P28?.response?.[0]}
                            touched={touched.P28?.response?.[0]}
                            values={values.P28.response[0].responseuser} 
                            handleChange={(value: string) => setFieldValue('P28.response[0].responseuser[0]', value)}
                            handleBlur={() => setFieldTouched('P28.response[0].responseuser[0]')}
                            info='P28'
                        />

                        <InputComponent
                            info='P29' 
                            textTitle='P29. ¿Por qué no se realizan acciones de comunicación y divulgación para que la comunidad conozca la oferta de servicios de acceso a la justicia?'
                            handleChange={(value: string) => setFieldValue('P29.response[0].responseuser[0]', value)}
                            handleBlur={() => setFieldTouched('P29.response[0].responseuser[0]')}
                            values={values.P29.response[0].responseuser} 
                        />

                        <InputComponent
                            info='P30' 
                            textTitle='P30. Para el desarrollo de sus funciones/labores, ¿en qué temas le gustaría a usted capacitarse relacionados con acceso a la justicia?'
                            handleChange={(value: string) => setFieldValue('P30.response[0].responseuser[0]', value)}
                            handleBlur={() => setFieldTouched('P30.response[0].responseuser[0]')}
                            values={values.P30.response[0].responseuser} 
                        />

                        <DropDownComponent
                            values={values.P30A.response[0].responseuser}
                            setFieldValue={(value) => setFieldValue('P30A.response[0].responseuser[0]', value)}
                            qTitle='P30A. Para el desarrollo de sus funciones/labores, ¿le suministran a usted los medios de transporte para realizar los desplazamientos necesarios?, ejemplo: moto, carro, lancha, combustible o reconocimiento económico'
                            opValues={opt30A}
                        />
                        
                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page4' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}