import React, {Component} from 'react';
import Slideshow from 'react-native-slideshow';

type Props = {
    slides: []
};

export default class CarouselSlide extends Component<Props> {
    state = {
        position: 1,
        interval: null,
        dataSource: []
    };
    componentWillMount() {
        let data = [];
        for (let i=0; i<this.props.slides.length; i++) {
            let item = {
                url: this.props.slides[i].abs_url,
                title: '',
                caption: ''
            };
            data.push(item);
        }
        this.setState({
            dataSource: data,
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 2000)
        });
    }
    componentWillUnmount() {
        clearInterval(this.state.interval);
    }
    render() {
        return (
            <Slideshow
                dataSource={this.state.dataSource}
                position={this.state.position}
                onPositionChanged={position => this.setState({ position })} />
        );
    }
}