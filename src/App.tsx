import React from 'react';

import LabelsList from './LabelsList';
import { LabelType } from './LabelType';

import './styles.css';

const LABELS: LabelType[] = [
  { text: 'music', color: '#EE99CC' },
  { text: 'colors', color: '#47D284' },
  { text: 'cookies', color: '#6F8EEC' },
  { text: 'friend', color: '#D66312' },
];

const App: React.FC = () => {
  return <LabelsList labels={LABELS} />;
};

export default App;
