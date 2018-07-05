import React, { Component } from 'react';

import {
    StyleSheet,
    AppRegistry,
    ScrollView,
} from 'react-native'

import  ColorButton from './components/ColorButton'

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            backgroundColor: 'blue'
        }
        this.changeColor = this.changeColor.bind(this)
    }

    changeColor(backgroundColor){
        this.setState({backgroundColor})
    }

    render(){
        const { backgroundColor } = this.state
        return (
            <ScrollView style={[ styles.container, {backgroundColor: backgroundColor} ]}>
                <ColorButton backgroundColor="red"
                             onSelect={this.changeColor}/>
                <ColorButton backgroundColor="blue"
                             onSelect={this.changeColor}/>
                <ColorButton backgroundColor="green"
                             onSelect={this.changeColor}/>
                <ColorButton backgroundColor="yellow"
                             onSelect={this.changeColor}/>
                <ColorButton backgroundColor="pink"
                             onSelect={this.changeColor}/>
                <ColorButton backgroundColor="salmon"
                             onSelect={this.changeColor}/>
                <ColorButton backgroundColor="black"
                             onSelect={this.changeColor}/>
                <ColorButton backgroundColor="white"
                             onSelect={this.changeColor}/>
                <ColorButton backgroundColor="red"
                             onSelect={this.changeColor}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    }
})

AppRegistry.registerComponent('color_demo', () => App);
