import React, {useEffect, useState} from 'react';
import {Cell, GridContainer} from './grid.styles';

const Grid = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);
  const [divs, setDivs] = useState<string[]>([]);
  const [start, setStart] = useState(true);

  useEffect(() => {
    const height = window.outerHeight;
    const width = window.outerWidth;
    let horizontalCells = 20;

    if (width < 600) {
      horizontalCells = 5;
    }

    const cellWidth = width / horizontalCells;
    const cellHeight = cellWidth;
    const verticalCells = Math.round(height / cellHeight);

    const noOfCells = verticalCells * horizontalCells;

    for (let index = 0; index < noOfCells; index++) {
      divs.push('');
    }

    setDivs([...divs]);
    setTimeout(() => setStart(false), 100);

    setInterval(() => {
      setNumber(Math.round(Math.random() * divs.length));
    }, 500);
    setCount(count + 1);
  }, []);

  return (
    <GridContainer>
      {divs.map((_item, index) => (
        <Cell
          key={index}
          className={number === index || start ? 'hover' : ''}
        ></Cell>
      ))}
    </GridContainer>
  );
};

export default Grid;
