import React, {useEffect, useRef, useState} from 'react';
import {createGridArray, move} from './utils';
import {Direction, Sprite} from './types';
import {RowCol} from './pacman.component';

type Props = {
  gameContainerRef: React.RefObject<HTMLDivElement>;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  isRunning: boolean;
  coins: RowCol[];
  setCoins: React.Dispatch<React.SetStateAction<RowCol[]>>;
  setLives: React.Dispatch<React.SetStateAction<number>>;
  lives: number;
  pacman: Sprite;
  setPacman: React.Dispatch<React.SetStateAction<Sprite>>;
  ghosts: Sprite[];
  setGhosts: React.Dispatch<React.SetStateAction<Sprite[]>>;
  fps: number;
  showPaths: boolean;
};

export default function GameContainer({
  gameContainerRef,
  isRunning,
  setIsRunning,
  coins,
  setCoins,
  lives,
  setLives,
  pacman,
  setPacman,
  ghosts,
  setGhosts,
  fps,
  showPaths,
}: Props) {
  const [nextMove, setNextMove] = useState<Direction>();
  const [refresh, setRefresh] = useState<NodeJS.Timeout>();

  const nextMoveRef = useRef<Direction | undefined>();

  useEffect(() => {
    if (isRunning) {
      setRefresh(
        setInterval(() => {
          setPacman(sprite =>
            move({gridArray, nextMove: nextMoveRef.current, sprite})
          );

          //   coins.push({row: pacman.row, col: pacman.col});
        }, 1000 / fps)
      );
    } else {
      clearInterval(refresh);
    }

    return () => {
      clearInterval(refresh);
    };
  }, [isRunning]);

  useEffect(() => {
    if (isRunning) {
      setGhosts(ghosts => {
        let loseLife = false;
        const newGhosts = ghosts.map(ghost => {
          const {row, col, currentMove, random} = ghost;

          let directions: {
            move: Direction;
            rOffset: number;
            cOffset: number;
          }[] = [
            {move: 'up', rOffset: -1, cOffset: 0},
            {move: 'down', rOffset: 1, cOffset: 0},
            {move: 'left', rOffset: 0, cOffset: -1},
            {move: 'right', rOffset: 0, cOffset: 1},
          ];

          // stops the ghosts from doing uturns
          switch (currentMove) {
            case 'up':
              directions = directions.filter(d => d.move !== 'down');
              break;
            case 'down':
              directions = directions.filter(d => d.move !== 'up');
              break;
            case 'left':
              directions = directions.filter(d => d.move !== 'right');
              break;
            case 'right':
              directions = directions.filter(d => d.move !== 'left');
              break;
            default:
              break;
          }
          directions = directions.filter(d => {
            return !gridArray[row + d.rOffset][col + d.cOffset].block;
          });

          // Shuffle the directions
          for (let i = directions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [directions[i], directions[j]] = [directions[j], directions[i]];
          }

          let value = Number.MAX_VALUE; // Initialize to a high number
          let nextMove: Direction | undefined = undefined;

          for (let direction of directions) {
            let newRow = row + direction.rOffset;
            let newCol = col + direction.cOffset;

            if (
              gridArray[newRow] &&
              gridArray[newRow][newCol] &&
              gridArray[newRow][newCol].cornerValue < value
            ) {
              value = gridArray[newRow][newCol].cornerValue;
              nextMove = direction.move;
            }
          }

          // controls the randomness of the ghosts
          if (Math.random() > random && directions.length) {
            nextMove =
              directions[Math.floor(Math.random() * (directions.length - 1))]
                .move;
          }

          // if the ghosts are the container it forces them to leave
          if (row === 14) {
            if (col === 16) nextMove = 'left';
            if (col === 12) nextMove = 'right';
            if (col === 14) nextMove = 'up';
          }

          const pRow = ghost.row;
          const pCol = ghost.col;

          // holds the ghosts until it is time to move
          if (ghost.delayTime) {
            ghost.delayTime -= 1;
          } else {
            ghost = move({gridArray, nextMove, sprite: ghost});
          }

          if (pacman.row === ghost.row && pacman.col === ghost.col) {
            loseLife = true;
          } else if (pacman.row === pRow && pacman.col === pCol) {
            loseLife = true;
          }

          return ghost;
        });

        if (loseLife) {
          setLives(lives => --lives);
        }

        return [...newGhosts];
      });
    }
  }, [isRunning, pacman]);

  useEffect(() => {
    const {col, row} = pacman;

    setCoins(previous => {
      if (previous.some(p => p.row === row && p.col === col)) return previous;
      if (!gridArray[row][col].coin) return previous;

      return [...previous, {row: pacman.row, col: pacman.col}];
    });
  }, [pacman, setCoins]);

  useEffect(() => {
    nextMoveRef.current = nextMove;
  }, [nextMove]);

  const nextMoveHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    switch (e.key) {
      case 'ArrowUp':
        setNextMove('up');
        break;
      case 'ArrowDown':
        setNextMove('down');
        break;
      case 'ArrowLeft':
        setNextMove('left');
        break;
      case 'ArrowRight':
        setNextMove('right');
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (!lives) {
      setIsRunning(false);
      clearInterval(refresh);
    }

    setPacman(pacman => ({...pacman, col: 0, row: 14}));
  }, [lives, setIsRunning]);

  // acts as a config file for the creation of the dom
  const gridArray = createGridArray({sprites: [pacman, ...ghosts], coins});

  // function that creates the dom
  const createGrid = () => {
    const sprites = [pacman, ...ghosts];
    const grid: JSX.Element[] = [];

    gridArray.forEach((tempRow, row) => {
      tempRow.forEach((cell, col) => {
        const {block, coin, cherry, cornerValue, isCorner, tunnel} = cell;
        const classes: string[] = ['cell'];

        block && classes.push('block');
        coin && classes.push('coin');
        cherry && classes.push('cherry');
        let border = '1px solid black';
        let background = '';
        if (cell.sprites.length) {
          border = '3px solid white';
          const sprite = sprites.find(
            sprite => sprite.name === cell.sprites[0]
          );

          border =
            sprite?.name === 'pacman' ? '3px solid black' : '3px solid white';
          if (sprite) {
            background = sprite.color;
          }
        }

        grid.push(
          <div
            key={grid.length}
            className={classes.join(' ')}
            id={`r${row}-c${col}`}
            style={{
              overflow: 'hidden',
              background,
              color: background,
              border,
              gridColumnStart: col + 1,
              gridRowStart: row + 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {showPaths && !block && !tunnel && cornerValue}
          </div>
        );
      });
    });

    return grid;
  };

  return (
    <div
      tabIndex={0}
      ref={gameContainerRef}
      onKeyDown={nextMoveHandler}
      id="game-container"
    >
      {createGrid()}
    </div>
  );
}
