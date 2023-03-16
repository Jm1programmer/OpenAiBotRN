import React, {useState, useEffect} from "react";



import {NavigationContainer,} from '@react-navigation/native';


import Chat from "../Chat";



import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { propsNavigationStack } from "./models";
const {Navigator, Screen}= createNativeStackNavigator<propsNavigationStack>()

export default  function Routes() {


 
  
  

return (
  <>

    <NavigationContainer  >
    <Navigator 
      screenOptions={{
    headerShown: false,
  }}
    
  >
    
          
          <>
           
          <Screen name="Chat" component={Chat} />
      
          </>
          
         
      
          
         
      
   
   
        
  
     
        
      </Navigator>
    </NavigationContainer>
    </>
  );
        
   
    
 
 

}
