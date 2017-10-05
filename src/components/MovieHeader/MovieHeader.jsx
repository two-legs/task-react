import React from 'react';
import PageHeader from '../PageHeader/PageHeader';
import Movie from '../Movie/Movie';
import Button from '../Button/Button';

import styles from './MovieHeader.css';

const SearchButton = props => <Button type="light" onClick={props.onClick}>Search</Button>;

export default props => (
  <PageHeader buttons={[<SearchButton key="search" onClick={props.onSearchClick} />]}>
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