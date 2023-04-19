import React from "react";

import { SafeAreaView } from "react-native";

import { AuthProvider } from "./src/contexts/Auth";
import Routes from "./src/screens/Stack/routes";



export default  function App() {
  
  

  

return (
  <>
  <SafeAreaView></SafeAreaView>
  <AuthProvider>
    <Routes />
  </AuthProvider>
 

  
    </>
  );
        
   
    
 
 

}
