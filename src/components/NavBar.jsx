
import { View, Text, ScrollView, StyleSheet, Pressable } from "react-native";
import GoBackIcon from '../../assets/goBack.svg';


const OrderScreen = ({ navigation, text, style, children }) => {
    return (
        <View style={[styles.nav, style]}>
            <View style={
                {
                    position: 'relative',
                }
            }>
                <Pressable style={
                    {
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        padding: 10,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }
                }>
                    <GoBackIcon />
                </Pressable>
                <View>
                    <Text style={styles.text}>{text}</Text>
                </View>
                <View style={{
                    position: 'absolute',
                    right: 0,
                }}>
                    {children}
                </View>
            </View>
        </View>
    );
}


export default OrderScreen;


const styles = StyleSheet.create({
    nav: {
        paddingHorizontal: 30,
        paddingTop: 26,
        paddingBottom: 6,
        height: 72,
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 20,
        textAlign: 'center',
        flex: 1,
        position: 'absolute',
        alignSelf: 'center',
        top: 6,
    }
})