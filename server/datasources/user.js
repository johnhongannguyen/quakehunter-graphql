const {DataSource} = require('apollo-datasource');

class UserAPI extends DataSource {
    constructor({store}){
        super();
        this.store = store;
    }
    // this is a function that gets called by Apollo Server when being setup
    // This function gets called with the data source config including things
    // like cache and context . We'll assign this.context to the request context
    // here, so we can know about the user making requests

    initialize(config){
        this.context = config.context;
    }
// User can be called with an argument that includes email, but it doesn't 
// have to be. If the user is already on the context, it will use that user instead 


    
}

export default UserAPI