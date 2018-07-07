import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation'

import {
    AppRegistry
} from 'react-native'

import ColorList from './components/ColorList'
import ColorInfo from './components/ColorInfo'

const App = StackNavigator({
    Home: { screen: ColorList },
    Details: { screen: ColorInfo }
})

AppRegistry.registerComponent('color_demo', () => App);
