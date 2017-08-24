/**
 * Created by jpilz on 2/13/17.
 */
"use strict";
import {context} from '../../objects/context.js';
import ko from 'knockout';

class worspaceModel {

    constructor(params) {
        // Profile
        this.componentName = ko.observable("workspace");
        this.context = context;
        this.id = this.context.util.guid();
        this.visible = ko.observable(true);

    }

}

export default { viewModel: worspaceModel, template: require('!raw-loader!./workspace.html') };
