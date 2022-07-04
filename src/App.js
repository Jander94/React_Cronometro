import { useState } from 'react';
import './estilo.css'

function App(){

  const [ numero, setNumero ] = useState(0);
  const [ btn, setBtn ] = useState('Iniciar');
  const [ timer, setTimer ] = useState(null);

  function iniciar(){
    if (timer !== null){
      clearInterval(timer);
      setTimer(null);
      setBtn('Iniciar');
    }else{
      setBtn('Pausar')
      setTimer(setInterval(() => {
        setNumero((cont) => cont + 0.1);                           
      }, 100));
    }      
  }

  function zerar(){
    setNumero(0);
    clearInterval(timer);
    setTimer(null);
    setBtn('Iniciar');
  }

  return(
    <div className='container'>
      <h1 className='titulo'>Cronometro</h1>
      <h1>{numero.toFixed(2)}</h1>
      <div>
        <button onClick={iniciar} className='btn-iniciar'>{btn}</button>
        <button onClick={zerar} className='btn-zerar'>Zerar</button>
      </div>
    </div>
  );
}

export default App;
