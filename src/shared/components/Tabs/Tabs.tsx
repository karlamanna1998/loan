import './Tabs.css';

const SingleTab = ({ tabName, onTabSelect, currentTab }) => {
    return (
        <div class="tabs_sub_container">
            <button
                class={`${currentTab === tabName ? 'selected' : ''}`}
                onClick={() => onTabSelect(tabName)}
            >
                {tabName}
            </button>
        </div>
    );
};

const Tabs = ({ tabsArray, onTabSelect, currentTab }) => {
    return (
        <section class="tabs_container">
            {tabsArray.map((tabName, index) => (
                <SingleTab
                    key={index}
                    tabName={tabName}
                    onTabSelect={onTabSelect}
                    currentTab={currentTab}
                />
            ))}
        </section>
    );
};

export default Tabs;
