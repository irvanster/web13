
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
//screens
import HomeScreen from "./src/screens/home"
import Detailproduct from "./src/screens/detailProduct"
import AddProduct from './src/screens/addproduct';
import Login from './src/screens/Auth/login';
//end screens

const Stack = createNativeStackNavigator();

function App() {
  const [isLoggin, setIsLoggin] = React.useState({
    value: false, data: null
  })
  const getDataAuth = async () => {
    try {
      const value = await AsyncStorage.getItem('@userData')
      if(value !== null) {
        setIsLoggin({
          value: true,
          data: JSON.parse(value)
        })
      }else {
        setIsLoggin({
          value: false,
          data: null
        })
      }
    } catch(e) {
      // error reading value
    }
  }
  React.useEffect(()=> {
    getDataAuth()
  },[])
  //TODO flow authentication (https://reactnavigation.org/docs/auth-flow/)
  //TODO drawer navigation + tab navigation
  //https://reactnavigation.org/docs/drawer-based-navigation/
  // https://reactnavigation.org/docs/nesting-navigators/
  // https://reactnavigation.org/docs/bottom-tab-navigator/
  return (
    <NavigationContainer>
      <Stack.Navigator 
      >
        {isLoggin.value ? (<>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
            headerShown: false
          }} />
          <Stack.Screen name="DetailProduct" component={Detailproduct} options={{ title: 'Detail' }} />
          <Stack.Screen name="AddProduct" component={AddProduct} options={{ title: 'Tambah Product' }} />
        </>): (<>
          <Stack.Screen name="Login" component={Login} options={{ title: 'Tambah Product' }} />
        </>)}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;