import React from "react";


class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onFormSubmit(this.state.term); //ana component'e mevcut arama teriminin ne olduğu bildirildi 
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onInputChange} //e => this.setState({ term: e.target.value })
                        />
                    </div>
                </form>
            </div>); // onSubmit forma özel forma yazılanları almaya yarayan attribute props geçilebilir
    }
}

export default SearchBar;