import React, {useEffect, useState} from "react"
import {StyleSheet, Text, View} from "react-native"
import yelp from "../api/yelp"

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam(`id`)

    console.log(`id: ${id}`)
    console.log(`result:`, result)

    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`)
            setResult(response.data)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() =>{
        getResult(id)
    }, [])

    return (
        <View>
            <Text>ResultsShowScreen: {id}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ResultsShowScreen