import { createContext, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import FormPage from './pages/FormPage/FormPage';
import ListPage from './pages/ListPage/ListPage';
import ModalWindow from './ModalWindow/ModalWindow';
import Navigetion from './navigation/Navigetion';
import EditListPage from './pages/EditListPage/EditListPage';

export const MyStoreContext = createContext();

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deleteItem, setDeleteItem] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((data) => {
        setLoading(true);
        return data.json();
      })
      .then((data) => data.map((element) => {
        const fullName = element.name.split(' ');

        const nameСheck = fullName[0] === 'Mrs.' || fullName[0] === 'Mr.';
        const name = nameСheck ? `${fullName[0]} ${fullName[1]}` : fullName[0];
        const surname = nameСheck ? fullName[2] : fullName[1];

        const newElement = {
          name: name,
          surname: surname,
          id: element.id,
          phone: element.phone,
        };

        return newElement;
      })).then((data) => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  const db = {
    users,
    setUsers,
    loading,
    setLoading,
    showModal,
    setShowModal,
    deleteItem,
    setDeleteItem,
  };

  return (
    <MyStoreContext.Provider value={db}>
      <div className="App">
        <BrowserRouter>
          <Navigetion />
          <div>
            <Routes>
              <Route path="/" element={<ListPage />} />
              <Route path="/list" element={<ListPage />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/editList" element={<EditListPage />} />
            </Routes>
          </div>
          <ModalWindow />
        </BrowserRouter>
      </div>
    </MyStoreContext.Provider>
  );
}

export default App;
