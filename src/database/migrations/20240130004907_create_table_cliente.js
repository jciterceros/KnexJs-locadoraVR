/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  /*
        CREATE TABLE public.cliente (
            id serial NOT NULL,
            nome varchar(150) NOT NULL,
            rg varchar(9) NOT NULL,
            cpf varchar(11) NOT null UNIQUE,
            logradouro varchar(100) NOT NULL,
            id_municipio integer NOT NULL,
            id_estado integer NOT NULL,
            cnh varchar(11) NOT NULL,
            datavencimentocnh date NOT NULL,
            email varchar(50) NOT NULL,
            CONSTRAINT cliente_pk PRIMARY KEY (id),
            CONSTRAINT fk_id_municipio foreign key (id_municipio) references public.municipio(id),
            CONSTRAINT fk_id_estado foreign key (id_estado) references public.estado(id)
        );
    */
  return knex.schema.createTable("cliente", (table) => {
    table.increments("id").primary("cliente_pk");
    table.string("nome", 150).notNullable();
    table.string("rg", 9).notNullable();
    table.string("cpf", 11).notNullable().unique("cpf");
    table.string("logradouro", 100).notNullable();
    table.integer("id_municipio").notNullable();
    table.integer("id_estado").notNullable();
    table.string("cnh", 11).notNullable();
    table.date("datavencimentocnh").notNullable();
    table.string("email", 50).notNullable();
    table.foreign("id_municipio", "fk_id_municipio").references("id").inTable("municipio");
    table.foreign("id_estado", "fk_id_estado").references("id").inTable("estado");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("cliente");
};
