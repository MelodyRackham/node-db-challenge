exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      description: 'clean',
      notes: 'Make sure you clean the toilets please',
      completed: false,
    },
    {
      description: 'Couch',
      notes: 'The couch is the most comfortable place to watch Star Wars',
      completed: false,
    },
    {
      description: 'Sewing',
      notes: 'She wants it to be 8 ft by 8 ft',
      completed: false,
    },
  ]);
};
