import React from 'react';
import { Redirect } from 'react-router-dom';

import MovieHeader from '../../components/MovieHeader/MovieHeader';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import ResultsPanel from '../../components/ResultsPanel/ResultsPanel';
import MovieGrid from '../../components/MovieGrid/MovieGrid';

// TODO: remove demo data
const testData = require('../../../assets/testData.json');

const MoviePage = props => {
  if (props && props.film) {
    return (
      <div>
        {/* TODO fix demo */}
        <MovieHeader
          {...props.film}
          onSearchClick={() => props.history.push('/search/')}
        />
        <ResultsPanel sortable>Films by Quentin Tarantino</ResultsPanel>
        <ContentWrapper>
          <MovieGrid movies={testData.movies} />
        </ContentWrapper>
      </div>
    );
  }

  return <Redirect to="/not-found" />;
};

//export default MoviePage;

// TODO: remove demo data
export default props => (
  <MoviePage
    {...props}
    film={{
      ...testData.movies.find(movie => movie.title === decodeURI(props.match.params ? props.match.params.title : ''))
    }}
  />
);
