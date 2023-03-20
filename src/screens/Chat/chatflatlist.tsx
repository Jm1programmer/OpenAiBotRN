import React,{useEffect, useRef, useState} from "react";
import { FlatList, Dimensions, Image} from "react-native";

import TextBox from "./textbox";
import Form from "./form";
import { Api } from "../../services/openaiApi";

type MessagesProps = {
    nameUrl: string,
    imageUrl:string,
    type: string,
    FirstPrompt: string,
    
  };

export default function ChatFlatlist(this: any, {nameUrl, imageUrl, type, FirstPrompt} : MessagesProps,) {
console.log(type, FirstPrompt)
    
    const id_user = '1000'


const [messages, setMessages] = useState<Array<any>>([ {  user_id: '1000',
userName: 'User',
text: FirstPrompt,
date: '2023, 3, 15',
avatar: 'https://i.imgur.com/RhCmcHE.png',
messageId: id_user,
id: '1000'

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
            text: `Olá, meu nome é ${nameUrl}! Estou aqui para ajudar com qualquer dúvida que você possa ter. Estou pronto para começar!`,
            date: '2023, 3, 15',
            avatar: imageUrl,
            messageId: '1000',
            id: '909090909090'
        }])
    } else {
        const getOpenAiResponse = async () => {
            const resultado = await Api({prompt: FirstPrompt})
            const Text = resultado.choices[0].text
            setMessages(
                (prev: any) => [...prev,
                {
               
                user_id: '10100', 
                userName: nameUrl,
                text: Text,
                date: '2023, 3, 15',
                avatar: imageUrl,
                messageId: '1000',
                id: '909090909090'
            
            }, ])

        }
           
          
       getOpenAiResponse()
    }
   }, [])

    return <>
    <FlatList 
    data={messages}
    extraData={messages}
   ref={flatlistRef}
 
    renderItem={({ item }) => <TextBox user_id={item.user_id} userName={item.userName} text={item.text} date={item.date} avatar={item.avatar} messageId={item.messageId} id={item.id} />} 
    keyExtractor={({ user_id, id}) => user_id  + id }
    
    horizontal={false}
    
    showsHorizontalScrollIndicator={false}
    showsVerticalScrollIndicator={false}
    />

    <Form flatlistRef={flatlistRef} ImageUrl={imageUrl} nameUrl={nameUrl} idUrl={""} Messages={messages} SetMessages={setMessages} id_user={id_user} />
    </>
}



