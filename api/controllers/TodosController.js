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
  },

  'add': function(req, res){
    if(req.session.err){
      res.view({
        error: req.session.err
      });
      req.session.err = null;
    }
    else{
      res.view({
        error: null
      });
    }
  },

  'create': function(req, res){
    Todos.create(req.params.all()).exec(function(err, todo){
      if(err){
        req.session.err = err;
        res.redirect('/todos/add');
      }
      else{
        res.redirect('/todos');
      }
    });
  }

};

