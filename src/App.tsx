import React, { useState } from 'react';

import LabelsList from './LabelsList';
import { LabelType } from './LabelType';

import './styles.css';

const LABELS: LabelType[] = [
  { text: 'music', color: '#EE99CC' },
  { text: 'colors', color: '#47D284' },
  { text: 'cookies', color: '#6F8EEC' },
  { text: 'friend', color: '#D67322' },
  { text: 'comedy', color: '#8A27EF' },
  { text: 'videogame', color: '#F7E88D' },
  { text: 'code', color: '#BC2742' },
];

const App: React.FC = () => {
  const [labels, setLabels] = useState([LABELS[0], LABELS[1]]);

  const addLabel = (label: LabelType) => setLabels([...labels, { ...label }]);
  const removeLabel = (label: LabelType) => setLabels(labels.filter((l) => l !== label));

  return <LabelsList labels={labels} allLabels={LABELS} addLabel={addLabel} removeLabel={removeLabel} />;
};

export default App;
