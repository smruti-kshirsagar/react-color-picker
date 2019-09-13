import React from 'react'
import CardComponent from './CardComponent';

class CardList extends React.Component {
    setRemoveIndex(index) {
        this.props.removeArrayitem(index)
    }
    render() {
        return (
            <div>
                {this.props.colors.map((item, i) => (
                    <div className="card-wrapper" key={i}>
                        <CardComponent item={item} index={i} 
                        getRemoveItem={(index) => this.setRemoveIndex(index)} 
                        handleSelectedStars={(stars) => this.props.getStars(stars, i)} 
                        />
                    </div>
                ))}
            </div>
        )
    }
}

export default CardList