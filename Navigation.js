import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screens   ignorar el error si aparece no afecta a nada 
import SettingsScreen from "./screen/SettingsScreen";
import GraficaScreen from "./screen/GraficaScreen";
import StackScreen from "./screen/StackScreen";
import HomeScreen from "./screen/HomeScreen";

const HomeStackNavigator = createStackNavigator();
function MyStack() {
    // initialroute es la pantalla que se muestra primero
    return (
        <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
            <HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen}
                options={{ headerShown: false }} />
            <HomeStackNavigator.Screen name="Stack" component={StackScreen}
                options={{ headerBackTitleVisible: false }} />
        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();
function MyTabs() {
    // <Tab.Screen name="Ejemplo" component={Ejemplo} />
    /* Es para las rutas en la parte de abajo de la pantalla 
    tabActiveTintColor: "green" es donde estoy actualizando se coloca de un color verde
       */
    return (
        <Tab.Navigator
        initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "green"
            }}>
            <Tab.Screen name="Settings" component={SettingsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => {

                    },
                    headerShown: false
                }} />
            <Tab.Screen name="Grafic" component={GraficaScreen}
                options={{ headerShown: false }} />
            <Tab.Screen name="Home" component={MyStack}
                options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}