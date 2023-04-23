import React,{useEffect, useRef, useState} from "react";
import { FlatList, Dimensions, Image, View, Text, StyleSheet, Touchable, TouchableOpacity} from "react-native";
import Cart from "./ChatFlatlistComponents/NewChatcart";
import CartH from "./ChatFlatlistComponents/ChatHistorycart";
import { COLORS } from "../../colors";
import { ChatHistoryData, NewChatData } from "./ChatFlatlistComponents/ChatFlatlistData";  
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/FontAwesome5'
export default function NewChat() {

 
  

    const [Examples, setExamples] = useState<Array<any>>(NewChatData)

    const [History, setHistory] = useState<Array<any>>([])

    const clearAppData = async function() {


    

      try {
          const keys = await AsyncStorage.getAllKeys();
          const Keys = keys.filter(e => e !== '@ApiKey' && e !=='@viewedOnboarding')
          await AsyncStorage.multiRemove(Keys);
          
         
          ShowHistory()
      } catch (error) {
          console.error('Error clearing app data.');
      }

     
  }

  const ShowHistory = async () => {
    const Allkeys = await AsyncStorage.getAllKeys()
    const allNotes = await AsyncStorage.multiGet(Allkeys)
    
    setHistory([...allNotes].slice(0, 4))

    }
    const isFocused = useIsFocused();

    useEffect(() => {
    
      isFocused && ShowHistory()

    }, [isFocused ])

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

    <View style={styles.ChatTextInfo} >
      <Text style={styles.Text}>Chat History</Text>
      

    </View>
    
      { History.length > 2?
      <>
<FlatList style={{
  flexGrow: 1, height: 200}}
    data={History}

    renderItem={({ item }) => 
  
    ( 
       item[0] == (undefined) ? null : item[0] == '@viewedOnboarding'  ? null : item[0] == '@ApiKey' ? null : <CartH data={JSON.parse(item[1])}text={item[1]} icon={'chatbox-ellipses-outline'} type={'prompt'} prompt={item[1]} id={item[0]} /> 
        
      )
      
    }
 
   
      keyExtractor={(item, index) => 'key'+index}

    
    horizontal={false}
    ListFooterComponent={() => 
      <TouchableOpacity onPress={() => {
        clearAppData()
        
      }}>
      <Text style={[styles.Text, {color: COLORS.blue, alignSelf: 'center'}]}>Remove History</Text>
    </TouchableOpacity>
    }
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    />
    
    </>
     : 
    <View style={styles.NoHistoryView}>
    <Icon name={'box-open'} size={55} color={COLORS.blue} />
    <Text style={styles.NoHistoryTitle}>Your History is empty!</Text>
    <Text style={styles.NoHistoryText}>Looks like you haven't tried asking the bot questions yet...</Text>
    </View>

}

   
    </>
}

const styles = StyleSheet.create({
    
  ChatTextInfo: {  
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 2, 
    fontFamily: 'Montserrat-regular'
  },

   Text: {
    padding: 14,
    fontSize: 17,
    color: COLORS.background.black,
    },

    NoHistoryView: {
      alignItems: 'center',
      flex: 0.7,
    
      justifyContent: 'center',
    },

    NoHistoryTitle: {
      color: COLORS.blue,
      fontSize: 20,
      marginTop: 10,
    },
    NoHistoryText: {
      color: COLORS.background.black,
      fontSize: 12,
      marginTop: 5,
      width: '80%',
      textAlign: 'center'
    }
})