/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  /*
    CREATE TABLE public.modelo (
            id serial NOT NULL,
            nome varchar(100) NOT NULL,
            id_fabricante integer NOT NULL,
            CONSTRAINT modelo_pk PRIMARY KEY (id),
            CONSTRAINT fk_id_fabricante foreign key (id_fabricante) references public.fabricante(id)
        );
  */
  return knex.schema.createTable("modelo", (table) => {
    table.increments("id").primary("modelo_pk");
    table.string("nome", 100).notNullable();
    table.integer("id_fabricante").notNullable();
    table.foreign("id_fabricante", "fk_id_fabricante").references("id").inTable("fabricante");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("modelo");
};
