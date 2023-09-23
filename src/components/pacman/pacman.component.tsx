import React, {useEffect, useRef, useState} from 'react';
import GameContainer from './gameContainer.component';
import {Direction, Sprite} from './types';

export type RowCol = {row: number; col: number};

type Score = {
  score: number;
  name: string;
  id: number;
};

const fps = 5;

const ghostsConfig = [
  {name: 'ghost1', delay: 5 * fps, color: 'limegreen', random: 0, col: 13},
  {name: 'ghost2', delay: 10 * fps, color: 'blue', random: 0.25, col: 15},
  {name: 'ghost3', delay: 15 * fps, color: 'orange', random: 0.5, col: 12},
  {name: 'ghost4', delay: 20 * fps, color: 'red', random: 1, col: 16},
];

const createInitialGhosts = (): Sprite[] => {
  return ghostsConfig.map(({name, delay, color, random, col}) => ({
    name,
    type: 'ghost',
    behaviour: 'chase',
    controller: 'computer',
    row: 14,
    col,
    delayTime: delay,
    currentMove: undefined,
    color,
    random,
  }));
};

const initialPacman: Sprite = {
  name: 'pacman',
  type: 'pacman',
  behaviour: 'run',
  controller: 'player',
  row: 14,
  col: 0,
  delayTime: 0,
  currentMove: undefined,
  color: 'yellow',
  random: 0,
};

export default function Pacman() {
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [coins, setCoins] = useState<RowCol[]>([]);
  const [lives, setLives] = useState(3);
  const [scores, setScores] = useState<Score[]>([]);
  const [pacman, setPacman] = useState<Sprite>(initialPacman);
  const [ghosts, setGhosts] = useState<Sprite[]>(createInitialGhosts());
  const [name, setName] = useState('');
  const [isScoreSaved, setIsScoreSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPaths, setShowPaths] = useState(false);

  const onReset = () => {
    setPacman(initialPacman);
    setGhosts(createInitialGhosts());
    setCoins([]);
    setLives(3);
    setIsScoreSaved(false);
  };

  useEffect(() => {
    const getScores = async () => {
      let url =
        'https://api.sheety.co/4b5b1dbdd450e7e181f448b3fed63133/pacmanScores/sheet1';
      const response = await fetch(url);
      const json = (await response.json()) as {[key: string]: Score[]};
      if ('sheet1' in json) setScores(json.sheet1);
    };

    getScores();
  }, []);

  const onSave = async () => {
    setIsLoading(true);
    let url =
      'https://api.sheety.co/4b5b1dbdd450e7e181f448b3fed63133/pacmanScores/sheet1';
    let body = {
      sheet1: {
        name, // Player's name
        score: coins.length * 100,
      },
    };
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {'content-type': 'application/json'},
    });

    const json = await response.json();
    if ('sheet1' in json) {
      setScores(previousScores => {
        const tempScores = [...previousScores];
        tempScores.push(json.sheet1);
        tempScores.sort((a, b) => b.score - a.score);
        return tempScores;
      });
      setIsScoreSaved(true);
    }

    setIsLoading(false);
  };

  return (
    <div>
      {/* Header */}
      <div
        style={{
          height: '100px',
          backgroundColor: ' rgba(0, 0, 0, 0.3)',
          padding: '20px 20px 0 20px',
          display: lives ? undefined : 'none',
        }}
      >
        <div
          style={{
            height: '50%',
            width: '100%',
            justifyContent: 'space-between',
            display: 'flex',
          }}
        >
          <button
            className="button"
            onClick={() => {
              if (gameContainerRef) {
                gameContainerRef.current?.focus();
              }
              setIsRunning(!isRunning);
            }}
          >
            {isRunning ? 'Stop' : 'Start'}
          </button>

          <button
            className="button"
            onClick={() => {
              setShowPaths(previousState => !previousState);
            }}
          >
            Toggle Path Data
          </button>
        </div>
        <div
          style={{
            height: '50%',
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '20px',
            alignItems: 'center',
          }}
        >
          <div>Score: {coins.length * 100}</div>
          <div>Lives: {lives}</div>
        </div>
      </div>
      {/* Game */}
      <div
        style={{
          backgroundColor: ' rgba(0, 0, 0, 0.3)',
          display: lives ? 'flex' : undefined,
        }}
      >
        <GameContainer
          isRunning={isRunning}
          setIsRunning={setIsRunning}
          gameContainerRef={gameContainerRef}
          coins={coins}
          setCoins={setCoins}
          lives={lives}
          setLives={setLives}
          pacman={pacman}
          setPacman={setPacman}
          ghosts={ghosts}
          setGhosts={setGhosts}
          fps={fps}
          showPaths={showPaths}
        />
      </div>
      {/* Scores */}
      <div
        style={{
          backgroundColor: 'black',
          color: 'yellow',
          fontFamily: "'Press Start 2P', sans-serif",
          border: '3px solid yellow',
          padding: '10px',
          width: '100%',
          display: lives ? 'none' : '',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            borderBottom: '2px solid yellow',
            paddingBottom: '10px',
            marginBottom: '10px',
          }}
        >
          GAME OVER
        </h2>
        <ul
          style={{
            listStyle: 'none',
            padding: '0',
          }}
        >
          {scores.map((score, index) => (
            <li
              key={index}
              style={{
                padding: '5px 0',
              }}
            >
              <span
                style={{
                  fontWeight: 'bold',
                }}
              >
                {score.name}
              </span>
              :<span>{score.score}</span>
            </li>
          ))}
        </ul>

        {!isScoreSaved && (
          <>
            <div
              style={{
                textAlign: 'center',
                fontSize: '24px',
                marginTop: '20px',
              }}
            >
              {coins.length * 100}
            </div>
            <form
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '20px',
              }}
              onSubmit={e => {
                e.preventDefault();
                onSave();
              }}
            >
              <input
                style={{
                  marginBottom: '10px',
                  padding: '5px',
                  color: 'yellow',
                  fontSize: '32px',
                }}
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              <button
                style={{
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  padding: '5px 10px',
                  backgroundColor: isLoading ? 'lightgray' : 'yellow',
                  border: 'none',
                  color: isLoading ? 'darkgray' : 'black',
                  fontFamily: "'Press Start 2P', sans-serif",
                  opacity: isLoading ? 0.6 : 1,
                }}
                disabled={isLoading}
                type="submit"
              >
                Save Score
              </button>
            </form>
          </>
        )}

        <button
          style={{
            cursor: 'pointer',
            padding: '5px 10px',
            backgroundColor: 'yellow',
            border: 'none',
            color: 'black',
            fontFamily: "'Press Start 2P', sans-serif",
          }}
          onClick={onReset}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
}
