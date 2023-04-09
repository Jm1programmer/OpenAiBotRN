import React,{useEffect, useRef, useState} from "react";
import { Text, View, StyleSheet, TouchableOpacity} from "react-native";
import { COLORS } from "../../../colors";
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../Stack/models";
import AsyncStorage from "@react-native-async-storage/async-storage";
type MessagesProps = {
   text: string,
   icon: string,
   type: string,
  prompt: string,
  id: string,
  data: any
  };
  
export default function CartH({icon, type, id, data}: MessagesProps) {
    //@viewedOnboarding
   
    const lenght = 47
    const navigation = useNavigation<propsStack>()
    const prompt = data.prompt
    const text = data.response
   
   
    return <> 
    <TouchableOpacity onPress={() => {
          navigation.navigate('Chat' as never, {text: prompt, type: type} as never,)
         
        }} style={styles.Cart} >
               <Icon name={icon} size={45} color={COLORS.TextBoxGray} />
               <View style={styles.Info}>
                    <Text style={styles.prompt}>{prompt.length > lenght? prompt.substring(0, lenght - 3) + "..." : prompt}</Text>
                    <Text style={styles.text}>{text.length > lenght? text.trimStart().substring(0, lenght - 3) + "..." : text.trimStart()}</Text>
               </View>
    </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    Cart: {
        width: '90%',
        height: 100,
        backgroundColor: COLORS.blue,
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    Info: {
        marginHorizontal: 10,
    },
    prompt: {
        fontSize: 15,
    color: COLORS.TextBoxGray,
    fontWeight: '500',
  
    maxWidth: 250,
    },
    text: {
        fontSize: 12,
        color: COLORS.lowOpacityWhite,
        fontWeight: '500',
        
    }
})