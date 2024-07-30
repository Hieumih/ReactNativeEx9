import { Pressable, Text, View, StyleSheet, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import OrderScreen from "../screens/OrderScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeIcon from '../../assets/home.svg';
import Rectangle1 from "../components/Rectangle1";

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
            }} />
            <Tab.Screen name="order" component={OrderScreen} options={{
                headerShown: false,
                // headerStyle: {
                //     backgroundColor: 'none',
                //     position: 'absolute',
                // },
                tabBarIcon: ({ color }) => (
                    <Image source={require('../../assets/home.png')} />
                ),

            }} />
            <Tab.Screen name="profile" component={ProfileScreen} options={{
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    <Image source={require('../../assets/home.png')} />
                ),
            }} />


        </Tab.Navigator>
        // <View style={styles.container}>
        // <Rectangle1 style={styles.rectangle1}/>
        // </View>
    )
}

export default TabNavigator;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
})