import { CurrentRenderContext, useNavigationState } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import * as LocalAuthentication from 'expo-local-authentication';

export function useScreenGuard(screenName: string){
  const navigationState = useNavigationState(state=> state);

  const [sessionTime, setSessionTime] = useState(0);

  async function handleAuthentication() { //funcao para solicitar autenticacao
    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Sessão expirada'
    });

    if(auth.success){// caso for desbloqueado com sucesso, reseta o SessionTime para iniciar novamente a contagem
      setSessionTime(0);
    }else{ // caso tiver sucesso ao desbloquear, a funcao é chamada novamente de forma recursiva, até que o celular seja desbloqueado
      handleAuthentication(); 
    }
    
  }

  useEffect(()=>{
    if(sessionTime< 10){ /* 10s é o tempo definido para renovar a autenticação
    enquanto o for menos que 10, ele vai continar contando o tempo sem pedir uma nova autenticacao*/
      
      const timer= setTimeout(()=>{ //timer para incrementar os segundos
        setSessionTime(prevState=> prevState+1);
        console.log(sessionTime);
      },1000);

      return()=> clearTimeout(timer); //ao final reseta o timer

    }else{ // caso o timer tiver passado de 10s vamos pedir novamente a autenticacao

      if(navigationState.routes){// verifica se ha rotas disponiveis
        const currentScreen= navigationState.routes[navigationState.index]; // armazena o nome da tela atual do user

        if(currentScreen.name === screenName){// verifica se a tela atual do user é a tela que precisa ser bloqueada
          handleAuthentication(); 
        }
      }    
    }

  },[sessionTime])
}