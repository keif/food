import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'

const ResultsList = ({ results, title }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text>Results: {results.length}</Text>
            <FlatList
                data={results}
                horizontal
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    console.log(item)
                    return (
                        <Text>{item.name}</Text>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: `bold`,
    }
})

export default ResultsList