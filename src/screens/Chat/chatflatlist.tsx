import React,{useEffect, useRef, useState} from "react";
import { FlatList, Dimensions, Image} from "react-native";
import { COLORS } from "../../colors";
import TextBox from "./textbox";
import Form from "./form";

type MessagesProps = {
    nameUrl: string,
    imageUrl:string,
    
  };

export default function ChatFlatlist(this: any, {nameUrl, imageUrl} : MessagesProps,) {

    
    const id_user = '1000'


const [messages, setMessages] = useState<Array<any>>([{
    user_id: '10100',
    userName: nameUrl,
    text: 'Olá, meu nome é Glados! Estou aqui para ajudar com qualquer dúvida que você possa ter. Estou pronto para começar!',
    date: '2023, 3, 15',
    avatar: imageUrl,
    messageId: '1000',
    id: '909090909090'
    
    
},
])





    const flatlistRef = useRef<FlatList>(null);
    useEffect(() => {
    flatlistRef.current?.scrollToEnd({animated: true})
    }, []);

   
   

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



