

import React from "react";
import Chat from "../Chat";
import Home from "../Home";
import Onboarding from "../Onboarding";
import ApiKeyScreen from "../ApiKeyScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { propsNavigationStack } from "./models";

const {Navigator, Screen}= createNativeStackNavigator<propsNavigationStack>()



export const AppStack = () => {
    return <>
      <Navigator initialRouteName="Home" screenOptions={{ headerShown: false,}}
  >
    <Screen name="Home" component={Home} />
        <Screen name="Chat" component={Chat} />
      </Navigator>
    </>
}

export const AuthStack = () => {
    return <>
   <Navigator initialRouteName="Onboarding" screenOptions={{headerShown: false,  }}
  >
       <Screen name="Onboarding" component={Onboarding} />
        <Screen name="ApiKeyScreen" component={ApiKeyScreen} />
      </Navigator>
    </>
}

