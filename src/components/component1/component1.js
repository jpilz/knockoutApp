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


        this.validationInputTest = ko.observable().extend({
            required: true,
            minLength: 3,
            pattern: {
                 message: 'a',
                 params: '^[a-zA-Z0-9]'
            }
        });

    }

    renderHandler(item,component){
        console.log(item);
        console.log(component);
        component.doSomething();
    }
    
    doSomething(){
        console.log("Is Valid: " + this.validationInputTest.isValid());
        console.log("Hello doSomething");
    }

    sendEvent() {
        context.eventManager.notifySubscribers({source:this.componentName()},"sampleEvent");
    }

}

export default { viewModel: component1Model, template: require('!raw-loader!./component1.html') };