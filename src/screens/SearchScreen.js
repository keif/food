import React, { useEffect, useState } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import SearchBar from "../components/SearchBar";
import yelp from '../api/yelp'

const SearchScreen = () => {
    const [errorMessage, setErrorMessage] = useState(``)
    const [results, setResults] = useState([])
    const [term, setTerm] = useState(``)

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get(`/search`, {
                params: {
                    limit: 50,
                    location: `san jose`, // temp
                    term: searchTerm,
                }
            })
            setResults(response.data.businesses)
        } catch (err) {
            console.log(err)
            setErrorMessage(`There was an error, please try again`)
        }
    }

    // Call searchApi when component is first rendered
    useEffect(() => {
        searchApi(`pasta`)
    }, [])

    return (
        <View>
            <SearchBar
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
                term={term}
            />
            {errorMessage !== `` ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen