export function up(knex) {
  return knex.schema.createTable('users', function(table) {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.string('name');
    table.string('email').unique().notNullable();
  });
}

export function down(knex) {
  return knex.schema.dropTable('users');
}
