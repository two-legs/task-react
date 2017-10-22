import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import MovieHeader from '../../components/MovieHeader/MovieHeader';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import ResultsPanel from '../../components/ResultsPanel/ResultsPanel';
import MovieGrid from '../../components/MovieGrid/MovieGrid';
import { loadFilm } from '../../actions/index';

class MoviePage extends PureComponent {
  componentDidMount() {
    const { title } = this.props.match.params;
    if (title) {
      this.props.onFetch(title);
    }
  }

  render() {
    if (this.props && this.props.film) {
      return (
        <div>
          {/* TODO fix demo */}
          <MovieHeader
            {...this.props.film}
            onSearchClick={() => this.props.history.push('/search/')}
          />
          <ResultsPanel sortable>Films by Quentin Tarantino</ResultsPanel>
          <ContentWrapper>
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
