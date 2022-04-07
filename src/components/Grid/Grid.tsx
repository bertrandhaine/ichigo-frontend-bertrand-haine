import React, { useState } from "react";

import { generateRandomColors } from "../../utils/colors";

import {
  GridContainer,
  GridIndex,
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
  Item6,
  Item7,
  Item8,
  Item9,
} from "./styled";

const Grid = () => {
  const [colors, setColors] = useState(generateRandomColors(9));

  const handleClick = () => setColors(generateRandomColors(9));

  return (
    <GridContainer>
      <Item1 onClick={handleClick} backgroundColor={colors[0]} data-testid="1">
        <GridIndex>1</GridIndex>
      </Item1>
      <Item2 onClick={handleClick} backgroundColor={colors[1]}>
        <GridIndex>2</GridIndex>
      </Item2>
      <Item3 onClick={handleClick} backgroundColor={colors[2]}>
        <GridIndex>3</GridIndex>
      </Item3>
      <Item4 onClick={handleClick} backgroundColor={colors[3]}>
        <GridIndex>4</GridIndex>
      </Item4>
      <Item5 onClick={handleClick} backgroundColor={colors[4]}>
        <GridIndex>5</GridIndex>
      </Item5>
      <Item6 onClick={handleClick} backgroundColor={colors[5]}>
        <GridIndex>6</GridIndex>
      </Item6>
      <Item7 onClick={handleClick} backgroundColor={colors[6]}>
        <GridIndex>7</GridIndex>
      </Item7>
      <Item8 onClick={handleClick} backgroundColor={colors[7]}>
        <GridIndex>8</GridIndex>
      </Item8>
      <Item9 onClick={handleClick} backgroundColor={colors[8]}>
        <GridIndex>9</GridIndex>
      </Item9>
    </GridContainer>
  );
};

export default Grid;
