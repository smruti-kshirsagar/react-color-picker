import React from 'react'
import Rating from './Rating';

class CardList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                {this.props.colors.map((item, i) => (
                    <div className="card-wrapper col-lg-4" key={i}>
                        {console.log(this.props.colors)}
                        <div className="card-header">
                            <div className="card-title">{item.colorName}</div>
                            <button className="default card-close">X</button>
                        </div>
                        <div className="bg-color"
                        style={{background: item.color}}></div>
                        <Rating totalStar={5} />
                    </div>
                ))}
            </div>
        )
    }
}

export default CardList