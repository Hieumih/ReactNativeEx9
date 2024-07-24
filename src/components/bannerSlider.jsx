// import { useRef } from 'react';
import { Image, View, Text, StyleSheet, Dimensions, Button, SafeAreaView } from 'react-native';
import { Carousel } from 'react-native-basic-carousel'

const width = Dimensions.get('window').width;

const data = [
    {
        id: 1,
        image: require('../../assets/banner1.png'),
    },
    {
        id: 2,
        image: require('../../assets/banner1.png'),
    },
    {
        id: 3,
        image: require('../../assets/banner1.png'),
    },
    {
        id: 4,
        image: require('../../assets/banner1.png'),
    },
    {
        id: 5,
        image: require('../../assets/banner1.png'),
    },
]

const BannerSlider = () => {
    // 1 - 5 array
    // const data = [1, 2, 3, 4, 5];

    return (
        <SafeAreaView style={styles.container}>
            <Carousel 
                data={data} 
                renderItem={({item, index}) => (
                    <View style={styles.page}>
                        <Image source={item.image} style={{width: '100%', borderRadius: 20}} resizeMode='contain' />
                    </View>
                )}
                itemWidth={width}
                onSnapItem={(item) => console.log(item)}
                pagination
                autoplay
                paginationType="circle"
                />
        </SafeAreaView>
    )
}


export default BannerSlider;


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        // width: '100%',
        // height: '100%',
        // marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // borderRadius: 50,
    },
    page: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        padding: 20,
        borderRadius: 50,
    },
});

