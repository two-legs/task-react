import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import ResultsPanel from '../../components/ResultsPanel/ResultsPanel';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import EmptyResult from '../../components/EmptyResult/EmptyResult';

import loadData from '../../utils/netflix-roulette-api';
// TODO: fix
const testData = require('../../../assets/testData.json');

class SearchPage extends PureComponent {
  handleSearch = (value) => {
    if (value !== encodeURI(this.props.match.query)) {
      this.props.history.push(`/search/${encodeURI(value)}`);
    }
  };

  async componentDidMount() {
    const { query } = this.props.match.params;
    if (query) {
      const data = await loadData({ director: decodeURI(query) });
      console.log(data);
    } 
  }
  
  render() {
    const {
      match,
      films,
    } = this.props;

    return (
      <div>
        <SearchHeader
          query={match.params && match.params.query ? match.params.query : ''}
          onSearchClick={this.handleSearch}
        />
        <ResultsPanel sortable>7 movies found</ResultsPanel>
        <ContentWrapper>
          {films
            ? <MovieGrid movies={testData.movies} />
            : <EmptyResult />
          }
        </ContentWrapper>
      </div>
    );
  }
}

SearchPage.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
};

export default SearchPage;
