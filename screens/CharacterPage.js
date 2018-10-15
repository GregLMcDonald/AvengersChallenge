import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  ScrollView,
  LayoutAnimation,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

import PropTypes from 'prop-types';
import Strings from '../Strings';
import AvengerButton from '../components/AvengerButton';


const styles = StyleSheet.create({

  imageContainer: {
    height: '33%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  placeholderContainer: {
    height: '33%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  placeholderImage: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  infoContainer: {
    height: '67%',
    width: '100%',
    backgroundColor: '#F9F9F9',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
  },
  text: {
    color: '#F9F9F9',
    fontSize: 18,
  },
  sectionLabel: {
    fontWeight: 'bold',
    color: '#222',
    paddingBottom: 5,
    paddingTop: 5,
  },
  heroName: {
    fontWeight: 'normal',
    fontSize: 20,
    color: '#585555',
    position: 'absolute',
    top: 5,
    right: 5,
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
    marginBottom: 5,
  },
  avengerButton: {
    position: 'absolute',
    top: '33%',
    right: 30,
    alignSelf: 'center',
  },
 
});


export default class CharacterPage extends React.Component {
  static propTypes = {
    language: PropTypes.string.isRequired,
    onAvengerButtonPress: PropTypes.func,
    character: PropTypes.shape({
      name: PropTypes.string.isRequired,
      identity: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      bio: PropTypes.string.isRequired,
      powers: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    onAvengerButtonPress: ()=>{},
  }


  componentDidUpdate( prevProps ){
    if (  this.props.character !== prevProps.character ){

      const animation = LayoutAnimation.create( 
        500,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.opacity,
      );
      LayoutAnimation.configureNext(animation);
    }
  }

  getSectionLabel = (key) => {
    const { language } = this.props;

    let value = Strings[key][language];
    if (value) {
      value = value.toUpperCase();
    }

    return value || '';
  }


  renderSection = (key) => {
    const { character } = this.props;
    

    if ( character && character[key] ){

      const info = character[key];

      return (

        <Text style={[styles.text, styles.sectionLabel]}>
          { this.getSectionLabel(key)}
          {' '}
          <Text style={styles.detail}>{info}</Text>
        </Text>

      );
    } else {

      return null;

    }
  }


  render() {

    const { character, onAvengerButtonPress } = this.props;
    

    return (
      <View>

        <View style={styles.imageContainer}>
          <Image source={ require( '../assets/avengersPlaceholder.jpg') } style={[styles.image, styles.placeholderImage ]} />
          { character && <Image source={{ uri: character.image }} style={styles.image} /> }          
        </View>



        <ScrollView style={styles.infoContainer}>

          

          { this.renderSection( 'name' )}
          { this.renderSection( 'identity' )}
          { this.renderSection( 'age' )}

          { character && <View style={styles.divider}></View> }

          { this.renderSection( 'bio' )}
          { this.renderSection( 'powers' )}

          <View style={{ height: 30, backgroundColor: 'transparent' }}></View>

        </ScrollView>

        {/* MAGIC To position the Avenger button properly, I'm using its radius plus some tweaking. */}
        <View style={[ styles.avengerButton, {top: 0.33 * Dimensions.get('window').height - 40 }]}>
          <AvengerButton onPress={onAvengerButtonPress} />
        </View>

      </View>
    );
  }
}


