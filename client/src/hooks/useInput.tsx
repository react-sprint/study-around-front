import { useState, Dispatch, SetStateAction } from 'react';

export interface IUseInput {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setValue: Dispatch<SetStateAction<string>>;
}

interface IUseInputProps {
  initialState: string,
  customOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function useInput(props: IUseInputProps): IUseInput {
  const { initialState, customOnChange } = props;
  
  const [value, setValue] = useState(initialState);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value: val } } = e;
    console.log(val);
    setValue(val);
    customOnChange(e);
  };
  return { value, onChange, setValue };
}

export default useInput;