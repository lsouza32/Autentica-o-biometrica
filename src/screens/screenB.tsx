//Screen B sem estilizacao, pois nao e o foco

import {Button, View, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { useScreenGuard } from "../hooks/useScreenGuard";

export function ScreenB(){
  useScreenGuard('screenB');
  
  const { navigate } = useNavigation();
  
  return(
    <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
      <Text style={{fontSize: 32}}>Screen B</Text>
      <Button 
        title= 'Ir para a tela A'
        onPress={()=> navigate('screenA')}
      />
    
    </View>
  )
}