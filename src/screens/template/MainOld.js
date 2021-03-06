import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Share
} from 'react-native';
import { images, colors,strings } from '../../themes'
import { templatestyle } from '../../styles'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Popover, PopoverController } from 'react-native-modal-popover';

export default class MainOld extends Component {
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
      myColor: "#ba68c8",
      menuIsSelect: false
      // likedQ: false,   
      //    uri: require('../../assets/images/template/like.png') 
    };
  }

  onShare() {
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
  };

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


  // _ifLiked = () => { 
  //   this.setState({
  //     likedQ: true, 
  //     uri: require('../../assets/images/template/dislike.png')
  //   })
  // }  

  // handleClick = () => {
  //   if (this.state.myColor === '#ba68c8')
  //   {
  //      this.setState({myColor: 'red'});
  //   } else {
  //      this.setState({myColor: '#ba68c8'});
  //   }
  // }

  handleToggleSelect = (item) => {
    const { setMenuIsSelect } = this.props;
    // alert(item.id)
    this.setState({
      menuIsSelect: !this.state.menuIsSelect
    }, () => {
      this.state.menuIsSelect ? item : null;
    });
  }



  renderRow = (item, index) => {
    const { menuIsSelect } = this.state;
    const { menu } = this.props;
    // console.log(item.id);
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
                {/* <Image
                  style={templatestyle.heartshare}
                  source={images.like}
                />  */}
                <Icon name="heart" size={25} color={menuIsSelect ? 'red' : colors.templatecardiconColors}
                  style={templatestyle.heartshare} onPress={() => this.handleToggleSelect(item.id)} />

                {/* <TouchableOpacity onPress={() => this._ifLiked()}> 
                    <Image style={{width: 20 , height: 20}} source={this.state.uri} /> 
                </TouchableOpacity>  color={this.state.myColor}  onPress={() => this.handleClick()} 
                onPress = {() => this.handleToggleSelect({ item })} */}


              </TouchableOpacity>
              <TouchableOpacity style={templatestyle.btnicon} onPress={() => { this.onShare() }}>
                {/* <Image
                  style={templatestyle.heartshare}
                  source={images.share}
                /> */}
                <Icon name="source-fork" size={25} color={colors.templatecardiconColors}
                  style={templatestyle.heartshare} />
              </TouchableOpacity>
              <TouchableOpacity style={templatestyle.btnicon} onPress={() => this.props.navigation.navigate('CutomerDetails')}>
                {/* <Image
                  style={templatestyle.eyeImgView}
                  source={images.view}
                /> */}
                <Icon name="eye" size={25} color={colors.templatecardiconColors}
                  style={templatestyle.heartshare} />
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

          <FlatList style={templatestyle.container}
            data={this.state.data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              this.renderRow(item)
            )}
          />

          <View style={templatestyle.app}>
            <PopoverController>
              {({ openPopover, closePopover, popoverVisible, setPopoverAnchor, popoverAnchorRect }) => (
                <React.Fragment>

                  <TouchableOpacity ref={setPopoverAnchor} onPress={openPopover}
                    style={templatestyle.tmpbtn}>
                    <View>
                      <Icon name="pencil-outline" size={25} color={colors.templatebtniconColors} style={templatestyle.tmplbtncon} />
                    </View>
                  </TouchableOpacity>
                  <Popover
                    contentStyle={templatestyle.content}
                    arrowStyle={templatestyle.arrow}
                    backgroundStyle={templatestyle.background}
                    visible={popoverVisible}
                    onClose={closePopover}
                    fromRect={popoverAnchorRect}
                    supportedOrientations={['portrait', 'landscape']}>

                    <TouchableOpacity style={templatestyle.ModalFirstBtn} onPressOut={closePopover} onPress={() => { this.props.navigation.navigate('Createpost') }}>
                      <Text style={templatestyle.Modaltxt}>{strings.ModalFirsttxtTitle}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={templatestyle.ModalSecondThirdBtn} onPressOut={closePopover} onPress={() => { this.props.navigation.navigate('Createpost') }}>
                      <Text style={templatestyle.Modaltxt}>{strings.ModalSecondtxtTitle}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={templatestyle.ModalSecondThirdBtn} onPressOut={closePopover} onPress={() => { this.props.navigation.navigate('Createpost') }}>
                      <Text style={templatestyle.Modaltxt}>{strings.ModalThirdtxtTitle}</Text>
                    </TouchableOpacity>

                  </Popover>
                </React.Fragment>
              )}
            </PopoverController>
          </View>
          {/* <TouchableOpacity onPress={() => this.props.navigation.navigate('Createpost')}
            style={templatestyle.tmpbtn}>
            <View>
              <Icon name="pencil-outline" size={25} color={colors.templatebtniconColors} style={templatestyle.tmplbtncon} />
            </View>
          </TouchableOpacity> */}
        </View>
      </SafeAreaView>
    );
  }
}

