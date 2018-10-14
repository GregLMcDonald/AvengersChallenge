import {
	Text,
	View,
	StyleSheet,
} from 'react-native';
import React from 'react';

import PropTypes from 'prop-types';

const LANGUAGES = [
	{ 
		label: 'English',
		code: 'en',
	},
	{
		label: 'Français',
		code: 'fr',
	}
];


export default class LanguageToggle extends React.Component {

	static propTypes = {
		onChange: PropTypes.func.isRequired;
	};

	static defaultProps = {
		onChange: ()=>{},
	};

	state = {
		currentlySelected: 'en',
	};

	render(){

		return (



		);


	}
}


const styles = StyleSheet.create({
	container: {

	},
	button: {

	},
	buttonText: {

	},
})