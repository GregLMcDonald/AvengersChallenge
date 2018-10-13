import React from 'react';
import { NativeModules, Platform } from 'react-native';

import CharacterPage from './components/CharacterPage';
import { fetchCharacter } from './utils/MarvelAPI';

import Data from './Data';


if ( Platform.OS === 'android' ){
  const { UIManager } = NativeModules;
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const testCharacter = {
      name: 'Iron Man',
      identity: 'Anthony Edward “Tony” Stark',
      bio: '',
};

export default class App extends React.Component {


  state = {
    character: testCharacter,
  }

 

  async componentDidMount(){

    const remoteCharacterData = await fetchCharacter( testCharacter.name );

    if ( remoteCharacterData !== null ){
      const newCharacter = { ...testCharacter, bio: remoteCharacterData.bio };
      this.setState( { character: newCharacter });

    }

  }




  render() {

    const { name, identity, bio } = this.state.character;

    return <CharacterPage name={name} identity={identity} bio={bio}/>;
    
  }
}

