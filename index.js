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
            colors: [],
        }
    }

    getAllColorDetail(colorDetails) {
        let colors = this.state.colors;
        colors.push(colorDetails)
        this.setState(
            {colors : colors}
        )
    }

    addStarRating(numStar, index) {
        let colors = this.state.colors
        colors[index].rating = numStar + 1
        this.setState({
            colors: colors
        })
    }

    removeItemHandler(index) {
        let colors = this.state.colors
        colors.splice(index, 1)
        this.setState(
            {colors : colors}
        )
    }

    handleSortColors(index) {
        let colors = this.state.colors
        switch(index) {
            case "1":
                    this.ascSort(colors)
                    break;
            case "2":
                    this.descSort(colors)
                    break;
            case "3": 
                    this.ratingAscSort(colors)
                    break;
            case "4":
                    this.ratingDescSort(colors)
                    break;
            default:
                    this.ascSort(colors)
                    break
        }
        this.setState({
            colors: colors
        })
    }
    
    ascSort(colors) {
        colors.sort((a,b) => 
            (a.colorName > b.colorName) ? 1 : -1
        )
        return colors
    }

    descSort(colors) {
        colors.sort((a,b) => 
            (a.colorName < b.colorName) ? 1 : -1
        )
        return colors
    }

    ratingAscSort(colors) {
        colors.sort((a, b) => 
            (a.rating > b.rating ? 1 : -1)
        )
        return colors
    }

    ratingDescSort(colors) {
        colors.sort((a, b) => 
            (a.rating < b.rating) ? 1 : -1
        )
        return colors
    }

    handleFilterRating(index) {
        let colors = this.state.colors
        switch(index) {
            case "1":
                    this.moreLikedFilter(colors)
                    break;
            case "2":
                    this.lessLikedFilter(colors)
                    break;
            default:
                    this.moreLikedFilter(colors)
                    break;
        }
    }

    moreLikedFilter(colors) {
        colors = colors.filter((element) => {
            return element.rating > 4
        });
        this.setState({
            colors: colors
        })
    }

    lessLikedFilter(colors) {
        colors = colors.filter((element) => {
            return element.rating <= 4
        })
        this.setState({
            colors: colors
        })
    }

    render() {
        return (
            <div>
                <ColorInput getDetails={(colorDetails) => this.getAllColorDetail(colorDetails) } />
                <SortCard 
                    getSortValue = {(index) => this.handleSortColors(index) } 
                    getFilterValue = {(index) => this.handleFilterRating(index) } />
                <CardList colors={this.state.colors} 
                getDetails={(colorDetails) => this.getAllColorDetail(colorDetails) } 
                removeArrayitem={(index) => this.removeItemHandler(index)} 
                getStars={(stars, index) => this.addStarRating(stars, index) } />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));