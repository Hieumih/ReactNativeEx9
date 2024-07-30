import { Pressable, Text, View, StyleSheet } from "react-native";

const tabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={styles.bar }>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;
                const Icon = options.tabBarIcon !== undefined ? options.tabBarIcon : null;
                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                }

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                }

                return (
                    <Pressable
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.btn}
                        key={index}
                    >
                        {Icon ? <Icon></Icon> : null}
                        {/* <Text style={{ color: isFocused ? '#29D697' : '#000' }}>{label}</Text> */}
                    </Pressable>
                )
            })}
        </View>
    )

}


export default tabBar;


const styles = StyleSheet.create({
    bar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        height: 67,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 14,
        elevation: 1,
    },
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
