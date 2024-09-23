import * as Yup from 'yup';

export const validationSchemaPage3 = Yup.object().shape({
    P14: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
    P15: Yup.object().shape({
        response: Yup.array().of(
          Yup.object().shape({
            idoptresponse: Yup.string().required("Seleccione una categoria")
            .notOneOf([""], "Seleccionar una Opción válida"),
            responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
            .notOneOf([""], "Seleccionar una Opción válida"))
          })
        )
    }),
    P16: Yup.object().shape({
        response: Yup.array().of(
          Yup.object().shape({
            idoptresponse: Yup.string().required("Seleccione una categoria")
            .notOneOf([""], "Seleccionar una Opción válida"),
            responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
            .notOneOf([""], "Seleccionar una Opción válida"))
          })
        )
    }),
    P17: Yup.object().shape({
        response: Yup.array().of(
          Yup.object().shape({
            idoptresponse: Yup.string().required("Seleccione una categoria")
            .notOneOf([""], "Seleccionar una Opción válida"),
            responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
            .notOneOf([""], "Seleccionar una Opción válida"))
          })
        )
    }),
    P18: Yup.object().shape({
        response: Yup.array().of(
          Yup.object().shape({
            idoptresponse: Yup.string().required("Seleccione una categoria")
            .notOneOf([""], "Seleccionar una Opción válida"),
            responseuser: Yup.array().of(Yup.string().required('Campo obligatorio')
            .notOneOf([""], "Seleccionar una Opción válida")
            .notOneOf(["61"], "Ingrese otro"))
          })
        )
    }),
    P6: Yup.object().shape({
      response: Yup.array().of(
        Yup.object().shape({
          responseuser: Yup.array().of(Yup.string().required('Campo obligatorio'))
        })
      )
    }),
});