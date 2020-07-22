import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

const ResultsDetail = ({result}) => {
    return (
        <View>
            <Image
                source={{ uri: result.image_url }}
                style={styles.image}
            />
            <Text
                style={styles.name}
            >{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        borderRadius: 4,
        height: 120,
        width: 250,
    },
    name: {
        fontWeight: `bold`,
    },
})

export default ResultsDetail