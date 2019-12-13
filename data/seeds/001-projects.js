exports.seed = function(knex) {
  return knex('projects').insert([
    {
      project_name: 'Clean the house',
      description: 'My house is a mess',
      completed: false,
    },
    {
      project_name: 'Finish all Star Wars movies',
      description: 'New movie coming out next week',
      completed: false,
    },
    {
      project_name: 'Sew a quilt for Grandma',
      description: 'Its almost her birthday and she needs a present',
      completed: false,
    },
  ]);
};
