import { StyleSheet, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginInUp from './screens/LoginInUp';
import LoginIn from './screens/LoginIn';
import LoginUp from './screens/LoginUp';
import Welcome1 from './screens/Welcome1';
import Welcome2 from './screens/Welcome2';
import Home from './screens/feed/Home';
import Feed from './screens/feed/Feed';
import Community from './screens/feed/Community';
import Profile from './screens/feed/Profile';
import Followers from './screens/feed/Followers';
import Gallery from './screens/feed/Gallery';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginInUp" component={LoginInUp} />
      <Stack.Screen name="LoginIn" component={LoginIn} />
      <Stack.Screen name="LoginUp" component={LoginUp} />
      <Stack.Screen name="Welcome1" component={Welcome1} />
      <Stack.Screen name="Welcome2" component={Welcome2} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Feed" component={Feed} />
      <Stack.Screen name="Community" component={Community} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Followers" component={Followers} />
      <Stack.Screen name="Gallery" component={Gallery} />
    </Stack.Navigator>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>

  );
}