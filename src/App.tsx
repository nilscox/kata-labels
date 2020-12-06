import React, { useState } from 'react';

import LabelsList from './LabelsList';
import { LabelType } from './LabelType';

import './styles.css';

const LABELS: LabelType[] = [
  { text: 'music', color: '#EE99CC' },
  { text: 'colors', color: '#47D284' },
];

const App: React.FC = () => {
  const [labels, setLabels] = useState(LABELS);

  const addLabel = (text: string, color: string) => setLabels([...labels, { text, color }]);
  const removeLabel = (label: LabelType) => setLabels(labels.filter((l) => l !== label));

  return <LabelsList labels={labels} addLabel={addLabel} removeLabel={removeLabel} />;
};

export default App;
