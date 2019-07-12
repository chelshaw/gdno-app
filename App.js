import React from 'react';
import {
  StatusBar,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {
  AppLoading,
  Asset,
  Font,
  Icon,
} from 'expo';
import AppNavigator from './navigation/AppNavigator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  _loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      /* eslint-disable global-require */
      require('./assets/images/robot-dev.png'),
      require('./assets/images/robot-prod.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Icon.Ionicons.font,
      circularLight: require('./assets/fonts/CircularAirPro-Light.otf'),
      circularMedium: require('./assets/fonts/CircularAirPro-Medium.otf'),
      circularBold: require('./assets/fonts/CircularAirPro-Bold.otf'),
      circularBlack: require('./assets/fonts/CircularAirPro-Black.otf'),
      circularLightItalic: require('./assets/fonts/CircularAirPro-LightItalic.otf'),
      circularMediumItalic: require('./assets/fonts/CircularAirPro-MediumItalic.otf'),
      circularBoldItalic: require('./assets/fonts/CircularAirPro-BoldItalic.otf'),
      circularBlackItalic: require('./assets/fonts/CircularAirPro-BlackItalic.otf'),
    }),
  ]);

  _handleLoadingError = (error) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <SafeAreaView style={styles.container}>
          <StatusBar translucent />
          <AppLoading
            startAsync={this._loadResourcesAsync}
            onError={this._handleLoadingError}
            onFinish={this._handleFinishLoading}
          />
        </SafeAreaView>
      );
    }
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar translucent />
        <AppNavigator />
      </SafeAreaView>
    );
  }
}
