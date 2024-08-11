import React, { useState } from 'react';

const Tabs = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabClick = (index) => {
    setSelectedTab(index);
  };

  return (
    <>
      <div role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={index}
            role="tab"
            aria-selected={selectedTab === index}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          key={index}
          role="tabpanel"
          hidden={selectedTab !== index}
        >
          {tab.content}
        </div>
      ))}
    </>
  );
};

export default Tabs;
