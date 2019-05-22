import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import COLORS from '../constants/Colors';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import StyleGuideScreen from '../screens/StyleGuideScreen';
import CareGuidesScreen from '../screens/CareGuidesScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name="logo"
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-grid' : 'md-grid'}
    />
  ),
};

const CareGuidesStack = createStackNavigator({
  CareGuides: CareGuidesScreen,
});

CareGuidesStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const StyleGuideStack = createStackNavigator({
  StyleGuides: StyleGuideScreen,
});

StyleGuideStack.navigationOptions = {
  tabBarLabel: 'Style Guide',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-eye' : 'md-eye'}
    />
  ),
};

const MainNav = createBottomTabNavigator({
  HomeStack,
  LinksStack,
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
      paddingVertical: 10,
      flexDirection: 'row',
      borderTopWidth: 3,
      borderTopColor: COLORS.lightGray,
    },
    tabStyle: {
      flex: 1,
      paddingVertical: 10,
    }
  }
});

MainNav.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];

  // You can do whatever you like here to pick the title based on the route name
  const title = routeName;

  return {
    title,
  };
};

export default MainNav;
