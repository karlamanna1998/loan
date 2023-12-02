import { SmallHeading } from '../Heading/Heading';
import './PageBody.css';

const PageBody = (props: { children; heading? }) => {
    return (
        <section class="PageBody_main_section">
            {props.heading && <SmallHeading heading={props.heading} />}
            {props.children}
        </section>
    );
};

export default PageBody;
