import React, { useState } from 'react';

import Autocomplete from './Autocomplete';
import Label from './Label';
import { LabelType } from './LabelType';

type LabelsListProps = {
  labels: LabelType[];
  allLabels: LabelType[];
  addLabel: (label: LabelType) => void;
  removeLabel: (label: LabelType) => void;
  setLabelTextColor: (label: LabelType, textColor: 'dark' | 'light') => void;
};

const LabelsList: React.FC<LabelsListProps> = ({
  labels,
  allLabels,
  addLabel,
  removeLabel,
  setLabelTextColor,
}) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState('');
  const [autocompleted, setAutocompleted] = useState('');

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
        if (autocompleted !== '') {
          const match = allLabels.find((label) => label.text === autocompleted);

          if (match) {
            toggle(match);
            setText('');
          }
        }

        break;
    }
  };

  return (
    <div className="labels-list">
      {labels.map((label, n) => (
        <Label
          key={n}
          label={label}
          onClick={() => setLabelTextColor(label, label.textColor === 'dark' ? 'light' : 'dark')}
        />
      ))}
      {!editing && (
        <Label label={{ text: '+', color: '#DDD', textColor: 'dark' }} onClick={() => setEditing(true)} />
      )}
      {editing && (
        <Autocomplete
          autoFocus
          options={allLabels.map(({ text }) => text)}
          value={text}
          placeholder="text"
          className="add-label"
          onChange={(e) => setText(e.currentTarget.value)}
          onAutocomplete={setAutocompleted}
          onBlur={() => setEditing(false)}
          onKeyDown={handleKeyDown}
        />
      )}
    </div>
  );
};

export default LabelsList;
