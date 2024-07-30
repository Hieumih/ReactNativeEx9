import { View, Text, StyleSheet, Image, ScrollView, TextInput, SafeAreaView,Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { gradientColor, color } from '../color/index'



const Rectangle = ({ navigation, children, style, invertGradient }) => {

    // clone the color array
    let color = [...gradientColor]
    // if invertGradient is true, reverse the array
    if (invertGradient) color = color.reverse()

    return (
        <LinearGradient style={[styles.rectangle1, style]} colors={color}>
            {children}
        </LinearGradient>
    )

}

export default Rectangle;

const styles = StyleSheet.create({
    rectangle1: {
        // width: 375,
        height: 179,
        width: '100%',
        // backgroundColor: "background: linear-gradient(180deg, #E6E6E6 0%, #FEFFBF 100%);",
        // backgroundColor: "red",
        // marginTop: 100,
        // backgroundColor: 'transparent',
        borderBottomRightRadius: 33,
        borderBottomLeftRadius: 33,
        // top: -8,
    },
})
