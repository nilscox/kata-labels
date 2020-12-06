import React, { useState } from 'react';

import LabelsList from './LabelsList';
import { LabelType } from './LabelType';

import './styles.css';

const LABELS: LabelType[] = [
  { text: 'music', color: '#EE99CC', textColor: 'dark' },
  { text: 'colors', color: '#47D284', textColor: 'dark' },
  { text: 'cookies', color: '#6F8EEC', textColor: 'dark' },
  { text: 'friend', color: '#D67322', textColor: 'dark' },
  { text: 'comedy', color: '#8A27EF', textColor: 'light' },
  { text: 'videogame', color: '#F7E88D', textColor: 'dark' },
  { text: 'code', color: '#BC2742', textColor: 'light' },
];

const App: React.FC = () => {
  const [labels, setLabels] = useState([LABELS[0], LABELS[1]]);

  const addLabel = (label: LabelType) => setLabels([...labels, { ...label }]);
  const removeLabel = (label: LabelType) => setLabels(labels.filter((l) => l !== label));

  const setLabelTextColor = (label: LabelType, textColor: 'dark' | 'light') => {
    const idx = labels.indexOf(label);

    if (idx >= 0) {
      setLabels([...labels.slice(0, idx), { ...label, textColor }, ...labels.slice(idx + 1)]);
    }
  };

  return (
    <LabelsList
      labels={labels}
      allLabels={LABELS}
      addLabel={addLabel}
      removeLabel={removeLabel}
      setLabelTextColor={setLabelTextColor}
    />
  );
};

export default App;
