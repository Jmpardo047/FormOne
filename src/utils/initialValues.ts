import { FormTemplate } from "./FormInterfaces"


const initialResponses = (id: string, chapter: string, qFather: string, idOptResponse: string): FormTemplate => ({
    qId: id,
    surveyId: "1",
    chapterId: chapter,
    qFather: qFather ,
    response: [
        {
            idoptresponse: idOptResponse,
            responseuser: [""],
        }
    ]
});

export const getInitialValuesPage1 = () => {
    return {
        P1: initialResponses("P1","1","","1"),
        P2: initialResponses("P2","1","","2"),
        P3: initialResponses("P3","1","","3"),
        P4: initialResponses("P4","1","","4"),
        P5: initialResponses("P5","1","","5"),
        P6: initialResponses("P5","1","","6"),
    }
}

export const getInitialValuesPage2 = () => {
    return {
        P7: initialResponses("P7","1","","7"),
        P8: initialResponses("P8","1","","8"),
        P9: initialResponses("P9","1","",""),
        P10: initialResponses("P10","1","","10"),
        P11: initialResponses("P11","1","10","11"),
        P12: initialResponses("P12","1","","12"),
        P13: initialResponses("P13","1","","13"),
    }
}

export const getInitialValuesPage3 = () => {
    return {
        P14: initialResponses("P14","2","","14"),
        P15: initialResponses("P15","2","","15"),
        P16: initialResponses("P16","2","","16"),
        P17: initialResponses("P17","2","","17"),
        P18: initialResponses("P18","3","","18"),
        P19_1: initialResponses("P19_1","3","19","19"),
        P19_2: initialResponses("P19_2","3","19","19"),
        P19_3: initialResponses("P19_3","3","19","19"),
        P20: initialResponses("P20","3","","20"),
    }
}

export const getInitialValuesPage4 = () => {
    return {
        P21: initialResponses("P21","3","","21"),
        P22: initialResponses("P22","3","","22"),
        P23: initialResponses("P23","3","","23"),
        P24: initialResponses("P24","3","","24"),
        P25: initialResponses("P25","3","","25"),
        P26: initialResponses("P26","3","","26"),
    }
}

export const getInitialValuesPage5 = () => {
    return {
        P27: initialResponses("P27","3","","27"),
        P28: initialResponses("P28","3","","28"),
        P29: initialResponses("P29","3","","29"),
        P30: initialResponses("P30","3","","30"),
        P30A: initialResponses("P30A","3","30","30A"),
    }
}

export const getInitialValuesPage6 = () => {
    return {
        P31_1: initialResponses("P31_1","4","31","31_1"),
        P32_1: initialResponses("P32_1","4","32","32_1"),
        P31_2: initialResponses("P31_2","4","31","31_2"),
        P32_2: initialResponses("P32_2","4","32","32_2"),
        P31_3: initialResponses("P31_3","4","31","31_3"),
        P32_3: initialResponses("P32_3","4","32","32_3"),
        P31_4: initialResponses("P31_4","4","31","31_4"),
        P32_4: initialResponses("P32_4","4","32","32_4"),
        P31_5: initialResponses("P31_5","4","31","31_5"),
        P32_5: initialResponses("P32_5","4","32","32_5"),
        P31_6: initialResponses("P31_6","4","31","31_6"),
        P32_6: initialResponses("P32_6","4","32","32_6"),
        P31_7: initialResponses("P31_7","4","31","31_7"),
        P32_7: initialResponses("P32_7","4","32","32_7"),
        P31_8: initialResponses("P31_8","4","31","31_8"),
        P32_8: initialResponses("P32_8","4","32","32_8"),
    }
}

export const getInitialValuesPage7 = () => {
    return {
        P33_1: initialResponses("P33_1","5","33","33_1"),
        P33_2: initialResponses("P33_2","5","33","33_2"),
        P33_3: initialResponses("P33_3","5","33","33_3"),
        P33_4: initialResponses("P33_4","5","33","33_4"),
        P33_5: initialResponses("P33_5","5","33","33_5"),
        P33_6: initialResponses("P33_6","5","33","33_6"),
        P33_7: initialResponses("P33_7","5","33","33_7"),
        P33_8: initialResponses("P33_8","5","33","33_8"),
        P33_9: initialResponses("P33_9","5","33","33_9"),
        P33_10: initialResponses("P33_10","5","33","33_10"),
        P33_11: initialResponses("P33_11","5","33","33_11"),
        P33_12: initialResponses("P33_12","5","33","33_12"),
        P33_13: initialResponses("P33_13","5","33","33_13"),
        P33_14: initialResponses("P33_14","5","33","33_14"),
    }
}

