import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HomePage, NotFoundPage } from '../pages';
import { LayoutRoot } from '../components/layout';

export default function Routes() {
  return (
    <Router>
      <LayoutRoot>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </LayoutRoot>
    </Router>
  );
}
