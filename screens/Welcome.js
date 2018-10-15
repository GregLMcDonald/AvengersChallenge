import React from 'react';
import {
	View,
	Image,
	TouchableOpacity,
	Text,
	ActivityIndicator,
	StyleSheet,
} from 'react-native';

import Strings from '../Strings';



export default function Welcome({ onPress, character }){

	return (
		 <View style={styles.welcomeScreen}>

          <View style={styles.imageView}>
            <Image
              source={ require( '../assets/avengers-silhouette.png') }
              style={styles.image}
            />
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={onPress}
          >
            <Text style={styles.buttonText}>
              { Strings[ 'go' ][ language ].toUpperCase() }
            </Text>
          </TouchableOpacity>
        
          <ActivityIndicator animating={false} />
          
        </View>
	);

}

const styles = StyleSheet.create({
welcomeScreen: {
    flex: 1,
    backgroundColor: '#111',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageView: {
    width: '90%',
    height: '25%',
    margin:20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    height: '25%',
    width: '90%',
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#eee',
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor: '#eee',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '900',
    fontStyle: 'italic',
  }
})

