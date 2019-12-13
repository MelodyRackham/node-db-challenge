exports.seed = function(knex) {
  return knex('resources').insert([
    {
      resource_name: 'Pinterest',
      description: 'It will give you tips for a clean house',
    },
    {
      resource_name: 'Apple TV',
      description: 'All Star Wars Movies can be found on our apple tv',
    },
    {
      resource_name: 'Google',
      description: 'Google any sewing questions you might have',
    },
  ]);
};
