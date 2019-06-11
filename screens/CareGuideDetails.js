import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';
import Button from '../components/Button';
import { SectionTitle } from '../components/Type';
import TitleBar from '../components/TitleBar';
import { getPlantDataById } from '../data/plantData';
import { detailsScreens } from '../constants/constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 55,
    backgroundColor: '#fff',
  },
  contentContainer: {
    marginTop: 30,
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
        console.error('result is error', e);
        this.setState({ loading: false });
      });
  }

  goToDetail = (screen) => {
    this.setState({ screen });
  }

  renderSubnav = () => (
    <View style={styles.subnav}>
      <Button onPress={() => this.goToDetail(detailsScreens.essentials)}>Essentials</Button>
      <Button onPress={() => this.goToDetail(detailsScreens.grow)}>Grow</Button>
      <Button onPress={() => this.goToDetail(detailsScreens.issues)}>Issues</Button>
      <Button onPress={() => this.goToDetail(detailsScreens.enjoy)}>Enjoy</Button>
    </View>
  )

  render() {
    const { name } = this.props.navigation.state.params;
    const { info, screen, loading } = this.state;
    const subnav = this.renderSubnav();
    let screenContent;

    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    switch (screen) {
      case detailsScreens.grow:
        screenContent = 'Grow';
        break;
      case detailsScreens.issues:
        screenContent = 'Issues';
        break;
      case detailsScreens.enjoy:
        screenContent = 'Enjoy';
        break;
      default:
        screenContent = JSON.stringify(info);
    }
    return (
      <View style={styles.container}>
        <TitleBar
          onClickBack={() => this.props.navigation.goBack()}
          title={name}
          imageUrl={info.images ? info.images[0].thumbnails.large.url : ''}
        />
        <SectionTitle>{name}</SectionTitle>
        {subnav}
        <Text>{screenContent}</Text>
      </View>
    );
  }
}

export default CareGuidesScreen;