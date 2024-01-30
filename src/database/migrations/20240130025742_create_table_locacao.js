/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  /*
    CREATE TABLE public.locacao (
            id serial NOT NULL,
            id_carro integer NOT NULL,
            id_seguradora integer NOT NULL,
            id_cliente integer NOT NULL,
            datalocacao date NOT NULL,
            datadevolucao date NOT NULL,
            datadevolvida date NOT NULL,
            valor numeric(12, 2) NOT NULL,
            valordesconto numeric(12, 2) NOT NULL,
            valortotal numeric(12, 2) NOT NULL,
            CONSTRAINT locacao_pk PRIMARY KEY (id),
            CONSTRAINT fk_id_carro foreign key (id_carro) references public.carro(id),
            CONSTRAINT fk_id_seguradora foreign key (id_seguradora) references public.seguradora(id),
            CONSTRAINT fk_id_cliente foreign key (id_cliente) references public.cliente(id)
        );
  */
  return knex.schema.createTable("locacao", (table) => {
    table.increments("id").primary("locacao_pk");
    table.integer("id_carro").notNullable();
    table.integer("id_seguradora").notNullable();
    table.integer("id_cliente").notNullable();
    table.date("datalocacao").notNullable();
    table.date("datadevolucao").notNullable();
    table.date("datadevolvida").notNullable();
    table.decimal("valor", 12, 2).notNullable();
    table.decimal("valordesconto", 12, 2).notNullable();
    table.decimal("valortotal", 12, 2).notNullable();
    table.foreign("id_carro", "fk_id_carro").references("id").inTable("carro");
    table.foreign("id_cliente", "fk_id_cliente").references("id").inTable("cliente");
    table.foreign("id_seguradora", "fk_id_seguradora").references("id").inTable("seguradora");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("locacao");
};
