import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './Screens/Home/HomePage';
import AddStaff from './Screens/AddStaff/AddStaff';
import ViewStaff from './Screens/ViewStaff/ViewStaff';
import ViewChapters from './Screens/ViewChapters/ViewChapters';
import Payment from './Screens/Payment/Payment';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/add-staff' element={<AddStaff/>} />
          <Route path='/view-staff' element={<ViewStaff/>} />
          <Route path='/view-chapters' element={<ViewChapters/>} />
          <Route path='/payment' element={<Payment/>} />


        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
