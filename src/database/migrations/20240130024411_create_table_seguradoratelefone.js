/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  /*
    CREATE TABLE public.seguradoratelefone (
            id serial NOT NULL,
            id_seguradora integer NOT NULL,
            telefone varchar(20) NOT NULL,
            CONSTRAINT seguradoratelefone_pk PRIMARY KEY (id),
            CONSTRAINT fk_id_seguradora foreign key (id_seguradora) references public.seguradora(id)
        );
  */
  return knex.schema.createTable("seguradoratelefone", (table) => {
    table.increments("id").primary("seguradoratelefone_pk");
    table.integer("id_seguradora").notNullable();
    table.string("telefone", 20).notNullable();
    table.foreign("id_seguradora", "fk_id_seguradora").references("id").inTable("seguradora");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("seguradoratelefone");
};
