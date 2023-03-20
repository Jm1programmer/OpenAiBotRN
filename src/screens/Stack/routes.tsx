import React, {useState, useEffect} from "react";

import {NavigationContainer,} from '@react-navigation/native';

import Chat from "../Chat";
import Home from "../Home";
import Onboarding from "../Onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { propsNavigationStack } from "./models";
const {Navigator, Screen}= createNativeStackNavigator<propsNavigationStack>()

export default  function Routes() {

  const [viewedOnboarding, setViewedOnboarding] = useState<boolean>(false)

 /* const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding')

      if (value !== null) {
          setViewedOnboarding(true)
      }

    } catch (err) {
        console.log('Error @checkOnboarding:', err)
    } finally {

    }

  }


  useEffect(() => {
      checkOnboarding()
  }, [])
*/

return (
  <>

    <NavigationContainer  >
    <Navigator 
      screenOptions={{
    headerShown: false,
  }}
    
  >
    
          
          <>
          <Screen name="Onboarding" component={Onboarding} />
          <Screen name="Home" component={Home} />
        
        
          <Screen name="Chat" component={Chat} />
        
    
        
          
      
          </>
          
         
      
          
         
      
   
   
        
  
     
        
      </Navigator>
    </NavigationContainer>
    </>
  );
        
   
    
 
 

}
