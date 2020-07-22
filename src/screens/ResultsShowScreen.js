import React from "react"
import {StyleSheet, Text, View} from "react-native"

const ResultsShowScreen = ({navigation}) => {
    const id =  navigation.getParam(`id`)

    return (
        <View>
            <Text>ResultsShowScreen: {id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
 
export default ResultsShowScreen