import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import SearchHeader from '../../components/SearchHeader/SearchHeader';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import ResultsPanel from '../../components/ResultsPanel/ResultsPanel';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import EmptyResult from '../../components/EmptyResult/EmptyResult';

import {
  searchFilms,
  changeSort,
  setQueryType,
} from '../../actions/index';
import Spinner from '../../components/Spinner/Spinner';
import Error from '../Error/Error';

class SearchPage extends PureComponent {
  componentDidMount() {
    const { query } = this.props.match.params;
    if (query) {
      this.props.onSearch(query);
    }
  }
  handleSearch = (value) => {
    if (value !== encodeURI(this.props.match.query)) {
      this.props.history.push(`/search/${encodeURI(value)}`);
      this.props.onSearch(value);
    }
  };

  handleSearchTypeChange = (type) => {
    this.props.onSearchTypeChange(type.id);
  };

  handleSortChange = (type) => {
    this.props.onSortChange(type.id);
  };

  render() {
    const {
      query,
      films,
      searchTypes,
      sortFields,
      isPending,
    } = this.props;

    return (
      <div>
        <SearchHeader
          query={query}
          onSearchClick={this.handleSearch}
          onSearchTypeChange={this.handleSearchTypeChange}
          searchTypes={searchTypes}
        />
        <ResultsPanel
          sortable
          sortButtons={sortFields}
          onSortChange={this.handleSortChange}
        >
          {films.length ? `${films.length} movies found` : null}
        </ResultsPanel>
        <ContentWrapper>
          <Error />
          {isPending
            ? <Spinner />
            : <div>
              {films.length
                ? <MovieGrid movies={films} />
                : <EmptyResult />
              }
            </div>
          }
        </ContentWrapper>
      </div>
    );
  }
}

SearchPage.propTypes = {
  query: PropTypes.string.isRequired,
  searchBy: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.object),
  searchTypes: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortFields: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortType: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  onSearchTypeChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isPending: PropTypes.bool,
};

SearchPage.defaultProps = {
  films: [],
};

const mapStateToProps = state => ({
  ...state.search,
  films: state.results.results,
  sortType: state.results.sortType,
  sortFields: state.results.sortFields,
  isPending: state.results.isPending,
});

const mapDispatchToProps = dispatch => ({
  onSearch: query => dispatch(searchFilms(query)),
  onSearchTypeChange: type => dispatch(setQueryType(type)),
  onSortChange: type => dispatch(changeSort(type)),
});

const SearchPageConnected = connect(mapStateToProps, mapDispatchToProps)(SearchPage);

export default SearchPageConnected;

