import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    formText: {
        flex: 1,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: "center",
        paddingTop: 30
    },

    form: {
        width: "100%",
    },

    formLabel: {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20,
    },

    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10
    },

    buttonCalc: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ff0043",
        padding: 14,
        marginLeft: 12,
        marginTop: 30,
    },

    textButtonCalc: {
        fontSize: 20,
        color: '#FFF'
    },

    errorMessage: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 12,
        paddingLeft: 20
    },

    showResult: {
        width: '100%',
        height: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    history: {
        marginTop: 20
    },

    historyImc: {
        fontSize: 28,
        color: 'red',
        height: 50,
        width: '100%',
        paddingRight: 20,
    },

    historyTxt: {
        fontSize: 20
    }
})

export default Styles;