import React from 'react';

import { LabelType } from './LabelType';

export type LabelProps = {
  label: LabelType;
  onClick?: () => void;
};

export const Label: React.FC<LabelProps> = ({ label, onClick }) => (
  <span className={`label ${onClick && 'clickable'}`} style={{ background: label.color }} onClick={onClick}>
    {label.text}
  </span>
);

export default Label;
