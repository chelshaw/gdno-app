import React from 'react';
import {
  // Image,
  // Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  View,
  // SafeAreaView,
  // StatusBar,
} from 'react-native';
import { SectionTitle } from '../components/Type';
// import { observer, dec } from 'mobx-react';
import CareGuideEmptyState from '../components/CareGuideEmptyState';
import getPlantData from '../data/plantData';

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

// @observer
class CareGuidesScreen extends React.Component {
  static navigationOptions = {
    header: null,
    // headerStyle: {
    //   textAlign: 'center',
    //   color: 'green',
    // },
  };

  state = {
    plants: [],
  };

  handleAddPlantsPress = () => {
    getPlantData()
      .then((result) => {
        this.setState({
          plants: result.data.records,
        });
      });
  }

  render() {
    const { plants } = this.state;

    if (plants.length === 0) {
      return <CareGuideEmptyState onButtonClick={this.handleAddPlantsPress} />;
    }

    const data = plants.map(p => ({ herb: p.fields.Herb, key: p.id }));

    return (
      <View style={styles.contentContainer}>
        <View>
          <SectionTitle>My Care Guides</SectionTitle>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => <SectionTitle>{item.herb}</SectionTitle>}
        />
      </View>
    );
  }
}

export default CareGuidesScreen;