export const getInitialValuesPage8 = () => {
    return {
        P34_1: initialResponses("P34_1","5","34","34_1"),
        P35_1: initialResponses("P35_1","5","35","35_1"),
        P36_1: initialResponses("P36_1","5","36","36_1"),
        P37_1: initialResponses("P37_1","5","37","37_1"),
        P38_1: initialResponses("P38_1","5","38","38_1"),
        P34_2: initialResponses("P34_2","5","34","34_2"),
        P35_2: initialResponses("P35_2","5","35","35_2"),
        P36_2: initialResponses("P36_2","5","36","36_2"),
        P37_2: initialResponses("P37_2","5","37","37_2"),
        P38_2: initialResponses("P38_2","5","38","38_2"),
        P34_3: initialResponses("P34_3","5","34","34_3"),
        P35_3: initialResponses("P35_3","5","35","35_3"),
        P36_3: initialResponses("P36_3","5","36","36_3"),
        P37_3: initialResponses("P37_3","5","37","37_3"),
        P38_3: initialResponses("P38_3","5","38","38_3"),
        P34_4: initialResponses("P34_4","5","34","34_4"),
        P35_4: initialResponses("P35_4","5","35","35_4"),
        P36_4: initialResponses("P36_4","5","36","36_4"),
        P37_4: initialResponses("P37_4","5","37","37_4"),
        P38_4: initialResponses("P38_4","5","38","38_4"),
        P34_5: initialResponses("P34_5","5","34","34_5"),
        P35_5: initialResponses("P35_5","5","35","35_5"),
        P36_5: initialResponses("P36_5","5","36","36_5"),
        P37_5: initialResponses("P37_5","5","37","37_5"),
        P38_5: initialResponses("P38_5","5","38","38_5"),
        P34_6: initialResponses("P34_6","5","34","34_6"),
        P35_6: initialResponses("P35_6","5","35","35_6"),
        P36_6: initialResponses("P36_6","5","36","36_6"),
        P37_6: initialResponses("P37_6","5","37","37_6"),
        P38_6: initialResponses("P38_6","5","38","38_6"),
        P34_7: initialResponses("P34_7","5","34","34_7"),
        P35_7: initialResponses("P35_7","5","35","35_7"),
        P36_7: initialResponses("P36_7","5","36","36_7"),
        P37_7: initialResponses("P37_7","5","37","37_7"),
        P38_7: initialResponses("P38_7","5","38","38_7"),
    }
}

export const getInitialValuesPage9 = () => {
    return {
        P34_2_1: initialResponses("P34_2_1","5","34","34_2_1"),
        P35_2_1: initialResponses("P35_2_1","5","35","35_2_1"),
        P36_2_1: initialResponses("P36_2_1","5","36","36_2_1"),
        P37_2_1: initialResponses("P37_2_1","5","37","37_2_1"),
        P38_2_1: initialResponses("P38_2_1","5","38","38_2_1"),
        P34_2_2: initialResponses("P34_2_2","5","34","34_2_2"),
        P35_2_2: initialResponses("P35_2_2","5","35","35_2_2"),
        P36_2_2: initialResponses("P36_2_2","5","36","36_2_2"),
        P37_2_2: initialResponses("P37_2_2","5","37","37_2_2"),
        P38_2_2: initialResponses("P38_2_2","5","38","38_2_2"),
        P34_2_3: initialResponses("P34_2_3","5","34","34_2_3"),
        P35_2_3: initialResponses("P35_2_3","5","35","35_2_3"),
        P36_2_3: initialResponses("P36_2_3","5","36","36_2_3"),
        P37_2_3: initialResponses("P37_2_3","5","37","37_2_3"),
        P38_2_3: initialResponses("P38_2_3","5","38","38_2_3"),
        P34_2_4: initialResponses("P34_2_4","5","34","34_2_4"),
        P35_2_4: initialResponses("P35_2_4","5","35","35_2_4"),
        P36_2_4: initialResponses("P36_2_4","5","36","36_2_4"),
        P37_2_4: initialResponses("P37_2_4","5","37","37_2_4"),
        P38_2_4: initialResponses("P38_2_4","5","38","38_2_4"),
        P34_2_5: initialResponses("P34_2_5","5","34","34_2_5"),
        P35_2_5: initialResponses("P35_2_5","5","35","35_2_5"),
        P36_2_5: initialResponses("P36_2_5","5","36","36_2_5"),
        P37_2_5: initialResponses("P37_2_5","5","37","37_2_5"),
        P38_2_5: initialResponses("P38_2_5","5","38","38_2_5"),
        P34_3_1: initialResponses("P34_3_1","5","34","34_3_1"),
        P35_3_1: initialResponses("P35_3_1","5","35","35_3_1"),
        P36_3_1: initialResponses("P36_3_1","5","36","36_3_1"),
        P37_3_1: initialResponses("P37_3_1","5","37","37_3_1"),
        P38_3_1: initialResponses("P38_3_1","5","38","38_3_1"),
        P34_3_2: initialResponses("P34_3_2","5","34","34_3_2"),
        P35_3_2: initialResponses("P35_3_2","5","35","35_3_2"),
        P36_3_2: initialResponses("P36_3_2","5","36","36_3_2"),
        P37_3_2: initialResponses("P37_3_2","5","37","37_3_2"),
        P38_3_2: initialResponses("P38_3_2","5","38","38_3_2"),
        P34_3_3: initialResponses("P34_3_3","5","34","34_3_3"),
        P35_3_3: initialResponses("P35_3_3","5","35","35_3_3"),
        P36_3_3: initialResponses("P36_3_3","5","36","36_3_3"),
        P37_3_3: initialResponses("P37_3_3","5","37","37_3_3"),
        P38_3_3: initialResponses("P38_3_3","5","38","38_3_3"),
    }
}

