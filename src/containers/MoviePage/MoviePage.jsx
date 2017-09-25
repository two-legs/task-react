import React from 'react';
import MovieHeader from '../../components/MovieHeader/MovieHeader';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import ResultsPanel from '../../components/ResultsPanel/ResultsPanel';
import MovieGrid from '../../components/MovieGrid/MovieGrid';

// TODO: fix
const testData = require('../../../assets/testData.json');

const MoviePage = props => (
  <div>
    {/* TODO fix demo */}
    <MovieHeader
      {...testData.movies[0]}
      title={decodeURI(props.match.params ? props.match.params.title : '')}
      onSearchClick={() => props.history.push('/search/')}
    />
    <ResultsPanel sortable>Films by Quentin Tarantino</ResultsPanel>
    <ContentWrapper>
      <MovieGrid movies={testData.movies} />
    </ContentWrapper>
  </div>
);

export default MoviePage;
