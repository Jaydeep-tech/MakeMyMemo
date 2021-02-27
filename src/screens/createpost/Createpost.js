// Import React and Component
import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, TextInput, } from 'react-native';
import { createPoststyle } from '../../styles';
import CheckBox from '@react-native-community/checkbox'
import { images, colors, strings } from '../../themes'
import ImagePicker from 'react-native-image-crop-picker';
const Createpost = () => {
    const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
    const [image, setImage] = useState('');
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
        <SafeAreaView style={createPoststyle.safeArea}>
            <ScrollView>
                <View style={createPoststyle.container}>
                    <View style={createPoststyle.cardsWrapper}>
                        <View style={createPoststyle.card}>
                            <View style={createPoststyle.cardInfo}>
                                <Image style={createPoststyle.sliderImage} source={images.lovestory} resizeMode="cover" />


                                {/* Inner Card Tag Start     */}

                                <View style={createPoststyle.innercard}>
                                    <View style={createPoststyle.ineercardInfo}>
                                        <View style={createPoststyle.writerMemory}>
                                            <Text style={createPoststyle.writerMemoryText}>{strings.writerMemoryText}</Text>
                                        </View>
                                        <View>
                                            <Text style={createPoststyle.storyTitle1}>{strings.storyTitle1}</Text>
                                            <TextInput
                                                style={createPoststyle.firsttxt}
                                                placeholder={strings.storyTitleplaceholder}
                                                placeholderTextColor={colors.TextInputplaceholderTextColor}
                                                autoCapitalize="none"
                                                returnKeyType="next"
                                                underlineColorAndroid={colors.TextInputunderlineColorAndroid}
                                                blurOnSubmit={false}
                                            />
                                        </View>
                                        <View>
                                            <Text style={createPoststyle.StoryTitle2}>{strings.storyTitle2}</Text>
                                            <TextInput
                                                style={createPoststyle.multiinput}
                                                placeholderTextColor={colors.TextInputplaceholderTextColor}
                                                autoCapitalize="none"
                                                returnKeyType="next"
                                                multiline={true}
                                                blurOnSubmit={false}
                                            />
                                        </View>
                                        <View>
                                            <Text style={createPoststyle.StoryTitle3}>{strings.storyTitle3}</Text>
                                            <TouchableOpacity onPress={() => choosePhotoFromLibrary()} style={createPoststyle.btnfileupload}>
                                                <Text>{strings.CreatePostbtnFileUploadTitle} <Image source={{ uri: image.path }} /></Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={createPoststyle.MainChkRow}>
                                            <CheckBox
                                                disabled={false}
                                                value={toggleCheckBox1}
                                                onValueChange={(newValue) => setToggleCheckBox1(newValue)}
                                            />
                                            <View >
                                                <Text style={createPoststyle.ChkTextRow}>{strings.ChkTextTitle1}</Text>
                                            </View>
                                        </View>
                                        <View style={createPoststyle.SecondChkRow}>
                                            <CheckBox
                                                disabled={false}
                                                value={toggleCheckBox2}
                                                onValueChange={(newValue) => setToggleCheckBox2(newValue)}
                                            />
                                            <View >
                                                <Text style={createPoststyle.ChkTextRow}>{strings.ChkTextTitle2}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <TouchableOpacity style={createPoststyle.buttonStyle}>
                                        <Text style={createPoststyle.buttonText}>{strings.buttonTextTitle}</Text>
                                    </TouchableOpacity>
                                </View>
                                {/* Inner Card Tag End     */}

                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Createpost;
