import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'

class EventList extends Component {
  state = {
    hotels: []  
  } 
  
  componentDidMount(){
     const hotels = require('API/data').hotels
     this.setState({ hotels })
  }
  render () {
    return (
      <FlatList 
        data={this.state.hotels}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
    )
  }
}

export default EventList
