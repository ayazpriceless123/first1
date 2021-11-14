import React, {Component} from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';

import ListItem from './components/ListItem';

export default class App extends Component {

state = {
    placeName: '',
    places: []
}

placeSubmitHandler = () => {
    if(this.state.placeName.trim() === '') {
    return;
    }
    this.setState(prevState => {
      return {
            places: prevState.places.concat({
        key: Math.random(), 
        value: prevState.placeName
       })
       }
   });
   this.setState({
      placeName: ''
   });	
}

placeNameChangeHandler = (value) => {
  this.setState({
      placeName: value
    });    
}

placesOutput = () => {
   return (
    <FlatList style = { styles.listContainer }
       data = { this.state.places }
       keyExtractor={(item, index) => index.toString()}
           renderItem = { info => (
          <ListItem 
                placeName={ info.item.value }
                        onItemPressed={() => this.onItemDeleted(info.item.key)}
           />
         )}
    />
    )
}

onItemDeleted = (key) => {
   this.setState(prevState => {
      return {
         places: prevState.places.filter(place => {
            return place.key !== key;
      })
    }
    })
}

render() {
   return (
    <View style={ styles.container }>
       <View style = { styles.inputContainer }>
        <TextInput 
           placeholder = "Address"
           style = { styles.placeInput }
                   value = { this.state.placeName }
           onChangeText = { this.placeNameChangeHandler }multiline={true} returnKeyType='none'
        ></TextInput>
        <Button title = 'Add Address +' 
           style = { styles.placeButton }
           onPress = { this.placeSubmitHandler }
        />
        </View>
 
            <View style = { styles.listContainer }>
        { this.placesOutput() }
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
      container: {
    	  paddingTop: 30,
    	  justifyContent: 'flex-start',
    	  alignItems: 'center',
      },
      Textinput:{
fontSize:30,
fontWeight:'bold',
      },
      inputContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '80%',
      },
      placeInput: {
      width: '70%',
      fontSize:24,
      fontWeight:'bold',
      },
      placeButton: {
      width: '30%',
      marginLeft:"15%",
      marginRight:"15%"
      },
      listContainer: {
      width: '90%',
       
      },
      searchSection: {
         flex: 1,
         flexDirection: 'row',
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#fff',
     },
     searchIcon: {
         padding: 10,
     },
     input: {
         flex: 1,
         paddingTop: 10,
         paddingRight: 10,
         paddingBottom: 10,
         paddingLeft: 0,
         backgroundColor: '#fff',
         color: '#424242',
     },
});