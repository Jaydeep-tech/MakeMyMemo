import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import {colors} from '../../themes';
import { loderstyle } from '../../styles';
export default class Loder extends Component {
    render() {
        let{background} = this.props;
        return (
            <>
                <View style={[loderstyle.container,(background)? {backgroundColor:colors.homebackgroundcolor} : null ]}>
                    <ActivityIndicator size="large" color={colors.loadercolers} />
                </View>
            </>
        )
    }
}


