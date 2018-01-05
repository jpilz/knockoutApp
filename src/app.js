/**
 * Created by jpilz on 2/13/17.
 */
import $ from 'jquery';

import 'babel-polyfill';
import ko from 'knockout';
import 'knockout.validation';
import 'knockout-mapping';
import 'bootstrap';
import axios from 'axios';

// Css Imports
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';

import 'font-awesome/css/font-awesome.css';

//Setup Validation
ko.validation.init({insertMessages: false, decorateInputElement: true, errorElementClass: 'inputError'});

ko.components.register('app-header', require('./components/header/header').default);
ko.components.register('app-workspace', require('./components/workspace/workspace').default);
ko.components.register('app-footer', require('./components/footer/footer').default);

// Add Additional Components here
ko.components.register('component1', require('./components/component1/component1').default);


//Enter Key binding:
//you may have to add: valueUpdate: 'afterkeydown' for validation
ko.bindingHandlers.enterkey = {
    init: function (element, valueAccessor, allBindings, viewModel) {
        var callback = valueAccessor();
        $(element).keypress(function (event) {
            var keyCode = (event.which ? event.which : event.keyCode);
            if (keyCode === 13) {
                callback.call(viewModel);
                return false;
            }
            return true;
        });
    }
};

$(document).ready(function(){
    ko.applyBindings({});
});