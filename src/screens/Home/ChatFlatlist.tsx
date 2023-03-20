import React,{useEffect, useRef, useState} from "react";
import { FlatList, Dimensions, Image, View, Text, StyleSheet} from "react-native";
import Cart from "./ChatFlatlistComponents/NewChatcart";
import CartH from "./ChatFlatlistComponents/ChatHistorycart";
import { COLORS } from "../../colors";
import { ChatHistoryData, NewChatData } from "./ChatFlatlistComponents/ChatFlatlistData";  


export default function NewChat() {

   

    const [Examples, setExamples] = useState<Array<any>>(NewChatData)

    const [History, setHistory] = useState<Array<any>>(ChatHistoryData)

    return <>
  
        <Text style={styles.Text}>New Chat</Text>
   
<FlatList style={{
  flexGrow: 0}}
    data={Examples}


 
    renderItem={({ item }) => <Cart text={item.text} icon={item.icon} type={item.type}  />} 
    keyExtractor={({ icon, text}) => icon  + text }
    
    horizontal={true}
    
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    />

<Text style={styles.Text}>Chat History</Text>

<FlatList style={{}}
    data={History}


 
    renderItem={({ item }) => <CartH text={item.text} icon={item.icon} type={item.type} prompt={item.prompt}  />} 
    keyExtractor={({ icon, text}) => icon  + text }
    
    horizontal={false}
    
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    />
    </>
}

const styles = StyleSheet.create({
   

   Text: {
    padding: 12,
    fontSize: 17,
    color: COLORS.background.black,

 
    
     
    },
})