/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  /*
    CREATE TABLE public.estado (
	    id integer NOT NULL,
	    descricao varchar(100) NOT NULL,
	    sigla varchar(2) NOT NULL,
	    CONSTRAINT estado_pk PRIMARY KEY (id)
    );
    */
  return knex.schema.createTable("estado", (table) => {
    table.integer("id").notNullable().primary("estado_pk");
    table.string("descricao", 100).notNullable();
    table.string("sigla", 2).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("estado");
};
