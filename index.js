import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import ColorInput from './ColorInput';
import CardList from './CardList';
import SortCard from './SortCard';
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
            {colors : colors}
        )
    }

    removeItemHandler(index) {
        let colors = this.state.colors
        colors.splice(index, 1)
        this.setState(
            {colors : colors}
        )
    }
    render() {
        return (
            <div>
                <ColorInput getDetails={(colorDetails) => this.getAllColorDetail(colorDetails) } />
                <SortCard />
                <CardList colors={this.state.colors} 
                getDetails={(colorDetails) => this.getAllColorDetail(colorDetails) } 
                removeArrayitem={(index) => this.removeItemHandler(index)} />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));