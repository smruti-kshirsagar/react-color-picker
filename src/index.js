import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import ColorInput from './ColorInput';
import CardList from './CardList';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: []
        }
    }

    getAllColorDetail(colorDetails) {
        let colors = this.state.colors;
        colors.push(colorDetails)
        this.setState(
            colors = colors
        ) 
    }
    render() {
        return (
            <div>
                <ColorInput getDetails={(colorDetails) => this.getAllColorDetail(colorDetails) } />
                <CardList colors={this.state.colors} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));