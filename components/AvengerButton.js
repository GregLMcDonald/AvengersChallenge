/*
	Renders a round off-white button with the Avengers logo
	in the center.  This is wrapped in TouchableOpacity which handles
	touch events.
*/


import React from 'react';
import {
	TouchableOpacity,
	Image,
	StyleSheet,
	View,
} from 'react-native';

const BUTTON_SIZE = 70;


export default AvengerButton = ( { onPress } ) => {

	return (
		<View style={styles.container}>
			<TouchableOpacity 
				onPress={onPress}
				activeOpacity={0.7}
			>
				<View style={styles.background}>
					<Image source={ require( '../assets/avengersIcon.png' ) } style={styles.image} />
				</View>
			</TouchableOpacity>
		</View>
	);

};

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#fff',
		width: BUTTON_SIZE,
		height: BUTTON_SIZE,
		borderRadius: 0.5 * BUTTON_SIZE,
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		backgroundColor: '#111',
		width: BUTTON_SIZE,
		height: BUTTON_SIZE,
		borderRadius: 0.5 * BUTTON_SIZE,
		alignItems: 'center',
		justifyContent: 'center',
		elevation: 5,
		shadowColor: '#111',
    	shadowOffset: { width: 1, height: 1 },
    	shadowOpacity: 0.8,
    	shadowRadius: 1,  
	},
	image: {
		width: '80%',
		height: '80%',
		tintColor: '#111',
		resizeMode: 'contain',
	}
})
