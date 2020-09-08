import React, {useState} from 'react';

import CharCounter from '../../components/CharCounter';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  const [char, setChar] = useState('');


  return (
    <Container>
      <Content>
      <h1>Twitter Char Counter</h1>
      <textarea 
        name="text"
        placeholder="Type your text here"
        onChange={e => setChar(e.target.value)}
      />
      {char.length > 0 ? <CharCounter counter={char.length} /> : ''}
      </Content>
    </Container>
  );
};

export default Home;
