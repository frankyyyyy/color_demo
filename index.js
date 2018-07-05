import React, { Component } from 'react';

import {
    StyleSheet,
    AppRegistry,
    ListView,
    Text
} from 'react-native'

import  ColorButton from './components/ColorButton'

class App extends React.Component{

    constructor(){
        super();

        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        const availableColors = [
            'red',
            'green',
            'yellow',
            'salmon',
            'black',
            'white',
            'pink']
        this.state = {
            backgroundColor: 'blue',
            availableColors,
            dataSource: this.ds.cloneWithRows(availableColors)
        }
        this.changeColor = this.changeColor.bind(this)
    }

    changeColor(backgroundColor){
        this.setState({backgroundColor})
    }

    render(){
        const { backgroundColor, dataSource } = this.state
        return (
            <ListView style={[ styles.container, {backgroundColor: backgroundColor} ]}
                    dataSource={dataSource}
                    renderRow={(color) => (
                        <ColorButton backgroundColor = {color}
                                     onSelect={this.changeColor}/>
                    )}
                    renderHeader={() => (
                        <Text style={styles.header}>Color List</Text>
                    )}>

            </ListView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    header:{
        backgroundColor: 'lightgrey',
        paddingTop: 20,
        padding: 10,
        fontSize: 30,
        textAlign: 'center'
    }
})

AppRegistry.registerComponent('color_demo', () => App);
