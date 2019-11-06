import _ from 'lodash'
import React, { Component } from 'react'
import { history } from '../../store/configureStore'
import { Search, Label } from 'semantic-ui-react'
import { categories } from '../../helpers/categories'

const initialState = { isLoading: false, results: [], value: '' }

const getResults = items => items.map(item => ({
  title: item.name,
  description: item.name
}))

const source = categories.reduce((memo, item) => {
  const name = item.title
  memo[name] = {
    name,
    results: getResults((item.items.map(i => i.elem)).flat()),
  }
  return memo
}, {})

export default class SearchExampleCategory extends Component {
  state = initialState

  handleResultSelect = (e, { result }) => {
    console.log(result.description)
    this.setState({ value: '' })
    history.push(`/main/${result.description}`)
  }

  resultRenderer = ({ title }) => <Label content={title} />

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.setState(initialState)

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      const filteredResults = _.reduce(
        source,
        (memo, data, name) => {
          const results = _.filter(data.results, isMatch)
          if (results.length) memo[name] = { name, results } // eslint-disable-line no-param-reassign

          return memo
        },
        {},
      )

      this.setState({
        isLoading: false,
        results: filteredResults,
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Search
        category
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true,
        })}
        results={results}
        value={value}
        resultRenderer={this.resultRenderer}
        {...this.props}
        placeholder='Search Tools'
        aligned='right'
        minCharacters={3}
      />
    )
  }
}
