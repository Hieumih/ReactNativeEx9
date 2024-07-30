import { View, Text, ScrollView, StyleSheet, Image, Pressable } from "react-native";
import Rectangle1 from "../components/Rectangle1";
import NavBar from "../components/NavBar";
import { color } from '../color/index';
import { useState, useEffect } from "react";
import StarRatingIcon from '../../assets/starRating.svg';
import AddIcon from '../../assets/add.svg';
import SubtractIcon from '../../assets/subtract.svg';
import PinMapIcon from '../../assets/pinMap.svg';
import EditIcon from '../../assets/edit.svg';
import CreditCardIcon from '../../assets/creditCard.svg';
import TrashCanIcon from '../../assets/trashCan.svg';
const OrderScreen = ({ navigation }) => {
    const [count, setCount] = useState(1);
    const [money, setMoney] = useState(28);
    const [total, setTotal] = useState(28);

    useEffect(() => {
        setTotal(money * count);
    })

    return (
        <ScrollView style={styles.view}>
            <Rectangle1 style={styles.rectangle1}>
            </Rectangle1>
            <NavBar text="Shopping Cart" style={styles.nav} >
                <TrashCanIcon />
            </NavBar>
            <View style={styles.containter}>
                <Image source={
                    require('../../assets/banner2.png')
                } style={styles.banner} resizeMode='cover' />
                <View style={styles.topContainer}>
                    <Image style={styles.banner2} source={require('../../assets/arandomImage.png')} resizeMode='contain'></Image>
                </View>
                <View style={styles.bottomCotainer}>
                    <View style={styles.container1}>

                        <Text style={styles.goods}>burger</Text>
                        <Text style={styles.goodsMoney}>${money}</Text>
                        <View style={styles.ratingContainer}>
                            <StarRatingIcon style={{ width: 20, height: 20 }} />
                            <Text style={styles.rating}>{'4.9 (3k+ Rating)'}</Text>
                        </View>
                        <View style={styles.countContainer}>
                            <Pressable style={[styles.btnCount]} onPress={() => { setCount(count + 1) }}>
                                <AddIcon />
                            </Pressable>
                            <Text style={styles.count}>{count.toString().padStart(2, '0')}</Text>
                            <Pressable style={[styles.btnCount]} onPress={() => { count > 0 && setCount(count - 1) }} >
                                <SubtractIcon />
                            </Pressable>

                        </View>
                    </View>
                    <View style={styles.container2}>
                        <View style={[styles.box1, styles.locationInfo]}>
                            <PinMapIcon style={styles.pin} width="28" height="28" ></PinMapIcon>
                            <View >
                                <Text style={[styles.locationText, {fontSize: 12}]}>Delivery Address</Text>
                                <Text style={[styles.locationText, {fontSize: 13}]}>Dhaka, Bangladesh</Text>
                            </View>
                        </View>
                        <View style={[styles.box1, styles.chooseLocation]}>
                            <Pressable onPress={() => {}}>
                                <EditIcon ></EditIcon>
                            </Pressable>

                        </View>
                    </View>
                    <View style={styles.container3}>
                        <CreditCardIcon/>
                        <Text style={{ marginLeft: 11, fontSize: 14, flex: 1}}>Payment Method</Text>
                        <Pressable style={styles.changePayMent}><Text style={{color: '#4A43EC', fontSize: 11, fontWeight: '500'}}>Change</Text></Pressable>
                    </View>
                    <View style={styles.container4}>
                        <View style={[styles.caculateText, styles.boderBottom]}>
                            <Text style={[styles.text1, {color: '#242424', fontSize: 14}]}>Checkout Summary</Text>
                        </View >
                        <View style={[styles.caculateText, styles.boderBottom]}>
                            <Text style={styles.text2}>Subtotal ({count})</Text>
                            <Text style={styles.text1}>${total}</Text>
                        </View>
                        <View style={[styles.caculateText, styles.boderBottom]}>
                            <Text style={styles.text2}>Delivery Fee</Text>
                            <Text style={styles.text1}>$6.20</Text>
                        </View>
                        <View style={[styles.caculateText]}>
                            <Text style={[styles.text1, {color: '#242424', fontSize: 14}]}>Total</Text>
                            <Text style={{color: '#4A43EC', fontSize: 14, fontWeight: '500'}}>${total + 6.20}</Text>
                        </View>
                    <Pressable style={styles.confirmBtn}>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>Confirm Order</Text>
                    </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default OrderScreen;


const styles = StyleSheet.create({
    view: {
        flex: 1,
        height: 'auto',
        backgroundColor: 'rgba(255, 255, 255, 1)',
        position: 'relative',
    },
    nav: {

    },
    rectangle1: {
        position: 'absolute',
    },
    containter: {
        // height: 1000,
        borderRadius: 12,
        overflow: 'hidden',
        marginHorizontal: 24,
        marginTop: 20,
        backgroundColor: 'red',
        position: 'relative',
        display: 'flex',
    },
    topContainer: {
        width: '100%',
        height: 100,
        position: 'absolute',
        zIndex: 2,
        paddingHorizontal: 27,
    },
    bottomCotainer: {
        // position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(245, 245, 245, 1)',
        top: -20,
        left: 0,
        borderRadius: 12,
        zIndex: 1,
        // paddingHorizontal: 27,
        // paddingTop: 31,
        position: 'relative'
    },
    banner: {
        width: '100%',
        // height: '100%',
        // flex: 1,
    },
    banner2: {
        width: '100%',
        height: 100,
        top: 120,

    },
    goods: {
        fontSize: 30,
        fontWeight: '600',
        lineHeight: 45,
        position: 'absolute',
        // uppercase text
        textTransform: 'uppercase',
        top: 31,
        left: 27,

    },
    goodsMoney: {
        fontSize: 21,
        fontWeight: '500',
        lineHeight: 31.5,
        color: color.color4,
        // marginTop: 10,
        right: 29,
        position: 'absolute',
        top: 36,
        textAlign: 'right'
    },
    ratingContainer: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        top: 74,
        left: 27,
        alignItems: 'center',
    },
    rating: {
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 15,
        // color: color.color4,
        marginLeft: 2,
    },
    countContainer: {
        display: 'flex',
        flexDirection: 'row',
        position: 'absolute',
        top: 73,
        right: 27,
        alignItems: 'center',

    },
    btnCount: {
        width: 22,
        height: 22,
        // backgroundColor: color.color4,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: 10,
        borderWidth: 1,
        borderColor: '#818181',

        overflow: 'hidden',
    },
    // btnCountText: {
    //     fontSize: 20,
    //     fontWeight: '400',
    //     // lineHeight: 0,
    //     textAlign: 'center',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    count: {
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 22.5,
        marginLeft: 10,
        marginRight: 10,
        textAlign: 'right'
    },
    container2: {
        width: '100%',
        height: 100,
        // position: 'absolute',
        // top: 200,
        // left: 0,
        paddingHorizontal: 27,
        // backgroundColor: 'red',
        paddingVertical: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    box1: {
        // width: '100%',
        height: 67,
        borderRadius: 6,
        // marginBottom: 20,
        backgroundColor: 'black',
    },
    locationInfo: {
        backgroundColor: '#C0EADB',
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    chooseLocation: {
        backgroundColor: '#A9A6FF',
        // marginTop: 20,
        width: '18%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container1: {
        width: '100%',
        height: 96,
        position: 'relative',
        
    },
    locationText: {
        color: '#5B5B5B',
    },
    pin: {
        marginRight: 6.5,
    },
    container3: {
        paddingHorizontal: 27,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        // flex: 1,
        width: '100%',
        backgroundColor: '#F9F9F9',
        paddingVertical: 13,
    },
    changePayMent: {
        width: 79, 
        height: 30, 
        borderRadius: 999, 
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#4A43EC',
    },
    container4: {
        paddingHorizontal: 27,
        display: 'flex',
        flexDirection: 'column',
        // flex: 1,
        width: '100%',
        // marginTop: 20,
        paddingTop: 6
    },
    caculateText: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingBottom: 4,
        paddingTop: 3,
    },
    text1 : {
        color: '#242424',
        fontWeight: '500',
        fontSize: 14,
    },
    text2: {
        color: '#818181',
    },
    boderBottom: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#818181',
    },
    confirmBtn: {
        width: '100%',
        height: 50,
        backgroundColor: '#4A43EC',
        borderRadius: 99999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    }

})