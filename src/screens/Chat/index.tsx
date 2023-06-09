import React, {useEffect, useState} from "react";
import { Text, StyleSheet, View, KeyboardAvoidingView, Platform, Image } from "react-native";
import { Bots } from "../../BotConfigs";
import Header from "./header";

import ChatFlatlist from "./chatflatlist";
import { RouteProp, useRoute } from "@react-navigation/native";

type ParamList = {
    Detail: {
      text: string,
        type: string,
    };
  };

export default function Chat() {
    const ImageUrl = Bots.ChatBot.avatar
    const name = Bots.ChatBot.name
    const route = useRoute<RouteProp<ParamList, 'Detail'>>()
   
    return <>
    <KeyboardAvoidingView style={styles.screen}
        
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
       
      <Header nameUrl={name} imageUrl={ImageUrl}/>
  <View style={styles.screen}>
      <ChatFlatlist nameUrl={name} imageUrl={ImageUrl} type={route.params.type} FirstPrompt={route.params.text}/>
      </View>
      
       </KeyboardAvoidingView>
    </>
    
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
})