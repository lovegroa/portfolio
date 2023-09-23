export type Sprite = {
  name: string;
  type: SpriteType;
  behaviour: BehaviourType;
  controller: ControllerType;
  col: number;
  row: number;
  delayTime: number;
  currentMove: Direction | undefined;
  color: string;
  random: number;
};

export type SpriteType = 'pacman' | 'ghost';
export type BehaviourType = 'run' | 'chase';
export type ControllerType = 'player' | 'computer';
export type Direction = 'right' | 'left' | 'up' | 'down';

export type GridArray = Cell[][];

export type Cell = {
  block: boolean;
  cherry: boolean;
  coin: boolean;
  tunnel: boolean;
  corners: {
    row: number;
    col: number;
    distance: number;
    direction: Direction;
  }[];
  isCorner: boolean;
  sprites: string[];
  cornerValue: number;
  direction?: Direction;
};
