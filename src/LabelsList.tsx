import React from 'react';

import Label from './Label';
import { LabelType } from './LabelType';

type LabelsListProps = {
  labels: LabelType[];
};

const LabelsList: React.FC<LabelsListProps> = ({ labels }) => {
  return (
    <div className="labels-list">
      {labels.map((label, n) => (
        <Label key={n} label={label} />
      ))}
    </div>
  );
};

export default LabelsList;
