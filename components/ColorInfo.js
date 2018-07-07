import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

ColorInfo.navigationOptions = {
    title: 'Color Details'
}

const ColorInfo = () => (
    <View style={styles.container}>
        <Text style={styles.text}>haha</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,

    }
})

export default ColorInfo