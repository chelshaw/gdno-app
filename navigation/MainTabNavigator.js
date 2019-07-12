import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import COLORS from '../constants/Colors';
import { centeredHeader } from '../constants/Styles';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import StyleGuideScreen from '../screens/StyleGuideScreen';
import CareGuidesScreen from '../screens/CareGuidesScreen';
import CareGuideDetailScreen from '../screens/CareGuideDetailScreen';

import BottomMenuItem from '../components/BottomMenuItem';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: 'Home',
      ...centeredHeader,
    }),
  }
});

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <BottomMenuItem
      focused={focused}
      name="home"
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <BottomMenuItem
      focused={focused}
      name="guide"
    />
  ),
};

const CareGuidesStack = createStackNavigator({
  CareGuides: CareGuidesScreen,
  CareGuide: CareGuideDetailScreen,
});

CareGuidesStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <BottomMenuItem
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const StyleGuideStack = createStackNavigator({
  StyleGuides: StyleGuideScreen,
});

StyleGuideStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <BottomMenuItem
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-eye' : 'md-eye'}
    />
  ),
};

const MainNav = createBottomTabNavigator({
  HomeStack,
  CareGuidesStack,
  StyleGuideStack,
}, {
  initialRouteName: 'HomeStack',
  tabBarOptions: {
    showLabel: false,
    style: {
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'space-around',
      flexDirection: 'row',
      borderTopWidth: 3,
      borderTopColor: COLORS.lightGray,
      height: 65,
    },
    tabStyle: {
      flexGrow: 1,
    }
  }
});

export default MainNav;
