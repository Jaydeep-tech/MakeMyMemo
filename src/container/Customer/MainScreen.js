import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';

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

  // onPressAction = (rowItem) => {
  //   //console.log('ListItem was selected');
  //   //console.dir(rowItem);
  //   this.setState({
  //     selectedItem: rowItem.id.value
  //   });
  // }


  renderRow = (item) => {
    return (
      <View style={styles.cardsWrapper}>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image style={styles.cardImg} source={{ uri: item.picture.large }} resizeMode="cover" />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>{item.name.first} {item.name.last}</Text>
            <Text style={styles.cardDetails}>{item.email} </Text>

            {/* <Text style={{textAlign:'right',paddingTop:25}} >Views </Text> */}

            <View style={{ flexDirection: "row", padding: 30 }}>
              <TouchableOpacity style={styles.btnicon}>
                <Image
                  style={styles.heartshare}
                  source={require('../../assets/images/customers/like.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnicon}>
                <Image
                  style={styles.heartshare}
                  source={require('../../assets/images/customers/Share.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnicon}>
                <Image
                  style={styles.eyeImgView}
                  source={require('../../assets/images/customers/View3.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* <View style={styles.cardView}>
            
            <TouchableOpacity>
                    <Text style={{ color: '#ba68c8',textAlign:'center',color:'#ffff',fontWeight:'bold' }}>View All</Text>
                </TouchableOpacity>
        </View> */}

      </View>
    );
  }

  render() {
    return (
      <FlatList style={styles.container}
        data={this.state.data}
        renderItem={({ item }) => (
          this.renderRow(item)
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  cardsWrapper: {
    //marginTop:20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 120,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',

  },
  cardView: {
    flex: 1,
    padding: 0,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 1,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: '#ba68c8',

  },
  cardTitle: {
    fontWeight: 'bold',
    color: 'black'
  },
  cardDetails: {
    fontSize: 12,
    color: '#444'
  },
  iconView: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center"
  },

  heartshare: {
    height: 20,
    width: 20,
    resizeMode: "contain"
  },

  eyeImgView: {
    height: 30,
    width: 30,
    resizeMode: "contain",
    marginVertical: -4,
  },
  btnicon: {
    padding: 15,
    marginHorizontal: 5,
  }
});