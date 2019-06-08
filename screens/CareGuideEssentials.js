import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Text,
} from 'react-native';
import { SectionTitle } from '../components/Type';
import { getPlantDataById } from '../data/plantData';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 55,
    backgroundColor: '#fff',
  },
  contentContainer: {
    marginTop: 30,
  }
});

class CareGuidesScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    info: {},
    loading: false,
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

  render() {
    const { name } = this.props.navigation.state.params;

    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <SectionTitle>{name}</SectionTitle>
        <Text>{JSON.stringify(this.state.info)}</Text>
      </View>
    );
  }
}

export default CareGuidesScreen;
