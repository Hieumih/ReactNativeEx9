import { Pressable, Image, Text, StyleSheet } from "react-native";
import { color } from "../color";


const FoodBtn = ({ Children, title, style, isChoosed = false }) => {


    const btnStyle = StyleSheet.flatten([componentStyle.btn, style?.btn, isChoosed && ChoosedStyle.btn]);
    const imgStyle = StyleSheet.flatten([componentStyle.img, style?.img]);
    const titleStyle = StyleSheet.flatten([componentStyle.title, style?.title, isChoosed && ChoosedStyle.title]);



    return (
        <Pressable style={btnStyle}>
            <Children style={imgStyle} fill={isChoosed ? '#fff' : '#000'}></Children>
            <Text style={titleStyle}>{title}</Text>
        </Pressable>
    )
}

export default FoodBtn; 


const componentStyle = StyleSheet.create({
    btn: {
        width: 86,
        height: 96,
        backgroundColor: color.color3,
        borderRadius: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 14  
    },
    img: {
        width: 30,
        height: '100%',
        marginBottom: 5,
    },
    title: {
        fontSize: 13,
        fontWeight: '400',
        lineHeight: 19.5,
        textTransform: 'uppercase'
        // color: '#fff'
    }
})

const ChoosedStyle = StyleSheet.create({
    btn: {
        backgroundColor: '#29D697',        
    },
    title: {
        color: '#fff',
        fontWeight: 500,
    }
})