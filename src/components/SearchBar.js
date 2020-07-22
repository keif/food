import {Feather} from "@expo/vector-icons"
import React from "react"
import {StyleSheet, TextInput, View} from "react-native"

const SearchBar = ({onTermChange, onTermSubmit, term}) => {
    return (
        <View style={styles.view}>
            <Feather
                name="search"
                style={styles.icon}
            />
            <TextInput
                autoCapitalize={`none`}
                autoCorrect={false}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                placeholder={`Search`}
                style={styles.input}
                value={term}
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
        marginBottom: 10,
        marginHorizontal: 15,
        marginTop: 10,
    },
    icon: {
        alignSelf: `center`,
        fontSize: 30,
        marginHorizontal: 15,
    },
    input: {
        flex: 1,
        fontSize: 18,
    }
})

export default SearchBar