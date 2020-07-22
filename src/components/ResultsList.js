import React from 'react'
import {FlatList, StyleSheet, Text, View} from 'react-native'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({results, title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                data={results}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => <ResultsDetail result={item}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: `bold`,
        marginBottom: 5,
        marginLeft: 15,
    },
})

export default ResultsList