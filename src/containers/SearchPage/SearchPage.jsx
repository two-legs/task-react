import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SearchHeader from '../../components/SearchHeader/SearchHeader';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import ResultsPanel from '../../components/ResultsPanel/ResultsPanel';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import Footer from '../../components/Footer/Footer';

// TODO: fix
const testData = require('../../../assets/testData.json');

const SearchPage = props => {
  return (
    <div>
      <SearchHeader />
      <ResultsPanel sortable>7 movies found</ResultsPanel>
      <ContentWrapper>
        <MovieGrid movies={testData.movies} />
      </ContentWrapper>
    </div>
  );
};

export default SearchPage;
