import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

interface TabItem {
  label: string;
  url: string;  // URL for navigation
}

interface TabsProps {
  tabs: TabItem[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setSelectedTabIndex(index);
  };

  return (
    <>
      {/* Tabs Navigation */}
      <div className="tabs-container d-flex justify-content-start">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-item ${index === selectedTabIndex ? 'active-tab' : ''}`}
            onClick={() => handleTabClick(index)}
            style={{
              cursor: 'pointer',
              marginRight: '15px',
              padding: '10px 15px',
              backgroundColor: 'black',    // Tab background color
              color: 'white',              // Tab text color
              borderRadius: '5px',
              textAlign: 'center',
              borderBottom: index === selectedTabIndex ? '3px solid blue' : '3px solid black'
            }}
          >
            <Link to={tab.url} style={{ color: 'white', textDecoration: 'none' }}>{tab.label}</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
