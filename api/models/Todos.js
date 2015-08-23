/**
* Todos.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,

  attributes: {

    name: {
      type: 'String',
      required: true
    },

    description: {
      type: 'String'
    },

    done: {
      type: 'Boolean',
      required: true
    }
  
  },

  beforeValidate: function(values, next){
    values.done = false;
    next();
  }
};

