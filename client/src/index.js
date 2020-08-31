import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { RootContextProvider } from './components/RootContext';
import PageHeader from './components/PageHeader';
import PlateLoader from './components/PlateLoader';

import './index.scss';

function App() {
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#ffecf7',
                dark: '#ccbac3',
                light: '#ffffff',
            },
            secondary: {
                main: '#486480',
                dark: '#1b3a53',
                light: '#7691af',
            },
            success: {
                main: '#76ff03',
                dark: '#32cb00',
                light: '#b0ff57',
            }
        },
    });
    theme.palette.primary.contrastText = theme.palette.secondary.dark;
    theme.palette.secondary.contrastText = theme.palette.primary.main;

    return (
        <ThemeProvider theme={theme}>
            <RootContextProvider>
                <div id="material-ui-overload">
                    <PageHeader />
                    <PlateLoader />
                </div>
            </RootContextProvider>
        </ThemeProvider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
