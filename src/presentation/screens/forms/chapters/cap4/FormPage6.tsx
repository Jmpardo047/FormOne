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
import { validationSchemaPage3 } from '../../../../../utils/cap2/validationSchema';
import { getInitialValuesPage6 } from '../../../../../utils/initialValues';
import { ConditionalMultiCheckBox } from '../../../../components/shared/ConditionalCheckBoxComponent';
import { opt31_1, opt31_2, opt31_3, opt31_4, opt31_5, opt31_6, opt31_7, opt31_8, opt32_1, opt32_2, opt32_3, opt32_4, opt32_5, opt32_6, opt32_7, opt32_8 } from '../../../../../utils/cap4/categoriesPage6';

export interface FormValues{
    P31_1: FormTemplate;
    P32_1: FormTemplate;
    P31_2: FormTemplate;
    P32_2: FormTemplate;
    P31_3: FormTemplate;
    P32_3: FormTemplate;
    P31_4: FormTemplate;
    P32_4: FormTemplate;
    P31_5: FormTemplate;
    P32_5: FormTemplate;
    P31_6: FormTemplate;
    P32_6: FormTemplate;
    P31_7: FormTemplate;
    P32_7: FormTemplate;
    P31_8: FormTemplate;
    P32_8: FormTemplate;
}


export const FormPage6 = () => {
    const navigation = useNavigation();
    const {saveAllData} = UseSaveData();
    const { surveyId } = useContext(SurveyContext);
    const finalSurveyId = surveyId ?? "defaultSurveyId";
    const initialValues: FormValues = getInitialValuesPage6();
    return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
        <ScrollView contentContainerStyle={globalStyles.FomsContainer}>

            <View style={globalStyles.CapTitle}>
                <Text style={globalStyles.Title}>Capítulo 4. Barreras de acceso a la justicia</Text>
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
                    navigation.navigate('page7' as never)
                }}
                }>
                {({handleChange, handleBlur,handleSubmit,values, setFieldValue, setFieldTouched, errors, touched}) =>(
                    
                    
                    <View>
                        <Text>P31. Del siguiente listado, ¿Cuáles considera desde su competencia que son las principales 
                        barreras de acceso a la justicia que se presentan en este municipio?
                        </Text>
                        
                        <ConditionalMultiCheckBox
                            checkboxName = 'P32_1.response[0].responseuser'
                            dropdownName='P31_1.response[0].responseuser'
                            dropdownOptions={opt31_1}
                            qTitle='1.Culturales y lingüísticas'
                            checkboxOptions={opt32_1}
                        />

                        <ConditionalMultiCheckBox
                            checkboxName = 'P32_2.response[0].responseuser'
                            dropdownName='P31_2.response[0].responseuser'
                            dropdownOptions={opt31_2}
                            qTitle='2.De Género '
                            checkboxOptions={opt32_2}
                        />

                        
                        <ConditionalMultiCheckBox
                            checkboxName = 'P32_3.response[0].responseuser'
                            dropdownName='P31_3.response[0].responseuser'
                            dropdownOptions={opt31_3}
                            qTitle='3. De seguridad, orden público o asociadas al conflicto armado'
                            checkboxOptions={opt32_3}
                        />
  
                        <ConditionalMultiCheckBox
                            checkboxName = 'P32_4.response[0].responseuser'
                            dropdownName='P31_4.response[0].responseuser'
                            dropdownOptions={opt31_4}
                            qTitle='4. Discapacidad'
                            checkboxOptions={opt32_4}
                        />
                        
                        <ConditionalMultiCheckBox
                            checkboxName = 'P32_5.response[0].responseuser'
                            dropdownName='P31_5.response[0].responseuser'
                            dropdownOptions={opt31_5}
                            qTitle='5. Económicas'
                            checkboxOptions={opt32_5}
                        />
                        
                        <ConditionalMultiCheckBox
                            checkboxName = 'P32_6.response[0].responseuser'
                            dropdownName='P31_6.response[0].responseuser'
                            dropdownOptions={opt31_6}
                            qTitle='6. Geográficas'
                            checkboxOptions={opt32_6}
                        />

                        <ConditionalMultiCheckBox
                            checkboxName = 'P32_7.response[0].responseuser'
                            dropdownName='P31_7.response[0].responseuser'
                            dropdownOptions={opt31_7}
                            qTitle='7. Institucionales'
                            checkboxOptions={opt32_7}
                        />

                        <ConditionalMultiCheckBox
                            checkboxName = 'P32_8.response[0].responseuser'
                            dropdownName='P31_8.response[0].responseuser'
                            dropdownOptions={opt31_8}
                            qTitle='8. Tecnológicas '
                            checkboxOptions={opt32_8}
                        />

                        <View style={globalStyles.buttonsBanner}>
                            <Prevcomponent onPrevPressed={() => navigation.navigate('page5' as never)}/>
                            <NextComponent onNextPress={handleSubmit} />
                        </View> 
                    </View>
                )}
            </Formik>
        </ScrollView>
    </KeyboardAvoidingView>
  )
}