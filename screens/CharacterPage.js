import React from 'react';
import {
	Image, 
	View, 
	StyleSheet, 
	Text,
	ScrollView,
	LayoutAnimation,
	Platform,
} from 'react-native';


import Strings from '../Strings';


export default class CharacterPage extends React.Component {


	getSectionLabel = ( key ) => {
		
		const { language } = this.props;

		var value = Strings[ key ][ language ];
		if ( value ){
			value = value.toUpperCase();
		}

		return value || '';
		
	}

	renderSection = ( key ) => {

		const info = this.props.character[ key ];

		return (

			<Text style={[styles.text, styles.sectionLabel]}>
      			{ this.getSectionLabel( key )} <Text style={styles.detail}>{info}</Text>
      </Text>

		);

	};


	render(){


    const { character, language } = this.props;
    if ( character ){
      const { name, image } = character;
    }
		
    if ( character ){

      return (

      <View><Text>HAVE CHARACTER DATA</Text></View> 
           
          
      );

    } else {

      return ( <View><Text>SADLY, NO CHARACTER DATA</Text></View> );

    }

		
	}
}

 // <View style={styles.imageContainer}>
 //              <Image source={{ uri: image }} style={styles.image}/>
 //              <Text style={styles.heroName}>{name.toUpperCase()}</Text>
 //            </View>

 //            <ScrollView style={styles.infoContainer}>
              
 //              { this.renderSection( 'name' )}
 //              { this.renderSection( 'identity' )}
 //              { this.renderSection( 'age' )}

 //              <View style={styles.divider}></View>

 //              { this.renderSection( 'bio' )}
 //              { this.renderSection( 'powers' )}

 //              <View style={{ height: 30, backgroundColor: 'transparent' }}></View>

 //            </ScrollView>


const styles = StyleSheet.create({
 
  imageContainer: {
  	height: '33%',
  	width: '100%',
  	justifyContent: 'center',
  	alignItems: 'center',
  },
  image: {
  	width: '100%',
  	height: '100%',
  	resizeMode: 'cover',
  },
  infoContainer: {
  	height: '67%',
  	width: '100%',
  	backgroundColor: '#F9F9F9',
  	paddingLeft:15,
  	paddingRight:15,
  	paddingTop:20,
  },
  text: {
    color: '#F9F9F9',
    fontSize: 14,
  },
  sectionLabel: {
  	fontWeight: 'bold',
  	color: '#222',
  	paddingBottom: 5,
  	paddingTop:5,
  },
  heroName: {
  	fontWeight: 'normal',
  	fontSize: 20,
  	color: '#585555',
  	position: 'absolute',
  	top: 5,
  	right:5,
  },
  detail: {
  	fontWeight: 'normal',
  	color: '#585555',
  	paddingBottom: 5,
  },
  divider: { 
  	borderBottomWidth: StyleSheet.hairlineWidth, 
  	borderBottomColor: '#585555', 
  	height: 5, 
  	marginBottom: 5  
  },

 
});