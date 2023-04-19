import React, {useEffect, useState} from "react";
import { Text, StyleSheet, View, KeyboardAvoidingView, Platform, Image, LayoutAnimation } from "react-native";
import { Configuration, OpenAIApi } from "openai";
import Header from "./header";
import NewChat from "./ChatFlatlist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Bots } from "../../BotConfigs";
import { RouteProp, useRoute } from "@react-navigation/native";
type ParamList = {
    Detail: {
        CheckOnboarding: boolean
    };
  };


export default function Home() {
    const ImageUrl = Bots.ChatBot.avatar
    const name = Bots.ChatBot.name

    const customanimation = {
        duration: 1000,
        create: {
            type: LayoutAnimation.Types.spring,
            property: LayoutAnimation.Properties.scaleXY,
            springDamping: 0.7
        }
    }
    LayoutAnimation.configureNext(customanimation)



    return <>
    <KeyboardAvoidingView style={styles.screen}
        
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
       
      <Header nameUrl={name} imageUrl={ImageUrl} />
  <View style={styles.screen}>
    
        <NewChat />
      
      </View>
      
       </KeyboardAvoidingView>
    </>
    
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
})