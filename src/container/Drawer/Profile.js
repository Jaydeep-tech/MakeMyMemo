// Import React and Component
import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { profilestyle } from '../../styles';
import { images } from '../../themes';

import LinearGradient from 'react-native-linear-gradient';
const Profile = () => {
  return (
    <SafeAreaView style={profilestyle.safeArea}>
      <View style={profilestyle.container}>
        <View style={profilestyle.header}>

          <LinearGradient
            colors={["#28B0E4", "#21D5DC"]}
            style={profilestyle.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }} />
        </View>

        <Image style={profilestyle.avatar} source={images.ProfileIcon} />
        <View style={profilestyle.body}>
          <View style={profilestyle.bodyContent}>
            {/* <Text style={profilestyle.name}>John Doe</Text>
              <Text style={profilestyle.info}>UX Designer / Mobile developer</Text>
              <Text style={profilestyle.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text>
              */}

            <Text style={profilestyle.name}>Denial Rozar</Text>
            {/* <Text style={profilestyle.info}>deriairozar@gmail.com</Text> */}
          </View>
          <View style={profilestyle.profileHeaderLine} />

          <View style={profilestyle.bodyDetails}>
            <View>
              <Image
                  source={images.profilesurName}
                  style={profilestyle.surnameicon}
                />
                {/* <Text style={profilestyle.surNameTitle}>Sur Name</Text> */}
                <Text style={profilestyle.SurNamevalueTitle}>Rozar</Text>
            </View>

            <View>
              <Image
                  source={images.profileconatctNo}
                  style={profilestyle.contacticon}
                />
              {/* <Text style={profilestyle.contactTitle}>Conact No.</Text> */}
              <Text style={profilestyle.contactvalueTitle}>1234567890</Text>
            </View>

            <View>
            <Image
                source={images.profileEmail}
                style={profilestyle.emailicon}
              />
              {/* <Text style={profilestyle.emailTitle}>Email</Text> */}
              <Text style={profilestyle.emailvalueTitle}>deriairozar@gmail.com</Text>
            </View> 



          </View>

        </View>
      </View>
    </SafeAreaView>
  );
};


export default Profile;
