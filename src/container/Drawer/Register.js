// Import React and Component
import React, { useState, createRef } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, TextInput, Keyboard } from 'react-native';
import { registerstyle } from '../../styles';
import { images, colors, strings } from '../../themes'
import LinearGradient from 'react-native-linear-gradient';
const Register = ({ navigation }) => {
  const OrgInputRef = createRef();
  const emailInputRef = createRef();
  const mobileNonputRef = createRef();
  const passwordInputRef = createRef();
  return (
    <SafeAreaView style={registerstyle.safeArea}>
      <ScrollView>
        <View style={registerstyle.container}>
          <LinearGradient
            // colors={["#52AAFF", "#5FFFFF"]}52AAFF
            // colors={["#EFF6FF", "#EFA6FF"]}  with pink
            //colors={["#21D5DC", "#00CCFF"]}
            colors={[colors.RegisterlinearGradientColor1, colors.RegisterlinearGradientColor2]}
            style={registerstyle.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }} >

            <View style={registerstyle.innercard}>
              <View style={registerstyle.ineercardInfo}>
                <View>
                  <Text style={registerstyle.RegisterMainTitle}>{strings.RegisterMainTitle}</Text>
                </View>
                <View>
                  <Text style={registerstyle.RegisterSubTitle}>{strings.RegisterSubTitle} </Text>
                </View>
                <View style={registerstyle.FirstLabelRow}>
                  <Text style={registerstyle.lblFullName}>{strings.RegisterlblFirstName}</Text>
                  <Text style={registerstyle.lblOrgName}>{strings.RegisterlblOrgName}</Text>
                </View>
                <View style={registerstyle.FirstRow}>
                  <TextInput
                    style={registerstyle.Firsttxt}
                    //placeholder="Full Name"
                    // placeholderTextColor='grey'
                    autoCapitalize="none"
                    returnKeyType="next"
                    onSubmitEditing={() =>
                      OrgInputRef.current && OrgInputRef.current.focus()
                    }
                    blurOnSubmit={false}
                  />
                  <TextInput
                    style={registerstyle.Secondttxt}
                    // placeholder="Organization Name"
                    // placeholderTextColor='grey'
                    autoCapitalize="none"
                    ref={OrgInputRef}
                    returnKeyType="next"
                    onSubmitEditing={() =>
                      emailInputRef.current && emailInputRef.current.focus()
                    }
                    blurOnSubmit={false}
                  />
                </View>
                <View style={registerstyle.SecondLabelRow}>
                  <Text style={registerstyle.lblEmail}>{strings.RegisterlblEmail}</Text>
                  <Text style={registerstyle.lblMobileNo}>{strings.RegisterlblMobileNo}</Text>
                </View>
                <View style={registerstyle.SecondRow}>
                  <TextInput
                    style={registerstyle.Firsttxt}
                    //placeholder="Email Address"
                    // placeholderTextColor='grey'
                    autoCapitalize="none"
                    ref={emailInputRef}
                    keyboardType="email-address"
                    returnKeyType="next"
                    onSubmitEditing={() =>
                      mobileNonputRef.current && mobileNonputRef.current.focus()
                    }
                    blurOnSubmit={false}
                  />

                  <TextInput
                    style={registerstyle.Secondttxt}
                    //placeholder="Mobile Number"
                    keyboardType='numeric'
                    // placeholderTextColor='grey'
                    autoCapitalize="none"
                    ref={mobileNonputRef}
                    returnKeyType="next"
                    onSubmitEditing={() =>
                      passwordInputRef.current && passwordInputRef.current.focus()
                    }
                    blurOnSubmit={false}
                  />
                </View>
                <View style={registerstyle.ThirdLabelRow}>
                  <Text style={registerstyle.lblPassword}>{strings.RegisterlblPassword}</Text>
                </View>
                <View style={registerstyle.ThirdRow}>
                  <TextInput
                    style={registerstyle.Thirdttxt}
                    //placeholder="Password"
                    secureTextEntry={true}
                    //placeholderTextColor='grey'
                    autoCapitalize="none"
                    ref={passwordInputRef}
                    returnKeyType="next"
                    onSubmitEditing={Keyboard.dismiss}
                    blurOnSubmit={false}
                  />
                </View>
                <View style={registerstyle.ButtonRow}>
                  <TouchableOpacity style={registerstyle.buttonStyle}>
                    <Text style={registerstyle.buttonText}>{strings.RegisterButtonTitle}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
