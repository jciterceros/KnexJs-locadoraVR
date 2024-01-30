/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  /*
    CREATE TABLE public.fabricante (
            id serial NOT NULL,
            nome varchar(100) NOT NULL,
            CONSTRAINT fabricante_pk PRIMARY KEY (id)
        );
  */
  return knex.schema.createTable("fabricante", (table) => {
    table.increments("id").primary("fabricante_pk");
    table.string("nome", 100).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("fabricante");
};
