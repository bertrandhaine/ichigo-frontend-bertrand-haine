import styled from "styled-components/macro";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
  padding: 10px;
  height: 100vh;
  box-sizing: border-box;

  @media only screen and (max-width: 600px) {
    grid-template-columns: auto auto;
  }

  & > div {
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
  }
`;

interface ItemProps {
  backgroundColor?: string;
}

export const Item1 = styled.div<ItemProps>`
  grid-row-start: 1;
  grid-row-end: 3;
  background-color: ${(props) => props.backgroundColor};

  @media only screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-end: 1;
  }
`;

export const Item2 = styled.div<ItemProps>`
  grid-column-start: 2;
  grid-column-end: 4;
  background-color: ${(props) => props.backgroundColor};

  @media only screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 3;
  }
`;

export const Item3 = styled.div<ItemProps>`
  background-color: ${(props) => props.backgroundColor};
  @media only screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
  }
`;

export const Item4 = styled.div<ItemProps>`
  background-color: ${(props) => props.backgroundColor};
  @media only screen and (max-width: 600px) {
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
  }
`;

export const Item5 = styled.div<ItemProps>`
  background-color: ${(props) => props.backgroundColor};
  @media only screen and (max-width: 600px) {
    grid-column-start: 1;
  } ;
`;

export const Item6 = styled.div<ItemProps>`
  background-color: ${(props) => props.backgroundColor};
  grid-column-start: 1;
`;

export const Item7 = styled.div<ItemProps>`
  background-color: ${(props) => props.backgroundColor};
  grid-column-start: 2;
  grid-row-start: 3;
  grid-row-end: 5;

  @media only screen and (max-width: 600px) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 4;
  }
`;

export const Item8 = styled.div<ItemProps>`
  background-color: ${(props) => props.backgroundColor};
  grid-column-start: 3;
  grid-row-start: 3;

  @media only screen and (max-width: 600px) {
    grid-column-start: 2;
    grid-row-start: 5;
  }
`;

export const Item9 = styled.div<ItemProps>`
  background-color: ${(props) => props.backgroundColor};
  grid-column-start: 3;

  @media only screen and (max-width: 600px) {
    grid-column-start: 2;
  }
`;

export const GridIndex = styled.span`
  justify-content: center;
  display: flex;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;
