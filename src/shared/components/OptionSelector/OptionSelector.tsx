import { useContext, useEffect, useState } from 'preact/hooks';
import SelectComp from '../SelectComp/SelectComp';
import './OptionSelector.css';
import { OptionContext } from '../../../State-Management/optionContext/context';

const OptionSelector = () => {
    const options = [{ value: 'Add' }, { value: 'Edit' }, { value: 'View' }];
    const { option, setOption } = useContext(OptionContext);
    useEffect(() => {}, [option]);

    return (
        <>
            <SelectComp
                name={'option'}
                value={option}
                label={'Option'}
                optionData={options}
                setStateFunc={setOption}
            />
        </>
    );
};

export default OptionSelector;
