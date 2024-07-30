import { useState } from "react";
import { Text, View, ScrollView, StyleSheet, Image, Pressable } from "react-native";

import Rectangle1 from "../components/Rectangle1";
import NavBar from "../components/NavBar";
import PencilIcon from "../../assets/pencil.svg";

import HomeIcon from "../../assets/Profile/Home.svg";
import WalletIcon from "../../assets/Profile/Wallet.svg";
import DarkModeIcon from "../../assets/Profile/DarkMode.svg";
import PinMapIcon from "../../assets/Profile/PinMap.svg";
import SettingIcon from "../../assets/Profile/Setting.svg";
import HelpIcon from "../../assets/Profile/Help.svg";

import ExpandIcon from "../../assets/Profile/Expand.svg";

import LogoutIcon from "../../assets/Profile/Logout.svg";

const OnOffSwitch = ({ on, toggleOnOff }) => {
    

    return (
        <Pressable style={{
            width: 44,
            height: 24,
            borderRadius: 999,
            backgroundColor: on ? 'rgba(36, 36, 36, 1)' : 'rgba(36, 36, 36, 0.1)',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: on ? 'flex-end' : 'flex-start',
            alignItems: 'center',
        }}
        onPress={() => {
            toggleOnOff && toggleOnOff()
        }}
        >
            <View style={{
                width: 24,
                height: 24,
                borderWidth: 2,
                borderRadius: 999,
                backgroundColor: 'white',
                // margin: 3,
            }}></View>
        </Pressable>
    )
}

const MenuItem = ({ text, start, end}) => {
    return (
        <View style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: 20,
            // borderBottomWidth: 1,
            // borderBottomColor: 'rgba(36, 36, 36, 0.1)',
        }}>
            {start && start}
            <Text style={{
                fontSize: 14,
                fontWeight: '400',
                color: 'rgba(36, 36, 36, 1)',
                flex: 1,
                marginLeft: 28,
            }}>{text}</Text>
            <Pressable>
                {end && end}
            </Pressable>
        </View>
    )
}


const ProfileScreen = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    return (
        <ScrollView style={{ height: '100%' }}>
            <View style={[styles.view]}>

                <NavBar style={styles.nav} text="Profile"></NavBar>
                <Rectangle1 style={[styles.randomRect1]} ></Rectangle1>
                <View style=
                    {[
                        styles.circle,
                        styles.avatar,
                    ]}>
                    <View style={{
                        position: 'relative',
                    }}>
                        <View style={[
                            styles.circle,
                            {
                                width: 120,
                                height: 120,
                                borderColor: 'rgba(36, 36, 36, 0.4)',
                            }]}>
                            <Image source={require('../../assets/avatar.png')} style={styles.avatarImage}></Image>
                        </View>
                        <Pressable style={[
                            styles.circle,
                            {
                                width: 24,
                                height: 24,
                                backgroundColor: 'rgba(74, 67, 236, 1)',
                                position: 'absolute',
                                bottom: 13,
                                right: 14,
                                borderWidth: 2,
                                borderColor: 'white',
                                borderRadius: 999,
                            }
                        ]}>
                            <PencilIcon width={12} height={12}></PencilIcon>
                        </Pressable>
                    </View>
                </View>
                <Rectangle1 style={[styles.randomRect1, styles.randomRect2]} invertGradient>
                    <View style={styles.info}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: '600',
                            color: 'rgba(36, 36, 36, 1)',
                            lineHeight: 30,
                            // marginBottom: 5,
                        }}>Rakibul Hasan</Text>
                        <Text style={{
                            fontSize: 12,
                            fontWeight: '400',
                            color: 'rgba(104, 104, 104, 1)',
                            lineHeight: 18,
                            marginBottom: 5,
                        }}>rakibhbrand@gmail.com</Text>
                    </View>
                    <View style={styles.menu}>
                        <MenuItem text="Home"
                            start={
                                <HomeIcon width={22} height={22}></HomeIcon>
                            }
                            end={
                                <ExpandIcon width={22} height={22}></ExpandIcon>
                            }
                        />
                        <MenuItem text="My Card"
                            start={
                                <WalletIcon width={22} height={22}></WalletIcon>
                            }
                            end={
                                <ExpandIcon width={22} height={22}></ExpandIcon>
                            }
                        />
                        <MenuItem text="Dark Mode"
                            start={
                                <DarkModeIcon width={22} height={22}></DarkModeIcon>
                            }
                            end={
                                <OnOffSwitch on={isDarkMode} toggleOnOff={
                                    () => setIsDarkMode(!isDarkMode)
                                }></OnOffSwitch>
                            }
                        />
                        <MenuItem text="Truck Your Order"
                            start={
                                <PinMapIcon width={22} height={22}></PinMapIcon>
                            }
                            end={
                                <ExpandIcon width={22} height={22}></ExpandIcon>
                            }
                        />
                        <MenuItem text="Settings"
                            start={
                                <SettingIcon width={22} height={22}></SettingIcon>
                            }
                            end={
                                <ExpandIcon width={22} height={22}></ExpandIcon>
                            }
                        />
                        <MenuItem text="Help Center"
                            start={
                                <HelpIcon width={22} height={22}></HelpIcon>
                            }
                            end={
                                <ExpandIcon width={22} height={22}></ExpandIcon>
                            }
                        />
                    </View>
                    <Pressable style={
                        {
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 20,
                            width: '85%',
                            backgroundColor: 'rgba(74, 67, 236, 1)',
                            alignSelf: 'center',
                            borderRadius: 16,
                        }
                    }>
                        <Text style={{
                            color: 'white',
                            fontSize: 16,
                            fontWeight: '700',
                            marginRight: 10,
                            lineHeight: 24,
                        }}>Log out</Text>
                        <LogoutIcon width={24} height={24}></LogoutIcon>
                    </Pressable>
                </Rectangle1>
            </View>
        </ScrollView>
    )
}

export default ProfileScreen;


const styles = StyleSheet.create({
    view: {
        // height: 2000,
        position: 'relative',
        // backgroundColor: 'red',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'flex-end',
        // flex: 1,
        height: 800,

    },
    nav: {
        position: 'absolute',
        top: 0,
        width: '100%',
    },
    randomRect1: {
        // position: 'absolute',
        // flex: 1,
        // top: -150,
        // top: 0,
        width: '100%',
        height: 179,
        zIndex: -1,
    },
    randomRect2: {
        marginTop: 34,
        // transform: [{ rotate: '180deg' }],
        bottom: 0,
        top: null,
        flex: 1,
        // height: 2000,
        borderTopLeftRadius: 33,
        borderTopRightRadius: 33,
    },
    circle: {
        borderRadius: 999,
        borderWidth: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        // opacity: 0.20,
        width: 150,
        height: 150,
        position: 'absolute',
        top: 121,
        alignSelf: 'center',
        borderColor: 'rgba(36, 36, 36, 0.2)',
    },
    avatarImage: {
        width: 110,
        height: 110,
        overflow: 'hidden',
        borderRadius: 999,
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 62,
    }
})