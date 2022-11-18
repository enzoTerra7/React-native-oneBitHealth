import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList } from 'react-native'
import ResultIMC from './ResultIMC'
import Styles from './styles'

export default function Form() {

    const [yourHeight, setYourHeight] = useState(null)
    const [yourWeight, setYourWeight] = useState(null)
    const [message, setMessage] = useState('Preencha o peso e a altura.')
    const [imc, setImc] = useState(null)
    const [textMessage, setTextMessage] = useState('Calcular IMC')
    const [errorMessage, setErrorMessage] = useState(null)
    const [imcList, setImcList] = useState([])

    const imcCalculate = () => {
        let heightFormat = yourHeight.replace(',', '.')
        let weightFormat = yourWeight.replace(',', '.')
        const IMCResult = Number(weightFormat / (heightFormat * heightFormat)).toFixed(2)
        setImcList(e => {
            let arr = e
            arr.unshift({
                id: new Date().getTime(),
                imc: IMCResult
            })
            return arr
        })
        return setImc(IMCResult)
    }

    const validate = () => {
        if (yourHeight && yourWeight) {
            imcCalculate()
            setMessage('Seu IMC é de: ')
            setTextMessage('Calcular novamente')
            setYourHeight(null)
            setYourWeight(null)
            setErrorMessage(null)
        } else {
            setImc(null)
            setMessage('Preencha o peso e a altura.')
            setTextMessage('Calcular')
            setErrorMessage('Campo obrigatório*')
            Vibration.vibrate()
        }
    }

    return (
        <View style={Styles.formText}>
            {imc == null ? (
                <Pressable onPress={Keyboard.dismiss} style={Styles.form}>
                    <Text style={Styles.formLabel}>
                        Altura
                    </Text>
                    {!yourHeight && errorMessage && (
                        <Text style={Styles.errorMessage}>
                            {errorMessage}
                        </Text>
                    )}
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
                    {!yourWeight && errorMessage && (
                        <Text style={Styles.errorMessage}>
                            {errorMessage}
                        </Text>
                    )}
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
                </Pressable>
            ) : (
                <View>
                    <ResultIMC message={message} result={imc} />
                    <TouchableOpacity
                        style={Styles.buttonCalc}
                        onPress={() => setImc(null)}
                    >
                        <Text style={Styles.textButtonCalc}>
                            {textMessage}
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
            <FlatList
                showsHorizontalScrollIndicator={false}
                style={Styles.history}
                data={imcList}
                renderItem={(item) => {
                    return (
                        <Text style={Styles.historyImc}>
                            <Text style={Styles.historyTxt}>
                                IMC igual à: 
                            </Text>
                            {item.item.imc}
                        </Text>
                    )
                }}
                keyExtractor={item => item.id}
            />
        </View>
    )
}