import {Direction, GridArray, Sprite} from './types';

type CreateGridArrayArgs = {
  sprites: Sprite[];
  coins: {row: number; col: number}[];
};

export function createGridArray({sprites, coins}: CreateGridArrayArgs) {
  //adds the different key value pairs to the gridArray object

  function findCorners({gridArray}: FindCornersArgs) {
    // updates the grid array to identify corners
    // returns an array of all the corners [row, col]

    let allCorners: [number, number][] = [];

    gridArray.forEach((tempRow, row) => {
      tempRow.forEach((cell, col) => {
        if (
          cell.block ||
          (row === 14 && col === 28) ||
          (row === 14 && col === 0)
        ) {
          cell.isCorner = false;
          return;
        }

        let up;
        let down;
        let left;
        let right;
        let cornerCount = 0;
        cell.isCorner = false;

        gridArray[row - 1][col].block ? (up = false) : (up = true);
        gridArray[row + 1][col].block ? (down = false) : (down = true);
        gridArray[row][col - 1].block ? (left = false) : (left = true);
        gridArray[row][col + 1].block ? (right = false) : (right = true);

        up && (cornerCount += 1);
        down && (cornerCount += 1);
        left && (cornerCount += 1);
        right && (cornerCount += 1);

        if (cornerCount > 2) {
          // definite corner
          cell.isCorner = true;
          cell.coin = false;
          allCorners.push([row, col]);
        } else if (cornerCount === 1) {
          // this would be a dead end, does not exist in the map
          cell.isCorner = false;
        } else if (!((up && down) || (left && right))) {
          // the sprite can move up/down or left/right on it's current path
          cell.isCorner = true;
          cell.coin = false;
          allCorners.push([row, col]);
        }
      });
    });

    return allCorners;
  }

  function pathFind({endRow, EndCol, gridArray, allCorners}: pathFindArgs) {
    gridArray[endRow][EndCol].cornerValue = 1;
    gridArray[endRow][EndCol].corners.forEach(corner => {
      gridArray[corner.row][corner.col].cornerValue = corner.distance + 1;
    });

    let startTime = Date.now();

    let allCornersValue = false;
    let rounds = 5;
    while (rounds) {
      let currentTime = Date.now();

      if (currentTime - startTime > 1000) {
        console.log('Loop ran for more than a second, breaking...');
        break;
      }

      allCornersValue = true;

      gridArray.forEach((tempRow, row) => {
        tempRow.forEach((corner, col) => {
          if (corner.block) return;
          if (corner.tunnel) return;

          // checks to see if the current cell has a value
          if (corner.cornerValue === 1000) allCornersValue = false;

          // if not it is set the lowest value of the connecting corners plus the distance if they have a value
          let min = 1000;
          corner.corners.forEach(connectedDetails => {
            // checks to see if those corners have a value

            const connectedCorner =
              gridArray[connectedDetails.row][connectedDetails.col];

            if (connectedCorner.cornerValue) {
              // if they do and it's smaller than the min then the min is updated with that value plus distance

              if (
                connectedCorner.cornerValue + connectedDetails.distance <
                min
              ) {
                min = connectedCorner.cornerValue + connectedDetails.distance;
              }
            }
          });
          // then the min value is added as that corner value
          if (corner.cornerValue > min) corner.cornerValue = min;
        });
      });

      if (allCornersValue) {
        rounds -= 1;
      }
    }
  }

  const map = [
    'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    'x     xxx           xxx     x',
    'x xxx     x xx xx x     xxx x',
    'x xxxxxx xx x   x xx xxxxxx x',
    'x xxx       x x x       xxx x',
    'x     xx xx       xx xx     x',
    'x x x     x xxxxx x     x x x',
    'x x   xxx x  xxx  x xxx   x x',
    'x x xxxxx xx xxx xx xxxxx x x',
    'x   xxxx   x xxx x   xxxx   x',
    'xxx x    x         x    x xxx',
    'xxx   xx xxxx x xxxx xx   xxx',
    'xxx x xx x         x xx x xxx',
    'xxx      x xxx xxx x      xxx',
    '    xxxx   x     x   xxxx    ',
    'xxx      x xxxxxxx x      xxx',
    'xxx xx xxx         xxx xx xxx',
    'xxx xx   x xxxxxxx x   xx xxx',
    'xxx xx x      x      x xx xxx',
    'x   xx xx xxx x xxx xx xx   x',
    'x x xx xx xxx   xxx xx xx x x',
    'x   x     xxxx xxxx     x   x',
    'xxx x x x xxxx xxxx x x x xxx',
    'x       x           x       x',
    'x xxx xxxx xxxxxxx xxxx xxx x',
    'x xxx         x         xxx x',
    'x xxxxxxxxx x x x xxxxxxxxx x',
    'x                           x',
    'xxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  ];

  const ghostsContainer = [
    {row: 13, col: 14},
    {row: 14, col: 12},
    {row: 14, col: 13},
    {row: 14, col: 14},
    {row: 14, col: 15},
    {row: 14, col: 16},
  ];

  const gridArray: GridArray = [];
  map.forEach((string, row) => {
    gridArray.push([]);
    string.split('').forEach((cell, col) => {
      const block = cell === 'x';
      const cherry = cell === 'c';
      const tunnel = row === 14 && (col > 25 || col < 3);
      const ghostStart = ghostsContainer.some(
        gc => gc.row === row && gc.col === col
      );
      const coin =
        !block &&
        !cherry &&
        !tunnel &&
        !ghostStart &&
        !coins.some(coin => coin.col === col && coin.row === row);
      gridArray[row].push({
        block,
        cherry,
        coin,
        isCorner: false,
        corners: [],
        cornerValue: 1000,
        tunnel,
        sprites: sprites
          .filter(sprite => sprite.col === col && sprite.row === row)
          .map(sprite => sprite.name),
      });
    });
  });

  if (
    !ghostsContainer.some(({row, col}) => gridArray[row][col].sprites.length)
  ) {
    ghostsContainer.forEach(({row, col}) => {
      gridArray[row][col].block = true;
      gridArray[row][col].cornerValue = 1000;
    });
  }

  const allCorners = findCorners({gridArray});
  findNearestCorners({gridArray, allCorners});

  const pacman = sprites.find(({name}) => name === 'pacman');
  if (!pacman) return gridArray;

  pathFind({allCorners, gridArray, EndCol: pacman.col, endRow: pacman.row});
  //   measureCorners;

  return gridArray;
}

type pathFindArgs = {
  endRow: number;
  EndCol: number;
  gridArray: GridArray;
  allCorners: [number, number][];
};

type FindCornersArgs = {
  gridArray: GridArray;
};

type FindNearestCornersArgs = {
  gridArray: GridArray;
  allCorners: [number, number][];
};

export function findNearestCorners({
  gridArray,
  allCorners,
}: FindNearestCornersArgs) {
  let distance = 0;

  //identify which corners are connected

  gridArray.forEach((tempRow, row) => {
    tempRow.forEach((cell, col) => {
      if (cell.block) return;
      //check until blocked and return cell id and distance

      //find right corner

      const directions: Direction[] = ['right', 'left', 'up', 'down'];

      directions.forEach(direction => {
        let rowDistance = 0;
        let colDistance = 0;

        //allows the while loop to ignore the starting cell
        let skipFirst = true;
        let tempCell = gridArray[row][col];

        while (!(tempCell.isCorner || tempCell.block) || skipFirst) {
          skipFirst = false;

          // allow for the tunnel
          if (
            (row === 14 && col > 24 && direction === 'right') ||
            (row === 14 && col < 4 && direction === 'left')
          ) {
            break;
          }

          switch (direction) {
            case 'up':
              rowDistance -= 1;
              tempCell = gridArray[row + rowDistance][col];
              break;
            case 'down':
              rowDistance += 1;
              tempCell = gridArray[row + rowDistance][col];
              break;
            case 'left':
              colDistance -= 1;
              tempCell = gridArray[row][col + colDistance];
              break;
            case 'right':
              colDistance += 1;
              tempCell = gridArray[row][col + colDistance];
              break;
            default:
              break;
          }
        }

        distance = Math.abs(
          Math.abs(rowDistance) > Math.abs(colDistance)
            ? rowDistance
            : colDistance
        );

        if (!tempCell.isCorner) return;
        cell.corners.push({
          row: row + rowDistance,
          col: col + colDistance,
          distance,
          direction,
        });
      });
    });
  });
}

type ResetCherriesArgs = {
  gridArray: GridArray;
};

export function resetCherries({gridArray}: ResetCherriesArgs) {
  gridArray[2][1].cherry = true;
  gridArray[2][27].cherry = true;
  gridArray[26][1].cherry = true;
  gridArray[26][27].cherry = true;
  return 4;
}

type MoveArgs = {
  sprite: Sprite;
  gridArray: GridArray;
  nextMove: Direction | undefined;
};

export function move({sprite, gridArray, nextMove}: MoveArgs): Sprite {
  let tunnel = false;

  let {row, col, currentMove} = sprite;
  const cell = gridArray[row][col];
  let rowMomentum = 0;
  let colMomentum = 0;

  //this moves the sprite at the next interval using the latest keystroke, if possible

  switch (nextMove) {
    case 'up':
      gridArray[row - 1][col].block ? (rowMomentum = 0) : (rowMomentum = -1);
      break;
    case 'down':
      if (row === 12 && col === 14) {
        rowMomentum = 0;
        break;
      }
      gridArray[row + 1][col].block ? (rowMomentum = 0) : (rowMomentum = +1);
      break;
    case 'left':
      tunnel = row === 14 && col === 0;
      tunnel && (col = 28);
      gridArray[row][col - 1].block ? (colMomentum = 0) : (colMomentum = -1);
      break;
    case 'right':
      tunnel = row === 14 && col === 28;
      tunnel && (col = 0);
      gridArray[row][col + 1].block ? (colMomentum = 0) : (colMomentum = +1);
      break;
  }

  // If the next move is blocked, the player will continue in their current direction

  if (rowMomentum === 0 && colMomentum === 0) {
    switch (currentMove) {
      case 'up':
        gridArray[row - 1][col].block ? (rowMomentum = 0) : (rowMomentum = -1);
        break;
      case 'down':
        gridArray[row + 1][col].block ? (rowMomentum = 0) : (rowMomentum = +1);
        break;
      case 'left':
        tunnel = row === 14 && col === 0;
        tunnel && (col = 28);
        gridArray[row][col - 1].block ? (colMomentum = 0) : (colMomentum = -1);
        break;
      case 'right':
        tunnel = row === 14 && col === 28;
        tunnel && (col = 0);
        gridArray[row][col + 1].block ? (colMomentum = 0) : (colMomentum = +1);
        break;
    }
  } else {
    currentMove = nextMove;
  }

  const nextCell = gridArray[row + rowMomentum][col + colMomentum];

  // stops the ghosts from using the tunnel
  if (nextCell.tunnel && sprite.type === 'ghost') {
    return {
      ...sprite,
      row,
      col,
      currentMove,
    };
  }

  return {
    ...sprite,
    row: row + rowMomentum,
    col: col + colMomentum,
    currentMove,
  };
}
