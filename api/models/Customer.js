/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    schema: true,	
    autoPK: true,
    attributes: {
    	name: { type: 'string', required: true },
    	email: { type: 'string' },
    	state: { type: 'string' },
      stocks: {
        collection: 'stock', //what model to use
        via: 'owner' //what attribute connects to the customer model
      }
    }

};

