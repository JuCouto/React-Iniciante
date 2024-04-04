# React-Iniciante

#### Anotações realizadas seguindo as explicações dos vídeos do curso React do zero a maestria,  ministrada por Matheus Battisti.

#### A descrição dos projetos segue a ordem de execução em aula.
Sendo os primeiros com aplicação mais simples em relação a arquitetura, organização do código, uso de componentes e hooks.

<details>
  <summary>Fundamentos do React</summary>
  
#### Node.Js 
- e uma biblioteca, runtime de javScript, utilizada por um compilador durante a execução do programa, éconstruida em V8 da Google.
  - Temos um código JavaScript rodando em C++ para garantir alta performance.
  - Download Node : nodejs.org
  - Verificar versão do node, digitar no cmd: node -v

#### NPM 
- é um gerenciador de pacotes Node, permite utilizar bibliotecas de terceiros, e também é utilizado par executar determinados scripts no programa.
  - os módulos externos ficam na pasta node-modules, Ela deve ser descartável, a cada instalação do projeto baixamos todos os pacotes novamente.
  - O npm vem junto com o Node.
  - Verificar versão do npm, digitar no cmd: npm -v


Terminal Powershell é melhor que o cmd.

#### Modo comum de criar um proje em react:
      npx create-react-app nomedaaplicação

#### Modo mais atual de criar o projeto utilizando vite, o projeto é criado de forma mais rápida:
     npm create vite@latest
 - selecionar nome do projeto
- selecionar o framework (no caso escolher react)
- selecionar a variant - JavScript ou TypeScript
- entrar na pasta no projeto que foi criada e rodar:
  - npm install ou npm i

#### Para rodar com vite:
     npm run dev

Extensão VS Code:
ES7 + React/Redux/React-Native
__________________________________________________________________________________

### Fundamentos do React

* Components
  - CamelCase
  - para importar colocar em forma de tag <Component/>

* Events (button, onClick)
  - Temos acesso ao argumento especial chamado events ou e. são os dados que o evento contém, se passar ele no log é possível ver tudo que o evento possui.

* Funções no evento
  - é possível passar a função criandoo uma () =>, porém não é recomendado criar uma função de bloco (função com mais de uma linha) nesse caso é melhor criar a função e chama-lano onclick.

* Imagem
  - Na pasta public manter as imagens que não possuem previsão de mudança, como logo, favicon
  - Na pasta assets as imagens que estão dentro do arquivo e poderão sofrer mudanças.

* Hooks
  - Todos os hooks começam com use
  - podemos criar nossos hooks, isso se chama custom hook
  - precisam ser importados
  - Hooks guarda ou alteram o estado de um dado


* Renderizar listas
  - map ex: <div>
	 <ul>
	  {list.map((item) => (
	    <li>{item}</li>))}
	 </ul>
	</div>

o list foi inicializado com useState contendo um array de nomes
ex: const [list] = useState(["Juliana", "Claudia", "Priscila"])


* Propriedade Key
  - o react precisa de uma chave única para cada um dos itens listados, isso ajuda a renderizar os componentes.
  - Podemos usar o id ou o index, mas o ideal é utilizar o id, em ultimo caso se usa o idex.
  - map ex com index: <div>
	 <ul>
	  {list.map((item,i) => (
	    <li key={i}>{item}</li>))}
	 </ul>
	</div>

* Previous State
  - permite pegar o dado ems eu valor original dentro de um set de dado
  - usado paramodificar listas, pois temoso valor antigo e transformamos em um valor novo
  - o primeiro argumento de um set sempre será o previous state
  - para chamar colocar prev+nome do state
  - ex: prevList

* Renderização condicional
  - é quando imprimimos uma parte do template baseado em uma condição
  - usa if para checar
  - ex: em caso de usuario autenticado/não autenticado

* If/Else
  - utilizar ternário
  - condição ? bloco1 : bloco2

