/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex, debug = false) {
  // Deletes ALL existing entries
  // const del = knex("estado").del();

  const insert = knex("estado").insert([
    {
      id: 11,
      descricao: "RONDONIA",
      sigla: "RO",
    },
    {
      id: 12,
      descricao: "ACRE",
      sigla: "AC",
    },
    {
      id: 13,
      descricao: "AMAZONAS",
      sigla: "AM",
    },
    {
      id: 14,
      descricao: "RORAIMA",
      sigla: "RR",
    },
    {
      id: 15,
      descricao: "PARA",
      sigla: "PA",
    },
    {
      id: 16,
      descricao: "AMAPA",
      sigla: "AP",
    },
    {
      id: 17,
      descricao: "TOCANTINS",
      sigla: "TO",
    },
    {
      id: 21,
      descricao: "MARANHAO",
      sigla: "MA",
    },
    {
      id: 22,
      descricao: "PIAUI",
      sigla: "PI",
    },
    {
      id: 23,
      descricao: "CEARA",
      sigla: "CE",
    },
    {
      id: 24,
      descricao: "RIO GRANDE DO NORTE",
      sigla: "RN",
    },
    {
      id: 25,
      descricao: "PARAIBA",
      sigla: "PB",
    },
    {
      id: 26,
      descricao: "PERNAMBUCO",
      sigla: "PE",
    },
    {
      id: 27,
      descricao: "ALAGOAS",
      sigla: "AL",
    },
    {
      id: 28,
      descricao: "SERGIPE",
      sigla: "SE",
    },
    {
      id: 29,
      descricao: "BAHIA",
      sigla: "BA",
    },
    {
      id: 31,
      descricao: "MINAS GERAIS",
      sigla: "MG",
    },
    {
      id: 32,
      descricao: "ESPIRITO SANTO",
      sigla: "ES",
    },
    {
      id: 33,
      descricao: "RIO DE JANEIRO",
      sigla: "RJ",
    },
    {
      id: 35,
      descricao: "SAO PAULO",
      sigla: "SP",
    },
    {
      id: 41,
      descricao: "PARANA",
      sigla: "PR",
    },
    {
      id: 42,
      descricao: "SANTA CATARINA",
      sigla: "SC",
    },
    {
      id: 43,
      descricao: "RIO GRANDE DO SUL",
      sigla: "RS",
    },
    {
      id: 50,
      descricao: "MATO GROSSO DO SUL",
      sigla: "MS",
    },
    {
      id: 51,
      descricao: "MATO GROSSO",
      sigla: "MT",
    },
    {
      id: 52,
      descricao: "GOIAS",
      sigla: "GO",
    },
    {
      id: 53,
      descricao: "DISTRITO FEDERAL",
      sigla: "DF",
    },
    {
      id: 99,
      descricao: "EXTERIOR",
      sigla: "EX",
    },
  ]);
  if (debug) {
    console.log(insert.toString());
    console.log("Estados inseridos com sucesso - modo debug");
  } else {
    await insert;
    console.log("Estados inseridos com sucesso");
  }
};
