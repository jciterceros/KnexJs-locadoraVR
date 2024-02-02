const knexfile = require("../knexfile");
const knex = require("knex")(knexfile["development"]);

const { seed: seedReset } = require("./database/seeds/000_reset");
const { seed: seedEstado } = require("./database/seeds/001_estado");
const { seed: seedMunicipio } = require("./database/seeds/002_municipio");
const { seed: seedCliente } = require("./database/seeds/003_cliente");

seedCliente(knex, false)
  .then(() => {
    console.log("Seed concluído com sucesso");
  })
  .catch((error) => {
    console.error("Erro durante o seed:", error);
    knex.destroy();
  })
  .finally(() => {
    // Certifique-se de destruir a conexão após o seed, se necessário
  });

// // Chame a função seed passando o objeto knex
// seedEstado(knex, false)
//   .then(() => {
//     console.log("Seed concluído com sucesso");
//   })
//   .catch((error) => {
//     console.error("Erro durante o seed:", error);
//     knex.destroy();
//   })
//   .finally(() => {
//     // Certifique-se de destruir a conexão após o seed, se necessário
//   });

// // Chame a função seed passando o objeto knex
// seedMunicipio(knex, false)
//   .then(() => {
//     console.log("Seed concluído com sucesso");
//   })
//   .catch((error) => {
//     console.error("Erro durante o seed:", error);
//   })
//   .finally(() => {
//     // Certifique-se de destruir a conexão após o seed, se necessário
//     knex.destroy();
//   });
