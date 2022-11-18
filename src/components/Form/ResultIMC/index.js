import React from 'react'
import { View, Text, TouchableOpacity, Share } from 'react-native'
import Styles from './styles'

export default function ResultIMC(props) {

    const onShare = async () => {
        const Result = await Share.share({
            message: `Meu IMC hoje é de: ${props.result}`
        })
    }

    return (
        <View style={Styles.resultImcContainer}>
            <Text style={Styles.informs}>
                {props.message}
            </Text>
            <Text style={Styles.resultImc}>
                {props.result}
            </Text>
            <View style={Styles.shareButtonContainer}>
                <TouchableOpacity
                    onPress={() => onShare()}
                >
                    <Text style={Styles.shareButton}>
                        Compartilhar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}