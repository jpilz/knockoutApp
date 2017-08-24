/**
 * Created by jpilz on 2/13/17.
 */
"use strict";
import {context} from '../../objects/context.js';
import ko from 'knockout';

class component1Model {

    constructor(params) {
        // Profile
        this.componentName = ko.observable("component1");
        this.context = context;
        this.id = this.context.util.guid();
        this.visible = ko.observable(true);

    }

}

export default { viewModel: component1Model, template: require('!raw-loader!./component1.html') };