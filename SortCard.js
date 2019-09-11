import React from 'react'

class SortCard extends React.Component {
    render() {
        return(
            <div className="sort-wrapper">
                <span>Sort cards : </span>
                <select className="form-control">Sort
                    <option>Name a-z</option>
                    <option>Name z-a</option>
                    <option>Rating 0-5</option>
                    <option>Rating 5-0</option>
                </select>
            </div>
        )
    }
}

export default SortCard