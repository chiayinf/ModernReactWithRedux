import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
// Functional Component 
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         position => console.log(position),
//         err => console.log(err),
//     );
//     return <div>Hi there!</div>;
// }

class App extends React.Component {

    state = { lat: null, errorMessage: '' };

    componentDidMount(){
        console.log('My component was rendered to the screen');
        window.navigator.geolocation.getCurrentPosition(
            // A callback function
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message }),
        );
    }

    componentDidUpdate(){
        console.log('My component was just updated - it rerendered!');
    }

    renderContent(){
        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div>Error: {this.state.errorMessage}</div>);
        } 

        if (!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat}/>;
        }

        return <Spinner message='Please accpet location request' />;
    }

    // React says we have to define render!!
    render() {
        return (
            <div className='border red'>
                {this.renderContent()}
            </div>
        )        

    }
}

// Class Component
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);