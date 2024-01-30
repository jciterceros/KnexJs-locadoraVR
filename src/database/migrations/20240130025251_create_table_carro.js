/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  /*
    CREATE TABLE public.carro (
            id serial NOT NULL,
            id_fabricante integer NOT NULL,
            id_modelo integer NOT NULL,
            placa varchar(7) NOT NULL UNIQUE,
            cor varchar(10) NOT NULL,
            disponivel boolean NOT NULL,
            valorlocacao numeric(12, 2) NOT NULL,
            CONSTRAINT carro_pk PRIMARY KEY (id),
            CONSTRAINT fk_id_fabricante foreign key (id_fabricante) references public.fabricante(id),
            CONSTRAINT fk_id_modelo foreign key (id_modelo) references public.modelo(id)
        );
  */
  return knex.schema.createTable("carro", (table) => {
    table.increments("id").primary("carro_pk");
    table.integer("id_fabricante").notNullable();
    table.integer("id_modelo").notNullable();
    table.string("placa", 7).notNullable().unique();
    table.string("cor", 10).notNullable();
    table.boolean("disponivel").notNullable();
    table.decimal("valorlocacao", 12, 2).notNullable();
    table.foreign("id_fabricante", "fk_id_fabricante").references("id").inTable("fabricante");
    table.foreign("id_modelo", "fk_id_modelo").references("id").inTable("modelo");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("carro");
};
