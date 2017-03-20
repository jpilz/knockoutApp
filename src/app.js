/**
 * Created by jpilz on 2/13/17.
 */
import $ from 'jquery';

import 'babel-polyfill';
import ko from 'knockout';
import 'bootstrap';

// Css Imports
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';

import 'font-awesome/css/font-awesome.css';

ko.components.register('app-header', require('./components/header/header').default);
ko.components.register('app-workspace', require('./components/workspace/workspace').default);
ko.components.register('app-footer', require('./components/footer/footer').default);

// Add Additional Components here
ko.components.register('component1', require('./components/component1/component1').default);




$(document).ready(function(){
    ko.applyBindings({});
});