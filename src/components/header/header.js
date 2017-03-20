/**
 * Created by jpilz on 2/13/17.
 */
"use strict";
import {context} from '../../objects/context.js';
import ko from 'knockout';

class headerModel {

    constructor(params) {
        // Profile
        this.componentName = ko.observable("header");
        this.context = context;
        this.id = this.context.util.guid();
        this.visible = ko.observable(true);

    }

}

export default { viewModel: headerModel, template: require('!raw!./header.html') };