import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearchResultScreen from '../screens/SearchResults';
import SearchResultTabNavigator from './SearchResultsTabNavigator';

const Stack = createStackNavigator();

const ExploreTabNavigator = (props) => {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={'SearchResults'}
        component={SearchResultTabNavigator}
        options={{
          title: 'Search your destination'
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreTabNavigator;