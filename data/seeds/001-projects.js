exports.seed = function(knex) {
  return knex('projects').insert([
    {
      project_name: 'Clean the house',
      description: 'My house is a mess',
      completed: 0,
    },
    {
      project_name: 'Finish all Star Wars movies',
      description: 'New movie coming out next week',
      completed: 0,
    },
    {
      project_name: 'Sew a quilt for Grandma',
      description: 'Its almost her birthday and she needs a present',
      completed: 0,
    },
  ]);
};
