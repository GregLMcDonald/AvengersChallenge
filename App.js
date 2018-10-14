import React from 'react';
import { 
  NativeModules, 
  Platform,
  View,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator,
  LayoutAnimation,
  TouchableOpacity,
  Modal,
} from 'react-native';

import { Constants } from 'expo';

import CharacterPage from './screens/CharacterPage';
import Character from './utils/Character';

import { fetchCharacter } from './utils/MarvelAPI';
import { fetchCharacter } from './utils/HouseAPI';


if ( Platform.OS === 'android' ){
  const { UIManager } = NativeModules;
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const TEST_CHARACTER_NAME = 'Falcon';
const TEST_CHARACTER_IDENTITY = 'Samuel Thomas “Sam” Wilson';
const TEST_CHARACTER_IMAGE = require( './assets/glamour_Falcon.jpg');
const POWERS_LORUM_IPSUM = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit leo sed tortor pulvinar feugiat. Donec mattis semper ex vitae venenatis. Aenean at consectetur purus, nec gravida ipsum. Proin vel tincidunt sapien, ac pulvinar sem. Mauris iaculis augue id ligula molestie hendrerit. Maecenas ante felis, tempor nec justo nec, posuere dignissim dui. Maecenas interdum sit amet lacus sit amet accumsan.\n\nPhasellus lorem turpis, efficitur vitae dignissim at, tincidunt nec massa. Curabitur nec pellentesque odio. Integer finibus magna ut scelerisque ornare. Praesent eget massa hendrerit, gravida leo vitae, tempor ligula. Duis nec sapien elit. Donec neque ligula, dapibus ac dolor eget, eleifend hendrerit arcu. Suspendisse ac felis eu ipsum commodo tristique. Suspendisse molestie porta magna et molestie. Nullam a felis tristique.";

const DEFAULT_LANGUAGE = 'en';

export default class App extends React.Component {


  state = {
    character: null,
    language: DEFAULT_LANGUAGE,
    modalVisible: false,
  }

 
  async componentDidMount(){

   
    const remoteCharacterData = await fetchCharacter( TEST_CHARACTER_NAME );

    if ( remoteCharacterData !== null ){

      const newCharacter = new Character( TEST_CHARACTER_NAME, TEST_CHARACTER_IDENTITY );
      newCharacter.bio = remoteCharacterData.bio;
      newCharacter.image = TEST_CHARACTER_IMAGE;
      newCharacter.powers = POWERS_LORUM_IPSUM;
      this.setState( { character: newCharacter });

    }


  }

  
  render() {

    const { character, language } = this.state;   
      
    return (

      <View style={styles.container}>
        <CharacterDetail  />
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
