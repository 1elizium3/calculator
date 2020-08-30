import React from 'react';
// Получаю текущее значение контекста из ближайшего Provider
export const NumberContext = React.createContext();
// Создаю базовый Provider чтобы передавать любое передаваеммое значение всем компонентам
const NumberProvider = (props) => {
  const [ number, setNumber ] = React.useState('');       

  const handleSetDisplayValue = (num) => {
    if (!number.includes('.') || num !== '.') {
      setNumber(`${(number + num).replace(/^0+/, '')}`);
    }
    // console.log(typeof num);
  };

  return (
    <NumberContext.Provider
      value={{
        number,
        handleSetDisplayValue,
      }}>
      {props.children}
    </NumberContext.Provider>
  );
};

export default NumberProvider;