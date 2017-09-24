import Page from './containers/Page/Page';
import SearchPage from './containers/SearchPage/SearchPage';
import MoviePage from './containers/MoviePage/MoviePage';

const routes = [{
  component: Page,
  routes: [{
    path: '/',
    exact: true,
    component: SearchPage,
  }, {
    path: '/search/:query',
    component: SearchPage,
  }, {
    path: '/search/',
    component: SearchPage,
  }, {
    path: '/film/:title',
    component: MoviePage,
  }, {
    path: '/film/',
    component: MoviePage,
  }],
}];

export default routes;
