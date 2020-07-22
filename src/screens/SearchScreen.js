import React, {useState} from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import ResultsList from '../components/ResultsList'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
    const [term, setTerm] = useState(``)
    const [errorMessage, results, searchApi] = useResults()

    // price === `$` || `$$` || `$$$`
    const filterResultsByPrice = (price) => results.filter(result => result.price === price)

    return (
        <View>
            <SearchBar
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
                term={term}
            />
            {errorMessage !== `` ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
            <ScrollView>
                <ResultsList
                    results={filterResultsByPrice(`$`)}
                    title={`Cost Effective`}
                />
                <ResultsList
                    results={filterResultsByPrice(`$$`)}
                    title={`Bit Pricier`}
                />
                <ResultsList
                    results={filterResultsByPrice(`$$$`)}
                    title={`Big Spender`}
                />
                <ResultsList
                    results={filterResultsByPrice(`$$$$`)}
                    title={`Richie Rich Spender`}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen