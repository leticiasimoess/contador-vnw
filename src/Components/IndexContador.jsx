import  { useState } from 'react';
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
{/*
Aqui, estamos importando o React, bem como a função useState do React. Além disso,estamos
 importando duas imagens (linkedin.svg e github.svg) que serão usadas posteriormente no componente. 
*/}
function Contador() {{/*criando uma função de componente chamada "Contador */}
  const [count, setCount] = useState(0);
{/* utilizando o hook useState para criar uma variável de estado chamada "count" com um valor inicial de 0.
Isso vai permitir que voce mantenha o controle do valor do contador no estado do componente.
 */}

  const aumentar = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const diminuir = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert('O contador chegou ao seu limite. Por favor, adicione para continuar!');
    }
  };

  const reiniciar = () => {
    setCount(0);
  };
{/* defini três funções (aumentar, diminuir e reiniciar) que serão usadas para atualizar o estado
 "count" quando os botões forem clicados 
*/}


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
      <p>{count}</p>
      <button className='left-button' onClick={aumentar}>+</button>
      <button className='right-button' onClick={diminuir}>-</button>
      <button className='center-button' onClick={reiniciar}>Reiniciar</button>
    </div>
  );
}

export default Contador;