export const getInitialValuesPage10 = () => {
    return {
        P34_4_1: initialResponses("P34_4_1","5","34","34_4_1"),
        P35_4_1: initialResponses("P35_4_1","5","35","35_4_1"),
        P36_4_1: initialResponses("P36_4_1","5","36","36_4_1"),
        P37_4_1: initialResponses("P37_4_1","5","37","37_4_1"),
        P38_4_1: initialResponses("P38_4_1","5","38","38_4_1"),
        P34_4_2: initialResponses("P34_4_2","5","34","34_4_2"),
        P35_4_2: initialResponses("P35_4_2","5","35","35_4_2"),
        P36_4_2: initialResponses("P36_4_2","5","36","36_4_2"),
        P37_4_2: initialResponses("P37_4_2","5","37","37_4_2"),
        P38_4_2: initialResponses("P38_4_2","5","38","38_4_2"),
        P34_4_3: initialResponses("P34_4_3","5","34","34_4_3"),
        P35_4_3: initialResponses("P35_4_3","5","35","35_4_3"),
        P36_4_3: initialResponses("P36_4_3","5","36","36_4_3"),
        P37_4_3: initialResponses("P37_4_3","5","37","37_4_3"),
        P38_4_3: initialResponses("P38_4_3","5","38","38_4_3"),
        P34_4_4: initialResponses("P34_4_4","5","34","34_4_4"),
        P35_4_4: initialResponses("P35_4_4","5","35","35_4_4"),
        P36_4_4: initialResponses("P36_4_4","5","36","36_4_4"),
        P37_4_4: initialResponses("P37_4_4","5","37","37_4_4"),
        P38_4_4: initialResponses("P38_4_4","5","38","38_4_4"),
        P34_4_5: initialResponses("P34_4_5","5","34","34_4_5"),
        P35_4_5: initialResponses("P35_4_5","5","35","35_4_5"),
        P36_4_5: initialResponses("P36_4_5","5","36","36_4_5"),
        P37_4_5: initialResponses("P37_4_5","5","37","37_4_5"),
        P38_4_5: initialResponses("P38_4_5","5","38","38_4_5"),
        P34_4_6: initialResponses("P34_4_6","5","34","34_4_6"),
        P35_4_6: initialResponses("P35_4_6","5","35","35_4_6"),
        P36_4_6: initialResponses("P36_4_6","5","36","36_4_6"),
        P37_4_6: initialResponses("P37_4_6","5","37","37_4_6"),
        P38_4_6: initialResponses("P38_4_6","5","38","38_4_6"),
        P34_4_7: initialResponses("P34_4_7","5","34","34_4_7"),
        P35_4_7: initialResponses("P35_4_7","5","35","35_4_7"),
        P36_4_7: initialResponses("P36_4_7","5","36","36_4_7"),
        P37_4_7: initialResponses("P37_4_7","5","37","37_4_7"),
        P38_4_7: initialResponses("P38_4_7","5","38","38_4_7"),
    }
}

