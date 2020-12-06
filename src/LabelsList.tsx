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
  const [editing, setEditing] = useState(false);
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
    switch (e.key) {
      case 'Escape':
        setEditing(false);
        break;

      case 'Backspace':
        if (text === '' && labels.length > 0) {
          removeLabel(labels[labels.length - 1]);
        }

        break;

      case 'Enter':
        if (text !== '') {
          const match = allLabels.find((label) => label.text.startsWith(text));

          if (match) {
            toggle(match);
            setText('');
          }
        }
    }
  };

  return (
    <div className="labels-list">
      {labels.map((label, n) => (
        <Label key={n} label={label} onClick={() => removeLabel(label)} />
      ))}
      {!editing && <Label label={{ text: '+', color: '#DDD' }} onClick={() => setEditing(true)} />}
      {editing && (
        <input
          autoFocus
          value={text}
          placeholder="text"
          className="add-label"
          onChange={(e) => setText(e.currentTarget.value)}
          onBlur={() => setEditing(false)}
          onKeyDown={handleKeyDown}
        />
      )}
    </div>
  );
};

export default LabelsList;
