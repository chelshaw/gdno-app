import React from 'react';
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { WebBrowser } from 'expo';

import { Header } from '../components/Type';
import { verticallyCentered } from '../constants/Styles';

const styles = StyleSheet.create({
  container: {
    ...verticallyCentered
  },
});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  handleFacebookLink = () => {
    WebBrowser.openBrowserAsync('http://facebook.com/growgardenio');
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          <Header>Welcome to App</Header>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
