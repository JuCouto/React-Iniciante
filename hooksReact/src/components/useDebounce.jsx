import { useRef } from "react";

export default function useDebounce(fn, delay) {//ele espera uma função e um tempo

  const timeoutRef =useRef(null) //useRef vai armazenar o valor anterior dentro do hook

  function debouncedFunction(...args) {// quando espera receber todos os argumentos possíveis, se chama respParams posso passar também ...params.

     window.clearTimeout(timeoutRef.current); // vai cancelar o tempo antes de iniciar o próximo
    
    // uso o setTimeout, ele vai esperar o tempo definido(delay) e vai executar a função que passei dentro dele
    timeoutRef.current = window.setTimeout(() => {
        fn(...args);
    }, delay)
   
  }
  return debouncedFunction;
}