* Props
  - passar valores de um componente pai para um componente filho
  - muito útil quando os dados são carregados via banco de dados.
  - as props vem em um objeto no argumento da função do componente.
  - eu dou um nome para propriedade que eu vou enviar e depois igualo ela o valor
  - ex: nome={nome}.
    - o primeiro campo é o nome que dou para a propriedade, não importa o nome que vou dar, poderia ser bola={nome}.
    - o segundo campo é o valor da propriedade, ele precisa ser informad0 corretamente.

  -  - ao receber o props no filho , recebo no componente filho pelo nome que eu dei a ele.

* Desestruturar props - destructuring
  - É a forma mais atual e funcional para utilizar.
  - passo entre {} os nomes das propriedades que estou recebendo por props.

* Renderização de lista
  - modelo de construção: { cars.map((car)=>(
  - para acessar os dados preciso passar car.propriedadedesejada
)}

* Fragments
  - <></> É interessante utilizar quando precisamos ter mais de um elemento pai em um componente.
  - Ela serve como elemento pai, não alterando a estrutura HTML como acontece se utilizamos uma div.

* ChildrenProp
  - recurso utilizado quando um componente precisa ter jsx dentro dele
  - porém esse jsx vem do componente pai
  - então o componente age como um container abraçando estes elementos
  - children é considerada uma prop de um componente.
  - a propriedade children carrega outros elementos além do valor, como o HTML.
  - No componente pai passo o prop myValue e as propriedades que desejo que sejam mostradas dentro do componente filho, elas serão carregadas pelo prop children, essa funcionalidade é muito utilizada em context.
    
  ![image](https://github.com/JuCouto/React-Iniciante/assets/100319483/486fec32-02cf-49f7-8eba-fa2979cc3bf7)
  
  - no componente filho recebo o prop children e passo como objeto children onde será carregado as propriedades no pai, posso também receber mais de uma prop, como o myValue por exemplo:
    
   ![image](https://github.com/JuCouto/React-Iniciante/assets/100319483/8c1dcd7d-de3f-4d12-99f2-c43af25427a7)

  - Exemplo em tela:
 
    ![image](https://github.com/JuCouto/React-Iniciante/assets/100319483/5cb20c97-243b-4d9e-b68a-7940dd5007c8)

* Função em props -  PAI PARA FILHO
  - criar a função no component pai e enviar como prop para o component.
  - No componente filho a função pode ser ativada por um evento.
  - exemplo: função de deletar no pai, passo para o filho , e no filho chamo a função através do ícone de deletar.

* State lift - FILHO PARA PAI
  - valor levado do component filho para o pai
  - geralmente temos um componente que usa o state e outro que o altera
  - precisamos passar a alteração para o componente pai e este passa para o componente que usa o state

	* --> exemplo com 3 componentes:

	-- (estado gerenciado pelo componente pai)
	-- o state fica no pai
	-- a função está no pai
	-- passo o state para o filho1 por prop.

	-- (componente que consome esse estado)
	-- no filho1 recebo o parâmetro

	-- (componente que altera e eleva o estado, para eu ter um reconsumo do estado)
	-- no pai passo a função por props par o filho2.
	-- no filho2 recebo a função e faço o gerenciamento do que será passado/recebido na função que está criada no pai.
	-- criando um botão que vai ativar o evento para chamar a função e passar o valor para a função.

</details>

<details>
  <summary>Formulário</summary>

 </details>

 
<details>
  <summary>CSS</summary>

* CSS inline
	- style{{color:"red", margin: "25px", borderTop:"2px black solid" }}

* CSS de Componentes
	- Classe style.css
 - 
* Classe dinâmica 
usar if ternário para transitar entre duas className, pode ser usando para acessibilidade

CSS modules
é usando atualmente, obeneficio é não vazar css para outro componente, mesmo se eu chamar a mesma classename, ele só aceita se tiver a importação da pasta module.css
a convenção é nomecomponente.module.css

 </details>
 
<details>
  <summary>SecretWord - Projeto</summary>
  
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

### useDebounce
- Hook personalizado para controlar o tempo para execução da chamada na API, ele permite a execução da função após executar o tempo de espera determinado.
- modelo de componente Search sendo chamado no about, consumindo essa api https://kitsu.docs.apiary.io/#introduction/json:api.
- O componente SEARCHINPUT tem a implementação do debaunce.
- 
</details>
