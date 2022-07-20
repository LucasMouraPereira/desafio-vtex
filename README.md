# Orientações para rodar o projeto

## Inicializando
* Clone o projeto:
```
    git clone https://github.com/LucasMouraPereira/desafio-vtex.git
```
* Faça o login na conta da vtex:
```
    vtex login <conta>
```
* Abra um workspace
```
    vtex use <nome do workspace>
```

## Rodando o subProjeto - React-app

* Pelo terminal navegue até a pasta react dentro de react-app
* Rode o comando:
```
    vtex setup --typings
```
* Pelo terminal volte para a pasta react-app e rode:
```
    yarn
```
* E depois:
```
    vtex link
```

## Rodando o subProjeto - store-theme-master

* Em um novo terminal navegue até a pasta store-theme-master
* Rode o comando:
```
    vtex setup
```
* E depois
```
    yarn
```
* após isso:
```
    vtex link
```

## Rodando o subProjeto - my-account-extension-example

* Em um novo terminal navegue até a pasta my-account-extension-example
* Rode o comando:
```
    vtex setup
```
* E depois
```
    yarn
```
* após isso:
```
    vtex link
```