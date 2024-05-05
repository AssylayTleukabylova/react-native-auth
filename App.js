import Login from './src/components/Login';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from './src/components/WelcomeScreen';
import {createStackNavigator} from "@react-navigation/stack";

export default function App() {
    const Stack = createStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Home' component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

