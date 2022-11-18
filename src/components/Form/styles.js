import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    formText: {
        width: "100%",
        height: "100%",
        bottom: 0,
        justifyContent: 'space-around',
        backgroundColor: '#FFF',
        alignItems: 'center',
        marginTop: 20,
        paddingTop: 15,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },

    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
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
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: "#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30
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
    }
})

export default Styles;