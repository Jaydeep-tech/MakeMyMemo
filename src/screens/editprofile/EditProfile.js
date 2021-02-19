// Import React and Component
import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { ediprofilestyle } from '../../styles';
import { images, strings, colors } from '../../themes';

const EditProfile = () => {
  return (
    <SafeAreaView style={ediprofilestyle.safeArea}>
      <ScrollView>
        <View style={ediprofilestyle.container}>
          <View style={ediprofilestyle.header}>
            <Image style={ediprofilestyle.avatar} source={images.ProfileIcon} />
            <Image style={ediprofilestyle.cameraavatar} source={images.ProfilebtnIcon} />
          </View>
          <View style={ediprofilestyle.body}>
            <View style={ediprofilestyle.bodyContent}>
              <Text style={ediprofilestyle.name}>Denial Rozar</Text>
            </View>
            <View style={ediprofilestyle.profileHeaderLine} />
            <View style={ediprofilestyle.bodyDetails}>
              <View>
                <Text style={ediprofilestyle.editProfilesurName}>{strings.editProfileSurNameTitle}</Text>
                <TextInput
                  style={ediprofilestyle.editProfilesurNametxt}
                  autoCapitalize="none"
                  returnKeyType="next"
                  underlineColorAndroid={colors.editProfileTextInputunderlineColorAndroid}
                  blurOnSubmit={false}
                />
              </View>
              <View>
                <Text style={ediprofilestyle.editProfileContactTitle}>{strings.editProfileConatctTitle}</Text>
                <TextInput
                  style={ediprofilestyle.editProfileContacttxt}
                  autoCapitalize="none"
                  returnKeyType="next"
                  underlineColorAndroid={colors.editProfileTextInputunderlineColorAndroid}
                  blurOnSubmit={false}
                />
              </View>
              <View>
                <Text style={ediprofilestyle.editProfileEmailTitle}>{strings.editProfileEmailTitle}</Text>
                <TextInput
                  style={ediprofilestyle.editProfileEmailtxt}
                  autoCapitalize="none"
                  returnKeyType="next"
                  underlineColorAndroid={colors.editProfileTextInputunderlineColorAndroid}
                  blurOnSubmit={false}
                />
              </View>
              <View>
                <TouchableOpacity style={ediprofilestyle.buttonStyle}>
                  <Text style={ediprofilestyle.buttonText}>{strings.editProfilebtnTitle}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default EditProfile;
