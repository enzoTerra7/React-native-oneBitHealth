import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import ResultIMC from './ResultIMC'
import Styles from './styles'

export default function Form() {
    
    const [yourHeight, setYourHeight] = useState(null)
    const [yourWeight, setYourWeight] = useState(null)
    const [message, setMessage] = useState('Preencha o peso e a altura.')
    const [imc, setImc] = useState(null)
    const [textMessage, setTextMessage] = useState('Calcular IMC')

    const imcCalculate = () => {
        return setImc(Number(yourWeight/(yourHeight * yourHeight)).toFixed(2))
    }

    const validate = () => {
        if(yourHeight && yourWeight){
            imcCalculate()
            setMessage('Seu IMC é de: ')
            setTextMessage('Calcular novamente')
            setYourHeight(null)
            setYourWeight(null)
        } else {
            setImc(null)
            setMessage('Preencha o peso e a altura.')
            setTextMessage('Calcular')
        }
    }
    
    return (
        <View style={Styles.formText}>
            <View style={Styles.form}>
                <Text style={Styles.formLabel}>
                    Altura
                </Text>
                <TextInput
                    style={Styles.input}
                    onChangeText={setYourHeight}
                    value={yourHeight}
                    placeholder='Ex: 1.85'
                    keyboardType='numeric'
                />
                <Text style={Styles.formLabel}>
                    Peso
                </Text>
                <TextInput
                    style={Styles.input}
                    onChangeText={setYourWeight}
                    value={yourWeight}
                    placeholder='Ex: 80.20'
                    keyboardType='numeric'
                />

                <TouchableOpacity 
                    style={Styles.buttonCalc}
                    onPress={validate}
                >
                    <Text style={Styles.textButtonCalc}>
                        {textMessage}
                    </Text>
                </TouchableOpacity>
            </View>
            <ResultIMC message={message} result={imc}/>
        </View>
    )
}