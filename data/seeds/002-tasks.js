exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      project_id: '1',
      description: 'clean',
      notes: 'Make sure you clean the toilets please',
      completed: 0,
    },
    {
      project_id: '2',
      description: 'Couch',
      notes: 'The couch is the most comfortable place to watch Star Wars',
      completed: 0,
    },
    {
      project_id: '3',
      description: 'Sewing',
      notes: 'She wants it to be 8 ft by 8 ft',
      completed: 0,
    },
  ]);
};
