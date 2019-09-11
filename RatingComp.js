import React from 'react';

class RatingComp extends React.Component {
    render() {
        return(
            <button 
                className={"fa fa-star " + this.props.star}
                onClick={() => this.props.handleEvent()}>
            </button>
        )
    }
}

export default RatingComp