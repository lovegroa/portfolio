import React, {useEffect, useState} from 'react';
import ScrollDown from '../scroll-down/scroll-down.component';
import {Cell, GridContainer} from './grid.styles';

const Grid = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);
  const [divs, setDivs] = useState<string[]>([]);
  const [start, setStart] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const listenToScroll = () => {
      setScrollPosition(
        document.body.scrollTop || document.documentElement.scrollTop
      );
    };

    window.addEventListener('scroll', listenToScroll);

    const width = window.outerWidth;
    let noOfCells = 200;

    if (width < 600) {
      noOfCells = 50;
    }

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
      {scrollPosition > 100 ? <></> : <ScrollDown />}
    </GridContainer>
  );
};

export default Grid;
