import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import Movie from '../Movie/Movie';
import Button from '../Button/Button';

import styles from './MovieHeader.css';

const SearchButton = () => <Button type="light" >Search</Button>

export default props => (
  <PageHeader buttons={[<SearchButton key="search" />]}>
    <Movie
      title={props.title}
      category={props.category}
      showCast={props.showCast}
      director={props.director}
      posterUrl={props.poster}
      releaseYear={props.releaseYear}
      runtime={props.runtime}
      summary={props.summary}
      rating={props.rating}
    />
  </PageHeader>
);
