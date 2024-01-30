/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  /*
    CREATE TABLE public.seguradora (
            id serial NOT NULL,
            nome varchar(100) NOT NULL,
            cnpj varchar(14) NOT NULL UNIQUE,
            email varchar(100) NOT NULL,
            valor numeric(13, 2) NOT NULL,
            id_municipio integer NOT NULL,
            id_estado integer NOT NULL,
            CONSTRAINT seguradora_pk PRIMARY KEY (id),
            CONSTRAINT fk_id_municipio foreign key (id_municipio) references public.municipio(id),
            CONSTRAINT fk_id_estado foreign key (id_estado) references public.estado(id)
        );
  */
  return knex.schema.createTable("seguradora", (table) => {
    table.increments("id").primary("seguradora_pk");
    table.string("nome", 100).notNullable();
    table.string("cnpj", 14).notNullable().unique("cnpj");
    table.string("email", 100).notNullable();
    table.decimal("valor", 13, 2).notNullable();
    table.integer("id_municipio").notNullable();
    table.integer("id_estado").notNullable();
    table.foreign("id_municipio", "fk_id_municipio").references("id").inTable("municipio");
    table.foreign("id_estado", "fk_id_estado").references("id").inTable("estado");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("seguradora");
};
