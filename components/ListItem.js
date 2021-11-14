import React from 'react';
import { View, Text,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
 
const ListItem = (props) => {
    
    return (
        <TouchableOpacity onPress={ props.onItemPressed }>
            <View style = { styles.listItem }>
            <TextInput  
           placeholder = "Home"  
           style = { styles.placeInput }/>   
                <Text    style = { styles.Textinput }>{ props.placeName }</Text>
            </View>
            
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
 
        padding: 5,
        marginBottom: 10,
        backgroundColor: '#eee'
    },
    Textinput:{
      
        fontSize:20,
      
              },
       placeInput:{   
              fontSize:18,
               
              fontWeight:'bold',}
});

export default ListItem;