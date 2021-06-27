import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const DeckList = () => {
    return (
        <View style={styles.container}>
            <Text>Deck List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    }
})

export default DeckList;