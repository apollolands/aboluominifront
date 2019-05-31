import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text, View, FlatList, TouchableOpacity, Dimensions} from 'react-native';
import rest from '../http/rest';
import CarouselSlide from "./carousel-slider";
import {Image, Divider, Card} from 'react-native-elements'
import SearchBar from 'react-native-dynamic-search-bar';
import LoadingShimmer from './loading-shimmer';

type Props = {navigation: Object};

export default class MainMenu extends Component<Props> {
    state = {
        data: null,
        search: '',
    };
    async fetchMainMenuData() {
        return new Promise((resolve, reject) => {
            rest.POST('Index/index', 'city_id=11&p=0').then((response) => {
                resolve(response.json())
            }).catch((error) => {
                console.error(error.message);
                reject(error);
            });
        });

    }
    async componentWillMount() {
        const data = await this.fetchMainMenuData();
        console.log(data);
        this.setState({data: data.data})
    }

    getMenuButtonComponents() {
        return this.state.data.channels.map((data) => {
           return (
             <TouchableOpacity
               style={styles.menuItem}
               onPress={() => {
                 this.props.navigation.navigate('PostsList', {
                   id: data.channel_id,
                   name: data.name
                 })
               }}>
               <View>
                   <Image source={{uri: data.icon}} style={{width: 30, height: 30, alignSelf: 'center'}} />
                   <Text style={{alignSelf: 'center', fontSize: 12}}>{data.name}</Text>
               </View>
             </TouchableOpacity>
           );
        });
    }

    getSearchComponent() {
        return (
            <SearchBar
                style={{alignSelf: 'center'}}
                fontColor="#c6c6c6"
                iconColor="#c6c6c6"
                shadowColor="#282828"
                cancelIconColor="#c6c6c6"
                backgroundColor="#f6f8fa"
                placeholder="Search here"
                cancelButtonDisable
                onChangeText={text => {

                }}
                onPressCancel={() => {

                }}
                onPress={() => {}}
            />
        );
    }

    getScrollListDiscount() {
        return (
            <FlatList
                horizontal={true}
                data={this.state.data.discount}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                            this.props.navigation.navigate('DiscountDetail', {
                                id: item.discount_id
                            })
                        }}>
                            <Card
                                image={{uri: item.cover}}
                                imageStyle={{height: 80}}
                                containerStyle={{ padding: 0, width: 160,}}>
                                <Text style={{fontSize: 10, color: 'black'}} ellipsizeMode='tail' numberOfLines={1}>
                                    {item.title}
                                </Text>
                            </Card>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }

    getScrollListNews() {
        return (
            <FlatList
                horizontal={true}
                data={this.state.data.news}
                renderItem={({item}) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.navigate('NewsDetail', {
                                    id: item.news_id
                                })
                            }}>
                            <Card
                                image={{uri: item.cover}}
                                imageStyle={{height: 80}}
                                containerStyle={{ padding: 0, width: 160,}}>
                                <Text style={{fontSize: 10, color: 'black'}} ellipsizeMode='tail' numberOfLines={1}>
                                    {item.title}
                                </Text>
                            </Card>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        );
    }

    render() {
        if (this.state.data) {
            return (
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <View style={{display: 'flex', height: 210}}>
                        <CarouselSlide slides={this.state.data.adverts} />
                    </View>
                    <View style={{position: 'absolute', top: 166, width: '100%', flex: 1, justifyContent: 'center'}}>
                        {this.getSearchComponent()}
                    </View>
                    <View style={styles.menuRow}>
                        {this.getMenuButtonComponents()}
                    </View>
                    <Divider style={{marginLeft: 30, marginRight: 30, backgroundColor: 'grey' }} />
                    <View style={{display: 'flex', flexDirection: 'column', height: 190}}>
                        <View>
                            <Text style={{fontSize: 18,  color: 'black', padding: 13}}>Discover discount around you</Text>
                        </View>
                        <View>
                            {this.getScrollListDiscount()}
                        </View>
                    </View>
                    <View style={{display: 'flex', flexDirection: 'column'}}>
                        <Text style={{fontSize: 18,  color: 'black', padding: 13}}>Find out what's happening</Text>
                        <View>
                            {this.getScrollListNews()}
                        </View>
                    </View>
                </View>
            );
        } else {
          return (
            <LoadingShimmer />
          );
        }
    }
}

const styles = StyleSheet.create({
    menuRow: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 20,
    },
    menuItem: {
        paddingTop: 25,
        paddingBottom: 16,
        height: 70,
        width: '33%',
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
});