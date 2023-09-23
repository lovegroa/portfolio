import React, {useState} from 'react';
import {scaleLog} from '@visx/scale';
import WordcloudComp from '@visx/wordcloud/lib/Wordcloud';
import {Text} from '@visx/text';

interface ExampleProps {
  width: number;
  height: number;
  showControls?: boolean;
}

export interface WordData {
  text: string;
  value: number;
}

const colors = [
  '#f0e6f6',
  '#e1ccf2',
  '#d2b2ed',
  '#c39ae9',
  '#b482e4',
  '#a569e0',
  '#9650db',
  '#8638d7',
  '#7720d2',
  '#6a1ac0',
  '#5d15ae',
  //   '#50109d',
  //   '#430b8c',
  //   '#36067b',
  //   '#29016a',
  //   '#1c0058',
  //   '#0f0047',
  //   '#020036',
  //   '#000025',
  //   '#000014',
];

function wordFreq(text: string): WordData[] {
  const words: string[] = text.replace(/\./g, '').split(/\s/);
  const freqMap: Record<string, number> = {};

  for (const w of words) {
    if (!freqMap[w]) freqMap[w] = 0;
    freqMap[w] += 1;
  }
  return Object.keys(freqMap).map(word => ({text: word, value: freqMap[word]}));
}

function getRotationDegree() {
  const rand = Math.random();
  const degree = rand > 0.5 ? 60 : -60;
  return rand * degree;
}

const skills: WordData[] = [
  {text: 'React', value: 15},
  {text: 'TypeScript', value: 14},
  {text: 'Vite', value: 12},
  {text: 'Next', value: 10},
  {text: 'React Query', value: 10},
  {text: 'PostgreSQL', value: 10},
  {text: 'MySQL', value: 10},
  {text: 'HTML', value: 10},
  {text: 'JavaScript', value: 9},
  {text: 'CSS', value: 9},
  {text: 'React Hook Form', value: 8},
  {text: 'TanStack Table', value: 8},
  {text: 'Netlify', value: 8},
  {text: 'Github', value: 8},
  {text: 'Node', value: 8},
  {text: 'OpenAPI', value: 8},
  {text: 'MongoDB', value: 7},
  {text: 'Express', value: 7},
  {text: 'Python', value: 7},
  {text: 'Visual Basic', value: 7},
  {text: 'Jenkins', value: 5},
  {text: 'AWS', value: 5},
  {text: 'Terraform', value: 4},
  {text: 'Docker', value: 4},
];

const fontScale = scaleLog({
  domain: [
    Math.min(...skills.map(w => w.value)),
    Math.max(...skills.map(w => w.value)),
  ],
  range: [10, 100],
});
const fontSizeSetter = (datum: WordData) => fontScale(datum.value);

const fixedValueGenerator = () => 0.5;

type SpiralType = 'archimedean' | 'rectangular';

export default function Wordcloud({width, height, showControls}: ExampleProps) {
  const [spiralType, setSpiralType] = useState<SpiralType>('rectangular');
  const [withRotation, setWithRotation] = useState(true);

  return (
    <div className="wordcloud">
      <WordcloudComp
        words={skills}
        width={width}
        height={height}
        fontSize={fontSizeSetter}
        font={'Impact'}
        padding={2}
        spiral={spiralType}
        rotate={withRotation ? getRotationDegree : 0}
        random={fixedValueGenerator}
      >
        {cloudWords =>
          cloudWords.map((w, i) => (
            <Text
              key={w.text}
              fill={colors[i % colors.length]}
              textAnchor={'middle'}
              transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
              fontSize={w.size}
              fontFamily={w.font}
            >
              {w.text}
            </Text>
          ))
        }
      </WordcloudComp>
      {showControls && (
        <div>
          <label>
            Spiral type &nbsp;
            <select
              onChange={e => setSpiralType(e.target.value as SpiralType)}
              value={spiralType}
            >
              <option key={'archimedean'} value={'archimedean'}>
                archimedean
              </option>
              <option key={'rectangular'} value={'rectangular'}>
                rectangular
              </option>
            </select>
          </label>
          <label>
            With rotation &nbsp;
            <input
              type="checkbox"
              checked={withRotation}
              onChange={() => setWithRotation(!withRotation)}
            />
          </label>
          <br />
        </div>
      )}
      {/* <style jsx>{`
        .wordcloud {
          display: flex;
          flex-direction: column;
          user-select: none;
        }
        .wordcloud svg {
          margin: 1rem 0;
          cursor: pointer;
        }

        .wordcloud label {
          display: inline-flex;
          align-items: center;
          font-size: 14px;
          margin-right: 8px;
        }
        .wordcloud textarea {
          min-height: 100px;
        }
      `}</style> */}
    </div>
  );
}
