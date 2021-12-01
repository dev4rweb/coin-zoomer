require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { InertiaProgress } from '@inertiajs/progress';
import {App} from '@inertiajs/inertia-react'
import {Provider} from "react-redux";
import {store} from './reducers'
InertiaProgress.init({
    color: '#ED8936',
    showSpinner: true
});

const app = document.getElementById('app');

render(
    <Provider store={store}>
        <App
            initialPage={JSON.parse(app.dataset.page)}
            resolveComponent={name => require(`./Pages/${name}`).default}
        />
    </Provider>,
    app
);
