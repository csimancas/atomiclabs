import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import PersonalData from '../screens/PersonalData';
import FinishPostulation from '../components/ui/organisms/FinishPostulation';
const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="PersonalData"
          component={PersonalData}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="FinishPostulation"
          component={FinishPostulation}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
