/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  /*
        CREATE TABLE public.clientetelefone (
            id serial NOT NULL,
            id_cliente integer NOT NULL,
            telefone varchar(20) NOT NULL,
            CONSTRAINT clientetelefone_pk PRIMARY KEY (id),
            CONSTRAINT fk_id_cliente foreign key (id_cliente) references public.cliente(id)
        );
    */
  return knex.schema.createTable("clientetelefone", (table) => {
    table.increments("id").primary("clientetelefone_pk");
    table.integer("id_cliente").notNullable();
    table.string("telefone", 20).notNullable();
    table.foreign("id_cliente", "fk_id_cliente").references("id").inTable("cliente");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("clientetelefone");
};
