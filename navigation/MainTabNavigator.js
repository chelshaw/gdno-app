import React from 'react';
import { Platform, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import COLORS from '../constants/Colors';
import { centeredHeader } from '../constants/Styles';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import StyleGuideScreen from '../screens/StyleGuideScreen';
import CareGuidesScreen from '../screens/CareGuidesScreen';
import CareGuideDetailScreen from '../screens/CareGuideDetailScreen';

import BottomMenuItem from '../components/BottomMenuItem';

const hasBottomNav = (screen) => {
  const shouldHaveBottomNav = ['Home', 'Settings'];
  if (shouldHaveBottomNav.indexOf(screen) >= 0) return true;
  return false;
};

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      headerTitle: 'Home',
      ...centeredHeader,
    }),
  },
  Settings: {
    screen: LinksScreen,
    path: 'settings',
    navigationOptions: () => ({
      headerTitle: 'Links',
      ...centeredHeader,
      headerRight: (<View style={{ width: 20 }} />),
    }),
  },
  StyleGuide: {
    screen: StyleGuideScreen,
    navigationOptions: () => ({
      headerTitle: 'Style Guide',
      ...centeredHeader,
      headerRight: (<View style={{ width: 20 }} />),
    }),
  },
});

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  navigation.state.routes.map((r) => {
    tabBarVisible = hasBottomNav(r.routeName);
    return tabBarVisible;
  });
  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => (
      <BottomMenuItem
        focused={focused}
        name="home"
      />
    ),
  };
};

const CareGuidesStack = createStackNavigator({
  CareGuides: {
    screen: CareGuidesScreen,
    navigationOptions: () => ({
      headerTitle: 'My Plants',
      ...centeredHeader,
    }),
    path: 'my-care-guides',
  },
  CareGuide: {
    screen: CareGuideDetailScreen,
    navigationOptions: () => ({ header: null }),
    path: 'plant/:name',
  }
});

CareGuidesStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  navigation.state.routes.map((r) => {
    tabBarVisible = hasBottomNav(r.routeName);
    return tabBarVisible;
  });
  return {
    tabBarVisible,
    tabBarIcon: ({ focused }) => (
      <BottomMenuItem
        focused={focused}
        name="guide"
      />
    ),
  };
};

const MainNav = createBottomTabNavigator({
  HomeStack,
  CareGuidesStack,
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
