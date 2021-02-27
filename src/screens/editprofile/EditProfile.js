// Import React and Component
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView, Button } from 'react-native';
import { ediprofilestyle } from '../../styles';
import { images, strings, colors } from '../../themes';
import ImagePicker from 'react-native-image-crop-picker';
import RBSheet from "react-native-raw-bottom-sheet";

const EditProfile = () => {
  //const [image, setImage] = useState('../../assets/images/customers/Profile.png');
  const [image, setImage] = useState('https://i.ibb.co/yFkztxK/Profile.png');
  const refRBSheet = useRef();

  useEffect(() => {
    setImage(image);
    console.log(image);
  }, [image]);


  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      //console.log(image);
      setImage(image.path);
      // this.bs.current.snapTo(1);
    });
  }

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      //console.log(image);
      setImage(image.path);
    });
  }

  return (
    <SafeAreaView style={ediprofilestyle.safeArea}>
      <ScrollView>
        <View style={ediprofilestyle.container}>
          <View style={ediprofilestyle.header}>
            <Image style={ediprofilestyle.avatar} source={{ uri: image }} />
            <TouchableOpacity style={ediprofilestyle.btncameraavatar} onPress={() => refRBSheet.current.open()}>
              <Image style={ediprofilestyle.cameraavatar} source={images.ProfilebtnIcon} />
            </TouchableOpacity>
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

          <View style={ediprofilestyle.BottomSheetView}>
            <RBSheet
              ref={refRBSheet}
              closeOnDragDown={true}
              closeOnPressMask={true}
              dragFromTopOnly={true}
              //height={400}
              customStyles={{
                container: {
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                },
                draggableIcon: {
                  backgroundColor: colors.EditProfileBottomSheetbgColors
                }
              }}
            >
              <View style={ediprofilestyle.panel}>
                <View style={ediprofilestyle.panelViewCenter}>
                  <Text style={ediprofilestyle.panelTitle}>{strings.EditProfileBottomSheetTitle1}</Text>
                  <Text style={ediprofilestyle.panelSubtitle}>{strings.EditProfileBottomSheetTitle2}</Text>
                </View>
                <TouchableOpacity onPress={() => takePhotoFromCamera()} style={ediprofilestyle.panelButton}>
                  <Text style={ediprofilestyle.panelButtonTitle}>{strings.EditProfileBottomSheetTitle3}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => choosePhotoFromLibrary()} style={ediprofilestyle.panelButton}>
                  <Text style={ediprofilestyle.panelButtonTitle}>{strings.EditProfileBottomSheetTitle4}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={ediprofilestyle.panelButton}
                  onPress={() => refRBSheet.current.close()}>
                  <Text style={ediprofilestyle.panelButtonTitle}>{strings.EditProfileBottomSheetTitle5}</Text>
                </TouchableOpacity>
              </View>
            </RBSheet>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default EditProfile;
