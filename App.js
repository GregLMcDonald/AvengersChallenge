import React from 'react';
import { 
  NativeModules, 
  Platform,
  View,
  StyleSheet,
} from 'react-native';

import { Constants } from 'expo';

import CharacterPage from './screens/CharacterPage';

import Character from './utils/Character';

import { fetchCharacter } from './utils/HouseAPI';


if ( Platform.OS === 'android' ){
  const { UIManager } = NativeModules;
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const TEST_CHARACTER_NAME = 'Falcon';
const DEFAULT_LANGUAGE = 'en';

export default class App extends React.Component {


  state = {
    character: null,
    language: DEFAULT_LANGUAGE,
  }

 
//  async componentDidMount(){

  //   const character = await fetchCharacter( TEST_CHARACTER_NAME );

  //   if ( character ){
  //     this.setState( { character: character });
  //   }
  //}


  
  render() {

    const { character, language } = this.state;   
      
    return (

      <View style={styles.container}>
        <CharacterPage character={character} language={language} />
      </View>
      
    );

  }

 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
