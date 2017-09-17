import Page from './containers/Page/Page';
import SearchPage from './containers/SearchPage/SearchPage';
import About from './containers/About/About';

const routes = [{
  component: Page,
  routes: [{
    path: '/',
    exact: true,
    component: SearchPage,
  }, {
    path: '/about',
    component: About,
  }],
}];

export default routes;
