import './Heading.css';

const Heading = ({ heading }) => {
    return (
        <section class="heading_container">
            <div class="heading_sub_container">
                <div class="df aic h_100 heading_sub_container2">
                    <h1>{heading}</h1>
                </div>
            </div>
        </section>
    );
};

export const SmallHeading = ({ heading }) => {
    return (
        <section class="heading_container small">
            <div class="heading_sub_container">
                <div class="df aic h_100 heading_sub_container2">
                    <h1>{heading}</h1>
                </div>
            </div>
        </section>
    );
};

export default Heading;
