/**
 * Created by jpilz on 2/13/17.
 */
"use strict";
import {context} from '../../objects/context.js';
import ko from 'knockout';

class footerModel {

    constructor(params) {
        // Profile
        this.componentName = ko.observable("footer");
        this.context = context;
        this.id = this.context.util.guid();
        this.visible = ko.observable(true);

    }

}

export default { viewModel: footerModel, template: require('!raw-loader!./footer.html') };