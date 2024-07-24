import { Pressable, Text, View, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import HomeIcon from '../../assets/home.svg';


import tabBar from "../components/tabBar";

const Tab = createBottomTabNavigator();


const TabNavigator = () => {
    return (
        <Tab.Navigator tabBar={tabBar} >
            <Tab.Screen name="Home" component={HomeScreen} options={{ 
                headerShown: false, 
                tabBarIcon: ({ color }) => (
                    <Image source={require('../../assets/home.png')} />
                ),
            }}  />
            <Tab.Screen name="test" component={HomeScreen} options={{ 
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <Image source={require('../../assets/home.png')} />
                ),

            }} />
        </Tab.Navigator>
    )
}

export default TabNavigator;