import React from 'react';
import { NumberContext } from './NumberProvider';
import { DisplayStyles } from './styles/Styles';
// Избавляюсь дриллинга через компоненты
// Принимает объект контекста из React.createContext и 
//  возвращает текущее значение контекста number
const Display = () => {
  const { number } = React.useContext(NumberContext);
  return (
    <DisplayStyles>
      <h2>{number}</h2>
      <p>Enter some number</p>
    </DisplayStyles>
  );
};

export default Display;