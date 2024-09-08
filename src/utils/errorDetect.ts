export const errorDetect = (errors: any, ) => {
    Array.isArray(errors?.P1?.response) &&
        errors.P1.response[0]?.responseuser?.[0] && (
          <Text style={{ color: 'red' }}>
            {errors.P1.response[0].responseuser[0]}
          </Text>
}