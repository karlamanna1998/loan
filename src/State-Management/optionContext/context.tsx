import { createContext } from 'preact';
import { optionsType } from './provider';
type optionType = {
    option: optionsType;
    setOption: (option: string) => void;
};
export const OptionContext = createContext<optionType>({
    option: 'Add',
    setOption: (option: string) => {},
});
