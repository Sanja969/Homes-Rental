import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navigation from './routes/navigation/navigation.component.jsx';
import Home from './routes/home/home.component.jsx';
import HomeDetail from './routes/home-detail/homedetails.jsx';
import Authentication from './routes/authentication/authentication.component';
import MyReservations from './routes/my-reservations/my-reservations.component';
import { getHouses } from './redux/home';
import { getReservations } from './redux/reservations';
import HouseDelete  from './routes/house-delete/delete.component';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHouses());
    dispatch(getReservations());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="house" element={<HomeDetail />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="delete-house" element={<HouseDelete />} />
        <Route path="my-reservations" element={<MyReservations />} />
      </Route>
    </Routes>
  )
};

export default App;
