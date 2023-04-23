import React from 'react'
import { ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppToast = () => {
    return (
        <div>
            <ToastContainer 
            // hideProgressBar
            progressStyle={{backgroundColor:'black'}}
            toastStyle={{ fontSize: '14px' }}
            />
        </div>
    )
}

export default AppToast