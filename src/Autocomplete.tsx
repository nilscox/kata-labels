import React, { ReactElement, useEffect, useRef, useState } from 'react';

type AutocompleteProps<T extends string[]> = Omit<React.HTMLProps<HTMLInputElement>, 'value'> & {
  value: string;
  options: T;
  onAutocomplete: (value: T[number]) => void;
};

const Autocomplete = <T extends string[]>({
  options,
  value: valueProp,
  onAutocomplete,
  ...props
}: AutocompleteProps<T>): ReactElement => {
  const ref = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState('');
  const [valueEnd, setValueEnd] = useState('');
  const [candidate, setCandidate] = useState<string>();
  const [backspace, setBackspace] = useState(false);

  useEffect(() => {
    setValue(valueProp);
  }, [valueProp]);

  useEffect(() => {
    if (backspace || value.length === 0) {
      setCandidate(undefined);
    } else {
      setCandidate(options.filter((opt) => opt.startsWith(value))[0]);
    }
  }, [value, backspace, options]);

  useEffect(() => {
    if (candidate) {
      setValueEnd(candidate.slice(value.length));
      onAutocomplete?.(value + candidate.slice(value.length));
    } else {
      setValueEnd('');
      onAutocomplete?.('');
    }
  }, [candidate, value, onAutocomplete]);

  useEffect(() => {
    ref.current?.setSelectionRange(value.length, value.length + valueEnd.length, 'backward');
  }, [value, valueEnd]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setBackspace(e.key === 'Backspace');
    props.onKeyDown?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <input {...props} ref={ref} value={value + valueEnd} onChange={handleChange} onKeyDown={handleKeyDown} />
  );
};

export default Autocomplete;
