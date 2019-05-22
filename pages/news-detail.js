import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Dimensions, Text} from 'react-native';
import { Image } from 'react-native-elements';
import rest from '../http/rest';
import HTML from 'react-native-render-html';

type Props = {navigation: Object};

export default class NewsDetail extends Component<Props> {
    state = {
        content: null
    };

    async fetchContent() {
        const id = this.props.navigation.getParam('id', '0');
        console.log(id);
        return new Promise((resolve, reject) => {
            rest.POST('News/newsDetail', `news_id=${id}`).then((response) => {
                console.log(response);
                resolve(response.json());
            }).catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    async componentWillMount() {
        const data = await this.fetchContent();
        this.setState({
            content: data
        });
        console.log(data);
    }

    render() {
        if (this.state.content) {
            return(
                <ScrollView style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <View style={{display: 'flex', flexDirection: 'column'}}>
                        <View>
                            <Image source={{uri: this.state.content.data.cover[0].abs_url, height: 270, width: '100%'}} />
                        </View>
                        <View style={{flex: 1, margin: 10, justifyContent: 'flex-start', flexDirection: 'row'}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black', flexWrap: 'wrap', lineHeight: 30}}>{this.state.content.data.title}</Text>
                        </View>
                        <View
                            style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
                            <Text>{this.state.content.data.view}</Text>
                            <Text>{this.state.content.data.create_time}</Text>
                        </View>
                    </View>
                    <View style={{margin: 10}}>
                        <HTML html={this.state.content.data.content} />
                    </View>
                </ScrollView>
            );
        } else {
            return (
                <View style={styles.container}>
                </View>
            );
        }
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