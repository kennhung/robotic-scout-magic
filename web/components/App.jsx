// This is the root component of the App, contains the app state, router
// and other things.
import React, { Component, Fragment } from 'react';
import { Router, createHistory, LocationProvider } from '@reach/router';
import { hot } from 'react-hot-loader/root';
import Loadable from 'react-loadable';
import Theme from './Theme';
import createHashSource from 'hash-source';
// MUI
import CircularProgress from '@material-ui/core/CircularProgress';

// Pages
import AppBar from './AppBar';

import '../css/App.css';

// Loader
const Loader = () => <div className='container' style={{
    display: 'flex',
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
}}>
    <CircularProgress />
</div>;

// Create Hash Routing History
const hashSource = createHashSource();
const history = createHistory(hashSource);

// Dynamically Loading Sections
const AppLoader = Loadable({
    loader: () => fetch('./all-forms.json').then(res => res.json()).then(json => {
        return () => <App formData={json}/>;
    }),
    loading: Loader,
});
const PageLoadable = (dynamic_import) => Loadable({ loader: dynamic_import, loading: Loader });

const MainPage = PageLoadable(() => import('./MainPage'));
const FormPage = PageLoadable(() => import('./FormPage'));

// Main App Component, passed a formData prop.
class App extends Component {
    constructor() {
        super();
    }
    render() {
        const formData = this.props.formData;
        return <Fragment>
            <LocationProvider history={history}>
                <AppBar formData={formData} url={hashSource.location.pathname} />
                <div className='container'>
                    <Router>
                        <MainPage path='/' formData={formData} />
                        <FormPage path='/form/:formID' formData={formData} />
                    </Router>
                </div>
            </LocationProvider>
        </Fragment>;
    }
}

const PreLoadedApp = () => <Theme>
    <AppLoader />
</Theme>;
 
export default hot(PreLoadedApp);
