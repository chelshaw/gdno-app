import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import STYLES from '../constants/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  emptyState: {

  },
  addButton: {
    ...STYLES.button,
  }
});

export default class CareGuidesScreen extends React.Component {
  static navigationOptions = {
    title: 'My Plants',
    headerStyle: {
      textAlign: 'center',
      color: 'green',
    },
  };

  handleAddPlantsPress = () => {
    console.log('handling add');
  }

  render() {
    return (
      <SafeAreaView style={[styles.contentContainer, { backgroundColor: '#6a51ae' }]}>
        <ScrollView style={styles.container}>
          {/* Go ahead and delete ExpoLinksView and replace it with your
             * content, we just wanted to provide you with some helpful links */}
          <Text> Loading... </Text>

          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text>Care Guides Go Here</Text>
          </ScrollView>

          <View style={styles.emptyState}>
            <TouchableOpacity onPress={this.handleAddPlantsPress} style={styles.addButton}>
              <Text>Add Plants</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
