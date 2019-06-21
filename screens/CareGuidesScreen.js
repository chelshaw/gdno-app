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
import ErrorState from '../components/ErrorState';
import getPlantData from '../data/plantData';
import { space, centered } from '../constants/Styles';
import COLORS from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centered,
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
        console.error(e);
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
      return (
        <View style={styles.centered}>
          <CareGuideEmptyState onButtonClick={this.handleAddPlantsPress} />
        </View>
      );
    }

    if (loading) {
      return (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={COLORS.magenta} />
        </View>
      );
    }

    if (error) return <ErrorState details="We're having issues gathering the plant data. Try again later." />;

    const data = plants.filter(p => !!p.fields && p.fields.Herb && p.fields.selling).map(p => ({
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
