import { StyleSheet } from "react-native";

export const globalColors = {
    background: '#ffff',
    primarybg: '#394fbb'
}

export const globalStyles = StyleSheet.create({
    buttonText: {
        color: globalColors.background,
        fontSize: 20,
        fontWeight: '500',
    },
    buttonsBanner: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        gap: 50,
    },
    CapTitle :{
        width: '100%',
        backgroundColor: globalColors.primarybg,
        padding: 10,
        borderRadius: 20,
        textAlign: 'center',
        marginBottom: 10,
    },
    HomeScreenContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        gap: 150,
        padding: 20,
        backgroundColor: globalColors.background,
    },
    fab:{
        color: 'black',
        backgroundColor: 'blue',
        width:55,
        margin:16,
        right:0,
        bottom:0
    },
    FomsContainer: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: globalColors.background,
    },
    PrimaryButton: {
        backgroundColor: globalColors.primarybg,
        borderRadius: 5,
        padding: 10,
        width: '70%',
        paddingTop: 25,
        height: 80,
        alignContent: 'center',
        alignItems: 'center',
    },
    questionTitle:{
        color: 'black',
    },
    Title: {
        fontSize: 20,
        fontWeight: '500',
        color: globalColors.background,
        textAlign: 'center',
    },
    input:{
        height: 50,
        backgroundColor:"white",
        marginBottom: 20,
        paddingLeft: 20,
        borderColor: 'black',
        color: 'black',
        borderWidth: 2,
    },
}
)