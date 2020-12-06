import React, { useState } from 'react';

import Label from './Label';
import { LabelType } from './LabelType';

type LabelsListProps = {
  labels: LabelType[];
  allLabels: LabelType[];
  addLabel: (label: LabelType) => void;
  removeLabel: (label: LabelType) => void;
};

const LabelsList: React.FC<LabelsListProps> = ({ labels, allLabels, addLabel, removeLabel }) => {
  const [text, setText] = useState('');

  const toggle = (label: LabelType) => {
    const existing = labels.find(({ text }) => text === label.text);

    if (existing) {
      removeLabel(existing);
    } else {
      addLabel(label);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && text === '' && labels.length > 0) {
      removeLabel(labels[labels.length - 1]);
    }

    if (e.key === 'Enter' && text !== '') {
      const match = allLabels.find((label) => label.text.startsWith(text));

      if (match) {
        toggle(match);
        setText('');
      }
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
    </div>
  );
};

export default LabelsList;
