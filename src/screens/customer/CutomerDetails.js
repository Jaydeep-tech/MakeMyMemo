// Import React and Component
import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, Share } from 'react-native';
import { customerDetailstyle } from '../../styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { images, colors, strings } from '../../themes'
const CutomerDetails = ({ props, navigation }) => {
  const [estado, setEstado] = useState(false);

  const agregarFavoritos = () => {
    setEstado(!estado);
  };

  function onShare() {
    try {
      const result = Share.share({
        title: 'App Title',
        message: 'Message'
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log('shared with activity type of result.activityType')
        }
        else if (result.action === Share.dismissedAction) {
          console.log('dismissed')
        }
      }
    }
    catch (error) {
      alert(error.message);
    }
  }

  return (
    <SafeAreaView style={customerDetailstyle.safeArea}>
      <View style={customerDetailstyle.container}>
        <Image style={customerDetailstyle.sliderImage} source={images.slider3} resizeMode="cover" />
        <View style={customerDetailstyle.cardsWrapper}>
          <View style={customerDetailstyle.card}>
            <View style={customerDetailstyle.cardInfo}>
              <Image source={images.slider3} style={customerDetailstyle.logo} />
              <View><Text style={customerDetailstyle.cardTitle}>Jaydeep Rajani</Text></View>
              <View><Text style={customerDetailstyle.cardDetails}>Software Trainee </Text></View>
              <View><Text style={customerDetailstyle.cardDetails2}>Software Trainee </Text></View>
            </View>
          </View>

          <View style={customerDetailstyle.cardInfo2}>
            <View><Text style={customerDetailstyle.cardTitle2}>Jaydeep Rajani</Text></View>
          </View>

          <View style={customerDetailstyle.card2}>
            <View style={customerDetailstyle.cardInfo3}>
              <View><Text style={customerDetailstyle.cardDetails3}>Jaydeep Rajani</Text></View>
              <View><Text style={customerDetailstyle.cardTitle3}>Jul 27,2021</Text></View>
            </View>
            <View style={customerDetailstyle.cardInfo3}>
              <View><Text style={customerDetailstyle.cardDetails3}>Jaydeep Rajani</Text></View>
              <View><Text style={customerDetailstyle.cardTitle3}>Aug 28,2021</Text></View>
            </View>
          </View>

          {/* Share Details Row  Start */}

          <View style={customerDetailstyle.profileHeaderLine} >
          </View>
          <View style={customerDetailstyle.IconRow}>
            <View style={customerDetailstyle.InnerIconRow}>
              <Icon onPress={() => agregarFavoritos()} name={estado ? 'heart' : 'heart-outline'} size={25} color={estado ? colors.CustDetailsIconRedColors : colors.CustDetailsIcongreyColors} />
            </View>
            <View style={customerDetailstyle.InnerIconRow}>
              <Icon name='comment-text-outline' onPress={() => navigation.navigate('Comment')} size={25} color={colors.CustDetailsIcongreyColors} />
            </View>
            <View style={customerDetailstyle.InnerIconRow}>
              <Icon onPress={() => onShare()} name='source-fork' size={25} color={colors.CustDetailsIcongreyColors} />
            </View>
          </View>

          <View style={customerDetailstyle.IconTxtRow}>
            <View style={customerDetailstyle.InnerIconFirstTxtRow}>
              <Text style={customerDetailstyle.IconAllTxt}>{strings.CustDetailsLikeTitle}</Text>
            </View>
            <View style={customerDetailstyle.InnerIconSecondTxtRow}>
              <Text style={customerDetailstyle.IconAllTxt}>{strings.CustDetailsCommentTitle}</Text>
            </View>
            <View style={customerDetailstyle.InnerIconThirdTxtRow}>
              <Text style={customerDetailstyle.IconAllTxt}>{strings.CustDetailsShareTitle}</Text>
            </View>
          </View>
          <View style={customerDetailstyle.profileHeaderLine2} >
          </View>

           {/* Share Details Row  End */}

          {/* <View style={customerDetailstyle.profileHeaderLine} >
          </View>
          <View style={{marginTop:-30,left:150, flexDirection: 'row',} }>
            <View style={{padding:35}}>
                <Icon onPress={() => agregarFavoritos()} name={estado ? 'heart' : 'heart-outline'}  size={25} color={estado ? 'red' : 'grey'} />
            </View>
            <View style={{padding:35}}>
                <Icon onPress={() => agregarFavoritos()} name='comment-text-outline' size={25} color='grey' />
            </View>
          </View>
          <View style={{marginTop:-55,left:150, flexDirection: 'row',} }>
            <View style={{padding:20,left:15}}>
                <Text style={{color:'black',}}>Like</Text>
            </View>
            <View style={{padding:20,right:-25}}>
              <Text style={{color:'black'}}>Comment</Text>
            </View>
          </View>
          <View style={customerDetailstyle.profileHeaderLine2} >
          </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CutomerDetails;
