import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Movie from '../screens/Movie';
import Person from '../screens/Person';
import Search from '../screens/Search';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Movie"
            component={Movie}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Person"
            component={Person}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default Router;
