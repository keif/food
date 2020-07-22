import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import SearchBar from "../components/SearchBar";
import yelp from '../api/yelp'

const SearchScreen = () => {
    const [term, setTerm] = useState(``)
    const [results, setResults] = useState([])

    const searchApi = async () => {
        const response = await yelp.get(`/search`, {
            params: {
                limit: 50,
                location: `san jose`, // temp
                term,
            }
        })
        setResults(response.data.businesses)
    }

    return (
        <View>
            <SearchBar
                onTermChange={setTerm}
                onTermSubmit={searchApi}
                term={term}
            />
            <Text>Search Screen</Text>
            <Text>We have found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen