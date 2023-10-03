import React from 'react';

/*Importando as imagens do linkedin e github */
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
class  Contador extends React.Component {
 /*Aqui estou declarando uma nova classe chamada "Contador" que herda funcionalidades da classe base React.Component.
  Isso significa que nossa classe "Contador" será uma classe de componente React que pode ser usada para criar
   elementos de interface de usuário reutilizáveis */ 


   /* Aqui, estamos definindo o construtor da nossa classe "Contador */
   /*O método constructor é um método especial que é executado quando uma instância da classe é criada.
  Ele recebeu um parâmetro props, que são as propriedades passadas para o componente quando ele é 
  renderizado. */
  constructor(props) {
        super(props); // esta linha vai chamar o construtor da classe pai (React.Component) usando super(props). 
        this.state = {  // inicializando o estado .
          count: 0,
        };
        /*  O estado é um objeto que contém dados que podem ser usados para controlar o comportamento do 
        componente e renderizar seu conteúdo. Neste caso, estamos definindo um único campo de estado chamado 
        "count" com o valor inicial de 0.
         Isso significa que quando o componente for renderizado pela primeira vez, o valor de "count" será 0. */

      }
      aumentar = () => {
        if (this.state.count < 10) {
          this.setState({ count: this.state.count + 1 });
        }
      }; 
      
  /*Este é um método chamado aumentar, é uma função que pode ser chamada quando algo no codigo deseja aumentar.
   O método vai verificar se o valor atual do contador (armazenado no estado do componente como 
  this.state.count) é menor do que 10. Se for menor que 10, ele atualiza o estado do componente com um novo valor,
 aumentando o valor atual em 1.
  Isso é feito usando this.setState, que é uma função especial do React usada para atualizar o estado do componente. */
    
      diminuir = () => {
        if (this.state.count > 0) {
          this.setState({ count: this.state.count - 1 });
        }else {
            alert('O contador chegou ao seu limite. Por favor, adicione para continuar!');
          }
      };

      /*Este é um método chamado "diminuir" e essa função pode ser chamada quando algo no codigo deseja diminuir.
       O método verifica se o valor atual do contador é maior que 0. Se for maior que 0, 
       ele atualiza o estado do componente com um novo valor, diminuindo o valor atual em 1. 
       Se o contador já estiver em 0, ele vai exibir um alerta informando que o contador atingiu o limite mínimo
      e não pode ser diminuído mais. */
       
      reiniciar = () => {
        this.setState({ count: 0 });
      }

    /*Este é um método chamado "reiniciar". É uma função que pode ser chamada quando o contador deseja
     reiniciar para o valor inicial. 
     O método simplesmente atualiza o estado do componente, definindo o valor do contador de volta para 0. */


      render() {
        return (
          <div className='container'>
             <div className='social-link'>
            <a href="https://www.linkedin.com/in/leesimoes/" target="blank">
        <img src={linkedin} alt="logo do linkedin" />
      </a>
      <a href="https://github.com/leticiasimoes" target="blank">
        <img src={github} alt="logo do github" />
      </a>
            </div>
            <h1>Contador VNW </h1> 
            <p> {this.state.count}</p>
            {/*
             a tag <p> exibe o valor atual do contador.O valor é obtido do estado do 
            componente usando this.state.count. 
            Isso significa que o valor do contador será exibido na interface do usuário. 
            */}
            

            <button className='left-button' onClick={this.aumentar}>+</button> 
            {/*Quando esse botão é clicado, ele chama a função this.aumentar que foi definida mais acima no componente para aumentar o contador.*/}
            <button className='right-button' onClick={this.diminuir}>-</button>
            {/*Aqui vai fazer a mesma coisa que o botão aumentar a diferença é que vai chamar a função this.diminuir */}
            <button className='center-button' onClick={this.reiniciar}>Reiniciar</button>
           {/*Quando for clicado, ele chama a função this.reiniciar, que deve ser responsável por reiniciar o contador. */}
            </div>
           
          
        );
      }
    }
    
    
export default Contador;