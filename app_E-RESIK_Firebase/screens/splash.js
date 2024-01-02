import { StyleSheet, View } from 'react-native'
import React, { Component } from 'react'
import { getData } from '../src/utils/localStorage';
export default class Splash extends Component {
    componentDidMount() {
        setTimeout(async() => {
            const userData = await getData("user");
            if (userData) {
                this.props.navigation.replace('Home');
            } else {
                this.props.navigation.navigate('LoginScreen');
            }
        }, 3000)
    }

    render() {
        return (
            <View style={styles.pages}>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pages: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})