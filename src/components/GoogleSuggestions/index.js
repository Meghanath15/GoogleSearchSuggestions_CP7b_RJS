// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInputText: ''}

  updateSearchInput = value => {
    this.setState({searchInputText: value})
  }

  onChangeSearchInput = event => {
    this.setState({searchInputText: event.target.value})
  }

  render() {
    const {searchInputText} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInputText.toLowerCase()),
    )

    return (
      <div className="main-container">
        <div className="google-search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-image"
            alt="google logo"
          />
          <div className="search-box-container">
            <div className="search-bar-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-icon"
                alt="search icon"
              />
              <input
                type="search"
                className="search-input"
                placeholder="Search Google"
                onChange={this.onChangeSearchInput}
                value={searchInputText}
              />
            </div>
            <ul className="suggestions-list">
              {searchResults.map(eachSuggestion => (
                <SuggestionItem
                  key={eachSuggestion.id}
                  updateSearchInput={this.updateSearchInput}
                  suggestionDetails={eachSuggestion}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
