const knex = require ('knex');

const config = require('../../knexfile');

const DB = knex(config.development);

const register = function(user) {
  return DB('users')
           .insert(user)
           .then(ids => ({id: ids[0]}));
}

const login = function(user) {
  return DB('users').where('username', user.username);
}