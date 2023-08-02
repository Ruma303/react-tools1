import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class ToastComponent extends React.Component {
    notify = () => toast("Toast lanciato!");
    warn = () => toast.error('Avviso lanciato!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    render() {
        return (
            <div>
                {/*!  Un solo componente Toast */}
                <button onClick={this.notify}>Lancia la notifica!</button>
                <button onClick={this.warn}>Lancia l'avviso!</button>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                {/* <button onClick={this.notify}>Lancia la notifica!</button>
                <ToastContainer />
                <button onClick={this.warn}>Lancia l'avviso!</button>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                /> */}



            </div >
        );
    }
}
export default ToastComponent;


