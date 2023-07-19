# Autenticação Biometrica

![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/iuricode/README-template?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/iuricode/README-template?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/iuricode/README-template?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/iuricode/README-template?style=for-the-badge)

<img src="imagem.png" alt="Exemplo imagem">

<h1>Autenticação com biometria - Mobile<h1>
<h3>Implementação da função LocalAuthentication um módulo do Expo que permite realizar autenticação biométrica (como impressão digital ou reconhecimento facial) em aplicativos React Native de forma simples e segura.<h3>
<h3>Alguns exemplos de uso:
1. Autenticar o usuário antes de permitir acesso a áreas sensíveis do aplicativo.
2. Substituir o login convencional por autenticação biométrica para maior comodidade.
3. Implementar uma camada adicional de segurança ao efetuar pagamentos ou transações sensíveis no aplicativo.
<h3>


## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Você instalou a versão mais recente do `NodeJS`
* Você tem uma máquina `Windows / Mac e Android / IOS`. 


## 🚀 Instalando

Para instalar o autenticador biometrico, siga estas etapas:

Linux e macOS:
```
<comando_de_instalação>
```

Windows e macOS:
```
# Clone esse repositório:
$ git clone https://github.com/lsouza32/Autenticacao-biometrica.git

# Entre no diretório:
$ cd AUTENTICACAO-BIOMETRICA

# Instale as dependencias:
$ npm start

# Inicie o projeto:
$ npx expo start

# Abra o aplicativo no Android ou IOS usando seu emulador ou seu app Expo.

```

## ☕ Usando o <Autenticador>

Para usar o <Autenticador>, siga estas etapas:

```
# A tela inicial do aplicativo é a Screen A.
# A Screen B é a tela que simula uma área sensível, então é a tela que exige a autenticação.
# Ao clicar no botão "IR PARA A TELA B" o aplicativo inicia uma contagem de 10 segundos. Após expirar o tempo de 10 segundos a aplicação irá solicitar a autenticação. Após efetuar a atutenticação com sucesso, você terá mais 10 segundos antes de ser solicitado a autenticação novamente.

```

## O projeto <Autenticador> tem um designer simples, seu dever é apenas monstrar como usar o módulo expo-local-authentication.

