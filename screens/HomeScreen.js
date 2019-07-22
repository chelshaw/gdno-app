import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import PropTypes from 'prop-types';

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
    WebBrowser.openBrowserAsync(url);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topLinks}>
          <View style={styles.buttonSpace}><Button align="left" color="grass" onPress={() => this.props.navigation.navigate('GettingStarted')}>Getting Started</Button></View>
          <View style={styles.buttonSpace}><Button align="left" color="magenta" onPress={() => this.handleOpenLink('shop')}>Shop</Button></View>
          <View style={styles.buttonSpace}><Button align="left" color="royal" onPress={() => this.handleOpenLink('help')}>Get Help</Button></View>
        </View>
        <View style={styles.bottomLinks}>
          <Button align="left" style={{ paddingVertical: space[1] }} transparent color="grass" onPress={() => this.handleOpenLink('instagram')}>Follow us on social</Button>
          <Button align="left" style={{ paddingVertical: space[1] }} transparent color="grass" onPress={() => this.handleOpenLink('feedback')}>Feedback</Button>
        </View>
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
