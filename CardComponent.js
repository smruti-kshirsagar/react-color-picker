import React from 'react'
import Rating from './Rating'
class CardComponent extends React.Component {
    handleCloseCard(index) {
        this.props.getRemoveItem(index)
    }
    render() {
        let item = this.props.item
        let index = this.props.index
        return (
            <>
                <div className="card-header">
                    <div className="card-title">{item.colorName}</div>
                    <button className="default card-close"
                    onClick={() => this.handleCloseCard(index)}>X</button>
                </div>
                <div className="bg-color"
                style={{background: item.color}}></div>
                <Rating totalStar={5} 
                selectedStar={item.rating}
                addRating={(stars) => this.props.handleSelectedStars(stars)} />
            </>
        )
    }
}

export default CardComponent