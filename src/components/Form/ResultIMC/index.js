import React from 'react'
import { View, Text } from 'react-native'
import Styles from './styles'

export default function ResultIMC(props) {
    return (
        <View style={Styles.resultImcContainer}>
            <Text style={Styles.informs}>
                {props.message}
            </Text>
            <Text style={Styles.resultImc}>
                {props.result}
            </Text>
        </View>
    )
}