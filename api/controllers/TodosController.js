/**
 * TodosController
 *
 * @description :: Server-side logic for managing todos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
  'index': function(req, res){
    Todos.find().exec(function(err, todos){
      if(err){
        next(err);
      }
      else{
        res.view({
          todos: todos
        });
      }
    });
  }

};

