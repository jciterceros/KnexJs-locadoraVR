/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex, debug = false) {
  // Deletes ALL existing entries
  const delEstado = knex("estado").del();
  const delMunicipio = knex("municipio").del();
  const delCliente = knex("cliente").del();

  if (debug) {
    console.log(delCliente.toString());
    console.log("Clientes deletados com sucesso - modo debug");
    console.log(delMunicipio.toString());
    console.log("Municipios deletados com sucesso - modo debug");
    console.log(delEstado.toString());
    console.log("Estados deletados com sucesso - modo debug");
  } else {
    await delCliente;
    console.log("Clientes deletados com sucesso");
    await delMunicipio;
    console.log("Municipios deletados com sucesso");
    await delEstado;
    console.log("Estados deletados com sucesso");
  }
};
