/**
 * Created by jpilz on 2/13/17.
 */


class utilObj {

    constructor() {
        this.name = "utilObj";
    }

    guid() {

        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

}


export default new utilObj();