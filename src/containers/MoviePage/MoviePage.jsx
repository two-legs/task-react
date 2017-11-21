import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import MovieHeader from '../../components/MovieHeader/MovieHeader';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import ResultsPanel from '../../components/ResultsPanel/ResultsPanel';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import { loadFilm } from '../../actions/index';
import Spinner from '../../components/Spinner/Spinner';
import ErrorContainer from '../Error/Error';

export class MoviePage extends PureComponent {
  static async fetch(match, dispatch) {
    const { title } = match.params;
    if (title) {
      return dispatch(loadFilm(decodeURI(title)));
    }
    return Promise.reject();
  }

  componentDidMount() {
    const { title } = this.props.match.params;
    if (title) {
      this.props.onFetch(title);
    }
  }

  render() {
    const { isPending, ...film } = this.props.film;

    if (isPending) return <Spinner />;

    if (film && film.id) {
      return (
        <div>
          <MovieHeader
            {...film}
            onSearchClick={() => this.props.history.push('/search/')}
          />
          <ResultsPanel>Films by {this.props.film.director}</ResultsPanel>
          <ContentWrapper>
            <ErrorContainer />
            <MovieGrid movies={this.props.movies}/>
          </ContentWrapper>
        </div>
      );
    }

    return <Redirect to="/not-found" />;
  }
}

const mapStateToProps = state => ({
  film: state.film,
  movies: state.results.results,
});

const mapDispatchToProps = dispatch => ({
  onFetch: title => dispatch(loadFilm(title)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
