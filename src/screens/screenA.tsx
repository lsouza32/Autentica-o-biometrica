//Screen A sem estilizacao, pois nao e o foco

import {Button, View, Text} from "react-native";
import {useNavigation} from "@react-navigation/native";

export function ScreenA(){
    
  const { navigate } = useNavigation();

  return(
    <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
      <Text style={{fontSize: 32}}>Screen A</Text>
      <Button 
        title= 'Ir para a tela B'
        onPress={()=> navigate('screenB')}
      />

    </View>
  )
}