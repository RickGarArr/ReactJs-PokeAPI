import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../views/Home';
import Contact from '../views/Contact';
import FourOFour from '../views/404';
import PokemonDetail from '../views/PokemonDetail';
import ScrollToTop from '../components/useScrollToTop';

export default function Routes() {
    return (
        <Router>
            <ScrollToTop />
            <Switch>
                <Route path="/home" exact>
                    <Home />
                </Route>
                <Route path="/contact" exact>
                    <Contact />
                </Route>
                <Route path="/pokemon/:name/:id">
                    <PokemonDetail />
                </Route>
                <Route>
                    <FourOFour></FourOFour>
                </Route>
            </Switch>
        </Router>
    )
}