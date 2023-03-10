import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    selectedOption: countryAndCapitalsList[0].id,
  }

  onChangeOption = event => {
    this.setState({selectedOption: event.target.value})
  }

  getCountry = () => {
    const {selectedOption} = this.state
    const res = countryAndCapitalsList.find(each => selectedOption === each.id)
    return res.country
  }

  render() {
    const {selectedOption} = this.state
    const country = this.getCountry()
    return (
      <div className="bg-container">
        <div className="capitals-container">
          <h1 className="heading">Countries And Capitals</h1>
          <select
            className="select-option"
            value={selectedOption}
            onChange={this.onChangeOption}
          >
            {countryAndCapitalsList.map(eachItem => (
              <option key={eachItem.id} value={eachItem.id}>
                {eachItem.capitalDisplayText}
              </option>
            ))}
          </select>
          <p className="question-para">is capital of which Country?</p>
          <h1 className="answer-para">{country}</h1>
        </div>
      </div>
    )
  }
}
export default Capitals
