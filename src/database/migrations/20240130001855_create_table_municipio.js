/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  /*  
        CREATE TABLE public.municipio (
            id integer NOT NULL,
            descricao varchar(100) NOT NULL,
            id_estado integer NOT NULL,
            CONSTRAINT municipio_pk PRIMARY KEY (id),
            CONSTRAINT fk_id_estado foreign key (id_estado) references public.estado(id)
        );
    */
  return knex.schema.createTable("municipio", (table) => {
    table.integer("id").notNullable().primary("municipio_pk");
    table.string("descricao", 100).notNullable();
    table.integer("id_estado").notNullable();
    table.foreign("id_estado", "fk_id_estado").references("id").inTable("estado");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("municipio");
};
