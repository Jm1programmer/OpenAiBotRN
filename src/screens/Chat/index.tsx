import React, {useEffect, useState} from "react";
import { Text, StyleSheet, View, KeyboardAvoidingView, Platform, Image } from "react-native";
import { Configuration, OpenAIApi } from "openai";
import Header from "./header";

import ChatFlatlist from "./chatflatlist";
export default function Chat() {
    const ImageUrl = 'https://i.imgur.com/Ymp20iw.png'
    const name = 'Aguiar Bot'
  
    return <>
    <KeyboardAvoidingView style={styles.screen}
        
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
       
      <Header nameUrl={"Aguiar Bot"} imageUrl={ImageUrl}/>
  <View style={styles.screen}>
      <ChatFlatlist nameUrl={'Aguiar Bot'} imageUrl={ImageUrl} />
      </View>
      
       </KeyboardAvoidingView>
    </>
    
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
})