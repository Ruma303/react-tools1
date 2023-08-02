import './App.css';
import React from 'react';
import PropComponent from './PropComponent';
import ErrorBoundary from './ErrorBoundary';
import ToastComponent from './ToastComponent';

class ComponentThatThrows extends React.Component {
    render() {
        //throw new Error("Ho lanciato un errore!");
        return <div>Non verrò mai visualizzato</div>;
    }
}

function App() {
    return (
        <>
        <PropComponent />

        <ErrorBoundary>
            <ComponentThatThrows />
            <ToastComponent />
        </ErrorBoundary>
    </>);
}
export default App;


