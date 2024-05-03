import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DiscoveryScreen from './screens/Planets';
import HomeScreen from './screens/Home';
import FavoritesScreen from './screens/Favorites';

const Tab = createBottomTabNavigator();

const App = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        backBehavior="initialRoute"
        screenOptions={{
          tabBarActiveTintColor: '#a460fd',
        }}>
        <Tab.Screen
          name="Discovery"
          component={DiscoveryScreen}
          options={{
            tabBarLabel: 'Galaxies',
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarLabel: 'Favorites',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
