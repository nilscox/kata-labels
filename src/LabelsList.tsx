import React, { useState } from 'react';

import Label from './Label';
import { LabelType } from './LabelType';

type LabelsListProps = {
  labels: LabelType[];
  addLabel: (text: string, color: string) => void;
  removeLabel: (label: LabelType) => void;
};

const LabelsList: React.FC<LabelsListProps> = ({ labels, addLabel, removeLabel }) => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && text !== '' && color.match(/^#[0-9a-fA-F]{6}$/)) {
      addLabel(text, color);
      setText('');
      setColor('');
    }
  };

  return (
    <div className="labels-list">
      {labels.map((label, n) => (
        <Label key={n} label={label} onClick={() => removeLabel(label)} />
      ))}
      <input
        value={text}
        placeholder="text"
        className="add-label"
        onChange={(e) => setText(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
      />
      <input
        value={color}
        placeholder="color"
        className="add-label"
        onChange={(e) => setColor(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default LabelsList;
