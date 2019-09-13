import React from 'react'

class ColorInput extends React.Component {

    addClickHandler() {
        let colorDetails = {}
        colorDetails.colorName= this.refs.title.value
        colorDetails.color= this.refs.color.value
        colorDetails.rating = 0;
        this.props.getDetails(colorDetails);
        this.refs.title.value = ""
    }

    render() {
        return(
            <div className="col-lg-12 input-wrapper">
                <input className="form-control" placeholder="Color title"
                ref="title" required></input>
                <input type="color" className="color-picker"
                ref="color"></input>
                <button className="default btn-secondary"
                onClick={() => this.addClickHandler()}>Add</button>
            </div>
        )
    }
}

export default ColorInput 