import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

type Props = {};

export default class LoadingShimmer extends Component<Props> {

  renderShimmerImageAndRows() {
    let animatedAvatarReverseLoading = [];
    return(
      <View style={{ flexDirection: 'row-reverse', paddingTop: 30 }}>
        <ShimmerPlaceHolder
          ref={(ref) => animatedAvatarReverseLoading.push(ref)}
          width={60}
          height={60}
          style={{ marginLeft: 16, borderRadius: 30}}
          autoRun={true}
        />
        <View>
          {this.renderShimmerRows(animatedAvatarReverseLoading, 3, 'reverse')}
        </View>
        <ShimmerPlaceHolder
          ref={(ref) => animatedAvatarReverseLoading.push(ref)}
          width={60}
          height={60}
          style={{ marginLeft: 16, marginRight: 16 }}
          autoRun={true}
        />
      </View>
    )
  }

  renderShimmerRows(loadingAnimated,number,uniqueKey) {
    shimmerRows=[];
    for(let index=0;index<number;index++ ){
      shimmerRows.push(
        <ShimmerPlaceHolder
          key={`loading-${index}-${uniqueKey}`}
          ref={(ref) => loadingAnimated.push(ref)}
          width={200}
          style={{ marginBottom: 7}}
          autoRun={true}
        />
      )
    }
    return(
      <View>
        {shimmerRows}
      </View>
    )
  }

  render() {
    const shimmerArray = [];
    for (var i = 0; i<5; i++) {
      shimmerArray.push(this.renderShimmerImageAndRows());
      shimmerArray.push(<ShimmerPlaceHolder style={{width: 350, marginTop: 10, marginBottom: 10}} autoRun={true} />);
      shimmerArray.push(<ShimmerPlaceHolder style={{width: 350, marginTop: 10, marginBottom: 10}} autoRun={true} />);
    }
    return (
      <View style={styles.emptyContainer}>
        {shimmerArray}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
  }
});