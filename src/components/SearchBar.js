import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.view}>
            <Feather name="search" size={30} color="black" />
            <Text>Search Bar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: `#F0EEEE`,
        borderRadius: 5,
        height: 50,
        marginHorizontal: 15,
    },
})

export default SearchBar