import React,{useEffect, useRef, useState} from "react";
import { FlatList, Dimensions, Image} from "react-native";

import TextBox from "./textbox";
import Form from "./form";
import { Api } from "../../services/openaiApi";
import ApiKeyGet from "../../services/getApiKey";
import AsyncStorage from "@react-native-async-storage/async-storage";
import IdGenerator from "./idGenerator";

type MessagesProps = {
    nameUrl: string,
    imageUrl:string,
    type: string,
    FirstPrompt: string,
    
  };

export default function ChatFlatlist(this: any, {nameUrl, imageUrl, type, FirstPrompt} : MessagesProps,) {

    
    const id_user = '1000'


const [messages, setMessages] = useState<Array<any>>([ {  user_id: '1000',
userName: 'User',
text: FirstPrompt,
date: '2023, 3, 15',
avatar: 'https://i.imgur.com/RhCmcHE.png',
messageId: id_user,
id: '1000',
generate: false,

},

{
       
    user_id: '9090',
userName: nameUrl,
    text: `genetating... }`,
date: '2023, 3, 15',
avatar: imageUrl,
messageId: '1000',
id: '90909090909',
generate: true,

},])





    const flatlistRef = useRef<FlatList>(null);
    useEffect(() => {
        setTimeout(() => {
            flatlistRef.current?.scrollToEnd({animated: true})
          }, 1000);
   
    }, [messages]);

   
   useEffect(() => {
    if (type === "add") {
        setMessages([{
            user_id: '10100', 
            userName: nameUrl,
            text: `Hi there! I'm ${nameUrl}. I'm here to help you with any questions you may have. Feel free to ask me anything!`,
            date: '2023, 3, 15',
            avatar: imageUrl,
            messageId: '1000',
            id: '909090909090',
            generate: false,
        }])
    } else {
        const getOpenAiResponse = async () => {
            const KeyApi = await ApiKeyGet()

        
            const resultado = await Api({prompt: FirstPrompt, key: KeyApi })
            const Text = resultado.choices[0].text
            setMessages((prev: any) => (prev.slice(0, -1))); 
            setMessages(
                (prev: any) => [...prev,
                {
               
                user_id: '10100', 
                userName: nameUrl,
                text: Text,
                date: '2023, 3, 15',
                avatar: imageUrl,
                messageId: '1000',
                id: '909090909090',
                generate: false,
            
            }, ])
            const HistoryData = {
                prompt: FirstPrompt.trim(),
                response: Text,
                time: new Date()
                
            }


            const HistoryValue = JSON.stringify(HistoryData)
            const id = IdGenerator();
      
            await AsyncStorage.setItem(id, HistoryValue)

        }
           
          
       getOpenAiResponse()
    }
   }, [])

    return <>
    <FlatList 
    data={messages}
    extraData={messages}
   ref={flatlistRef}
 
    renderItem={({ item }) => <TextBox user_id={item.user_id} userName={item.userName} text={item.text} date={item.date} avatar={item.avatar} messageId={item.messageId} id={item.id} generating={item.generate} />} 
    keyExtractor={({ user_id, id, text}) => user_id  + id + text }
    
    horizontal={false}
    
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    />

    <Form flatlistRef={flatlistRef} ImageUrl={imageUrl} nameUrl={nameUrl} idUrl={""} Messages={messages} SetMessages={setMessages} id_user={id_user} />
    </>
}



