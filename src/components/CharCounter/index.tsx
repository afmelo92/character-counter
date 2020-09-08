import React, { useEffect, useState } from 'react';

import { Container } from './styles';

interface CharCounter {
  counter: number;
}


const CharCounter: React.FC<CharCounter> = ({ counter }) => {
  const [number, setNumber] = useState(0);
  const [ringStyle, setRingStyle] = useState({
    stroke: '',
    strokeDasharray: '',
  });

  const r = 15;
  const circleLength = 2 * Math.PI * r;
  const colored = (circleLength * counter) / 240;
  const gray = circleLength - colored;

  useEffect(() => {
    setNumber(counter);

    setRingStyle({
      stroke: counter < 160 ? '#00cc00' : '#c53030',
      strokeDasharray: `${colored} ${gray}`,
    });
  }, [colored, counter, gray]);

  return (
    <Container>
      <p style={{ color: ringStyle.stroke }}>
        Você digitou
        {` ${number} `}
        caracteres
      </p>
      <svg>
        <circle id="gray" cx="50%" cy="50%" r="10" />
        <circle id="colored" cx="50%" cy="50%" r="10" style={ringStyle} />
      </svg>
    </Container>
  );
};

export default CharCounter;
