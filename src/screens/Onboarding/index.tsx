import { useNavigation } from "@react-navigation/native";
import { Text, View, FlatList, Image, StyleSheet, TouchableOpacity, LayoutAnimation } from "react-native";
import { Bots } from "../../BotConfigs";
import { COLORS } from "../../colors";
import { propsStack } from "../Stack/models";
import Header from "./header";
import ImagesFlatlist from "./imagesFlatlist";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Onboarding() {
/*
    const CheckOnboarding = async () => {
        try {
         await AsyncStorage.setItem('@viewedOnboarding', 'true')    
        } catch (err) {
            console.log('Error @setItem:', err)
        } 
      }
    */

    const customanimation = {
        duration: 1000,
        create: {
            type: LayoutAnimation.Types.spring,
            property: LayoutAnimation.Properties.scaleXY,
            springDamping: 0.7
        }
    }
    LayoutAnimation.configureNext(customanimation)

    const ImageUrl = Bots.ChatBot.avatar
    const name = Bots.ChatBot.name

    const navigation = useNavigation<propsStack>()
    return <>
    <View style={styles.Screen}>
    <Header nameUrl={name} imageUrl={ImageUrl}/>
    <ImagesFlatlist />
       <Text style={styles.Title}>Welcome to our chatbot app! </Text>
       <Text style={styles.Text}>{'Here you can chat with our AI-powered bot to get answers to your questions. Our bot is always available to help you find the information you need. Get started now and start chatting!'}</Text>
     

       </View>
       <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate('Home')
      
       }}>
            <Text style={styles.buttonText}>Start</Text>
    </TouchableOpacity>
       
    </>
}

const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        backgroundColor: COLORS.background.white
    },
    Title: {
        fontSize: 18,
        color: COLORS.background.black,
        fontWeight: '400',
       textAlign: 'center',
       
    },
    Text: {
         fontSize: 12,
        color: COLORS.gray,
        fontWeight: '500',
       textAlign: 'center',
       alignSelf: 'center',
        width: '90%',
        marginTop: 10
    },
    button: {
        width: '90%',
        height: 50,
        backgroundColor: COLORS.blue,
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: COLORS.background.white,
        fontWeight: '400',
    }
})