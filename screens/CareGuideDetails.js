import React from 'react';
import {
  View,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';
import TitleBar from '../components/TitleBar';
import SubNavMenu from '../components/SubNavMenu';
import { getPlantDataById } from '../data/plantData';
import { detailsScreens } from '../constants/constants';
import COLORS from '../constants/Colors';
import CareGuideEssentials from '../components/CareGuideEssentials';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 55,
    backgroundColor: '#fff',
  },
  subnav: {
    display: 'flex',
    flexDirection: 'row',
    height: 50,
  }
});

class CareGuidesScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    info: {},
    loading: false,
    screen: detailsScreens.essentials,
  }

  componentDidMount() {
    this.getPlantInfo(this.props.navigation.state.params.id);
  }

  getPlantInfo = (plantId) => {
    this.setState({ loading: true });
    getPlantDataById(plantId)
      .then((result) => {
        this.setState({
          info: result.data.fields,
          loading: false,
        });
      })
      .catch((e) => {
        this.setState({ loading: false });
      });
  }

  goToDetail = (screen) => {
    this.setState({ screen });
  }

  renderScreenContent = (screen) => {
    const { info } = this.state;
    if (!info) return (<ActivityIndicator />);

    switch (screen) {
      case detailsScreens.grow:
        return (
          <Text>{JSON.stringify(info)}</Text>
        );
      case detailsScreens.issues:
        return (
          <Text>{JSON.stringify(info)}</Text>
        );
      case detailsScreens.enjoy:
        return (
          <Text>{JSON.stringify(info)}</Text>
        );
      default:
        return <CareGuideEssentials info={this.state.info} />;
    }
  }

  renderSubnav = () => (
    <SubNavMenu onPress={this.goToDetail} active={this.state.screen} />
  )

  render() {
    const { name } = this.props.navigation.state.params;
    const { info, screen, loading } = this.state;
    const subnav = this.renderSubnav();
    const screenContent = this.renderScreenContent(screen);

    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={COLORS.grass} />
        </View>
      );
    }

    return (
      <ScrollView style={styles.container}>
        <TitleBar
          onClickBack={() => this.props.navigation.goBack()}
          title={name}
          imageUrl={info.images ? info.images[0].thumbnails.large.url : ''}
        />
        {subnav}
        {screenContent}
      </ScrollView>
    );
  }
}

export default CareGuidesScreen;
