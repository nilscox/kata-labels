import React from 'react';

import { LabelType } from './LabelType';

export type LabelProps = {
  label: LabelType;
};

export const Label: React.FC<LabelProps> = ({ label }) => (
  <span className="label" style={{ background: label.color }}>
    {label.text}
  </span>
);

export default Label;
