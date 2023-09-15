# React-Iniciante

#### A descrição dos projetos segue a ordem de execução em aula.
Sendo os primeiros com aplicação mais simples em relação a arquitetura, organização do código, uso de componentes e hooks.


<details>
  <summary>SecretWord</summary>
  
- Projeto de um jogo similar ao jogo da forca.
  
- Nesse projeto as "responsabilidades" estão concentradas no App.
 
- É o primeiro projeto do curso, então foi criado de forma mais básica, sem usar todos os recursos do react.
 
  ![SecretWord](https://github.com/JuCouto/React-Iniciante/assets/100319483/17997dd8-ed8d-49e2-bbc0-a599f28c5c16)

** sugestão de melhoria: mostrar a palavra completa ao acertar todas asletras, no momento está trocando para a próxima palavra. 
</details>

<details>
  <summary>HTTP Request</summary>

  #### API
  - O projeto apresenta simulação de API utilizando o json server (npm i json-server)
  - Para acessa-lo criar uma pasta "data"e arquivo db.json. colar seu modelo de json a ser consumido.
  - No package.json em scripts colar:   <br>"server": "json-server --watch data/db.json".
  - Para rodar o projeto, iniciar com  o jsonserver, pois por default ele abre na porta 3000.<br>
o react vai abrir em outra porta se a 3000 estiver ocupada, ou usando o vite vai abrir  na 5173
  - <b>npm run server</b>

  - O código possui comentários para facilitar o acompanhamento no que foi acrescentado nas aulas.
![Http](https://github.com/JuCouto/React-Iniciante/assets/100319483/079a99c9-aabb-4709-a2d3-c6ff2df297ef)

</details>

<details>
  <summary>React Router</summary>


</details>

<details>
  <summary>Hooks React</summary>

  ### UseState
- O principal propósito é gerenciar valores.
- Podemos consultar uma valor e alterá-lo.
- Isso permite re-renderizar um componente, o que não é possível com a manipulação de variáveis.

### useState e inputs
- Atrelando o useState a um input podemos fazer algumas ações:
  - alteração de um state por evento de onChange
  - Limpeza de inputs(Controlled input => tem que atrelar o value do input  ao valor do state)
  - Após preenchimento total do form, unir os statese fazer um envio dos dados ao back-end


### useReducer
- Tem a mesma função do useState, ele gerencia valores
- Porém temos a possibilidade de executar uma função na hora da alteração do valor.
- O useReducer recebe um valor para gerenciar e uma função para alterar esse valor.
- Cria a função, e através de uma action ela é executada. por ex: um onClick, em uma função mais simples.
* O reducer geralmente tem aplicações mais complexas, utilizando a estrutura switch com actions

** No código tem um exemplo utilizando o switch, para uma lista de tarefas

### useEffect
- Pode ser utilizado para alterações no DOM, requisições HTTP, entre outras
- O principal motivo de utiliza-lo é poder controlar quantas vezes algo acontece
- A sintaxe é formada por uma função a ser executada e um array de dependências.
- Se utilizar o useEffect com array de dependencias vazio a função é executada apenas uma vez.

#### useEffect com array de dependências:
quando passamos uma dependência criada no useState no array do useEffect para ser "vigiada"

#### Limpeza do useEffect
- Em alguns casos é necessário ter um cleanup no useEffect para garantir o funcionamento
ex: um timeout que ao mudar de página pode continuar a ser executado

</details>