export const getInitialValuesPage11 = () => {
    return {
        P34_5_1: initialResponses("P34_5_1","5","34","34_5_1"),
        P35_5_1: initialResponses("P35_5_1","5","35","35_5_1"),
        P36_5_1: initialResponses("P36_5_1","5","36","36_5_1"),
        P37_5_1: initialResponses("P37_5_1","5","37","37_5_1"),
        P38_5_1: initialResponses("P38_5_1","5","38","38_5_1"),
        P34_5_2: initialResponses("P34_5_2","5","34","34_5_2"),
        P35_5_2: initialResponses("P35_5_2","5","35","35_5_2"),
        P36_5_2: initialResponses("P36_5_2","5","36","36_5_2"),
        P37_5_2: initialResponses("P37_5_2","5","37","37_5_2"),
        P38_5_2: initialResponses("P38_5_2","5","38","38_5_2"),
        P34_5_3: initialResponses("P34_5_3","5","34","34_5_3"),
        P35_5_3: initialResponses("P35_5_3","5","35","35_5_3"),
        P36_5_3: initialResponses("P36_5_3","5","36","36_5_3"),
        P37_5_3: initialResponses("P37_5_3","5","37","37_5_3"),
        P38_5_3: initialResponses("P38_5_3","5","38","38_5_3"),
        P34_5_4: initialResponses("P34_5_4","5","34","34_5_4"),
        P35_5_4: initialResponses("P35_5_4","5","35","35_5_4"),
        P36_5_4: initialResponses("P36_5_4","5","36","36_5_4"),
        P37_5_4: initialResponses("P37_5_4","5","37","37_5_4"),
        P38_5_4: initialResponses("P38_5_4","5","38","38_5_4"),
        P34_5_5: initialResponses("P34_5_5","5","34","34_5_5"),
        P35_5_5: initialResponses("P35_5_5","5","35","35_5_5"),
        P36_5_5: initialResponses("P36_5_5","5","36","36_5_5"),
        P37_5_5: initialResponses("P37_5_5","5","37","37_5_5"),
        P38_5_5: initialResponses("P38_5_5","5","38","38_5_5"),
        P34_5_6: initialResponses("P34_5_6","5","34","34_5_6"),
        P35_5_6: initialResponses("P35_5_6","5","35","35_5_6"),
        P36_5_6: initialResponses("P36_5_6","5","36","36_5_6"),
        P37_5_6: initialResponses("P37_5_6","5","37","37_5_6"),
        P38_5_6: initialResponses("P38_5_6","5","38","38_5_6"),
        P34_5_7: initialResponses("P34_5_7","5","34","34_5_7"),
        P35_5_7: initialResponses("P35_5_7","5","35","35_5_7"),
        P36_5_7: initialResponses("P36_5_7","5","36","36_5_7"),
        P37_5_7: initialResponses("P37_5_7","5","37","37_5_7"),
        P38_5_7: initialResponses("P38_5_7","5","38","38_5_7"),
        P34_5_8: initialResponses("P34_5_8","5","34","34_5_8"),
        P35_5_8: initialResponses("P35_5_8","5","35","35_5_8"),
        P36_5_8: initialResponses("P36_5_8","5","36","36_5_8"),
        P37_5_8: initialResponses("P37_5_8","5","37","37_5_8"),
        P38_5_8: initialResponses("P38_5_8","5","38","38_5_8"),
        P34_5_9: initialResponses("P34_5_9","5","34","34_5_9"),
        P35_5_9: initialResponses("P35_5_9","5","35","35_5_9"),
        P36_5_9: initialResponses("P36_5_9","5","36","36_5_9"),
        P37_5_9: initialResponses("P37_5_9","5","37","37_5_9"),
        P38_5_9: initialResponses("P38_5_9","5","38","38_5_9"),
        P34_5_10: initialResponses("P34_5_10","5","34","34_5_10"),
        P35_5_10: initialResponses("P35_5_10","5","35","35_5_10"),
        P36_5_10: initialResponses("P36_5_10","5","36","36_5_10"),
        P37_5_10: initialResponses("P37_5_10","5","37","37_5_10"),
        P38_5_10: initialResponses("P38_5_10","5","38","38_5_10"),
    }
}