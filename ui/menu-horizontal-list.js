import React, {Component} from 'react';
import Carousel from 'react-native-snap-carousel';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


type Props = {
    items: []
};

export default class MenuHorizontalList extends Component<Props> {
    _renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }

    render() {
        return (
            <Carousel
                layout={'default'}
                ref={(c) => { this._carousel = c; }}
                data={this.state.entries}
                renderItem={this._renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
            />
        );
    }
}