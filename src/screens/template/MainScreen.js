import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { images, colors } from '../../themes'
import { templatestyle } from '../../styles'
import ActionButton from 'react-native-action-button';

export default class MainScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
      selectedItem: 'null',
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  renderRow = (item) => {
    return (
      <View style={templatestyle.cardsWrapper}>
        <View style={templatestyle.card}>
          <View style={templatestyle.cardImgWrapper}>
            <Image style={templatestyle.cardImg} source={{ uri: item.picture.large }} resizeMode="cover" />
          </View>
          <View style={templatestyle.cardInfo}>
            <Text style={templatestyle.cardTitle}>{item.name.first} {item.name.last}</Text>
            <Text style={templatestyle.cardDetails}>{item.email} </Text>

            <View style={templatestyle.tmpl}>
              <TouchableOpacity style={templatestyle.btnicon}>
                <Image
                  style={templatestyle.heartshare}
                  source={images.like}
                />
              </TouchableOpacity>
              <TouchableOpacity style={templatestyle.btnicon}>
                <Image
                  style={templatestyle.heartshare}
                  source={images.share}
                />
              </TouchableOpacity>
              <TouchableOpacity style={templatestyle.btnicon} onPress={() => this.props.navigation.navigate('CutomerDetails')}>
                <Image
                  style={templatestyle.eyeImgView}
                  source={images.view}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      
    );
  }

  render() {
    return (
      <SafeAreaView style={templatestyle.container}>
        <View style={templatestyle.container}>
       
          <FlatList  style={templatestyle.container}
            data={this.state.data}
            renderItem={({ item }) => (
              this.renderRow(item)
            )}
          />
          <ActionButton buttonColor={colors.actionbtnColor} onPress={() => this.props.navigation.navigate('Createpost')}>
            {/* <ActionButton.Item buttonColor={colors.actionbtnColor}> */}
              {/* <ActionButton.Item buttonColor='#9b59b6' onPress={() => console.log("notes tapped!")}> */}

              {/* <Image
                source={images.actionbtn}
                resizeMode="contain"
                style={templatestyle.actionButtonIcon}
              />
            </ActionButton.Item> */}
          </ActionButton>
        </View>
      </SafeAreaView>
    );
  }
}

