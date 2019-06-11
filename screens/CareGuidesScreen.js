import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import { SectionTitle } from '../components/Type';
import CareGuideEmptyState from '../components/CareGuideEmptyState';
import PlantList from '../components/PlantList';
import getPlantData from '../data/plantData';
import { space } from '../constants/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 55,
    backgroundColor: '#fff',
  },
  contentContainer: {
    // marginTop: 30,
  }
});

class CareGuidesScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    plants: [],
    loading: false,
    error: false,
  };

  handlePlantPress = (plant) => {
    this.props.navigation.navigate('CareGuide', { ...plant });
    // TODO: navigate to subscreen
  }

  getAndSetPlantData = () => {
    getPlantData()
      .then((result) => {
        this.setState({
          plants: result.data.records,
          loading: false,
        });
      })
      .catch((e) => {
        console.error('result is error', e);
        this.setState({ loading: false, error: true });
      });
  }

  handleAddPlantsPress = () => {
    this.setState(
      { loading: true, error: false },
      this.getAndSetPlantData()
    );
  }

  render() {
    const { plants, loading, error } = this.state;

    if (plants.length === 0) {
      return <CareGuideEmptyState onButtonClick={this.handleAddPlantsPress} />;
    }

    if (loading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
      // TODO: Add generic error state
      return <SectionTitle>There was an error!</SectionTitle>;
    }

    const data = plants.filter(p => !!p.fields && p.fields.Herb && p.fields.Selling).map(p => ({
      name: p.fields.Herb,
      id: p.id,
      key: p.id,
      imageUrl: p.fields.images ? p.fields.images[0].thumbnails.large.url : '',
    }));

    return (
      <View style={styles.contentContainer}>
        <ScrollView contentContainerStyle={{ paddingHorizontal: space[2] }}>
          <SectionTitle>My Care Guides</SectionTitle>
          <PlantList plants={data} onPress={this.handlePlantPress} />
        </ScrollView>
      </View>
    );
  }
}

export default CareGuidesScreen;
