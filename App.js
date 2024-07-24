import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView, enableLegacyWebImplementation, enableExperimentalWebImplementation } from 'react-native-gesture-handler';
import TabNavigator from './src/navigations/tab';

enableLegacyWebImplementation(true);
enableExperimentalWebImplementation(true);

export default function App() {
  return (
    
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
