import { useState } from 'preact/hooks';
import { OptionContext } from './context';
export type optionsType = 'Add' | 'Edit' | 'View';

export const OptionProvider = ({ children }) => {
    const [option, setOptionState] = useState<optionsType>('Add');
    const setOption = (option: optionsType) => {
        setOptionState(option);
    };
    return (
        <OptionContext.Provider value={{ option, setOption }}>
            {children}
        </OptionContext.Provider>
    );
};
