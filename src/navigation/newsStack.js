import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Headlines from '../screen/headlines';
import DetailsScreen from '../screen/detailsScreen';
import { IconButton } from 'react-native-paper';
import { View, Image, StyleSheet } from 'react-native';

const Stack = createStackNavigator();

const NewsStack = () => {
    return (
        <Stack.Navigator initialRouteName={"Headlines"}>
            <Stack.Screen name="Headlines" component={Headlines} options={{
                title: "Top Headlines", headerRight: (() => <View style={styles.iconContainer}>
                    <IconButton icon="magnify" size={32} />
                    <Image style={styles.menuImage} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfkQOVxTboNXHr386Q8iPHApFscrZRuR0lB8rdzbjM94c787NvPjNbW3bQXgbHQ8_rMJE&usqp=CAU" }} />
                </View>),
                headerTitleStyle: { fontWeight: "bold", fontSize: 24 }
            }} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{ title: "News Details", headerStyle: { backgroundColor: "#18A558" } }} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    menuImage: {
        height: 40,
        width: 40,
        marginRight: 8
    }
})

export default NewsStack;