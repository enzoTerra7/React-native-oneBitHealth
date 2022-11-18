import React from 'react'
import { View, Text } from 'react-native'
import Styles from './styles'

export default function Title() {
    return (
        <View style={Styles.titleContainer}>
            <Text style={Styles.titleText}>
                OneBitHealth
            </Text>
        </View>
    )
}