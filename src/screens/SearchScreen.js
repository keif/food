import React, {useState} from "react"
import {ScrollView, StyleSheet, Text} from "react-native"
import ResultsList from "../components/ResultsList"
import SearchBar from "../components/SearchBar"
import useResults from "../hooks/useResults"

const SearchScreen = ({navigation}) => {
    const [term, setTerm] = useState(``)
    const [errorMessage, results, searchApi] = useResults()

    // price === `$` || `$$` || `$$$`
    const filterResultsByPrice = (price) => results.filter(result => result.price === price)

    return (
        <>
            <SearchBar
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
                term={term}
            />
            {errorMessage !== `` ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    navigation={navigation}
                    results={filterResultsByPrice(`$`)}
                    title={`Cost Effective`}
                />
                <ResultsList
                    navigation={navigation}
                    results={filterResultsByPrice(`$$`)}
                    title={`Bit Pricier`}
                />
                <ResultsList
                    navigation={navigation}
                    results={filterResultsByPrice(`$$$`)}
                    title={`Big Spender`}
                />
                <ResultsList
                    navigation={navigation}
                    results={filterResultsByPrice(`$$$$`)}
                    title={`Richie Rich Spender`}
                />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})

export default SearchScreen