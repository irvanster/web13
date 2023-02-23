
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import HomeScreen from "./src/screens/home"
import Detailproduct from "./src/screens/detailProduct"
//end screens

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      // initialRouteName='DetailProduct'
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          headerShown: false
        }} />
        <Stack.Screen name="DetailProduct" component={Detailproduct} options={{ title: 'Detail' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;