export function up(knex) {
  return knex.schema.createTable('playlist_songs', function(table) {
    table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
    table.uuid('playlist_id').references('playlists.id');
    table.uuid('song_id').references('songs.id');
  });
}

export function down(knex) {
  return knex.schema.dropTable('playlist_songs');
}