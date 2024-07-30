import { View, Text, StyleSheet, Image, ScrollView, TextInput, SafeAreaView,Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { gradientColor, color } from '../color/index'
import FoodBtn from "../components/foodBtn";
import BannerSlider from "../components/bannerSlider";

import PizzaIcon from '../../assets/pizza.svg';
import BurgerIcon from '../../assets/burger.svg'
import DrinkIcon from '../../assets/drink.svg'
import RiceIcon from '../../assets/rice.svg'
import SearchIcon from '../../assets/search.svg'
import SettingIcon from '../../assets/setting.svg'
import BellIcon from '../../assets/bell.svg'
import PinMapIcon from '../../assets/pinMap.svg'
import Rectangle1 from "../components/Rectangle1";

const HomeScreen = ({ navigation }) => {

    const DEVICE_WIDTH = Dimensions.get('window').width;

    return (
        <ScrollView style={styles.view}>
            <View>
                <Rectangle1 style={styles.rectangle1} colors={gradientColor}>
                    <View style={styles.randomRectangle1}>
                        <Image source={require('../../assets/avatar.png')} style={styles.avatar} />
                        <View style={styles.shipLocal}>

                            <Text style={styles.h3}>Your Location</Text>
                            <View style={styles.randomRectangle2}>
                                <PinMapIcon style={{width: 20, height: 20}} />
                                <Text style={styles.h2}>Savar, Dhaka</Text>
                            </View>

                        </View>
                        <View style={styles.nofication}>
                            <BellIcon style={{width: 20, height: 20}} />
                        </View>
                    </View>
                </Rectangle1>
                <View style={styles.search}>
                    <SearchIcon style={{width: 22, height: 22}} />
                    <TextInput style={styles.ipt} placeholderTextColor={color.color2} placeholder="Search your food"></TextInput>
                    <SettingIcon />
                </View>

            </View> 


            <ScrollView style={styles.foodTypes} horizontal={true}>
                <FoodBtn title="Pizza" Children={() => (
                    <PizzaIcon />
                )} isChoosed>

                </FoodBtn>
                <FoodBtn title="Burger" Children={() => (
                    <BurgerIcon />
                )}/>
                <FoodBtn title="Drink" Children={() => (
                    <DrinkIcon />
                )}/>
                <FoodBtn title="Rice" Children={() => (
                    <RiceIcon />
                )}/>
                <FoodBtn title="Rice" Children={() => (
                    <RiceIcon />
                )}/>
                <FoodBtn title="Rice" Children={() => (
                    <RiceIcon />
                )}/>
                <FoodBtn title="Rice" Children={() => (
                    <RiceIcon />
                )}/>
            </ScrollView>
            
            <SafeAreaView style={{marginTop: 15, height: 250}}>
                {/* <BannerSlider /> */}
            </SafeAreaView>
            <View>
                <Text>Popular Item</Text>
                <Text>ViewAll</Text>
                <Text>REACT NATIVE META IS TRASH</Text>
            </View>
            <View style={styles.rectangle1}></View>
            <View style={styles.rectangle1}></View>
            <View style={styles.rectangle1}></View>
            <View style={styles.rectangle1}></View>
            <View style={styles.rectangle1}></View>
        </ScrollView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        height: 'auto',
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
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
        top: -8,
    },
    avatar: {
        width: 49,
        height: 49,
        backgroundColor: 'white',
        borderRadius: 50,
        // alignSelf: 'center',
        // top: 50,
        // left: 29,
    },
    randomRectangle1: {
        top: 60,
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        // position: 'relative',
    },
    randomRectangle2: {
        display: 'flex',
        flexDirection: 'row',
    },
    h3: {
        fontSize: 13,
        fontWeight: '400',
        color: '#000',
        // marginTop: 20,
    },
    h2: {
        fontSize: 15,
        fontWeight: '500',
        color: '#000',
    },
    shipLocal: {
        display: 'flex',
        flexDirection: 'column',
        // marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    nofication: {
        width: 46,
        height: 46,
        // backgroundColor: 'white',
        // borderRadius: 50,
        // alignSelf: 'center',
        // top: 50,
        // left: 29,
        borderColor: 'rgba(43, 43, 43, 0.1)',
        // padding: 10,
        borderRadius: 999,
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    search: {
        position: 'absolute',
        width: '85%',
        height: 60,
        backgroundColor: color.color1,
        borderRadius: 100,
        top: 149,
        alignSelf: 'center',
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
    ipt: {
        flex: 1,
        height: 60,
        // backgroundColor: btnColor.color1,
        color: color.color2,
        fontSize: 15,
        fontWeight: '400',
        marginLeft: 20,
        opacity: 0.7
    },
    foodTypes: {
        // display: 'flex',75
        marginTop: 75,
        // flexDirection: 'column',
        paddingHorizontal: 24,
        // justifyContent: 'space-between',
        // backgroundColor: 'red',
    }
})

