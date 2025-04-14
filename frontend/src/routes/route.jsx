import { createBrowserRouter } from 'react-router-dom';

import Login from '../pages/login/Login';
import App from '../App';
import Home from '../pages/home/Home';
import HealthServices from '../pages/services/HealthServices';
import AboutSection from '../pages/about/AboutSection';
import DoctorFinder from '../pages/findDoctor/DoctorFinder';
import ContactPage from '../pages/contact/ContactPage';
import AppointmentBooking from '../pages/appointment/AppointmentBooking';
import SignupPage from '../pages/signup/SignUpPage';
import Appointment from '../pages/appointment/Appointment';
import DoctorDashboard from '../pages/doctors/DoctorDashboard';
import Parkinson from '../pages/prediction/parkinson';
import Heart from '../pages/prediction/Heart';
import Diabetes from '../pages/prediction/Diabetes';
import BreastCancer from '../pages/prediction/BreastCancer';
import CaloriePrediction from '../pages/prediction/Calories';
import InsurancePricePrediction from '../pages/prediction/insurance';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path: 'register',
        element: <SignupPage />
      },
      {
        path:'login',
        element:<Login/>

      },
      {
        path:'services',
        element:<HealthServices/>  
      },
      {
        path:'about',
        element:<AboutSection/>
      },
      {
        path:'find-doctor',
        element:<DoctorFinder/>
      },
      {
        path:'contact',
        element:<ContactPage/>
      },
      {
        path:`appointment/:doctorId`,
        element:<AppointmentBooking/>
      },
      {
        path:'appointments',
        element:<Appointment/>
      },
      {
        path:'doctor/:doctorId',
        element:<DoctorDashboard/>  
      },
      {
        path:'/parkinson',
        element:<Parkinson/>  
      },
      {
        path:'/heart',
        element:<Heart/>  
      },
      {
        path:'/diabetes',
        element:<Diabetes/>  
      },
      {
        path:'/bcancer',
        element:<BreastCancer/>  
      },
      {
        path:'/calories',
        element:<CaloriePrediction/>  
      },
      {
        path:'/price',
        element:<InsurancePricePrediction/>  
      }
    ]
  }
]);

export default router;
