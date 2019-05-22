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
  multipleButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginBottom: 20,
  },
  buttonSetChild: {
    flexGrow: 1,
    paddingVertical: 40,
    paddingHorizontal: 10,
  }
});

export default class StyleGuideScreen extends React.Component {
  state = {
    active: 'first',
    active2: 'old',
  };

  handleButtonClick = () => {
    // Handling goes here
  };

  handleButtonSetPress = (active) => {
    this.setState({ active });
  }

  handleTypeSetPress = (active2) => {
    this.setState({ active2 });
  }

  render() {
    const { active, active2 } = this.state;
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Header>Buttons</Header>
        {semanticColors.map(color => (
          <View style={styles.buttonContainer} key={`btn-${color}`}>
            <Button color={color} onPress={this.handleButtonClick}>
              Wow! a Button!
            </Button>
          </View>
        ))}
        <Header>Inverted Buttons</Header>
        {semanticColors.map(color => (
          <View style={styles.buttonContainer} key={`btn-inverted-${color}`}>
            <Button inverted color={color} onPress={this.handleButtonClick}>
              Such Inverted Button!
            </Button>
          </View>
        ))}
        <Header>Disabled Buttons</Header>
        <View style={styles.buttonContainer}>
          <Button disabled onPress={this.handleButtonClick}>
            Ack! Disabled!
          </Button>
          <Button inverted disabled onPress={this.handleButtonClick}>
            Disabled Button!
          </Button>
        </View>
        <Header>Button Set</Header>
        <View style={styles.multipleButtonContainer}>
          <Button style={styles.buttonSetChild} onPress={() => this.handleTypeSetPress('new')} inverted={active2 === 'new'}>
            I&apos;m a new grower
          </Button>
          <Button style={styles.buttonSetChild} onPress={() => this.handleTypeSetPress('old')} inverted={active2 === 'old'}>
            I&apos;ve done this before
          </Button>
        </View>
        <View style={styles.multipleButtonContainer}>
          <Button style={styles.buttonSetChild} onPress={() => this.handleButtonSetPress('first')} inverted={active === 'first'}>
            First
          </Button>
          <Button style={styles.buttonSetChild} onPress={() => this.handleButtonSetPress('second')} inverted={active === 'second'}>
            Second
          </Button>
          <Button style={styles.buttonSetChild} onPress={() => this.handleButtonSetPress('third')} inverted={active === 'third'}>
            Third
          </Button>
        </View>
        <Header>Typography</Header>
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
