import React from 'react'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Msg = ({ closeToast, toastProps}) => (
  <div>
    Lorem ipsum dolor {toastProps.position}
    <button onClick={closeToast}>Close</button>
  </div>
)

const App = () => {

  const notify = () => {
    // toast("Default Notification !");

    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER
    });

    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_RIGHT
    });

    toast.warn("Warning Notification !", {
      position: toast.POSITION.BOTTOM_LEFT
    });

    toast.info("Info Notification !", {
      position: toast.POSITION.BOTTOM_CENTER
    });

    toast("Custom Style Notification with css class!", {
      autoClose: 1000,
      position: toast.POSITION.BOTTOM_RIGHT,
      className: 'foo-bar'
    });
  };

  const displayMsg = () => {
    toast(<Msg />) 
    // toast(Msg) would also work
  }

  const dismissAll = () => toast.dismiss();

  return (
    <div>
      <button onClick={notify}>Notify me</button>
      <button onClick={displayMsg}>Display Msg</button>
      <button onClick={dismissAll}>Dismiss All</button>
      <ToastContainer autoClose={3000} />
    </div>
  )
}

export default App
