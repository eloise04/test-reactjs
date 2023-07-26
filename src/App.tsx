import React, { useState, useEffect } from 'react';
import "./App.css"
import { SearchBar } from './Components/SearchBar';
import { UserTable } from './Components/UserTable';
import { UserData } from './Interfaces/UserData';

function App() {
  const [jsonData, setJsonData] = useState<UserData[] | null>(null);
  const [showMessage, setShowMessage] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [filteredData, setFilteredData] = useState<UserData[] | null>(null);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/mock-api/data.json');
        const data = await response.json();
        setJsonData(data);
        setShowMessage(true);
      } catch (error) {
        console.error('Error retrieving JSON data::', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  useEffect(() => {
    if (jsonData) {
      const filtered = jsonData.filter((item) => {
        return item.lastname.toLowerCase().includes(filterText.toLowerCase())
      }
      );
      setFilteredData(filtered);
    }
  }, [filterText, jsonData]);

  return (
    <div>
      {showMessage && <div className="Message">The data has been loaded successfully</div>}
      <div className="UserContainer">
        <SearchBar filterText={filterText} setFilterText={setFilterText} />
        <UserTable filteredData={filteredData} />
      </div>
    </div>
  );
}

export default App;
