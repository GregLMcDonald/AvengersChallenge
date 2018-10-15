import React from 'react';
import {
  NativeModules,
  Platform,
  View,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import { Constants } from 'expo';

import CharacterPage from './screens/CharacterPage';

import { fetchCharacter } from './utils/api';


if (Platform.OS === 'android') {
  const { UIManager } = NativeModules;
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const TEST_CHARACTERS = [ 
  'Iron Man', 
  'Captain America', 
  'Black Widow', 
  'Falcon', 
  'Thor'
];
const DEFAULT_LANGUAGE = 'en';

export default class App extends React.Component {
  state = {
    character: null,
    characterIndex: 0,
    language: DEFAULT_LANGUAGE,
  }

  async loadCharacter(){
    const { characterIndex } = this.state;
    const character = await fetchCharacter( TEST_CHARACTERS[ characterIndex ] );
   if (character){
    this.setState({ character: character,});
   }
  }

  componentDidMount() {
    this.loadCharacter(); 
  }

  handleAvengerButtonPress = async () => {

    const { characterIndex } = this.state;
    var newCharacterIndex = characterIndex + 1;
    if ( newCharacterIndex >= TEST_CHARACTERS.length ){
      newCharacterIndex = 0;
    }
    this.setState({ characterIndex: newCharacterIndex, character: null, }, this.loadCharacter );


  }


  render() {
    const { character, language } = this.state;

    return (
        
      <View style={styles.container}>
        
        <CharacterPage
          character={character} 
          language={language} 
          onAvengerButtonPress={this.handleAvengerButtonPress}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#111',
  },
 
});
