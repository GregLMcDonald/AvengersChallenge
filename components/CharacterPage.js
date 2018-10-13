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
import { Constants } from 'expo';

const POWERS_LORUM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit leo sed tortor pulvinar feugiat. Donec mattis semper ex vitae venenatis. Aenean at consectetur purus, nec gravida ipsum. Proin vel tincidunt sapien, ac pulvinar sem. Mauris iaculis augue id ligula molestie hendrerit. Maecenas ante felis, tempor nec justo nec, posuere dignissim dui. Maecenas interdum sit amet lacus sit amet accumsan.\n\nPhasellus lorem turpis, efficitur vitae dignissim at, tincidunt nec massa. Curabitur nec pellentesque odio. Integer finibus magna ut scelerisque ornare. Praesent eget massa hendrerit, gravida leo vitae, tempor ligula. Duis nec sapien elit. Donec neque ligula, dapibus ac dolor eget, eleifend hendrerit arcu. Suspendisse ac felis eu ipsum commodo tristique. Suspendisse molestie porta magna et molestie. Nullam a felis tristique.";
const BIO_LORUM_IPSUM = "Ut felis odio, ornare nec leo id, tempor luctus arcu. Suspendisse semper finibus sapien molestie varius. Sed ut turpis fringilla, faucibus sapien vitae, dictum urna. Maecenas hendrerit, mi vitae gravida pretium, enim dui laoreet ipsum, id ullamcorper lorem massa at justo. Suspendisse a vehicula nisl. Donec molestie ullamcorper tristique. Nam.";

export default class CharacterPage extends React.Component {

	componentWillReceiveProps( nextProps ){


		const { bio } = this.props;
		const newBio = nextProps.bio;


		if ( bio !== newBio ){

			const animation = LayoutAnimation.create(
				500,
				LayoutAnimation.Types.easeInEaseOut,
    			LayoutAnimation.Properties.opacity,
			);
  		


  			LayoutAnimation.configureNext(animation);
		}
	}


	renderBio(){
		const { bio } = this.props;

		if (bio){

			return <Text style={[styles.text, styles.detailText]}>{bio}</Text>;

		} 
	}
	renderBioLI(){
		const { bio } = this.props;

		if (!bio){
			return <Text style={[styles.text, styles.detailText]}>{BIO_LORUM_IPSUM}</Text>;
		}

	}


	render(){

		const { name, identity, bio } = this.props;
		

		return (
      		<View style={styles.container}>
      			<View style={styles.imageContainer}>
      				<Image
      					source={ require( '../assets/glamour_Falcon.jpg')}
      					style={styles.image}
      				/>
      				{name &&
      					<Text style={styles.heroName}>{name.toUpperCase()}</Text>
      				}
      			</View>
      			<ScrollView 
      				style={styles.scrollContainer}
      				alwaysBounceVertical={true}
      			>
      				{name &&
      					<Text style={[styles.text, styles.titleText]}>NOM <Text style={styles.detailText}>{name}</Text></Text>
      				}
      				{identity &&
      					<Text style={[styles.text, styles.titleText]}>VÉRITABLE IDENTITÉ <Text style={styles.detailText}>{identity}</Text></Text>
      				}
      				<Text style={[styles.text, styles.titleText]}>ÂGE <Text style={styles.detailText}>45</Text></Text>
      				<View style={styles.divider}></View>
      				<Text style={[styles.text, styles.titleText]}>BIOGRAPHIE </Text>
      		
      				{ this.renderBio() }
      				{ this.renderBioLI() }
      				
      				<Text style={[styles.text, styles.titleText]}>POUVOIRS</Text>
      				<Text style={[styles.text, styles.detailText]}>{POWERS_LORUM_IPSUM}</Text>
      				<View style={{ height: 30, backgroundColor: 'transparent' }}></View>
      			</ScrollView>
      		</View>
    	);
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
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
  scrollContainer: {
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
  titleText: {
  	fontWeight: 'bold',
  	color: '#222',
  	paddingBottom: 5,
  	paddingTop:5,
  },
  heroName: {
  	fontWeight: 'bold',
  	fontSize: 20,
  	color: '#585555',
  	position: 'absolute',
  	top: 5,
  	right:5,
  },
  detailText: {
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