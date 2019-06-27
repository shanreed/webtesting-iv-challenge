const db = require('../database/dbConfig.js');

module.exports = {
    add,
    remove
  };
  
  function add(member) {
    return db('members')
          .insert(member)
          .then(ids => {
              const [id] = ids;
              return db('members')
                     .where({ id })
                     .first();
      });
  }
  
  function remove(id) {
    return db('members')
    .where({ id })
    .del()
  }