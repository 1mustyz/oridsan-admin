import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Screens/Home/HomePage';
import AddStaff from './Screens/AddStaff/AddStaff';
import ViewStaff from './Screens/ViewStaff/ViewStaff';
import ViewChapters from './Screens/ViewChapters/ViewChapters';
import Payment from './Screens/Payment/Payment';
import Slider from './Screens/Slider/Slider';
import Seminars from './Screens/Seminars/Seminars';
import Login from './Screens/Login/Login';
import Category from './Screens/Category/Category';
import AppToast from './Component/Toaster/AppToast'


function App() {
  return (
    <div className="App">
     <AppToast/>
     <BrowserRouter>
        <Routes>
          <Route path='/home' element={<HomePage/>} />
          <Route path='/add-staff' element={<AddStaff/>} />
          <Route path='/view-staff' element={<ViewStaff/>} />
          <Route path='/view-chapters' element={<ViewChapters/>} />
          <Route path='/payment' element={<Payment/>} />
          <Route path='/slider' element={<Slider/>} />
          <Route path='/seminar' element={<Seminars/>} />
          <Route path='/' element={<Login/>} />
          <Route path='/category' element={<Category />} />

        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
