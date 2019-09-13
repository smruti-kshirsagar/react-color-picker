import React from 'react'

class SortCard extends React.Component {
    handleSortChange(e) {
        let value = e.target.value
        this.props.getSortValue(value)
    }
    handleFilterChange(e) {
        let value = e.target.value
        this.props.getFilterValue(value)
    }
    render() {
        return(
            <div className="sort-wrapper">
                <select className="form-control"
                    defaultValue="0"
                    onChange={(e) => this.handleSortChange(e)}>
                    <option value="0" disabled>Sort</option>
                    <option value="1">Name a-z</option>
                    <option value="2">Name z-a</option>
                    <option value="3">Rating 0-5</option>
                    <option value="4">Rating 5-0</option>
                </select>
                <select className="form-control"
                    defaultValue="0"
                    onChange={(e) => this.handleFilterChange(e)} >
                    <option value="0" disabled>Filter</option>
                    <option value="1">Most liked ( > 4 star )</option>
                    <option value="2">Less liked ( 0 to 4 star )</option>
                </select>
            </div>
        )
    }
}

export default SortCard