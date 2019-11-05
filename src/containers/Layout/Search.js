import _ from 'lodash'
import React, { useState } from 'react'
import { Search, Grid, Label } from 'semantic-ui-react'
import { categories } from '../../helpers/categories'

const source = categories.map(item => ({
  title: item.title,
  description: item.shortName
}))

const resultRenderer = ({ title }) => <Label content={title} />

const SearchComponent = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [valueParam, setValue] = useState('');

  const handleResultSelect = (e, { results }) => {
    console.log(results)
    setResults(results.title)
  }

  const handleSearchChange = (e, { value }) => {
    setIsLoading(true)
    setValue(value)

    const re = new RegExp(_.escapeRegExp(value), 'i')
    const isMatch = (result) => re.test(result.title)
    setIsLoading(false)
    setResults(_.filter(source, isMatch))
  }

  return (
    <Grid>
      <Grid.Column>
        <Search
          loading={isLoading}
          onResultSelect={handleResultSelect}
          onSearchChange={_.debounce(handleSearchChange, 500, {
            leading: true,
          })}
          results={results}
          value={valueParam}
          resultRenderer={resultRenderer}
          {...props}
        />
      </Grid.Column>
    </Grid>
  )
}

export default SearchComponent