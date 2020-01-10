import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  componentDidMount () {
    return fetch('http://localhost:3000/hotels')
      .then ((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.hotels,
        })
      })
    .catch((error) => {
        console.log(error)
    })  
  }

  render () {
    if (this.state.isLoading){
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      )
    } else {
      let hotels = this.state.dataSource.map((val, key) => {
        return <View key={key} style={styles.item}><Text>{val.name}</Text>
        </View>
      })
      return (
        <View style={styles.container}>
          {hotels}
        </View>
      )
    }  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  item: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  }
})
