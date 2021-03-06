/**
 * Created by jpilz on 2/13/17.
 */

import ko from 'knockout';
import utils from './utils';


class contextModel {

    constructor(params) {
        this.name = "app name";
        this.util = utils;
        this.id = ko.observable(this.util.guid());
        this.location = ko.observable("n/a");
        this.paramObj = ko.observable();
        this.debug = ko.observable(false);


        this.apiEntryPointUrl = "https://jsonplaceholder.typicode.com/";
        this.apiContentType = {'Content-type': 'application/x-www-form-urlencoded; charset=utf-8'};

        //Event Manager
        this.eventManager = new ko.subscribable();
    }
}

export let  context = new contextModel();