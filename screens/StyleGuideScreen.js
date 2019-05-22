import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {
  Header,
  DetailHeader,
  FormInput,
  SubHead,
  Body,
  SectionTitle,
  NavText,
  TextHeader,
  FormLabel,
} from '../components/Type';
import Button from '../components/Button';

const semanticColors = [
  'cyan',
  'grass',
  'green',
  'royal',
  'magenta',
  'tangerine',
  'gray',
  'medGray',
  'lightGray',
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 120,
  },
  buttonContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  typographyContainer: {
    padding: 10,
  },
});

export default class StyleGuideScreen extends React.Component {
  handleButtonClick = () => {
    // Handling goes here
  }

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {semanticColors.map(color => (
          <View style={styles.buttonContainer} key={`btn-${color}`}>
            <Button color={color} onPress={this.handleButtonClick}>
              Wow! a Button!
            </Button>
          </View>
        ))}
        {semanticColors.map(color => (
          <View style={styles.buttonContainer} key={`btn-inverted-${color}`}>
            <Button inverted color={color} onPress={this.handleButtonClick}>
              Such Inverted Button!
            </Button>
          </View>
        ))}
        <View style={styles.buttonContainer}>
          <Button disabled onPress={this.handleButtonClick}>
            Ack! Disabled!
          </Button>
          <Button inverted disabled onPress={this.handleButtonClick}>
            Disabled Button!
          </Button>
        </View>
        <View style={styles.typographyContainer}>
          <Header>Header</Header>
          <DetailHeader>DetailHeader</DetailHeader>
          <FormInput>FormInput</FormInput>
          <SubHead>SubHead</SubHead>
          <Body>Body</Body>
          <SectionTitle>SectionTitle</SectionTitle>
          <NavText>NavText</NavText>
          <TextHeader>TextHeader</TextHeader>
          <FormLabel>FormLabel</FormLabel>
        </View>
      </ScrollView>
    );
  }
}
