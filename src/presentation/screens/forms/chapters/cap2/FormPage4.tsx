import React, { useContext } from 'react'
import { SurveyContext } from '../../../../../context/SurveyContext';
import { UseSaveData } from '../../../../hooks/UseSaveData';
import { useNavigation } from '@react-navigation/native';
import { FormTemplate } from '../../../../../utils/FormInterfaces';
import { getInitialValuesPage4 } from '../../../../../utils/initialValues';
import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Formik, FormikHelpers } from 'formik';
import { globalStyles } from '../../../../theme/theme';
import { fileName } from '../../../../../utils/generateFilename';
import { Prevcomponent } from '../../../../components/shared/PrevComponent';
import { NextComponent } from '../../../../components/shared/NextComponent';
import { DropDownComponent } from '../../../../components/shared/DropDownComponent';
import { ErrorMessage } from '../../../../components/shared/ErrorComponent';
import { opt21, opt22, opt23, opt24, opt25 } from '../../../../../utils/cap3/categoriesPage4';
import { DropDownInputComponent } from '../../../../components/shared/DropDownInputComponent';
import { MultiCheckBox } from '../../../../components/shared/MultiCheckBoxComponent';
import { InputComponent } from '../../../../components/shared/InputComponent';

export interface FormValues{
    P21:FormTemplate;
    P22:FormTemplate;
    P23:FormTemplate;
    P24:FormTemplate;
    P25:FormTemplate;
    P26:FormTemplate;
}
export const FormPage4 = () => {

    const { surveyId } = useContext(SurveyContext);
    const { saveAllData } = UseSaveData();
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const navigation = useNavigation();
    const initialValues: FormValues = getInitialValuesPage4();
  
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>
          <Formik
            initialValues={initialValues}
            // validationSchema={validationSchemaPage4}
            onSubmit={async (
              values: FormValues,
              { setSubmitting }: FormikHelpers<FormValues>
            ) => {
              try {
                await saveAllData(`${fileName}.json`, values, finalSurveyId);
              }
              finally {
                setSubmitting(false);
                navigation.navigate('page5' as never)
              }
            }}>
  
            {({ handleSubmit, setFieldValue, values, setFieldTouched, errors, touched }) => (
              <View>
                
                <DropDownComponent
                    values={values.P21.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P21.response[0].responseuser[0]', value)}
                    qTitle='P21. ¿Usted realiza seguimiento a los casos que atiende en ejercicio de su competencia?'
                    opValues={opt21}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P21"/>

                <DropDownInputComponent
                    categoryTitle="P22. De acuerdo con su experiencia, ¿cuáles son las principales dificultades que se presentan y que generan demoras en el trámite de los casos que atiende?"
                    textTitle='¿Cuál?'
                    categories={opt22}
                    selectedCategory={values.P22.response[0].responseuser[0]}
                    onCategoryChange={(value) => setFieldValue('P22.response[0].responseuser[0]', value)}
                    errors={errors.P22?.response?.[0]}
                    touched={touched.P22?.response?.[0]}
                    values={values.P22.response[0].responseuser} 
                    handleChange={(value: string) => setFieldValue('P22.response[0].responseuser[0]', value)}
                    handleBlur={() => setFieldTouched('P22.response[0].responseuser[0]')}
                    info='P22'
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P22"/>

                <DropDownComponent
                    values={values.P23.response[0].responseuser}
                    setFieldValue={(value) => setFieldValue('P23.response[0].responseuser[0]', value)}
                    qTitle='P23. ¿Pertenece a una o varias instancias de coordinación local o regional entre instituciones que prestan servicios de justicia? '
                    opValues={opt23}
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P23"/>

                <MultiCheckBox
                    name='P24.response[0].responseuser[0]'
                    qTitle='P24. Del siguiente listado, ¿a qué instancias de coordinación usted pertenece?'
                    options={opt24}
                />

                <MultiCheckBox
                    name='P25.response[0].responseuser'
                    qTitle='P25. Del siguiente listado de actores u operadores, ¿con cuáles se articula usted para el cumplimiento de sus funciones en materia de acceso a la justicia?'
                    options={opt25}
                />

                <InputComponent
                    info='P26' 
                    textTitle='P26. ¿Por qué no cuentan con un mecanismo para el registro de los casos que atienden?'
                    handleChange={(value: string) => setFieldValue('P26.response[0].responseuser[0]', value)}
                    handleBlur={() => setFieldTouched('P26.response[0].responseuser[0]')}
                    values={values.P26.response[0].responseuser} 
                />
                <ErrorMessage errors={errors} touched={touched} fieldName="P26" />


                <View style={globalStyles.buttonsBanner}>
                  <Prevcomponent onPrevPressed={() => navigation.navigate('page4' as never)} />
                  <NextComponent onNextPress={handleSubmit} />
                </View>
              </View>
            )}
          </Formik>
        </ScrollView>
      </KeyboardAvoidingView>
    );
};
