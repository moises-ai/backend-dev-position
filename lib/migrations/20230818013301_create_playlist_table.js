export function up(knex) {
  return knex.schema.createTable('playlists', function(table) {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string('name');
    table.uuid('user_id').references('users.id');
  });
}

export function down(knex) {
  return knex.schema.dropTable('playlists');
}
