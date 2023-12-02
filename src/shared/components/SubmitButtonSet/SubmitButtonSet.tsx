import { useContext } from 'preact/hooks';
import { OptionContext } from '../../../State-Management/optionContext/context';
import './SubmitButtonSet.css';
const SubmitButtonSet = () => {
    const { option } = useContext(OptionContext);
    return (
        <>
            <div class="df aic jcc">
                <button class="bttn exit ">Exit</button>
                {option !== 'View' && (
                    <>
                        {option === 'Edit' && (
                            <button class="save bttn" type={'submit'}>
                                Save
                            </button>
                        )}
                        {option === 'Add' && (
                            <button class="add bttn" type={'submit'}>
                                Add
                            </button>
                        )}
                    </>
                )}
            </div>
        </>
    );
};

export default SubmitButtonSet;
