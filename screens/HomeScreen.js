import React from 'react';
import {
  StyleSheet,
  Linking,
  View,
} from 'react-native';

import Button from '../components/Button';
import { verticallyCentered, space } from '../constants/Styles';
import { links } from '../constants/constants';

const styles = StyleSheet.create({
  container: {
    ...verticallyCentered,
    padding: space[2],
    display: 'flex',
  },
  topLinks: {
    flexGrow: 1,
    paddingVertical: space[2],
  },
  buttonSpace: {
    marginVertical: space[0],
  },
  bottomLinks: {
    flexShrink: 1,
    padding: space[2],
  }
});

export default class HomeScreen extends React.Component {
  handleOpenLink = (path) => {
    const url = links[path] || links.shop;
    Linking.openURL(url);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topLinks}>
          <View style={styles.buttonSpace}><Button align="left" color="grass" onPress={() => this.props.navigation.navigate('Links')}>Getting Started</Button></View>
          <View style={styles.buttonSpace}><Button align="left" color="magenta" onPress={() => this.handleOpenLink('shop')}>Shop</Button></View>
          <View style={styles.buttonSpace}><Button align="left" color="royal" onPress={() => this.handleOpenLink('help')}>Get Help</Button></View>
          <View style={styles.buttonSpace}><Button align="left" color="cyan" onPress={() => this.props.navigation.navigate('StyleGuide')}>Style Guide</Button></View>
        </View>
        <View style={styles.bottomLinks}>
          <Button align="left" style={{ paddingVertical: space[1] }} transparent color="grass" onPress={() => this.handleOpenLink('instagram')}>Follow us on social</Button>
          <Button align="left" style={{ paddingVertical: space[1] }} transparent color="grass" onPress={() => this.handleOpenLink('feedback')}>Feedback</Button>
        </View>
      </View>
    );
  }
}
