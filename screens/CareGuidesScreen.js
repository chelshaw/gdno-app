import React from 'react';
import {
  ScrollView,
  StyleSheet,
  FlatList,
  View,
} from 'react-native';
import { SectionTitle } from '../components/Type';
import CareGuideEmptyState from '../components/CareGuideEmptyState';
import ListItemWithImage from '../components/ListItemWithImage';
import getPlantData from '../data/plantData';
import { space } from '../constants/Styles';

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
    plants: [],
    selected: ['Parsley'],
  };

  toggleSelect = (item, isSelected = false) => {
    const { selected } = this.state;

    this.setState((prev) => {
      const newSelected = [...prev.selected];
      if (isSelected) {
        newSelected.splice(selected.indexOf(item), 1);
      } else {
        newSelected.push(item);
      }

      return {
        selected: newSelected,
      };
    });
  }

  handleAddPlantsPress = () => {
    getPlantData()
      .then((result) => {
        this.setState({
          plants: result.data.records,
        });
      })
      .catch(() => {
        console.error('result is error');
      });
  }

  render() {
    const { plants, selected } = this.state;
    console.log({ selected });

    if (plants.length === 0) {
      return <CareGuideEmptyState onButtonClick={this.handleAddPlantsPress} />;
    }

    const data = plants.filter(p => !!p.fields && p.fields.Herb).map(p => ({
      herb: p.fields.Herb,
      key: p.id,
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.6JK1veW-MP4yvRbOQDg4hAHaHa&pid=Api',
    }));

    return (
      <View style={styles.contentContainer}>
        <View>
          <SectionTitle>My Care Guides</SectionTitle>
        </View>
        <ScrollView contentContainerStyle={{ paddingHorizontal: space[2] }}>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <ListItemWithImage
                imageUrl={item.imageUrl}
                name={item.herb}
                selectable
                onPress={this.toggleSelect}
                selected={selected.indexOf(item.herb) > -1}
              />
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

export default CareGuidesScreen;
