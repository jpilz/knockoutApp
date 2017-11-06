/**
 * Created by jpilz on 2/13/17.
 */
"use strict";
import {context} from '../../objects/context.js';
import ko from 'knockout';
import axios from 'axios';


class component1Model {

    constructor(params) {
        // Profile
        this.componentName = ko.observable("component1");
        this.id = context.util.guid();
        this.visible = ko.observable(true);

        this.dataFromAPI = ko.observableArray();
        this.selectedDataItem = ko.observable();

        this.validationInputTest = ko.observable().extend({
            required: true,
            minLength: 3,
            pattern: {
                 message: 'a',
                 params: '^[a-zA-Z0-9]'
            }
        });

        console.log("init comp");

    }

    renderHandler(item,component){

        console.log("renderHandler");
        console.log(item);
        console.log(component);
        component.doSomething();
        component.getJsonAPI();

    }

    getJsonAPI() {

        let callData = JSON.stringify({});
        
            console.log("getJsonAPI:");
    
            axios({
                url: context.apiEntryPointUrl + 'albums',
                method: 'GET',
                headers: context.apiContentType,
                data: callData
            }).then((response) => {
                this.handleGetJsonAPI(response.data);
            }).catch((error) =>{
                console.log("getJsonAPI Error:");
                console.log(error);
                this.context.eventManager.notifySubscribers({modalTitle:"API Error",modalBody:"Error getting Job List"},"messageModel");
            });
    }

    handleGetJsonAPI(data)
    {
       //Dataset 
       this.dataFromAPI(ko.mapping.fromJS(data)());
    }
    
    doSomething(){
        console.log("Hello doSomething");

    }

    sendEvent() {
        console.log("Is Valid: " + this.validationInputTest.isValid());
        context.eventManager.notifySubscribers({source:this.componentName(), value:this.validationInputTest()},"sampleEvent");

    }

}

export default { viewModel: component1Model, template: require('!raw-loader!./component1.html') };