import React from 'react'
import RatingComp from './RatingComp'
import './App.css'

class Rating extends React.Component {
    render() {
        const totalStar = this.props.totalStar
        const arr = Array(totalStar).fill(false)

        return (
            <div className="rating-wrapper">
                {
                    arr.map((item, i) => (
                        <RatingComp 
                        key={i}
                        handleEvent = {() => this.props.addRating(i)}
                        star={ i < this.props.selectedStar ? "checked" : " "} />
                    ))
                }
                <div className="selected-div">
                    {this.props.selectedStar} out of { totalStar } stars</div>
            </div>
        )
    }
}

export default Rating