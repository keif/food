import React from "react"
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native"
import ResultsDetail from "./ResultsDetail"

const ResultsList = ({navigation, results, title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}, {results.length} results</Text>
            <FlatList
                data={results}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => navigation.navigate(`ResultsShow`)}
                        >
                            <ResultsDetail result={item}/>
                        </TouchableOpacity>
                    )
                }}
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