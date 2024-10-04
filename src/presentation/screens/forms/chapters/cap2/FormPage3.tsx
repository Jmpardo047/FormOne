import React, { useContext } from 'react';
import { View, Text, Button, Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import { Prevcomponent } from '../../../../components/shared/PrevComponent';
import { NextComponent } from '../../../../components/shared/NextComponent';
import { globalStyles } from '../../../../theme/theme';
import { SurveyContext } from '../../../../../context/SurveyContext';
import { UseSaveData } from '../../../../hooks/UseSaveData';
import { useNavigation } from '@react-navigation/native'
import { InputComponent } from '../../../../components/shared/InputComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { FormTemplate } from '../../../../../utils/FormInterfaces';
import { fileName } from '../../../../../utils/generateFilename';
import { getInitialValuesPage3 } from '../../../../../utils/initialValues';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import { DropDownComponent } from '../../../../components/shared/DropDownComponent';
import { opt16, opt15, opt17, opt18, opt19_1 } from '../../../../../utils/cap2/categoriesPage3';
import { DropDownInputComponent } from '../../../../components/shared/DropDownInputComponent';
import { ErrorIdMessage } from '../../../../components/shared/ErrorIdComponent';
import { RadioButton } from '../../../../components/shared/RadioButtonComponent';
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';

export interface FormValues{
    P14:FormTemplate
    P15:FormTemplate
    P16:FormTemplate
    P17:FormTemplate
    P18:FormTemplate
    P19_1:FormTemplate
    P19_2:FormTemplate
    P19_3:FormTemplate
    P20: FormTemplate
}


export const FormPage3 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage3();
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
            <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>Capítulo 2. Información laboral</Text>
            </View>

            <Formik
                initialValues={initialValues}
                // validationSchema={validationSchemaPage3}
                onSubmit={ async(
                values: FormValues,
                {setSubmitting} : FormikHelpers<FormValues>
                ) => {
                try{
                    await saveAllData(`${fileName}.json`,values,finalSurveyId);
                }
                finally{
                    setSubmitting(false);
                    navigation.navigate('page4' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    <View>
                        <InputComponent 
                        info='P14'
                        textTitle='P14.¿Cuál es el nombre completo del cargo, ocupación o rol que usted desempeña actualmente?'
                        handleChange={(value: string) => setFieldValue('P14.response[0].responseuser[0]', value)}
                        handleBlur={() => setFieldTouched('P14.response[0].responseuser[0]')}
                        values={values.P14.response[0].responseuser}
                        />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P14" />

                        <DropDownComponent
                        values={values.P15.response[0].responseuser}
                        setFieldValue={(value) => setFieldValue('P15.response[0].responseuser[0]', value)}
                        qTitle='P15. ¿Cuántos años de experiencia tiene en este cargo u ocupación?'
                        opValues={opt15}
                        />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P15"/>

                        <DropDownComponent
                        values={values.P16.response[0].responseuser}
                        setFieldValue={(value) => setFieldValue('P16.response[0].responseuser[0]', value)}
                        qTitle='P16. ¿Las funciones / labores que usted desempeña tiene cobertura?'
                        opValues={opt16}
                        />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P16"/>
                        
                        <DropDownInputComponent
                            categoryTitle="P17. ¿Qué tipo de vinculación tiene usted en el cargo, ocupación o rol que desempeña actualmente?"
                            textTitle='¿Cuál?'
                            categories={opt17}
                            selectedCategory={values.P17.response[0].responseuser[0]}
                            onCategoryChange={(value) => setFieldValue('P17.response[0].responseuser[0]', value)}
                            errors={errors.P17?.response?.[0]}
                            touched={touched.P17?.response?.[0]}
                            values={values.P17.response[0].responseuser} 
                            handleChange={(value: string) => setFieldValue('P17.response[0].responseuser[0]', value)}
                            handleBlur={() => setFieldTouched('P17.response[0].responseuser[0]')}
                            info='P17'
                        >
                        </DropDownInputComponent>
                            <ErrorMessage errors={errors} touched={touched} fieldName="P17"/>

                        <View style={globalStyles.CapTitle}>
                            <Text style={globalStyles.Title}>Capítulo 3. Capacidad Institucional</Text>
                        </View>
                        
                        <DropDownInputComponent
                            categoryTitle="P18. De los siguientes mecanismos, ¿cuáles dispone la entidad u organización que usted representa, para hacer el registro continuo y actualizado de los casos que se atienden?"
                            textTitle='¿Cuál?'
                            categories={opt18}
                            selectedCategory={values.P18.response[0].responseuser[0]}
                            onCategoryChange={(value) => setFieldValue('P18.response[0].responseuser[0]', value)}
                            errors={errors.P18?.response?.[0]}
                            touched={touched.P18?.response?.[0]}
                            values={values.P18.response[0].responseuser} 
                            handleChange={(value: string) => setFieldValue('P18.response[0].responseuser[0]', value)}
                            handleBlur={() => setFieldTouched('P18.response[0].responseuser[0]')}
                            info='P18'
                        />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P18"/>

                        <Text style={globalStyles.questionTitle}>P19. El registro de los casos que atienden les permite conocer información específica, sobre:</Text>
                        <RadioButton
                            options={opt19_1}
                            name='P19_1.response[0].responseuser[0]'
                            qTitle='Número total de casos'
                            errors={errors.P19_1?.response?.[0]}  
                            touched={touched.P19_1?.response?.[0]}
                            radioStyle={globalStyles.radioButton_2}
                        />
                        <ErrorMessage errors={errors} touched={touched} fieldName="P19_1" />

                        <RadioButton
                            options={opt19_1}
                            name='P19_2.response[0].responseuser[0]'
                            qTitle='Número de casos activos'
                            errors={errors.P19_1?.response?.[0]}  
                            touched={touched.P19_1?.response?.[0]}
                            radioStyle={globalStyles.radioButton_2}
                        />
                        <ErrorMessage errors={errors} touched={touched} fieldName="P19_2" />

                        <RadioButton
                            options={opt19_1}
                            name='P19_3.response[0].responseuser[0]'
                            qTitle='Número de casos archivados'
                            errors={errors.P19_1?.response?.[0]}  
                            touched={touched.P19_1?.response?.[0]}
                            radioStyle={globalStyles.radioButton_2}
                        />
                        <ErrorMessage errors={errors} touched={touched} fieldName="P19_3" />

                        <InputComponent
                            info='P20' 
                            textTitle='P20. ¿Por qué no cuentan con un mecanismo para el registro de los casos que atienden?'
                            handleChange={(value: string) => setFieldValue('P20.response[0].responseuser[0]', value)}
                            handleBlur={() => setFieldTouched('P20.response[0].responseuser[0]')}
                            values={values.P20.response[0].responseuser} 
                        />
                            <ErrorMessage errors={errors} touched={touched} fieldName="P20" />

                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page2' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}
