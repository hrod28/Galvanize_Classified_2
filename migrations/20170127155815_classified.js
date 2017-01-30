
exports.up = function(knex, Promise) {
  return knex.schema.createTable('classifieds', (table)=>{
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('price').notNullable().defaultTo();
    table.string('item_image').notNullable();
    table.timestamp('created_at').notNullable().defaultTo(knex.raw('now()'));
    table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));

  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('classifieds');

};
