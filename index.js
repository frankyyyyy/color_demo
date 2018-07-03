import React from 'react';

import { AppRegistry, View, Text } from 'react-native'

class App extends React.Component{
    render(){
        return (
            <View>
                <Text>Sierra</Text>
                <Text>Tanner</Text>
                <Text>Travis</Text>
            </View>
        )
    }
}

AppRegistry.registerComponent('color_demo', () => App);
