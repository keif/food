import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.view}>
            <Feather name="search" size={30} color="black" />
            <TextInput
                placeholder={`Search`}
                style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: `#F0EEEE`,
        borderRadius: 5,
        flexDirection: `row`,
        height: 50,
        marginHorizontal: 15,
    },
    input: {
        borderColor: `#000`,
        borderWidth: 1,
        flex: 1,
    }
})

export default SearchBar