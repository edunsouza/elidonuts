import React from 'react';
import ReactDOM from 'react-dom';

import PrimeReact from 'primereact/utils';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import { RootContextProvider } from './components/RootContext';
import PageHeader from './components/PageHeader';
import PageBody from './components/PageBody';

import './index.scss';

function App() {
    PrimeReact.ripple = true;

    return (
        <RootContextProvider>
            <div id="styles-overload">
                <PageHeader />
                <PageBody />
            </div>
        </RootContextProvider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
