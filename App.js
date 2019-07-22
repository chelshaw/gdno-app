import React from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {
  AppLoading,
  Asset,
  Font,
  Icon,
} from 'expo';
import handleError from './data/handleError';
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

  loadResourcesAsync = async () => Promise.all([
    Asset.loadAsync([
      /* eslint-disable global-require */
      require('./assets/icons/nav_home_active.png'),
      require('./assets/icons/nav_cg_inactive.png'),
    ]),
    Font.loadAsync({
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

  handleLoadingError = (error) => {
    handleError(error);
  };

  handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <View style={styles.container}>
          <AppLoading
            startAsync={this.loadResourcesAsync}
            onError={this.handleLoadingError}
            onFinish={this.handleFinishLoading}
          />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}
