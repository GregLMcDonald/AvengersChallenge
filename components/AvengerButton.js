import React from 'react';
import {
	TouchableOpacity,
	Image,
	StyleSheet,
	View,
} from 'react-native';


export default AvengerButton = ( { onPress } ) => {

	return (
		<View style={styles.container}>
			<TouchableOpacity 
				onPress={onPress}
				activeOpacity={0.7}
			>
				<View style={styles.background}>
					<Image source={ require( '../assets/avengersIcon.png' ) } style={styles.image} />
				</View>;
			</TouchableOpacity>
		</View>
	);

};

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#fff',
		width: 70,
		height: 70,
		borderRadius: 35,
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		backgroundColor: '#111',
		width: 70,
		height: 70,
		borderRadius: 35,
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
