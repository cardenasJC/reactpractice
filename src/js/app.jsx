/**
 * We import 'sass/importer.scss' in order to alert Webpack that it should
 * handle the css, extract it and bundle it to its own file.
 */
import 'sass/importer.scss';


// external
import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import injectTapEventPlugin from 'react-tap-event-plugin'

// internal
import Root from 'Root';


// Faster click events on mobile.. Not necessary but still good to know
injectTapEventPlugin();

// Render application
render(
    <Root />, document.getElementById('root')
)
