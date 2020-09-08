import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 30px;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: -10px;

  svg {
    width: 10vmin;
    height: 10vmin;

    circle {
      fill: none;
      stroke-width: 3;
    }
    #gray {
      stroke: lightgray;
    }
  }
`;
