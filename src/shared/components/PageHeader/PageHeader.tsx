import { Children } from 'preact/compat';
import Heading from '../Heading/Heading';
import './PageHeader.css';

const PageHeader = (props: { children?: any; heading: string }) => {
    return (
        <section class="formHeader_main_container">
            <Heading heading={props.heading} />
            {props.children && (
                <div class="formHeader_sub_container">{props.children}</div>
            )}
        </section>
    );
};

export default PageHeader;
