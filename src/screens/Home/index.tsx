import React, {useEffect, useState} from "react";
import { Text, StyleSheet, View, KeyboardAvoidingView, Platform, Image } from "react-native";
import { Configuration, OpenAIApi } from "openai";
import Header from "./header";
import NewChat from "./ChatFlatlist";

import { Bots } from "../../BotConfigs";


export default function Home() {
    const ImageUrl = Bots.ChatBot.avatar
    const name = Bots.ChatBot.name

    
  
    return <>
    <KeyboardAvoidingView style={styles.screen}
        
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
       
      <Header nameUrl={name} imageUrl={ImageUrl}/>
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