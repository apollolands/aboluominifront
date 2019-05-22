import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {id: string};

export default class PostList extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});