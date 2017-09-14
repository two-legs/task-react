import Page from './containers/Page/Page';
import Articles from './containers/Articles/Articles';
import About from './containers/About/About';

const routes = [{
  component: Page,
  routes: [{
    path: '/',
    exact: true,
    component: Articles,
  }, {
    path: '/about',
    component: About,
  }],
}];

export default routes;
