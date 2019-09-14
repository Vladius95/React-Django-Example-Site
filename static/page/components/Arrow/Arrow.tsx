import React from 'react';

import "./Arrow.scss";

const arrowGreen = require('./images/down-arrow-green.svg');
const arrowBrown = require('./images/down-arrow-brown.svg');

export enum ArrowDirection {
  up = 'up',
  right = 'right',
  bottom = 'bottom',
  left = 'left'
}

export enum ArrowFill {
  brown = 'brown',
  green = 'green'
}

interface ArrowProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  direction?: ArrowDirection;
  fill?: ArrowFill;
  extraClass?: string;
}

export const Arrow: React.SFC<ArrowProps> = ({
  direction = ArrowDirection.bottom,
  fill = ArrowFill.green,
  extraClass = '',
  ...imgProps
}) => (
  <img {...imgProps} src={getArrowFill(fill)} alt="Arrow" className={`arrow arrow-${direction} ${extraClass}`}/>
);

function getArrowFill(fill: ArrowFill) {
  switch (fill) {
    case ArrowFill.brown:
      return arrowBrown;
    case ArrowFill.green:
      return arrowGreen;
  }
}