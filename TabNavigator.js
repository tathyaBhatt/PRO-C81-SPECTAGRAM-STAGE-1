import React from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

import Feed from "../screens/Feed";
import Post from "../screens/CreatePost";
const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Feed") {
                        iconName = focused ? "book" : "book-outline";
                    } else if (route.name === "Create Story") {
                        iconName = focused ? "create" : "create-outline";
                    }
                    return (
                        <Ionicons
                            name={iconName}
                            size={RFValue(25)}
                            color={color}
                        />
                    );
                }
            })}
            tabBarOptions={{
                activeColor= 'tomato',
                inactiveColor= 'grey'
            }}
        >
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Create Story" component={Post} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;