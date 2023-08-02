import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    //* Aggiorna lo stato. Al prossimo render apparirà l'UI fallback.
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    //* Si potrebbe voler registrare l'errore con un servizio di reporting.
    componentDidCatch(error, info) {
        console.log(error, info);
    }
    render() {
        if (this.state.hasError) {
            //* Renderizzare qui UI di fallback.
            return (
                <>
                    <h1>Error Boundaries</h1>
                    <h2>Qualcosa è andato storto.</h2>
                </>);
        }
        return this.props.children;
    }
}
export default ErrorBoundary;