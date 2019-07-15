import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import { Header } from '../components/Type';
import CareGuideEmptyState from '../components/CareGuideEmptyState';
import PlantList from '../components/PlantList';
import ErrorState from '../components/ErrorState';
import StandardModal from '../components/StandardModal';
import Button from '../components/Button';
import getPlantData, { loadStoredPlants, getAndSavePlantsToStorage } from '../data/plantData';
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
  state = {
    savedPlants: [],
    loading: false,
    error: false,
    plantList: [],
    selectedPlantIds: [],
    modalVisible: false,
  };

  componentDidMount() {
    this.loadPlants();
  }

  handlePlantSelect = (plant) => {
    const { selectedPlantIds } = this.state;
    const index = selectedPlantIds.indexOf(plant.id);
    const selected = [...selectedPlantIds];
    if (index >= 0) {
      selected.splice(index, 1);
    } else {
      selected.push(plant.id);
    }
    this.setState({ selectedPlantIds: selected });
  }

  handlePlantPress = (plant) => {
    this.props.navigation.navigate('CareGuide', { ...plant });
  }

  loadPlants = async () => {
    this.setState({ loading: true });
    try {
      const downloadedPlants = await loadStoredPlants();
      this.setState({
        savedPlants: downloadedPlants,
        loading: false,
      });
    } catch (e) {
      this.setState({ loading: false, error: true });
    }
  }

  getAndSetPlantData = () => {
    getPlantData()
      .then((plantList) => {
        this.setState({
          plantList,
          loading: false,
        });
      })
      .catch(() => {
        this.setState({ modalVisible: false, loading: false, error: true });
      });
  }

  handleAddPlantsPress = () => {
    this.setState(
      { loading: true, error: false, modalVisible: true },
      this.getAndSetPlantData()
    );
  }

  handleDownloadSelectedGuides = () => {
    const { selectedPlantIds } = this.state;
    this.setState({ loading: true });
    getAndSavePlantsToStorage(selectedPlantIds)
      .then(() => {
        this.loadPlants();
        this.setState({
          modalVisible: false,
          loading: true,
          selectedPlantIds: [],
        });
      })
      .catch((e) => {
        this.setState({ modalVisible: false, error: true });
      });
  }

  render() {
    const {
      savedPlants,
      loading,
      error,
      plantList,
      modalVisible,
      selectedPlantIds,
    } = this.state;

    if (savedPlants.length === 0 && !modalVisible && !loading) {
      return (
        <View style={styles.centered}>
          <CareGuideEmptyState onButtonClick={this.handleAddPlantsPress} />
        </View>
      );
    }

    if (error) return <ErrorState details="We're having issues gathering the plant data. Try again later." />;

    return (
      <View style={styles.contentContainer}>
        <StandardModal
          visible={modalVisible}
          onClose={() => this.setState({ modalVisible: false })}
        >
          <View style={{ padding: space[2] }}>
            {loading
              ? (
                <View style={styles.centered}>
                  <ActivityIndicator size="large" color={COLORS.magenta} />
                </View>
              ) : (
                <PlantList
                  plants={plantList}
                  onPress={this.handlePlantSelect}
                  selectable
                  selectedList={selectedPlantIds}
                  header={(<Header>Select the plant(s) you&apos;re growing</Header>)}
                  footer={(
                    <View style={{ paddingBottom: 50 }}>
                      <Button onPress={this.handleDownloadSelectedGuides}>
                        Download Care Guides
                      </Button>
                    </View>
                  )}
                />
              )
            }
          </View>
        </StandardModal>
        <ScrollView contentContainerStyle={{ paddingHorizontal: space[2] }}>
          <PlantList
            plants={savedPlants}
            onPress={this.handlePlantPress}
            footer={(
              <View>
                <Button onPress={this.handleAddPlantsPress}>
                  Add More Plants
                </Button>
              </View>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

export default CareGuidesScreen;
