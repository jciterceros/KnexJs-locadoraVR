/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("municipio").del();
  await knex("municipio").insert([
    {
      id: 1200013,
      descricao: "ACRELANDIA",
      id_estado: 12,
    },
    {
      id: 1200054,
      descricao: "ASSIS BRASIL",
      id_estado: 12,
    },
    {
      id: 1200104,
      descricao: "BRASILEIA",
      id_estado: 12,
    },
    {
      id: 1200138,
      descricao: "BUJARI",
      id_estado: 12,
    },
    {
      id: 1200179,
      descricao: "CAPIXABA",
      id_estado: 12,
    },
    {
      id: 1200203,
      descricao: "CRUZEIRO DO SUL",
      id_estado: 12,
    },
    {
      id: 1200252,
      descricao: "EPITACIOLANDIA",
      id_estado: 12,
    },
    {
      id: 1200302,
      descricao: "FEIJO",
      id_estado: 12,
    },
    {
      id: 1200328,
      descricao: "JORDAO",
      id_estado: 12,
    },
    {
      id: 1200336,
      descricao: "MANCIO LIMA",
      id_estado: 12,
    },
    {
      id: 1200344,
      descricao: "MANOEL URBANO",
      id_estado: 12,
    },
    {
      id: 1200351,
      descricao: "MARECHAL THAUMATURGO",
      id_estado: 12,
    },
    {
      id: 1200385,
      descricao: "PLACIDO DE CASTRO",
      id_estado: 12,
    },
    {
      id: 1200393,
      descricao: "PORTO WALTER",
      id_estado: 12,
    },
    {
      id: 1200401,
      descricao: "RIO BRANCO",
      id_estado: 12,
    },
    {
      id: 1200427,
      descricao: "RODRIGUES ALVES",
      id_estado: 12,
    },
    {
      id: 1200435,
      descricao: "SANTA ROSA DO PURUS",
      id_estado: 12,
    },
    {
      id: 1200450,
      descricao: "SENADOR GUIOMARD",
      id_estado: 12,
    },
    {
      id: 1200500,
      descricao: "SENA MADUREIRA",
      id_estado: 12,
    },
    {
      id: 1200609,
      descricao: "TARAUACA",
      id_estado: 12,
    },
    {
      id: 1200708,
      descricao: "XAPURI",
      id_estado: 12,
    },
    {
      id: 1200807,
      descricao: "PORTO ACRE",
      id_estado: 12,
    },
    {
      id: 2700102,
      descricao: "AGUA BRANCA",
      id_estado: 27,
    },
    {
      id: 2700201,
      descricao: "ANADIA",
      id_estado: 27,
    },
    {
      id: 2700300,
      descricao: "ARAPIRACA",
      id_estado: 27,
    },
    {
      id: 2700409,
      descricao: "ATALAIA",
      id_estado: 27,
    },
    {
      id: 2700508,
      descricao: "BARRA DE SANTO ANTONIO",
      id_estado: 27,
    },
    {
      id: 2700607,
      descricao: "BARRA DE SAO MIGUEL",
      id_estado: 27,
    },
    {
      id: 2700706,
      descricao: "BATALHA",
      id_estado: 27,
    },
    {
      id: 2700805,
      descricao: "BELEM",
      id_estado: 27,
    },
    {
      id: 2700904,
      descricao: "BELO MONTE",
      id_estado: 27,
    },
    {
      id: 2701001,
      descricao: "BOCA DA MATA",
      id_estado: 27,
    },
    {
      id: 2701100,
      descricao: "BRANQUINHA",
      id_estado: 27,
    },
    {
      id: 2701209,
      descricao: "CACIMBINHAS",
      id_estado: 27,
    },
    {
      id: 2701308,
      descricao: "CAJUEIRO",
      id_estado: 27,
    },
    {
      id: 2701357,
      descricao: "CAMPESTRE",
      id_estado: 27,
    },
    {
      id: 2701407,
      descricao: "CAMPO ALEGRE",
      id_estado: 27,
    },
    {
      id: 2701506,
      descricao: "CAMPO GRANDE",
      id_estado: 27,
    },
    {
      id: 2701605,
      descricao: "CANAPI",
      id_estado: 27,
    },
    {
      id: 2701704,
      descricao: "CAPELA",
      id_estado: 27,
    },
    {
      id: 2701902,
      descricao: "CHA PRETA",
      id_estado: 27,
    },
    {
      id: 2701803,
      descricao: "CARNEIROS",
      id_estado: 27,
    },
    {
      id: 2702009,
      descricao: "COITE DO NOIA",
      id_estado: 27,
    },
    {
      id: 2702108,
      descricao: "COLONIA LEOPOLDINA",
      id_estado: 27,
    },
    {
      id: 2702306,
      descricao: "CORURIPE",
      id_estado: 27,
    },
    {
      id: 2702207,
      descricao: "COQUEIRO SECO",
      id_estado: 27,
    },
    {
      id: 2702355,
      descricao: "CRAIBAS",
      id_estado: 27,
    },
    {
      id: 2702405,
      descricao: "DELMIRO GOUVEIA",
      id_estado: 27,
    },
    {
      id: 2702504,
      descricao: "DOIS RIACHOS",
      id_estado: 27,
    },
    {
      id: 2702603,
      descricao: "FEIRA GRANDE",
      id_estado: 27,
    },
    {
      id: 2702553,
      descricao: "ESTRELA DE ALAGOAS",
      id_estado: 27,
    },
    {
      id: 2702900,
      descricao: "GIRAU DO PONCIANO",
      id_estado: 27,
    },
    {
      id: 2702702,
      descricao: "FELIZ DESERTO",
      id_estado: 27,
    },
    {
      id: 2702801,
      descricao: "FLEXEIRAS",
      id_estado: 27,
    },
    {
      id: 2703205,
      descricao: "IGREJA NOVA",
      id_estado: 27,
    },
    {
      id: 2703106,
      descricao: "IGACI",
      id_estado: 27,
    },
    {
      id: 2703007,
      descricao: "IBATEGUARA",
      id_estado: 27,
    },
    {
      id: 2703304,
      descricao: "INHAPI",
      id_estado: 27,
    },
    {
      id: 2703403,
      descricao: "JACARE DOS HOMENS",
      id_estado: 27,
    },
    {
      id: 2703601,
      descricao: "JAPARATINGA",
      id_estado: 27,
    },
    {
      id: 2703502,
      descricao: "JACUIPE",
      id_estado: 27,
    },
    {
      id: 2703700,
      descricao: "JARAMATAIA",
      id_estado: 27,
    },
    {
      id: 2703759,
      descricao: "JEQUIA DA PRAIA",
      id_estado: 27,
    },
    {
      id: 2703809,
      descricao: "JOAQUIM GOMES",
      id_estado: 27,
    },
    {
      id: 2704005,
      descricao: "JUNQUEIRO",
      id_estado: 27,
    },
    {
      id: 2703908,
      descricao: "JUNDIA",
      id_estado: 27,
    },
    {
      id: 2704302,
      descricao: "MACEIO",
      id_estado: 27,
    },
    {
      id: 2704104,
      descricao: "LAGOA DA CANOA",
      id_estado: 27,
    },
    {
      id: 2704203,
      descricao: "LIMOEIRO DE ANADIA",
      id_estado: 27,
    },
    {
      id: 2704401,
      descricao: "MAJOR ISIDORO",
      id_estado: 27,
    },
    {
      id: 2704609,
      descricao: "MARAVILHA",
      id_estado: 27,
    },
    {
      id: 2704500,
      descricao: "MARAGOGI",
      id_estado: 27,
    },
    {
      id: 2704807,
      descricao: "MARIBONDO",
      id_estado: 27,
    },
    {
      id: 2704906,
      descricao: "MAR VERMELHO",
      id_estado: 27,
    },
    {
      id: 2704708,
      descricao: "MARECHAL DEODORO",
      id_estado: 27,
    },
    {
      id: 2705002,
      descricao: "MATA GRANDE",
      id_estado: 27,
    },
    {
      id: 2705200,
      descricao: "MESSIAS",
      id_estado: 27,
    },
    {
      id: 2705101,
      descricao: "MATRIZ DE CAMARAGIBE",
      id_estado: 27,
    },
    {
      id: 2705309,
      descricao: "MINADOR DO NEGRAO",
      id_estado: 27,
    },
    {
      id: 2705507,
      descricao: "MURICI",
      id_estado: 27,
    },
    {
      id: 2705408,
      descricao: "MONTEIROPOLIS",
      id_estado: 27,
    },
    {
      id: 2705606,
      descricao: "NOVO LINO",
      id_estado: 27,
    },
    {
      id: 2705705,
      descricao: "OLHO DAGUA DAS FLORES",
      id_estado: 27,
    },
    {
      id: 2706000,
      descricao: "OLIVENCA",
      id_estado: 27,
    },
    {
      id: 2705903,
      descricao: "OLHO DAGUA GRANDE",
      id_estado: 27,
    },
    {
      id: 2705804,
      descricao: "OLHO DAGUA DO CASADO",
      id_estado: 27,
    },
    {
      id: 2706109,
      descricao: "OURO BRANCO",
      id_estado: 27,
    },
    {
      id: 2706307,
      descricao: "PALMEIRA DOS INDIOS",
      id_estado: 27,
    },
    {
      id: 2706208,
      descricao: "PALESTINA",
      id_estado: 27,
    },
    {
      id: 2706406,
      descricao: "PAO DE ACUCAR",
      id_estado: 27,
    },
    {
      id: 2706505,
      descricao: "PASSO DE CAMARAGIBE",
      id_estado: 27,
    },
    {
      id: 2706448,
      descricao: "PARIPUEIRA",
      id_estado: 27,
    },
    {
      id: 2706422,
      descricao: "PARICONHA",
      id_estado: 27,
    },
    {
      id: 2706802,
      descricao: "PIACABUCU",
      id_estado: 27,
    },
    {
      id: 2706703,
      descricao: "PENEDO",
      id_estado: 27,
    },
    {
      id: 2706604,
      descricao: "PAULO JACINTO",
      id_estado: 27,
    },
    {
      id: 2707008,
      descricao: "PINDOBA",
      id_estado: 27,
    },
    {
      id: 2707107,
      descricao: "PIRANHAS",
      id_estado: 27,
    },
    {
      id: 2706901,
      descricao: "PILAR",
      id_estado: 27,
    },
    {
      id: 2707305,
      descricao: "PORTO CALVO",
      id_estado: 27,
    },
    {
      id: 2707206,
      descricao: "POCO DAS TRINCHEIRAS",
      id_estado: 27,
    },
    {
      id: 2707404,
      descricao: "PORTO DE PEDRAS",
      id_estado: 27,
    },
    {
      id: 2707503,
      descricao: "PORTO REAL DO COLEGIO",
      id_estado: 27,
    },
    {
      id: 2707602,
      descricao: "QUEBRANGULO",
      id_estado: 27,
    },
    {
      id: 2707701,
      descricao: "RIO LARGO",
      id_estado: 27,
    },
    {
      id: 2707909,
      descricao: "SANTA LUZIA DO NORTE",
      id_estado: 27,
    },
    {
      id: 2707800,
      descricao: "ROTEIRO",
      id_estado: 27,
    },
    {
      id: 2708006,
      descricao: "SANTANA DO IPANEMA",
      id_estado: 27,
    },
    {
      id: 2708105,
      descricao: "SANTANA DO MUNDAU",
      id_estado: 27,
    },
    {
      id: 2708204,
      descricao: "SAO BRAS",
      id_estado: 27,
    },
    {
      id: 2708402,
      descricao: "SAO JOSE DA TAPERA",
      id_estado: 27,
    },
    {
      id: 2708303,
      descricao: "SAO JOSE DA LAJE",
      id_estado: 27,
    },
    {
      id: 2708501,
      descricao: "SAO LUIS DO QUITUNDE",
      id_estado: 27,
    },
    {
      id: 2708600,
      descricao: "SAO MIGUEL DOS CAMPOS",
      id_estado: 27,
    },
    {
      id: 2708907,
      descricao: "SATUBA",
      id_estado: 27,
    },
    {
      id: 2708808,
      descricao: "SAO SEBASTIAO",
      id_estado: 27,
    },
    {
      id: 2708709,
      descricao: "SAO MIGUEL DOS MILAGRES",
      id_estado: 27,
    },
    {
      id: 2708956,
      descricao: "SENADOR RUI PALMEIRA",
      id_estado: 27,
    },
    {
      id: 2709103,
      descricao: "TAQUARANA",
      id_estado: 27,
    },
    {
      id: 2709004,
      descricao: "TANQUE DARCA",
      id_estado: 27,
    },
    {
      id: 2709202,
      descricao: "TRAIPU",
      id_estado: 27,
    },
    {
      id: 2709152,
      descricao: "TEOTONIO VILELA",
      id_estado: 27,
    },
    {
      id: 2709400,
      descricao: "VICOSA",
      id_estado: 27,
    },
    {
      id: 2709301,
      descricao: "UNIAO DOS PALMARES",
      id_estado: 27,
    },
    {
      id: 1600105,
      descricao: "AMAPA",
      id_estado: 16,
    },
    {
      id: 1600055,
      descricao: "SERRA DO NAVIO",
      id_estado: 16,
    },
    {
      id: 1600154,
      descricao: "PEDRA BRANCA DO AMAPARI",
      id_estado: 16,
    },
    {
      id: 1600204,
      descricao: "CALCOENE",
      id_estado: 16,
    },
    {
      id: 1600212,
      descricao: "CUTIAS",
      id_estado: 16,
    },
    {
      id: 1600238,
      descricao: "FERREIRA GOMES",
      id_estado: 16,
    },
    {
      id: 1600303,
      descricao: "MACAPA",
      id_estado: 16,
    },
    {
      id: 1600279,
      descricao: "LARANJAL DO JARI",
      id_estado: 16,
    },
    {
      id: 1600253,
      descricao: "ITAUBAL",
      id_estado: 16,
    },
    {
      id: 1600402,
      descricao: "MAZAGAO",
      id_estado: 16,
    },
    {
      id: 1600501,
      descricao: "OIAPOQUE",
      id_estado: 16,
    },
    {
      id: 1600535,
      descricao: "PORTO GRANDE",
      id_estado: 16,
    },
    {
      id: 1600550,
      descricao: "PRACUUBA",
      id_estado: 16,
    },
    {
      id: 1600600,
      descricao: "SANTANA",
      id_estado: 16,
    },
    {
      id: 1600808,
      descricao: "VITORIA DO JARI",
      id_estado: 16,
    },
    {
      id: 1600709,
      descricao: "TARTARUGALZINHO",
      id_estado: 16,
    },
    {
      id: 1300029,
      descricao: "ALVARAES",
      id_estado: 13,
    },
    {
      id: 1300086,
      descricao: "ANAMA",
      id_estado: 13,
    },
    {
      id: 1300102,
      descricao: "ANORI",
      id_estado: 13,
    },
    {
      id: 1300060,
      descricao: "AMATURA",
      id_estado: 13,
    },
    {
      id: 1300201,
      descricao: "ATALAIA DO NORTE",
      id_estado: 13,
    },
    {
      id: 1300144,
      descricao: "APUI",
      id_estado: 13,
    },
    {
      id: 1300508,
      descricao: "BARREIRINHA",
      id_estado: 13,
    },
    {
      id: 1300409,
      descricao: "BARCELOS",
      id_estado: 13,
    },
    {
      id: 1300300,
      descricao: "AUTAZES",
      id_estado: 13,
    },
    {
      id: 1300607,
      descricao: "BENJAMIN CONSTANT",
      id_estado: 13,
    },
    {
      id: 1300631,
      descricao: "BERURI",
      id_estado: 13,
    },
    {
      id: 1300680,
      descricao: "BOA VISTA DO RAMOS",
      id_estado: 13,
    },
    {
      id: 1300805,
      descricao: "BORBA",
      id_estado: 13,
    },
    {
      id: 1300706,
      descricao: "BOCA DO ACRE",
      id_estado: 13,
    },
    {
      id: 1300839,
      descricao: "CAAPIRANGA",
      id_estado: 13,
    },
    {
      id: 1301001,
      descricao: "CARAUARI",
      id_estado: 13,
    },
    {
      id: 1300904,
      descricao: "CANUTAMA",
      id_estado: 13,
    },
    {
      id: 1301159,
      descricao: "CAREIRO DA VARZEA",
      id_estado: 13,
    },
    {
      id: 1301100,
      descricao: "CAREIRO",
      id_estado: 13,
    },
    {
      id: 1301308,
      descricao: "CODAJAS",
      id_estado: 13,
    },
    {
      id: 1301407,
      descricao: "EIRUNEPE",
      id_estado: 13,
    },
    {
      id: 1301209,
      descricao: "COARI",
      id_estado: 13,
    },
    {
      id: 1301654,
      descricao: "GUAJARA",
      id_estado: 13,
    },
    {
      id: 1301605,
      descricao: "FONTE BOA",
      id_estado: 13,
    },
    {
      id: 1301506,
      descricao: "ENVIRA",
      id_estado: 13,
    },
    {
      id: 1301803,
      descricao: "IPIXUNA",
      id_estado: 13,
    },
    {
      id: 1301704,
      descricao: "HUMAITA",
      id_estado: 13,
    },
    {
      id: 1301951,
      descricao: "ITAMARATI",
      id_estado: 13,
    },
    {
      id: 1301902,
      descricao: "ITACOATIARA",
      id_estado: 13,
    },
    {
      id: 1301852,
      descricao: "IRANDUBA",
      id_estado: 13,
    },
    {
      id: 1302108,
      descricao: "JAPURA",
      id_estado: 13,
    },
    {
      id: 1302009,
      descricao: "ITAPIRANGA",
      id_estado: 13,
    },
    {
      id: 1302207,
      descricao: "JURUA",
      id_estado: 13,
    },
    {
      id: 1302306,
      descricao: "JUTAI",
      id_estado: 13,
    },
    {
      id: 1302405,
      descricao: "LABREA",
      id_estado: 13,
    },
    {
      id: 1302504,
      descricao: "MANACAPURU",
      id_estado: 13,
    },
    {
      id: 1302603,
      descricao: "MANAUS",
      id_estado: 13,
    },
    {
      id: 1302553,
      descricao: "MANAQUIRI",
      id_estado: 13,
    },
    {
      id: 1302702,
      descricao: "MANICORE",
      id_estado: 13,
    },
    {
      id: 1302801,
      descricao: "MARAA",
      id_estado: 13,
    },
    {
      id: 1302900,
      descricao: "MAUES",
      id_estado: 13,
    },
    {
      id: 1303007,
      descricao: "NHAMUNDA",
      id_estado: 13,
    },
    {
      id: 1303106,
      descricao: "NOVA OLINDA DO NORTE",
      id_estado: 13,
    },
    {
      id: 1303205,
      descricao: "NOVO AIRAO",
      id_estado: 13,
    },
    {
      id: 1303403,
      descricao: "PARINTINS",
      id_estado: 13,
    },
    {
      id: 1303304,
      descricao: "NOVO ARIPUANA",
      id_estado: 13,
    },
    {
      id: 1303502,
      descricao: "PAUINI",
      id_estado: 13,
    },
    {
      id: 1303536,
      descricao: "PRESIDENTE FIGUEIREDO",
      id_estado: 13,
    },
    {
      id: 1303569,
      descricao: "RIO PRETO DA EVA",
      id_estado: 13,
    },
    {
      id: 1303700,
      descricao: "SANTO ANTONIO DO ICA",
      id_estado: 13,
    },
    {
      id: 1303601,
      descricao: "SANTA ISABEL DO RIO NEGRO",
      id_estado: 13,
    },
    {
      id: 1303809,
      descricao: "SAO GABRIEL DA CACHOEIRA",
      id_estado: 13,
    },
    {
      id: 1303957,
      descricao: "SAO SEBASTIAO DO UATUMA",
      id_estado: 13,
    },
    {
      id: 1303908,
      descricao: "SAO PAULO DE OLIVENCA",
      id_estado: 13,
    },
    {
      id: 1304104,
      descricao: "TAPAUA",
      id_estado: 13,
    },
    {
      id: 1304062,
      descricao: "TABATINGA",
      id_estado: 13,
    },
    {
      id: 1304005,
      descricao: "SILVES",
      id_estado: 13,
    },
    {
      id: 1304203,
      descricao: "TEFE",
      id_estado: 13,
    },
    {
      id: 1304237,
      descricao: "TONANTINS",
      id_estado: 13,
    },
    {
      id: 1304260,
      descricao: "UARINI",
      id_estado: 13,
    },
    {
      id: 1304401,
      descricao: "URUCURITUBA",
      id_estado: 13,
    },
    {
      id: 1304302,
      descricao: "URUCARA",
      id_estado: 13,
    },
    {
      id: 2900108,
      descricao: "ABAIRA",
      id_estado: 29,
    },
    {
      id: 2900207,
      descricao: "ABARE",
      id_estado: 29,
    },
    {
      id: 2900355,
      descricao: "ADUSTINA",
      id_estado: 29,
    },
    {
      id: 2900306,
      descricao: "ACAJUTIBA",
      id_estado: 29,
    },
    {
      id: 2900405,
      descricao: "AGUA FRIA",
      id_estado: 29,
    },
    {
      id: 2900504,
      descricao: "ERICO CARDOSO",
      id_estado: 29,
    },
    {
      id: 2900702,
      descricao: "ALAGOINHAS",
      id_estado: 29,
    },
    {
      id: 2900603,
      descricao: "AIQUARA",
      id_estado: 29,
    },
    {
      id: 2900900,
      descricao: "ALMADINA",
      id_estado: 29,
    },
    {
      id: 2900801,
      descricao: "ALCOBACA",
      id_estado: 29,
    },
    {
      id: 2901007,
      descricao: "AMARGOSA",
      id_estado: 29,
    },
    {
      id: 2901106,
      descricao: "AMELIA RODRIGUES",
      id_estado: 29,
    },
    {
      id: 2901155,
      descricao: "AMERICA DOURADA",
      id_estado: 29,
    },
    {
      id: 2901205,
      descricao: "ANAGE",
      id_estado: 29,
    },
    {
      id: 2901304,
      descricao: "ANDARAI",
      id_estado: 29,
    },
    {
      id: 2901403,
      descricao: "ANGICAL",
      id_estado: 29,
    },
    {
      id: 2901353,
      descricao: "ANDORINHA",
      id_estado: 29,
    },
    {
      id: 2901601,
      descricao: "ANTAS",
      id_estado: 29,
    },
    {
      id: 2901502,
      descricao: "ANGUERA",
      id_estado: 29,
    },
    {
      id: 2901700,
      descricao: "ANTONIO CARDOSO",
      id_estado: 29,
    },
    {
      id: 2901809,
      descricao: "ANTONIO GONCALVES",
      id_estado: 29,
    },
    {
      id: 2901957,
      descricao: "APUAREMA",
      id_estado: 29,
    },
    {
      id: 2901908,
      descricao: "APORA",
      id_estado: 29,
    },
    {
      id: 2902104,
      descricao: "ARACI",
      id_estado: 29,
    },
    {
      id: 2902054,
      descricao: "ARACAS",
      id_estado: 29,
    },
    {
      id: 2902005,
      descricao: "ARACATU",
      id_estado: 29,
    },
    {
      id: 2902203,
      descricao: "ARAMARI",
      id_estado: 29,
    },
    {
      id: 2902302,
      descricao: "ARATUIPE",
      id_estado: 29,
    },
    {
      id: 2902252,
      descricao: "ARATACA",
      id_estado: 29,
    },
    {
      id: 2902401,
      descricao: "AURELINO LEAL",
      id_estado: 29,
    },
    {
      id: 2902658,
      descricao: "BANZAE",
      id_estado: 29,
    },
    {
      id: 2902609,
      descricao: "BAIXA GRANDE",
      id_estado: 29,
    },
    {
      id: 2902500,
      descricao: "BAIANOPOLIS",
      id_estado: 29,
    },
    {
      id: 2902807,
      descricao: "BARRA DA ESTIVA",
      id_estado: 29,
    },
    {
      id: 2902708,
      descricao: "BARRA",
      id_estado: 29,
    },
    {
      id: 2902906,
      descricao: "BARRA DO CHOCA",
      id_estado: 29,
    },
    {
      id: 2903003,
      descricao: "BARRA DO MENDES",
      id_estado: 29,
    },
    {
      id: 2903102,
      descricao: "BARRA DO ROCHA",
      id_estado: 29,
    },
    {
      id: 2903235,
      descricao: "BARRO ALTO",
      id_estado: 29,
    },
    {
      id: 2903201,
      descricao: "BARREIRAS",
      id_estado: 29,
    },
    {
      id: 2903276,
      descricao: "BARROCAS",
      id_estado: 29,
    },
    {
      id: 2903409,
      descricao: "BELMONTE",
      id_estado: 29,
    },
    {
      id: 2903300,
      descricao: "BARRO PRETO",
      id_estado: 29,
    },
    {
      id: 2903508,
      descricao: "BELO CAMPO",
      id_estado: 29,
    },
    {
      id: 2903607,
      descricao: "BIRITINGA",
      id_estado: 29,
    },
    {
      id: 2903805,
      descricao: "BOA VISTA DO TUPIM",
      id_estado: 29,
    },
    {
      id: 2903706,
      descricao: "BOA NOVA",
      id_estado: 29,
    },
    {
      id: 2903904,
      descricao: "BOM JESUS DA LAPA",
      id_estado: 29,
    },
    {
      id: 2903953,
      descricao: "BOM JESUS DA SERRA",
      id_estado: 29,
    },
    {
      id: 2904050,
      descricao: "BONITO",
      id_estado: 29,
    },
    {
      id: 2904001,
      descricao: "BONINAL",
      id_estado: 29,
    },
    {
      id: 2904100,
      descricao: "BOQUIRA",
      id_estado: 29,
    },
    {
      id: 2904308,
      descricao: "BREJOES",
      id_estado: 29,
    },
    {
      id: 2904209,
      descricao: "BOTUPORA",
      id_estado: 29,
    },
    {
      id: 2904407,
      descricao: "BREJOLANDIA",
      id_estado: 29,
    },
    {
      id: 2904506,
      descricao: "BROTAS DE MACAUBAS",
      id_estado: 29,
    },
    {
      id: 2904605,
      descricao: "BRUMADO",
      id_estado: 29,
    },
    {
      id: 2904704,
      descricao: "BUERAREMA",
      id_estado: 29,
    },
    {
      id: 2904753,
      descricao: "BURITIRAMA",
      id_estado: 29,
    },
    {
      id: 2904852,
      descricao: "CABACEIRAS DO PARAGUACU",
      id_estado: 29,
    },
    {
      id: 2904803,
      descricao: "CAATIBA",
      id_estado: 29,
    },
    {
      id: 2904902,
      descricao: "CACHOEIRA",
      id_estado: 29,
    },
    {
      id: 2905156,
      descricao: "CAETANOS",
      id_estado: 29,
    },
    {
      id: 2905107,
      descricao: "CAEM",
      id_estado: 29,
    },
    {
      id: 2905008,
      descricao: "CACULE",
      id_estado: 29,
    },
    {
      id: 2905206,
      descricao: "CAETITE",
      id_estado: 29,
    },
    {
      id: 2905305,
      descricao: "CAFARNAUM",
      id_estado: 29,
    },
    {
      id: 2905404,
      descricao: "CAIRU",
      id_estado: 29,
    },
    {
      id: 2905503,
      descricao: "CALDEIRAO GRANDE",
      id_estado: 29,
    },
    {
      id: 2905701,
      descricao: "CAMACARI",
      id_estado: 29,
    },
    {
      id: 2905602,
      descricao: "CAMACAN",
      id_estado: 29,
    },
    {
      id: 2905800,
      descricao: "CAMAMU",
      id_estado: 29,
    },
    {
      id: 2905909,
      descricao: "CAMPO ALEGRE DE LOURDES",
      id_estado: 29,
    },
    {
      id: 2906105,
      descricao: "CANAPOLIS",
      id_estado: 29,
    },
    {
      id: 2906006,
      descricao: "CAMPO FORMOSO",
      id_estado: 29,
    },
    {
      id: 2906204,
      descricao: "CANARANA",
      id_estado: 29,
    },
    {
      id: 2906303,
      descricao: "CANAVIEIRAS",
      id_estado: 29,
    },
    {
      id: 2906501,
      descricao: "CANDEIAS",
      id_estado: 29,
    },
    {
      id: 2906402,
      descricao: "CANDEAL",
      id_estado: 29,
    },
    {
      id: 2906600,
      descricao: "CANDIBA",
      id_estado: 29,
    },
    {
      id: 2906709,
      descricao: "CANDIDO SALES",
      id_estado: 29,
    },
    {
      id: 2906824,
      descricao: "CANUDOS",
      id_estado: 29,
    },
    {
      id: 2906808,
      descricao: "CANSANCAO",
      id_estado: 29,
    },
    {
      id: 2906857,
      descricao: "CAPELA DO ALTO ALEGRE",
      id_estado: 29,
    },
    {
      id: 2906873,
      descricao: "CAPIM GROSSO",
      id_estado: 29,
    },
    {
      id: 2906899,
      descricao: "CARAIBAS",
      id_estado: 29,
    },
    {
      id: 2907004,
      descricao: "CARDEAL DA SILVA",
      id_estado: 29,
    },
    {
      id: 2906907,
      descricao: "CARAVELAS",
      id_estado: 29,
    },
    {
      id: 2907202,
      descricao: "CASA NOVA",
      id_estado: 29,
    },
    {
      id: 2907103,
      descricao: "CARINHANHA",
      id_estado: 29,
    },
    {
      id: 2907301,
      descricao: "CASTRO ALVES",
      id_estado: 29,
    },
    {
      id: 2907509,
      descricao: "CATU",
      id_estado: 29,
    },
    {
      id: 2907400,
      descricao: "CATOLANDIA",
      id_estado: 29,
    },
    {
      id: 2907707,
      descricao: "CHORROCHO",
      id_estado: 29,
    },
    {
      id: 2907608,
      descricao: "CENTRAL",
      id_estado: 29,
    },
    {
      id: 2907558,
      descricao: "CATURAMA",
      id_estado: 29,
    },
    {
      id: 2907905,
      descricao: "CIPO",
      id_estado: 29,
    },
    {
      id: 2907806,
      descricao: "CICERO DANTAS",
      id_estado: 29,
    },
    {
      id: 2908002,
      descricao: "COARACI",
      id_estado: 29,
    },
    {
      id: 2908101,
      descricao: "COCOS",
      id_estado: 29,
    },
    {
      id: 2908200,
      descricao: "CONCEICAO DA FEIRA",
      id_estado: 29,
    },
    {
      id: 2908408,
      descricao: "CONCEICAO DO COITE",
      id_estado: 29,
    },
    {
      id: 2908309,
      descricao: "CONCEICAO DO ALMEIDA",
      id_estado: 29,
    },
    {
      id: 2908507,
      descricao: "CONCEICAO DO JACUIPE",
      id_estado: 29,
    },
    {
      id: 2908606,
      descricao: "CONDE",
      id_estado: 29,
    },
    {
      id: 2908705,
      descricao: "CONDEUBA",
      id_estado: 29,
    },
    {
      id: 2908804,
      descricao: "CONTENDAS DO SINCORA",
      id_estado: 29,
    },
    {
      id: 2908903,
      descricao: "CORACAO DE MARIA",
      id_estado: 29,
    },
    {
      id: 2909109,
      descricao: "CORIBE",
      id_estado: 29,
    },
    {
      id: 2909000,
      descricao: "CORDEIROS",
      id_estado: 29,
    },
    {
      id: 2909208,
      descricao: "CORONEL JOAO SA",
      id_estado: 29,
    },
    {
      id: 2909406,
      descricao: "COTEGIPE",
      id_estado: 29,
    },
    {
      id: 2909307,
      descricao: "CORRENTINA",
      id_estado: 29,
    },
    {
      id: 2909604,
      descricao: "CRISOPOLIS",
      id_estado: 29,
    },
    {
      id: 2909505,
      descricao: "CRAVOLANDIA",
      id_estado: 29,
    },
    {
      id: 2909703,
      descricao: "CRISTOPOLIS",
      id_estado: 29,
    },
    {
      id: 2909901,
      descricao: "CURACA",
      id_estado: 29,
    },
    {
      id: 2909802,
      descricao: "CRUZ DAS ALMAS",
      id_estado: 29,
    },
    {
      id: 2910008,
      descricao: "DARIO MEIRA",
      id_estado: 29,
    },
    {
      id: 2910206,
      descricao: "DOM MACEDO COSTA",
      id_estado: 29,
    },
    {
      id: 2910107,
      descricao: "DOM BASILIO",
      id_estado: 29,
    },
    {
      id: 2910057,
      descricao: "DIAS DAVILA",
      id_estado: 29,
    },
    {
      id: 2910305,
      descricao: "ELISIO MEDRADO",
      id_estado: 29,
    },
    {
      id: 2910404,
      descricao: "ENCRUZILHADA",
      id_estado: 29,
    },
    {
      id: 2910503,
      descricao: "ENTRE RIOS",
      id_estado: 29,
    },
    {
      id: 2910701,
      descricao: "EUCLIDES DA CUNHA",
      id_estado: 29,
    },
    {
      id: 2910602,
      descricao: "ESPLANADA",
      id_estado: 29,
    },
    {
      id: 2910727,
      descricao: "EUNAPOLIS",
      id_estado: 29,
    },
    {
      id: 2910750,
      descricao: "FATIMA",
      id_estado: 29,
    },
    {
      id: 2910800,
      descricao: "FEIRA DE SANTANA",
      id_estado: 29,
    },
    {
      id: 2910776,
      descricao: "FEIRA DA MATA",
      id_estado: 29,
    },
    {
      id: 2910859,
      descricao: "FILADELFIA",
      id_estado: 29,
    },
    {
      id: 2911006,
      descricao: "FLORESTA AZUL",
      id_estado: 29,
    },
    {
      id: 2910909,
      descricao: "FIRMINO ALVES",
      id_estado: 29,
    },
    {
      id: 2911204,
      descricao: "GANDU",
      id_estado: 29,
    },
    {
      id: 2911105,
      descricao: "FORMOSA DO RIO PRETO",
      id_estado: 29,
    },
    {
      id: 2911303,
      descricao: "GENTIO DO OURO",
      id_estado: 29,
    },
    {
      id: 2911253,
      descricao: "GAVIAO",
      id_estado: 29,
    },
    {
      id: 2911402,
      descricao: "GLORIA",
      id_estado: 29,
    },
    {
      id: 2911501,
      descricao: "GONGOGI",
      id_estado: 29,
    },
    {
      id: 2911600,
      descricao: "GOVERNADOR MANGABEIRA",
      id_estado: 29,
    },
    {
      id: 2911659,
      descricao: "GUAJERU",
      id_estado: 29,
    },
    {
      id: 2911709,
      descricao: "GUANAMBI",
      id_estado: 29,
    },
    {
      id: 2911808,
      descricao: "GUARATINGA",
      id_estado: 29,
    },
    {
      id: 2911857,
      descricao: "HELIOPOLIS",
      id_estado: 29,
    },
    {
      id: 2911907,
      descricao: "IACU",
      id_estado: 29,
    },
    {
      id: 2912103,
      descricao: "IBICARAI",
      id_estado: 29,
    },
    {
      id: 2912004,
      descricao: "IBIASSUCE",
      id_estado: 29,
    },
    {
      id: 2912202,
      descricao: "IBICOARA",
      id_estado: 29,
    },
    {
      id: 2912301,
      descricao: "IBICUI",
      id_estado: 29,
    },
    {
      id: 2912400,
      descricao: "IBIPEBA",
      id_estado: 29,
    },
    {
      id: 2912608,
      descricao: "IBIQUERA",
      id_estado: 29,
    },
    {
      id: 2912509,
      descricao: "IBIPITANGA",
      id_estado: 29,
    },
    {
      id: 2912905,
      descricao: "IBIRATAIA",
      id_estado: 29,
    },
    {
      id: 2912806,
      descricao: "IBIRAPUA",
      id_estado: 29,
    },
    {
      id: 2912707,
      descricao: "IBIRAPITANGA",
      id_estado: 29,
    },
    {
      id: 2913101,
      descricao: "IBITITA",
      id_estado: 29,
    },
    {
      id: 2913002,
      descricao: "IBITIARA",
      id_estado: 29,
    },
    {
      id: 2913200,
      descricao: "IBOTIRAMA",
      id_estado: 29,
    },
    {
      id: 2913507,
      descricao: "IGUAI",
      id_estado: 29,
    },
    {
      id: 2913309,
      descricao: "ICHU",
      id_estado: 29,
    },
    {
      id: 2913457,
      descricao: "IGRAPIUNA",
      id_estado: 29,
    },
    {
      id: 2913408,
      descricao: "IGAPORA",
      id_estado: 29,
    },
    {
      id: 2913606,
      descricao: "ILHEUS",
      id_estado: 29,
    },
    {
      id: 2913705,
      descricao: "INHAMBUPE",
      id_estado: 29,
    },
    {
      id: 2913804,
      descricao: "IPECAETA",
      id_estado: 29,
    },
    {
      id: 2914000,
      descricao: "IPIRA",
      id_estado: 29,
    },
    {
      id: 2913903,
      descricao: "IPIAU",
      id_estado: 29,
    },
    {
      id: 2914208,
      descricao: "IRAJUBA",
      id_estado: 29,
    },
    {
      id: 2914109,
      descricao: "IPUPIARA",
      id_estado: 29,
    },
    {
      id: 2914307,
      descricao: "IRAMAIA",
      id_estado: 29,
    },
    {
      id: 2914406,
      descricao: "IRAQUARA",
      id_estado: 29,
    },
    {
      id: 2914604,
      descricao: "IRECE",
      id_estado: 29,
    },
    {
      id: 2914505,
      descricao: "IRARA",
      id_estado: 29,
    },
    {
      id: 2914703,
      descricao: "ITABERABA",
      id_estado: 29,
    },
    {
      id: 2914653,
      descricao: "ITABELA",
      id_estado: 29,
    },
    {
      id: 2914802,
      descricao: "ITABUNA",
      id_estado: 29,
    },
    {
      id: 2914901,
      descricao: "ITACARE",
      id_estado: 29,
    },
    {
      id: 2915007,
      descricao: "ITAETE",
      id_estado: 29,
    },
    {
      id: 2915205,
      descricao: "ITAGIBA",
      id_estado: 29,
    },
    {
      id: 2915106,
      descricao: "ITAGI",
      id_estado: 29,
    },
    {
      id: 2915304,
      descricao: "ITAGIMIRIM",
      id_estado: 29,
    },
    {
      id: 2915403,
      descricao: "ITAJU DO COLONIA",
      id_estado: 29,
    },
    {
      id: 2915353,
      descricao: "ITAGUACU DA BAHIA",
      id_estado: 29,
    },
    {
      id: 2915601,
      descricao: "ITAMARAJU",
      id_estado: 29,
    },
    {
      id: 2915502,
      descricao: "ITAJUIPE",
      id_estado: 29,
    },
    {
      id: 2915700,
      descricao: "ITAMARI",
      id_estado: 29,
    },
    {
      id: 2915809,
      descricao: "ITAMBE",
      id_estado: 29,
    },
    {
      id: 2916005,
      descricao: "ITANHEM",
      id_estado: 29,
    },
    {
      id: 2915908,
      descricao: "ITANAGRA",
      id_estado: 29,
    },
    {
      id: 2916104,
      descricao: "ITAPARICA",
      id_estado: 29,
    },
    {
      id: 2916203,
      descricao: "ITAPE",
      id_estado: 29,
    },
    {
      id: 2916302,
      descricao: "ITAPEBI",
      id_estado: 29,
    },
    {
      id: 2916401,
      descricao: "ITAPETINGA",
      id_estado: 29,
    },
    {
      id: 2916500,
      descricao: "ITAPICURU",
      id_estado: 29,
    },
    {
      id: 2916708,
      descricao: "ITAQUARA",
      id_estado: 29,
    },
    {
      id: 2916609,
      descricao: "ITAPITANGA",
      id_estado: 29,
    },
    {
      id: 2916807,
      descricao: "ITARANTIM",
      id_estado: 29,
    },
    {
      id: 2916906,
      descricao: "ITIRUCU",
      id_estado: 29,
    },
    {
      id: 2916856,
      descricao: "ITATIM",
      id_estado: 29,
    },
    {
      id: 2917003,
      descricao: "ITIUBA",
      id_estado: 29,
    },
    {
      id: 2917102,
      descricao: "ITORORO",
      id_estado: 29,
    },
    {
      id: 2917201,
      descricao: "ITUACU",
      id_estado: 29,
    },
    {
      id: 2917359,
      descricao: "JABORANDI",
      id_estado: 29,
    },
    {
      id: 2917334,
      descricao: "IUIU",
      id_estado: 29,
    },
    {
      id: 2917300,
      descricao: "ITUBERA",
      id_estado: 29,
    },
    {
      id: 2917409,
      descricao: "JACARACI",
      id_estado: 29,
    },
    {
      id: 2917508,
      descricao: "JACOBINA",
      id_estado: 29,
    },
    {
      id: 2917607,
      descricao: "JAGUAQUARA",
      id_estado: 29,
    },
    {
      id: 2917706,
      descricao: "JAGUARARI",
      id_estado: 29,
    },
    {
      id: 2917805,
      descricao: "JAGUARIPE",
      id_estado: 29,
    },
    {
      id: 2917904,
      descricao: "JANDAIRA",
      id_estado: 29,
    },
    {
      id: 2918001,
      descricao: "JEQUIE",
      id_estado: 29,
    },
    {
      id: 2918100,
      descricao: "JEREMOABO",
      id_estado: 29,
    },
    {
      id: 2918308,
      descricao: "JITAUNA",
      id_estado: 29,
    },
    {
      id: 2918209,
      descricao: "JIQUIRICA",
      id_estado: 29,
    },
    {
      id: 2918357,
      descricao: "JOAO DOURADO",
      id_estado: 29,
    },
    {
      id: 2918407,
      descricao: "JUAZEIRO",
      id_estado: 29,
    },
    {
      id: 2918456,
      descricao: "JUCURUCU",
      id_estado: 29,
    },
    {
      id: 2918605,
      descricao: "JUSSIAPE",
      id_estado: 29,
    },
    {
      id: 2918555,
      descricao: "JUSSARI",
      id_estado: 29,
    },
    {
      id: 2918506,
      descricao: "JUSSARA",
      id_estado: 29,
    },
    {
      id: 2918704,
      descricao: "LAFAIETE COUTINHO",
      id_estado: 29,
    },
    {
      id: 2918753,
      descricao: "LAGOA REAL",
      id_estado: 29,
    },
    {
      id: 2918803,
      descricao: "LAJE",
      id_estado: 29,
    },
    {
      id: 2918902,
      descricao: "LAJEDAO",
      id_estado: 29,
    },
    {
      id: 2919108,
      descricao: "LAMARAO",
      id_estado: 29,
    },
    {
      id: 2919058,
      descricao: "LAJEDO DO TABOCAL",
      id_estado: 29,
    },
    {
      id: 2919009,
      descricao: "LAJEDINHO",
      id_estado: 29,
    },
    {
      id: 2919306,
      descricao: "LENCOIS",
      id_estado: 29,
    },
    {
      id: 2919207,
      descricao: "LAURO DE FREITAS",
      id_estado: 29,
    },
    {
      id: 2919157,
      descricao: "LAPAO",
      id_estado: 29,
    },
    {
      id: 2919405,
      descricao: "LICINIO DE ALMEIDA",
      id_estado: 29,
    },
    {
      id: 2919504,
      descricao: "LIVRAMENTO DE NOSSA SENHORA",
      id_estado: 29,
    },
    {
      id: 2919553,
      descricao: "LUIS EDUARDO MAGALHAES",
      id_estado: 29,
    },
    {
      id: 2919603,
      descricao: "MACAJUBA",
      id_estado: 29,
    },
    {
      id: 2919801,
      descricao: "MACAUBAS",
      id_estado: 29,
    },
    {
      id: 2919702,
      descricao: "MACARANI",
      id_estado: 29,
    },
    {
      id: 2919926,
      descricao: "MADRE DE DEUS",
      id_estado: 29,
    },
    {
      id: 2919900,
      descricao: "MACURURE",
      id_estado: 29,
    },
    {
      id: 2919959,
      descricao: "MAETINGA",
      id_estado: 29,
    },
    {
      id: 2920007,
      descricao: "MAIQUINIQUE",
      id_estado: 29,
    },
    {
      id: 2920205,
      descricao: "MALHADA",
      id_estado: 29,
    },
    {
      id: 2920106,
      descricao: "MAIRI",
      id_estado: 29,
    },
    {
      id: 2920403,
      descricao: "MANOEL VITORINO",
      id_estado: 29,
    },
    {
      id: 2920304,
      descricao: "MALHADA DE PEDRAS",
      id_estado: 29,
    },
    {
      id: 2920452,
      descricao: "MANSIDAO",
      id_estado: 29,
    },
    {
      id: 2920502,
      descricao: "MARACAS",
      id_estado: 29,
    },
    {
      id: 2920601,
      descricao: "MARAGOGIPE",
      id_estado: 29,
    },
    {
      id: 2920700,
      descricao: "MARAU",
      id_estado: 29,
    },
    {
      id: 2920809,
      descricao: "MARCIONILIO SOUZA",
      id_estado: 29,
    },
    {
      id: 2920908,
      descricao: "MASCOTE",
      id_estado: 29,
    },
    {
      id: 2921054,
      descricao: "MATINA",
      id_estado: 29,
    },
    {
      id: 2921005,
      descricao: "MATA DE SAO JOAO",
      id_estado: 29,
    },
    {
      id: 2921104,
      descricao: "MEDEIROS NETO",
      id_estado: 29,
    },
    {
      id: 2921203,
      descricao: "MIGUEL CALMON",
      id_estado: 29,
    },
    {
      id: 2921302,
      descricao: "MILAGRES",
      id_estado: 29,
    },
    {
      id: 2921401,
      descricao: "MIRANGABA",
      id_estado: 29,
    },
    {
      id: 2921450,
      descricao: "MIRANTE",
      id_estado: 29,
    },
    {
      id: 2921708,
      descricao: "MORRO DO CHAPEU",
      id_estado: 29,
    },
    {
      id: 2921609,
      descricao: "MORPARA",
      id_estado: 29,
    },
    {
      id: 2921500,
      descricao: "MONTE SANTO",
      id_estado: 29,
    },
    {
      id: 2921906,
      descricao: "MUCUGE",
      id_estado: 29,
    },
    {
      id: 2921807,
      descricao: "MORTUGABA",
      id_estado: 29,
    },
    {
      id: 2922003,
      descricao: "MUCURI",
      id_estado: 29,
    },
    {
      id: 2922052,
      descricao: "MULUNGU DO MORRO",
      id_estado: 29,
    },
    {
      id: 2922201,
      descricao: "MUNIZ FERREIRA",
      id_estado: 29,
    },
    {
      id: 2922102,
      descricao: "MUNDO NOVO",
      id_estado: 29,
    },
    {
      id: 2922250,
      descricao: "MUQUEM DE SAO FRANCISCO",
      id_estado: 29,
    },
    {
      id: 2922300,
      descricao: "MURITIBA",
      id_estado: 29,
    },
    {
      id: 2922508,
      descricao: "NAZARE",
      id_estado: 29,
    },
    {
      id: 2922409,
      descricao: "MUTUIPE",
      id_estado: 29,
    },
    {
      id: 2922607,
      descricao: "NILO PECANHA",
      id_estado: 29,
    },
    {
      id: 2922706,
      descricao: "NOVA CANAA",
      id_estado: 29,
    },
    {
      id: 2922656,
      descricao: "NORDESTINA",
      id_estado: 29,
    },
    {
      id: 2922755,
      descricao: "NOVA IBIA",
      id_estado: 29,
    },
    {
      id: 2922730,
      descricao: "NOVA FATIMA",
      id_estado: 29,
    },
    {
      id: 2922854,
      descricao: "NOVA REDENCAO",
      id_estado: 29,
    },
    {
      id: 2922805,
      descricao: "NOVA ITARANA",
      id_estado: 29,
    },
    {
      id: 2922904,
      descricao: "NOVA SOURE",
      id_estado: 29,
    },
    {
      id: 2923001,
      descricao: "NOVA VICOSA",
      id_estado: 29,
    },
    {
      id: 2923035,
      descricao: "NOVO HORIZONTE",
      id_estado: 29,
    },
    {
      id: 2923050,
      descricao: "NOVO TRIUNFO",
      id_estado: 29,
    },
    {
      id: 2923209,
      descricao: "OLIVEIRA DOS BREJINHOS",
      id_estado: 29,
    },
    {
      id: 2923100,
      descricao: "OLINDINA",
      id_estado: 29,
    },
    {
      id: 2923357,
      descricao: "OUROLANDIA",
      id_estado: 29,
    },
    {
      id: 2923308,
      descricao: "OURICANGAS",
      id_estado: 29,
    },
    {
      id: 2923407,
      descricao: "PALMAS DE MONTE ALTO",
      id_estado: 29,
    },
    {
      id: 2923506,
      descricao: "PALMEIRAS",
      id_estado: 29,
    },
    {
      id: 2923704,
      descricao: "PARATINGA",
      id_estado: 29,
    },
    {
      id: 2923605,
      descricao: "PARAMIRIM",
      id_estado: 29,
    },
    {
      id: 2923902,
      descricao: "PAU BRASIL",
      id_estado: 29,
    },
    {
      id: 2923803,
      descricao: "PARIPIRANGA",
      id_estado: 29,
    },
    {
      id: 2924009,
      descricao: "PAULO AFONSO",
      id_estado: 29,
    },
    {
      id: 2924108,
      descricao: "PEDRAO",
      id_estado: 29,
    },
    {
      id: 2924058,
      descricao: "PE DE SERRA",
      id_estado: 29,
    },
    {
      id: 2924207,
      descricao: "PEDRO ALEXANDRE",
      id_estado: 29,
    },
    {
      id: 2924306,
      descricao: "PIATA",
      id_estado: 29,
    },
    {
      id: 2924504,
      descricao: "PINDAI",
      id_estado: 29,
    },
    {
      id: 2924405,
      descricao: "PILAO ARCADO",
      id_estado: 29,
    },
    {
      id: 2924603,
      descricao: "PINDOBACU",
      id_estado: 29,
    },
    {
      id: 2924678,
      descricao: "PIRAI DO NORTE",
      id_estado: 29,
    },
    {
      id: 2924652,
      descricao: "PINTADAS",
      id_estado: 29,
    },
    {
      id: 2924702,
      descricao: "PIRIPA",
      id_estado: 29,
    },
    {
      id: 2924801,
      descricao: "PIRITIBA",
      id_estado: 29,
    },
    {
      id: 2924900,
      descricao: "PLANALTINO",
      id_estado: 29,
    },
    {
      id: 2925006,
      descricao: "PLANALTO",
      id_estado: 29,
    },
    {
      id: 2925204,
      descricao: "POJUCA",
      id_estado: 29,
    },
    {
      id: 2925105,
      descricao: "POCOES",
      id_estado: 29,
    },
    {
      id: 2925253,
      descricao: "PONTO NOVO",
      id_estado: 29,
    },
    {
      id: 2925303,
      descricao: "PORTO SEGURO",
      id_estado: 29,
    },
    {
      id: 2925402,
      descricao: "POTIRAGUA",
      id_estado: 29,
    },
    {
      id: 2925501,
      descricao: "PRADO",
      id_estado: 29,
    },
    {
      id: 2925600,
      descricao: "PRESIDENTE DUTRA",
      id_estado: 29,
    },
    {
      id: 2925808,
      descricao: "QUEIMADAS",
      id_estado: 29,
    },
    {
      id: 2925758,
      descricao: "PRESIDENTE TANCREDO NEVES",
      id_estado: 29,
    },
    {
      id: 2925709,
      descricao: "PRESIDENTE JANIO QUADROS",
      id_estado: 29,
    },
    {
      id: 2925907,
      descricao: "QUIJINGUE",
      id_estado: 29,
    },
    {
      id: 2925956,
      descricao: "RAFAEL JAMBEIRO",
      id_estado: 29,
    },
    {
      id: 2925931,
      descricao: "QUIXABEIRA",
      id_estado: 29,
    },
    {
      id: 2926004,
      descricao: "REMANSO",
      id_estado: 29,
    },
    {
      id: 2926103,
      descricao: "RETIROLANDIA",
      id_estado: 29,
    },
    {
      id: 2926400,
      descricao: "RIACHO DE SANTANA",
      id_estado: 29,
    },
    {
      id: 2926301,
      descricao: "RIACHAO DO JACUIPE",
      id_estado: 29,
    },
    {
      id: 2926202,
      descricao: "RIACHAO DAS NEVES",
      id_estado: 29,
    },
    {
      id: 2926509,
      descricao: "RIBEIRA DO AMPARO",
      id_estado: 29,
    },
    {
      id: 2926608,
      descricao: "RIBEIRA DO POMBAL",
      id_estado: 29,
    },
    {
      id: 2926707,
      descricao: "RIO DE CONTAS",
      id_estado: 29,
    },
    {
      id: 2926657,
      descricao: "RIBEIRAO DO LARGO",
      id_estado: 29,
    },
    {
      id: 2926806,
      descricao: "RIO DO ANTONIO",
      id_estado: 29,
    },
    {
      id: 2927002,
      descricao: "RIO REAL",
      id_estado: 29,
    },
    {
      id: 2926905,
      descricao: "RIO DO PIRES",
      id_estado: 29,
    },
    {
      id: 2927101,
      descricao: "RODELAS",
      id_estado: 29,
    },
    {
      id: 2927200,
      descricao: "RUY BARBOSA",
      id_estado: 29,
    },
    {
      id: 2927408,
      descricao: "SALVADOR",
      id_estado: 29,
    },
    {
      id: 2927309,
      descricao: "SALINAS DA MARGARIDA",
      id_estado: 29,
    },
    {
      id: 2927507,
      descricao: "SANTA BARBARA",
      id_estado: 29,
    },
    {
      id: 2927606,
      descricao: "SANTA BRIGIDA",
      id_estado: 29,
    },
    {
      id: 2927903,
      descricao: "SANTA INES",
      id_estado: 29,
    },
    {
      id: 2927804,
      descricao: "SANTA CRUZ DA VITORIA",
      id_estado: 29,
    },
    {
      id: 2927705,
      descricao: "SANTA CRUZ CABRALIA",
      id_estado: 29,
    },
    {
      id: 2928000,
      descricao: "SANTALUZ",
      id_estado: 29,
    },
    {
      id: 2928059,
      descricao: "SANTA LUZIA",
      id_estado: 29,
    },
    {
      id: 2928109,
      descricao: "SANTA MARIA DA VITORIA",
      id_estado: 29,
    },
    {
      id: 2928208,
      descricao: "SANTANA",
      id_estado: 29,
    },
    {
      id: 2928406,
      descricao: "SANTA RITA DE CASSIA",
      id_estado: 29,
    },
    {
      id: 2928307,
      descricao: "SANTANOPOLIS",
      id_estado: 29,
    },
    {
      id: 2928505,
      descricao: "SANTA TERESINHA",
      id_estado: 29,
    },
    {
      id: 2928604,
      descricao: "SANTO AMARO",
      id_estado: 29,
    },
    {
      id: 2928703,
      descricao: "SANTO ANTONIO DE JESUS",
      id_estado: 29,
    },
    {
      id: 2928901,
      descricao: "SAO DESIDERIO",
      id_estado: 29,
    },
    {
      id: 2928802,
      descricao: "SANTO ESTEVAO",
      id_estado: 29,
    },
    {
      id: 2929008,
      descricao: "SAO FELIX",
      id_estado: 29,
    },
    {
      id: 2928950,
      descricao: "SAO DOMINGOS",
      id_estado: 29,
    },
    {
      id: 2929057,
      descricao: "SAO FELIX DO CORIBE",
      id_estado: 29,
    },
    {
      id: 2929206,
      descricao: "SAO FRANCISCO DO CONDE",
      id_estado: 29,
    },
    {
      id: 2929107,
      descricao: "SAO FELIPE",
      id_estado: 29,
    },
    {
      id: 2929255,
      descricao: "SAO GABRIEL",
      id_estado: 29,
    },
    {
      id: 2929305,
      descricao: "SAO GONCALO DOS CAMPOS",
      id_estado: 29,
    },
    {
      id: 2929354,
      descricao: "SAO JOSE DA VITORIA",
      id_estado: 29,
    },
    {
      id: 2929404,
      descricao: "SAO MIGUEL DAS MATAS",
      id_estado: 29,
    },
    {
      id: 2929370,
      descricao: "SAO JOSE DO JACUIPE",
      id_estado: 29,
    },
    {
      id: 2929503,
      descricao: "SAO SEBASTIAO DO PASSE",
      id_estado: 29,
    },
    {
      id: 2929602,
      descricao: "SAPEACU",
      id_estado: 29,
    },
    {
      id: 2929701,
      descricao: "SATIRO DIAS",
      id_estado: 29,
    },
    {
      id: 2929750,
      descricao: "SAUBARA",
      id_estado: 29,
    },
    {
      id: 2929800,
      descricao: "SAUDE",
      id_estado: 29,
    },
    {
      id: 2929909,
      descricao: "SEABRA",
      id_estado: 29,
    },
    {
      id: 2930006,
      descricao: "SEBASTIAO LARANJEIRAS",
      id_estado: 29,
    },
    {
      id: 2930105,
      descricao: "SENHOR DO BONFIM",
      id_estado: 29,
    },
    {
      id: 2930204,
      descricao: "SENTO SE",
      id_estado: 29,
    },
    {
      id: 2930154,
      descricao: "SERRA DO RAMALHO",
      id_estado: 29,
    },
    {
      id: 2930303,
      descricao: "SERRA DOURADA",
      id_estado: 29,
    },
    {
      id: 2930501,
      descricao: "SERRINHA",
      id_estado: 29,
    },
    {
      id: 2930402,
      descricao: "SERRA PRETA",
      id_estado: 29,
    },
    {
      id: 2930600,
      descricao: "SERROLANDIA",
      id_estado: 29,
    },
    {
      id: 2930709,
      descricao: "SIMOES FILHO",
      id_estado: 29,
    },
    {
      id: 2930758,
      descricao: "SITIO DO MATO",
      id_estado: 29,
    },
    {
      id: 2930808,
      descricao: "SOUTO SOARES",
      id_estado: 29,
    },
    {
      id: 2930774,
      descricao: "SOBRADINHO",
      id_estado: 29,
    },
    {
      id: 2930766,
      descricao: "SITIO DO QUINTO",
      id_estado: 29,
    },
    {
      id: 2931004,
      descricao: "TANHACU",
      id_estado: 29,
    },
    {
      id: 2930907,
      descricao: "TABOCAS DO BREJO VELHO",
      id_estado: 29,
    },
    {
      id: 2931053,
      descricao: "TANQUE NOVO",
      id_estado: 29,
    },
    {
      id: 2931103,
      descricao: "TANQUINHO",
      id_estado: 29,
    },
    {
      id: 2931202,
      descricao: "TAPEROA",
      id_estado: 29,
    },
    {
      id: 2931301,
      descricao: "TAPIRAMUTA",
      id_estado: 29,
    },
    {
      id: 2931400,
      descricao: "TEODORO SAMPAIO",
      id_estado: 29,
    },
    {
      id: 2931350,
      descricao: "TEIXEIRA DE FREITAS",
      id_estado: 29,
    },
    {
      id: 2931608,
      descricao: "TEOLANDIA",
      id_estado: 29,
    },
    {
      id: 2931509,
      descricao: "TEOFILANDIA",
      id_estado: 29,
    },
    {
      id: 2931806,
      descricao: "TREMEDAL",
      id_estado: 29,
    },
    {
      id: 2931707,
      descricao: "TERRA NOVA",
      id_estado: 29,
    },
    {
      id: 2932002,
      descricao: "UAUA",
      id_estado: 29,
    },
    {
      id: 2931905,
      descricao: "TUCANO",
      id_estado: 29,
    },
    {
      id: 2932101,
      descricao: "UBAIRA",
      id_estado: 29,
    },
    {
      id: 2932200,
      descricao: "UBAITABA",
      id_estado: 29,
    },
    {
      id: 2932408,
      descricao: "UIBAI",
      id_estado: 29,
    },
    {
      id: 2932309,
      descricao: "UBATA",
      id_estado: 29,
    },
    {
      id: 2932457,
      descricao: "UMBURANAS",
      id_estado: 29,
    },
    {
      id: 2932507,
      descricao: "UNA",
      id_estado: 29,
    },
    {
      id: 2932705,
      descricao: "URUCUCA",
      id_estado: 29,
    },
    {
      id: 2932606,
      descricao: "URANDI",
      id_estado: 29,
    },
    {
      id: 2932804,
      descricao: "UTINGA",
      id_estado: 29,
    },
    {
      id: 2932903,
      descricao: "VALENCA",
      id_estado: 29,
    },
    {
      id: 2933000,
      descricao: "VALENTE",
      id_estado: 29,
    },
    {
      id: 2933059,
      descricao: "VARZEA DA ROCA",
      id_estado: 29,
    },
    {
      id: 2933109,
      descricao: "VARZEA DO POCO",
      id_estado: 29,
    },
    {
      id: 2933158,
      descricao: "VARZEA NOVA",
      id_estado: 29,
    },
    {
      id: 2933208,
      descricao: "VERA CRUZ",
      id_estado: 29,
    },
    {
      id: 2933174,
      descricao: "VARZEDO",
      id_estado: 29,
    },
    {
      id: 2933257,
      descricao: "VEREDA",
      id_estado: 29,
    },
    {
      id: 2933307,
      descricao: "VITORIA DA CONQUISTA",
      id_estado: 29,
    },
    {
      id: 2933406,
      descricao: "WAGNER",
      id_estado: 29,
    },
    {
      id: 2933455,
      descricao: "WANDERLEY",
      id_estado: 29,
    },
    {
      id: 2933505,
      descricao: "WENCESLAU GUIMARAES",
      id_estado: 29,
    },
    {
      id: 2933604,
      descricao: "XIQUEXIQUE",
      id_estado: 29,
    },
    {
      id: 2300101,
      descricao: "ABAIARA",
      id_estado: 23,
    },
    {
      id: 2300200,
      descricao: "ACARAU",
      id_estado: 23,
    },
    {
      id: 2300150,
      descricao: "ACARAPE",
      id_estado: 23,
    },
    {
      id: 2300309,
      descricao: "ACOPIARA",
      id_estado: 23,
    },
    {
      id: 2300408,
      descricao: "AIUABA",
      id_estado: 23,
    },
    {
      id: 2300507,
      descricao: "ALCANTARAS",
      id_estado: 23,
    },
    {
      id: 2300606,
      descricao: "ALTANEIRA",
      id_estado: 23,
    },
    {
      id: 2300705,
      descricao: "ALTO SANTO",
      id_estado: 23,
    },
    {
      id: 2300754,
      descricao: "AMONTADA",
      id_estado: 23,
    },
    {
      id: 2300804,
      descricao: "ANTONINA DO NORTE",
      id_estado: 23,
    },
    {
      id: 2300903,
      descricao: "APUIARES",
      id_estado: 23,
    },
    {
      id: 2301000,
      descricao: "AQUIRAZ",
      id_estado: 23,
    },
    {
      id: 2301109,
      descricao: "ARACATI",
      id_estado: 23,
    },
    {
      id: 2301208,
      descricao: "ARACOIABA",
      id_estado: 23,
    },
    {
      id: 2301257,
      descricao: "ARARENDA",
      id_estado: 23,
    },
    {
      id: 2301307,
      descricao: "ARARIPE",
      id_estado: 23,
    },
    {
      id: 2301604,
      descricao: "ASSARE",
      id_estado: 23,
    },
    {
      id: 2301505,
      descricao: "ARNEIROZ",
      id_estado: 23,
    },
    {
      id: 2301406,
      descricao: "ARATUBA",
      id_estado: 23,
    },
    {
      id: 2301703,
      descricao: "AURORA",
      id_estado: 23,
    },
    {
      id: 2301802,
      descricao: "BAIXIO",
      id_estado: 23,
    },
    {
      id: 2301851,
      descricao: "BANABUIU",
      id_estado: 23,
    },
    {
      id: 2301901,
      descricao: "BARBALHA",
      id_estado: 23,
    },
    {
      id: 2301950,
      descricao: "BARREIRA",
      id_estado: 23,
    },
    {
      id: 2302008,
      descricao: "BARRO",
      id_estado: 23,
    },
    {
      id: 2302057,
      descricao: "BARROQUINHA",
      id_estado: 23,
    },
    {
      id: 2302206,
      descricao: "BEBERIBE",
      id_estado: 23,
    },
    {
      id: 2302107,
      descricao: "BATURITE",
      id_estado: 23,
    },
    {
      id: 2302305,
      descricao: "BELA CRUZ",
      id_estado: 23,
    },
    {
      id: 2302404,
      descricao: "BOA VIAGEM",
      id_estado: 23,
    },
    {
      id: 2302503,
      descricao: "BREJO SANTO",
      id_estado: 23,
    },
    {
      id: 2302602,
      descricao: "CAMOCIM",
      id_estado: 23,
    },
    {
      id: 2302701,
      descricao: "CAMPOS SALES",
      id_estado: 23,
    },
    {
      id: 2302800,
      descricao: "CANINDE",
      id_estado: 23,
    },
    {
      id: 2303006,
      descricao: "CARIDADE",
      id_estado: 23,
    },
    {
      id: 2302909,
      descricao: "CAPISTRANO",
      id_estado: 23,
    },
    {
      id: 2303105,
      descricao: "CARIRE",
      id_estado: 23,
    },
    {
      id: 2303204,
      descricao: "CARIRIACU",
      id_estado: 23,
    },
    {
      id: 2303303,
      descricao: "CARIUS",
      id_estado: 23,
    },
    {
      id: 2303402,
      descricao: "CARNAUBAL",
      id_estado: 23,
    },
    {
      id: 2303501,
      descricao: "CASCAVEL",
      id_estado: 23,
    },
    {
      id: 2303659,
      descricao: "CATUNDA",
      id_estado: 23,
    },
    {
      id: 2303600,
      descricao: "CATARINA",
      id_estado: 23,
    },
    {
      id: 2303709,
      descricao: "CAUCAIA",
      id_estado: 23,
    },
    {
      id: 2303808,
      descricao: "CEDRO",
      id_estado: 23,
    },
    {
      id: 2303907,
      descricao: "CHAVAL",
      id_estado: 23,
    },
    {
      id: 2303931,
      descricao: "CHORO",
      id_estado: 23,
    },
    {
      id: 2303956,
      descricao: "CHOROZINHO",
      id_estado: 23,
    },
    {
      id: 2304004,
      descricao: "COREAU",
      id_estado: 23,
    },
    {
      id: 2304103,
      descricao: "CRATEUS",
      id_estado: 23,
    },
    {
      id: 2304202,
      descricao: "CRATO",
      id_estado: 23,
    },
    {
      id: 2304236,
      descricao: "CROATA",
      id_estado: 23,
    },
    {
      id: 2304251,
      descricao: "CRUZ",
      id_estado: 23,
    },
    {
      id: 2304269,
      descricao: "DEPUTADO IRAPUAN PINHEIRO",
      id_estado: 23,
    },
    {
      id: 2304277,
      descricao: "ERERE",
      id_estado: 23,
    },
    {
      id: 2304301,
      descricao: "FARIAS BRITO",
      id_estado: 23,
    },
    {
      id: 2304285,
      descricao: "EUSEBIO",
      id_estado: 23,
    },
    {
      id: 2304350,
      descricao: "FORQUILHA",
      id_estado: 23,
    },
    {
      id: 2304400,
      descricao: "FORTALEZA",
      id_estado: 23,
    },
    {
      id: 2304459,
      descricao: "FORTIM",
      id_estado: 23,
    },
    {
      id: 2304509,
      descricao: "FRECHEIRINHA",
      id_estado: 23,
    },
    {
      id: 2304608,
      descricao: "GENERAL SAMPAIO",
      id_estado: 23,
    },
    {
      id: 2304657,
      descricao: "GRACA",
      id_estado: 23,
    },
    {
      id: 2304707,
      descricao: "GRANJA",
      id_estado: 23,
    },
    {
      id: 2304905,
      descricao: "GROAIRAS",
      id_estado: 23,
    },
    {
      id: 2304806,
      descricao: "GRANJEIRO",
      id_estado: 23,
    },
    {
      id: 2304954,
      descricao: "GUAIUBA",
      id_estado: 23,
    },
    {
      id: 2305001,
      descricao: "GUARACIABA DO NORTE",
      id_estado: 23,
    },
    {
      id: 2305100,
      descricao: "GUARAMIRANGA",
      id_estado: 23,
    },
    {
      id: 2305209,
      descricao: "HIDROLANDIA",
      id_estado: 23,
    },
    {
      id: 2305233,
      descricao: "HORIZONTE",
      id_estado: 23,
    },
    {
      id: 2305266,
      descricao: "IBARETAMA",
      id_estado: 23,
    },
    {
      id: 2305308,
      descricao: "IBIAPINA",
      id_estado: 23,
    },
    {
      id: 2305332,
      descricao: "IBICUITINGA",
      id_estado: 23,
    },
    {
      id: 2305357,
      descricao: "ICAPUI",
      id_estado: 23,
    },
    {
      id: 2305407,
      descricao: "ICO",
      id_estado: 23,
    },
    {
      id: 2305506,
      descricao: "IGUATU",
      id_estado: 23,
    },
    {
      id: 2305605,
      descricao: "INDEPENDENCIA",
      id_estado: 23,
    },
    {
      id: 2305654,
      descricao: "IPAPORANGA",
      id_estado: 23,
    },
    {
      id: 2305704,
      descricao: "IPAUMIRIM",
      id_estado: 23,
    },
    {
      id: 2305803,
      descricao: "IPU",
      id_estado: 23,
    },
    {
      id: 2305902,
      descricao: "IPUEIRAS",
      id_estado: 23,
    },
    {
      id: 2306009,
      descricao: "IRACEMA",
      id_estado: 23,
    },
    {
      id: 2306108,
      descricao: "IRAUCUBA",
      id_estado: 23,
    },
    {
      id: 2306207,
      descricao: "ITAICABA",
      id_estado: 23,
    },
    {
      id: 2306256,
      descricao: "ITAITINGA",
      id_estado: 23,
    },
    {
      id: 2306306,
      descricao: "ITAPAGE",
      id_estado: 23,
    },
    {
      id: 2306405,
      descricao: "ITAPIPOCA",
      id_estado: 23,
    },
    {
      id: 2306504,
      descricao: "ITAPIUNA",
      id_estado: 23,
    },
    {
      id: 2306553,
      descricao: "ITAREMA",
      id_estado: 23,
    },
    {
      id: 2306603,
      descricao: "ITATIRA",
      id_estado: 23,
    },
    {
      id: 2306702,
      descricao: "JAGUARETAMA",
      id_estado: 23,
    },
    {
      id: 2306801,
      descricao: "JAGUARIBARA",
      id_estado: 23,
    },
    {
      id: 2306900,
      descricao: "JAGUARIBE",
      id_estado: 23,
    },
    {
      id: 2307007,
      descricao: "JAGUARUANA",
      id_estado: 23,
    },
    {
      id: 2307106,
      descricao: "JARDIM",
      id_estado: 23,
    },
    {
      id: 2307254,
      descricao: "JIJOCA DE JERICOACOARA",
      id_estado: 23,
    },
    {
      id: 2307205,
      descricao: "JATI",
      id_estado: 23,
    },
    {
      id: 2307403,
      descricao: "JUCAS",
      id_estado: 23,
    },
    {
      id: 2307304,
      descricao: "JUAZEIRO DO NORTE",
      id_estado: 23,
    },
    {
      id: 2307502,
      descricao: "LAVRAS DA MANGABEIRA",
      id_estado: 23,
    },
    {
      id: 2307635,
      descricao: "MADALENA",
      id_estado: 23,
    },
    {
      id: 2307601,
      descricao: "LIMOEIRO DO NORTE",
      id_estado: 23,
    },
    {
      id: 2307650,
      descricao: "MARACANAU",
      id_estado: 23,
    },
    {
      id: 2307700,
      descricao: "MARANGUAPE",
      id_estado: 23,
    },
    {
      id: 2307908,
      descricao: "MARTINOPOLE",
      id_estado: 23,
    },
    {
      id: 2307809,
      descricao: "MARCO",
      id_estado: 23,
    },
    {
      id: 2308005,
      descricao: "MASSAPE",
      id_estado: 23,
    },
    {
      id: 2308104,
      descricao: "MAURITI",
      id_estado: 23,
    },
    {
      id: 2308203,
      descricao: "MERUOCA",
      id_estado: 23,
    },
    {
      id: 2308302,
      descricao: "MILAGRES",
      id_estado: 23,
    },
    {
      id: 2308351,
      descricao: "MILHA",
      id_estado: 23,
    },
    {
      id: 2308401,
      descricao: "MISSAO VELHA",
      id_estado: 23,
    },
    {
      id: 2308377,
      descricao: "MIRAIMA",
      id_estado: 23,
    },
    {
      id: 2308500,
      descricao: "MOMBACA",
      id_estado: 23,
    },
    {
      id: 2308609,
      descricao: "MONSENHOR TABOSA",
      id_estado: 23,
    },
    {
      id: 2308708,
      descricao: "MORADA NOVA",
      id_estado: 23,
    },
    {
      id: 2308807,
      descricao: "MORAUJO",
      id_estado: 23,
    },
    {
      id: 2308906,
      descricao: "MORRINHOS",
      id_estado: 23,
    },
    {
      id: 2309003,
      descricao: "MUCAMBO",
      id_estado: 23,
    },
    {
      id: 2309201,
      descricao: "NOVA OLINDA",
      id_estado: 23,
    },
    {
      id: 2309102,
      descricao: "MULUNGU",
      id_estado: 23,
    },
    {
      id: 2309300,
      descricao: "NOVA RUSSAS",
      id_estado: 23,
    },
    {
      id: 2309409,
      descricao: "NOVO ORIENTE",
      id_estado: 23,
    },
    {
      id: 2309458,
      descricao: "OCARA",
      id_estado: 23,
    },
    {
      id: 2309508,
      descricao: "OROS",
      id_estado: 23,
    },
    {
      id: 2309706,
      descricao: "PACATUBA",
      id_estado: 23,
    },
    {
      id: 2309607,
      descricao: "PACAJUS",
      id_estado: 23,
    },
    {
      id: 2309805,
      descricao: "PACOTI",
      id_estado: 23,
    },
    {
      id: 2309904,
      descricao: "PACUJA",
      id_estado: 23,
    },
    {
      id: 2310001,
      descricao: "PALHANO",
      id_estado: 23,
    },
    {
      id: 2310100,
      descricao: "PALMACIA",
      id_estado: 23,
    },
    {
      id: 2310209,
      descricao: "PARACURU",
      id_estado: 23,
    },
    {
      id: 2310258,
      descricao: "PARAIPABA",
      id_estado: 23,
    },
    {
      id: 2310308,
      descricao: "PARAMBU",
      id_estado: 23,
    },
    {
      id: 2310506,
      descricao: "PEDRA BRANCA",
      id_estado: 23,
    },
    {
      id: 2310407,
      descricao: "PARAMOTI",
      id_estado: 23,
    },
    {
      id: 2310605,
      descricao: "PENAFORTE",
      id_estado: 23,
    },
    {
      id: 2310704,
      descricao: "PENTECOSTE",
      id_estado: 23,
    },
    {
      id: 2310803,
      descricao: "PEREIRO",
      id_estado: 23,
    },
    {
      id: 2310852,
      descricao: "PINDORETAMA",
      id_estado: 23,
    },
    {
      id: 2310951,
      descricao: "PIRES FERREIRA",
      id_estado: 23,
    },
    {
      id: 2310902,
      descricao: "PIQUET CARNEIRO",
      id_estado: 23,
    },
    {
      id: 2311009,
      descricao: "PORANGA",
      id_estado: 23,
    },
    {
      id: 2311207,
      descricao: "POTENGI",
      id_estado: 23,
    },
    {
      id: 2311108,
      descricao: "PORTEIRAS",
      id_estado: 23,
    },
    {
      id: 2311264,
      descricao: "QUITERIANOPOLIS",
      id_estado: 23,
    },
    {
      id: 2311231,
      descricao: "POTIRETAMA",
      id_estado: 23,
    },
    {
      id: 2311306,
      descricao: "QUIXADA",
      id_estado: 23,
    },
    {
      id: 2311405,
      descricao: "QUIXERAMOBIM",
      id_estado: 23,
    },
    {
      id: 2311355,
      descricao: "QUIXELO",
      id_estado: 23,
    },
    {
      id: 2311504,
      descricao: "QUIXERE",
      id_estado: 23,
    },
    {
      id: 2311603,
      descricao: "REDENCAO",
      id_estado: 23,
    },
    {
      id: 2311801,
      descricao: "RUSSAS",
      id_estado: 23,
    },
    {
      id: 2311702,
      descricao: "RERIUTABA",
      id_estado: 23,
    },
    {
      id: 2311900,
      descricao: "SABOEIRO",
      id_estado: 23,
    },
    {
      id: 2311959,
      descricao: "SALITRE",
      id_estado: 23,
    },
    {
      id: 2312007,
      descricao: "SANTANA DO ACARAU",
      id_estado: 23,
    },
    {
      id: 2312106,
      descricao: "SANTANA DO CARIRI",
      id_estado: 23,
    },
    {
      id: 2312205,
      descricao: "SANTA QUITERIA",
      id_estado: 23,
    },
    {
      id: 2312304,
      descricao: "SAO BENEDITO",
      id_estado: 23,
    },
    {
      id: 2312403,
      descricao: "SAO GONCALO DO AMARANTE",
      id_estado: 23,
    },
    {
      id: 2312502,
      descricao: "SAO JOAO DO JAGUARIBE",
      id_estado: 23,
    },
    {
      id: 2312601,
      descricao: "SAO LUIS DO CURU",
      id_estado: 23,
    },
    {
      id: 2312700,
      descricao: "SENADOR POMPEU",
      id_estado: 23,
    },
    {
      id: 2312809,
      descricao: "SENADOR SA",
      id_estado: 23,
    },
    {
      id: 2312908,
      descricao: "SOBRAL",
      id_estado: 23,
    },
    {
      id: 2313005,
      descricao: "SOLONOPOLE",
      id_estado: 23,
    },
    {
      id: 2313104,
      descricao: "TABULEIRO DO NORTE",
      id_estado: 23,
    },
    {
      id: 2313203,
      descricao: "TAMBORIL",
      id_estado: 23,
    },
    {
      id: 2313252,
      descricao: "TARRAFAS",
      id_estado: 23,
    },
    {
      id: 2313302,
      descricao: "TAUA",
      id_estado: 23,
    },
    {
      id: 2313401,
      descricao: "TIANGUA",
      id_estado: 23,
    },
    {
      id: 2313351,
      descricao: "TEJUCUOCA",
      id_estado: 23,
    },
    {
      id: 2313500,
      descricao: "TRAIRI",
      id_estado: 23,
    },
    {
      id: 2313559,
      descricao: "TURURU",
      id_estado: 23,
    },
    {
      id: 2313609,
      descricao: "UBAJARA",
      id_estado: 23,
    },
    {
      id: 2313708,
      descricao: "UMARI",
      id_estado: 23,
    },
    {
      id: 2313757,
      descricao: "UMIRIM",
      id_estado: 23,
    },
    {
      id: 2313807,
      descricao: "URUBURETAMA",
      id_estado: 23,
    },
    {
      id: 2313906,
      descricao: "URUOCA",
      id_estado: 23,
    },
    {
      id: 2314003,
      descricao: "VARZEA ALEGRE",
      id_estado: 23,
    },
    {
      id: 2313955,
      descricao: "VARJOTA",
      id_estado: 23,
    },
    {
      id: 2314102,
      descricao: "VICOSA DO CEARA",
      id_estado: 23,
    },
    {
      id: 3200102,
      descricao: "AFONSO CLAUDIO",
      id_estado: 32,
    },
    {
      id: 3200136,
      descricao: "AGUIA BRANCA",
      id_estado: 32,
    },
    {
      id: 3200169,
      descricao: "AGUA DOCE DO NORTE",
      id_estado: 32,
    },
    {
      id: 3200201,
      descricao: "ALEGRE",
      id_estado: 32,
    },
    {
      id: 3200300,
      descricao: "ALFREDO CHAVES",
      id_estado: 32,
    },
    {
      id: 3200359,
      descricao: "ALTO RIO NOVO",
      id_estado: 32,
    },
    {
      id: 3200409,
      descricao: "ANCHIETA",
      id_estado: 32,
    },
    {
      id: 3200508,
      descricao: "APIACA",
      id_estado: 32,
    },
    {
      id: 3200607,
      descricao: "ARACRUZ",
      id_estado: 32,
    },
    {
      id: 3200706,
      descricao: "ATILIO VIVACQUA",
      id_estado: 32,
    },
    {
      id: 3200805,
      descricao: "BAIXO GUANDU",
      id_estado: 32,
    },
    {
      id: 3200904,
      descricao: "BARRA DE SAO FRANCISCO",
      id_estado: 32,
    },
    {
      id: 3201001,
      descricao: "BOA ESPERANCA",
      id_estado: 32,
    },
    {
      id: 3201159,
      descricao: "BREJETUBA",
      id_estado: 32,
    },
    {
      id: 3201100,
      descricao: "BOM JESUS DO NORTE",
      id_estado: 32,
    },
    {
      id: 3201209,
      descricao: "CACHOEIRO DE ITAPEMIRIM",
      id_estado: 32,
    },
    {
      id: 3201308,
      descricao: "CARIACICA",
      id_estado: 32,
    },
    {
      id: 3201407,
      descricao: "CASTELO",
      id_estado: 32,
    },
    {
      id: 3201506,
      descricao: "COLATINA",
      id_estado: 32,
    },
    {
      id: 3201605,
      descricao: "CONCEICAO DA BARRA",
      id_estado: 32,
    },
    {
      id: 3201803,
      descricao: "DIVINO DE SAO LOURENCO",
      id_estado: 32,
    },
    {
      id: 3201704,
      descricao: "CONCEICAO DO CASTELO",
      id_estado: 32,
    },
    {
      id: 3201902,
      descricao: "DOMINGOS MARTINS",
      id_estado: 32,
    },
    {
      id: 3202009,
      descricao: "DORES DO RIO PRETO",
      id_estado: 32,
    },
    {
      id: 3202108,
      descricao: "ECOPORANGA",
      id_estado: 32,
    },
    {
      id: 3202207,
      descricao: "FUNDAO",
      id_estado: 32,
    },
    {
      id: 3202256,
      descricao: "GOVERNADOR LINDENBERG",
      id_estado: 32,
    },
    {
      id: 3202306,
      descricao: "GUACUI",
      id_estado: 32,
    },
    {
      id: 3202405,
      descricao: "GUARAPARI",
      id_estado: 32,
    },
    {
      id: 3202504,
      descricao: "IBIRACU",
      id_estado: 32,
    },
    {
      id: 3202454,
      descricao: "IBATIBA",
      id_estado: 32,
    },
    {
      id: 3202603,
      descricao: "ICONHA",
      id_estado: 32,
    },
    {
      id: 3202553,
      descricao: "IBITIRAMA",
      id_estado: 32,
    },
    {
      id: 3202652,
      descricao: "IRUPI",
      id_estado: 32,
    },
    {
      id: 3202702,
      descricao: "ITAGUACU",
      id_estado: 32,
    },
    {
      id: 3202801,
      descricao: "ITAPEMIRIM",
      id_estado: 32,
    },
    {
      id: 3203007,
      descricao: "IUNA",
      id_estado: 32,
    },
    {
      id: 3202900,
      descricao: "ITARANA",
      id_estado: 32,
    },
    {
      id: 3203056,
      descricao: "JAGUARE",
      id_estado: 32,
    },
    {
      id: 3203106,
      descricao: "JERONIMO MONTEIRO",
      id_estado: 32,
    },
    {
      id: 3203130,
      descricao: "JOAO NEIVA",
      id_estado: 32,
    },
    {
      id: 3203163,
      descricao: "LARANJA DA TERRA",
      id_estado: 32,
    },
    {
      id: 3203205,
      descricao: "LINHARES",
      id_estado: 32,
    },
    {
      id: 3203304,
      descricao: "MANTENOPOLIS",
      id_estado: 32,
    },
    {
      id: 3203320,
      descricao: "MARATAIZES",
      id_estado: 32,
    },
    {
      id: 3203346,
      descricao: "MARECHAL FLORIANO",
      id_estado: 32,
    },
    {
      id: 3203353,
      descricao: "MARILANDIA",
      id_estado: 32,
    },
    {
      id: 3203403,
      descricao: "MIMOSO DO SUL",
      id_estado: 32,
    },
    {
      id: 3203601,
      descricao: "MUCURICI",
      id_estado: 32,
    },
    {
      id: 3203502,
      descricao: "MONTANHA",
      id_estado: 32,
    },
    {
      id: 3203700,
      descricao: "MUNIZ FREIRE",
      id_estado: 32,
    },
    {
      id: 3203809,
      descricao: "MUQUI",
      id_estado: 32,
    },
    {
      id: 3203908,
      descricao: "NOVA VENECIA",
      id_estado: 32,
    },
    {
      id: 3204054,
      descricao: "PEDRO CANARIO",
      id_estado: 32,
    },
    {
      id: 3204005,
      descricao: "PANCAS",
      id_estado: 32,
    },
    {
      id: 3204203,
      descricao: "PIUMA",
      id_estado: 32,
    },
    {
      id: 3204104,
      descricao: "PINHEIROS",
      id_estado: 32,
    },
    {
      id: 3204252,
      descricao: "PONTO BELO",
      id_estado: 32,
    },
    {
      id: 3204302,
      descricao: "PRESIDENTE KENNEDY",
      id_estado: 32,
    },
    {
      id: 3204351,
      descricao: "RIO BANANAL",
      id_estado: 32,
    },
    {
      id: 3204401,
      descricao: "RIO NOVO DO SUL",
      id_estado: 32,
    },
    {
      id: 3204559,
      descricao: "SANTA MARIA DE JETIBA",
      id_estado: 32,
    },
    {
      id: 3204500,
      descricao: "SANTA LEOPOLDINA",
      id_estado: 32,
    },
    {
      id: 3204609,
      descricao: "SANTA TERESA",
      id_estado: 32,
    },
    {
      id: 3204708,
      descricao: "SAO GABRIEL DA PALHA",
      id_estado: 32,
    },
    {
      id: 3204658,
      descricao: "SAO DOMINGOS DO NORTE",
      id_estado: 32,
    },
    {
      id: 3204807,
      descricao: "SAO JOSE DO CALCADO",
      id_estado: 32,
    },
    {
      id: 3204906,
      descricao: "SAO MATEUS",
      id_estado: 32,
    },
    {
      id: 3204955,
      descricao: "SAO ROQUE DO CANAA",
      id_estado: 32,
    },
    {
      id: 3205002,
      descricao: "SERRA",
      id_estado: 32,
    },
    {
      id: 3205036,
      descricao: "VARGEM ALTA",
      id_estado: 32,
    },
    {
      id: 3205010,
      descricao: "SOORETAMA",
      id_estado: 32,
    },
    {
      id: 3205069,
      descricao: "VENDA NOVA DO IMIGRANTE",
      id_estado: 32,
    },
    {
      id: 3205101,
      descricao: "VIANA",
      id_estado: 32,
    },
    {
      id: 3205150,
      descricao: "VILA PAVAO",
      id_estado: 32,
    },
    {
      id: 3205200,
      descricao: "VILA VELHA",
      id_estado: 32,
    },
    {
      id: 3205176,
      descricao: "VILA VALERIO",
      id_estado: 32,
    },
    {
      id: 3205309,
      descricao: "VITORIA",
      id_estado: 32,
    },
    {
      id: 5200100,
      descricao: "ABADIANIA",
      id_estado: 52,
    },
    {
      id: 5200050,
      descricao: "ABADIA DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5200134,
      descricao: "ACREUNA",
      id_estado: 52,
    },
    {
      id: 5200159,
      descricao: "ADELANDIA",
      id_estado: 52,
    },
    {
      id: 5200175,
      descricao: "AGUA FRIA DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5200209,
      descricao: "AGUA LIMPA",
      id_estado: 52,
    },
    {
      id: 5200506,
      descricao: "ALOANDIA",
      id_estado: 52,
    },
    {
      id: 5200308,
      descricao: "ALEXANIA",
      id_estado: 52,
    },
    {
      id: 5200258,
      descricao: "AGUAS LINDAS DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5200803,
      descricao: "ALVORADA DO NORTE",
      id_estado: 52,
    },
    {
      id: 5200605,
      descricao: "ALTO PARAISO DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5200555,
      descricao: "ALTO HORIZONTE",
      id_estado: 52,
    },
    {
      id: 5200852,
      descricao: "AMERICANO DO BRASIL",
      id_estado: 52,
    },
    {
      id: 5200829,
      descricao: "AMARALINA",
      id_estado: 52,
    },
    {
      id: 5200902,
      descricao: "AMORINOPOLIS",
      id_estado: 52,
    },
    {
      id: 5201108,
      descricao: "ANAPOLIS",
      id_estado: 52,
    },
    {
      id: 5201306,
      descricao: "ANICUNS",
      id_estado: 52,
    },
    {
      id: 5201207,
      descricao: "ANHANGUERA",
      id_estado: 52,
    },
    {
      id: 5201405,
      descricao: "APARECIDA DE GOIANIA",
      id_estado: 52,
    },
    {
      id: 5201454,
      descricao: "APARECIDA DO RIO DOCE",
      id_estado: 52,
    },
    {
      id: 5201504,
      descricao: "APORE",
      id_estado: 52,
    },
    {
      id: 5201603,
      descricao: "ARACU",
      id_estado: 52,
    },
    {
      id: 5202155,
      descricao: "ARAGUAPAZ",
      id_estado: 52,
    },
    {
      id: 5201801,
      descricao: "ARAGOIANIA",
      id_estado: 52,
    },
    {
      id: 5201702,
      descricao: "ARAGARCAS",
      id_estado: 52,
    },
    {
      id: 5202353,
      descricao: "ARENOPOLIS",
      id_estado: 52,
    },
    {
      id: 5202601,
      descricao: "AURILANDIA",
      id_estado: 52,
    },
    {
      id: 5202502,
      descricao: "ARUANA",
      id_estado: 52,
    },
    {
      id: 5203104,
      descricao: "BALIZA",
      id_estado: 52,
    },
    {
      id: 5202809,
      descricao: "AVELINOPOLIS",
      id_estado: 52,
    },
    {
      id: 5203203,
      descricao: "BARRO ALTO",
      id_estado: 52,
    },
    {
      id: 5203302,
      descricao: "BELA VISTA DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5203559,
      descricao: "BONFINOPOLIS",
      id_estado: 52,
    },
    {
      id: 5203500,
      descricao: "BOM JESUS DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5203401,
      descricao: "BOM JARDIM DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5203609,
      descricao: "BRAZABRANTES",
      id_estado: 52,
    },
    {
      id: 5203575,
      descricao: "BONOPOLIS",
      id_estado: 52,
    },
    {
      id: 5203807,
      descricao: "BRITANIA",
      id_estado: 52,
    },
    {
      id: 5203962,
      descricao: "BURITINOPOLIS",
      id_estado: 52,
    },
    {
      id: 5203939,
      descricao: "BURITI DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5203906,
      descricao: "BURITI ALEGRE",
      id_estado: 52,
    },
    {
      id: 5204003,
      descricao: "CABECEIRAS",
      id_estado: 52,
    },
    {
      id: 5204102,
      descricao: "CACHOEIRA ALTA",
      id_estado: 52,
    },
    {
      id: 5204201,
      descricao: "CACHOEIRA DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5204300,
      descricao: "CACU",
      id_estado: 52,
    },
    {
      id: 5204250,
      descricao: "CACHOEIRA DOURADA",
      id_estado: 52,
    },
    {
      id: 5204409,
      descricao: "CAIAPONIA",
      id_estado: 52,
    },
    {
      id: 5204557,
      descricao: "CALDAZINHA",
      id_estado: 52,
    },
    {
      id: 5204508,
      descricao: "CALDAS NOVAS",
      id_estado: 52,
    },
    {
      id: 5204607,
      descricao: "CAMPESTRE DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5204706,
      descricao: "CAMPINORTE",
      id_estado: 52,
    },
    {
      id: 5204656,
      descricao: "CAMPINACU",
      id_estado: 52,
    },
    {
      id: 5204854,
      descricao: "CAMPO LIMPO DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5204805,
      descricao: "CAMPO ALEGRE DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5205000,
      descricao: "CARMO DO RIO VERDE",
      id_estado: 52,
    },
    {
      id: 5204953,
      descricao: "CAMPOS VERDES",
      id_estado: 52,
    },
    {
      id: 5204904,
      descricao: "CAMPOS BELOS",
      id_estado: 52,
    },
    {
      id: 5205059,
      descricao: "CASTELANDIA",
      id_estado: 52,
    },
    {
      id: 5205109,
      descricao: "CATALAO",
      id_estado: 52,
    },
    {
      id: 5205307,
      descricao: "CAVALCANTE",
      id_estado: 52,
    },
    {
      id: 5205208,
      descricao: "CATURAI",
      id_estado: 52,
    },
    {
      id: 5205406,
      descricao: "CERES",
      id_estado: 52,
    },
    {
      id: 5205497,
      descricao: "CIDADE OCIDENTAL",
      id_estado: 52,
    },
    {
      id: 5205455,
      descricao: "CEZARINA",
      id_estado: 52,
    },
    {
      id: 5205471,
      descricao: "CHAPADAO DO CEU",
      id_estado: 52,
    },
    {
      id: 5205521,
      descricao: "COLINAS DO SUL",
      id_estado: 52,
    },
    {
      id: 5205513,
      descricao: "COCALZINHO DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5205901,
      descricao: "CORUMBAIBA",
      id_estado: 52,
    },
    {
      id: 5205703,
      descricao: "CORREGO DO OURO",
      id_estado: 52,
    },
    {
      id: 5206206,
      descricao: "CRISTALINA",
      id_estado: 52,
    },
    {
      id: 5205802,
      descricao: "CORUMBA DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5206404,
      descricao: "CRIXAS",
      id_estado: 52,
    },
    {
      id: 5206305,
      descricao: "CRISTIANOPOLIS",
      id_estado: 52,
    },
    {
      id: 5206503,
      descricao: "CROMINIA",
      id_estado: 52,
    },
    {
      id: 5206701,
      descricao: "DAMIANOPOLIS",
      id_estado: 52,
    },
    {
      id: 5206602,
      descricao: "CUMARI",
      id_estado: 52,
    },
    {
      id: 5207105,
      descricao: "DIORAMA",
      id_estado: 52,
    },
    {
      id: 5206909,
      descricao: "DAVINOPOLIS",
      id_estado: 52,
    },
    {
      id: 5206800,
      descricao: "DAMOLANDIA",
      id_estado: 52,
    },
    {
      id: 5207253,
      descricao: "DOVERLANDIA",
      id_estado: 52,
    },
    {
      id: 5207352,
      descricao: "EDEALINA",
      id_estado: 52,
    },
    {
      id: 5207402,
      descricao: "EDEIA",
      id_estado: 52,
    },
    {
      id: 5207535,
      descricao: "FAINA",
      id_estado: 52,
    },
    {
      id: 5207501,
      descricao: "ESTRELA DO NORTE",
      id_estado: 52,
    },
    {
      id: 5207600,
      descricao: "FAZENDA NOVA",
      id_estado: 52,
    },
    {
      id: 5207808,
      descricao: "FIRMINOPOLIS",
      id_estado: 52,
    },
    {
      id: 5208103,
      descricao: "FORMOSO",
      id_estado: 52,
    },
    {
      id: 5208004,
      descricao: "FORMOSA",
      id_estado: 52,
    },
    {
      id: 5207907,
      descricao: "FLORES DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5208301,
      descricao: "DIVINOPOLIS DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5208152,
      descricao: "GAMELEIRA DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5208400,
      descricao: "GOIANAPOLIS",
      id_estado: 52,
    },
    {
      id: 5208608,
      descricao: "GOIANESIA",
      id_estado: 52,
    },
    {
      id: 5208509,
      descricao: "GOIANDIRA",
      id_estado: 52,
    },
    {
      id: 5208707,
      descricao: "GOIANIA",
      id_estado: 52,
    },
    {
      id: 5208806,
      descricao: "GOIANIRA",
      id_estado: 52,
    },
    {
      id: 5208905,
      descricao: "GOIAS",
      id_estado: 52,
    },
    {
      id: 5209101,
      descricao: "GOIATUBA",
      id_estado: 52,
    },
    {
      id: 5209150,
      descricao: "GOUVELANDIA",
      id_estado: 52,
    },
    {
      id: 5209408,
      descricao: "GUARANI DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5209291,
      descricao: "GUARAITA",
      id_estado: 52,
    },
    {
      id: 5209200,
      descricao: "GUAPO",
      id_estado: 52,
    },
    {
      id: 5209804,
      descricao: "HIDROLINA",
      id_estado: 52,
    },
    {
      id: 5209457,
      descricao: "GUARINOS",
      id_estado: 52,
    },
    {
      id: 5209705,
      descricao: "HIDROLANDIA",
      id_estado: 52,
    },
    {
      id: 5209606,
      descricao: "HEITORAI",
      id_estado: 52,
    },
    {
      id: 5209903,
      descricao: "IACIARA",
      id_estado: 52,
    },
    {
      id: 5209937,
      descricao: "INACIOLANDIA",
      id_estado: 52,
    },
    {
      id: 5210109,
      descricao: "IPAMERI",
      id_estado: 52,
    },
    {
      id: 5210000,
      descricao: "INHUMAS",
      id_estado: 52,
    },
    {
      id: 5209952,
      descricao: "INDIARA",
      id_estado: 52,
    },
    {
      id: 5210158,
      descricao: "IPIRANGA DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5210208,
      descricao: "IPORA",
      id_estado: 52,
    },
    {
      id: 5210307,
      descricao: "ISRAELANDIA",
      id_estado: 52,
    },
    {
      id: 5210406,
      descricao: "ITABERAI",
      id_estado: 52,
    },
    {
      id: 5210562,
      descricao: "ITAGUARI",
      id_estado: 52,
    },
    {
      id: 5210901,
      descricao: "ITAPACI",
      id_estado: 52,
    },
    {
      id: 5210604,
      descricao: "ITAGUARU",
      id_estado: 52,
    },
    {
      id: 5210802,
      descricao: "ITAJA",
      id_estado: 52,
    },
    {
      id: 5211206,
      descricao: "ITAPURANGA",
      id_estado: 52,
    },
    {
      id: 5211008,
      descricao: "ITAPIRAPUA",
      id_estado: 52,
    },
    {
      id: 5211305,
      descricao: "ITARUMA",
      id_estado: 52,
    },
    {
      id: 5211602,
      descricao: "IVOLANDIA",
      id_estado: 52,
    },
    {
      id: 5211503,
      descricao: "ITUMBIARA",
      id_estado: 52,
    },
    {
      id: 5211404,
      descricao: "ITAUCU",
      id_estado: 52,
    },
    {
      id: 5211800,
      descricao: "JARAGUA",
      id_estado: 52,
    },
    {
      id: 5211909,
      descricao: "JATAI",
      id_estado: 52,
    },
    {
      id: 5211701,
      descricao: "JANDAIA",
      id_estado: 52,
    },
    {
      id: 5212006,
      descricao: "JAUPACI",
      id_estado: 52,
    },
    {
      id: 5212105,
      descricao: "JOVIANIA",
      id_estado: 52,
    },
    {
      id: 5212055,
      descricao: "JESUPOLIS",
      id_estado: 52,
    },
    {
      id: 5212204,
      descricao: "JUSSARA",
      id_estado: 52,
    },
    {
      id: 5212303,
      descricao: "LEOPOLDO DE BULHOES",
      id_estado: 52,
    },
    {
      id: 5212253,
      descricao: "LAGOA SANTA",
      id_estado: 52,
    },
    {
      id: 5212600,
      descricao: "MAIRIPOTABA",
      id_estado: 52,
    },
    {
      id: 5212501,
      descricao: "LUZIANIA",
      id_estado: 52,
    },
    {
      id: 5212709,
      descricao: "MAMBAI",
      id_estado: 52,
    },
    {
      id: 5212907,
      descricao: "MARZAGAO",
      id_estado: 52,
    },
    {
      id: 5212956,
      descricao: "MATRINCHA",
      id_estado: 52,
    },
    {
      id: 5212808,
      descricao: "MARA ROSA",
      id_estado: 52,
    },
    {
      id: 5213053,
      descricao: "MIMOSO DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5213004,
      descricao: "MAURILANDIA",
      id_estado: 52,
    },
    {
      id: 5213103,
      descricao: "MINEIROS",
      id_estado: 52,
    },
    {
      id: 5213087,
      descricao: "MINACU",
      id_estado: 52,
    },
    {
      id: 5213400,
      descricao: "MOIPORA",
      id_estado: 52,
    },
    {
      id: 5213509,
      descricao: "MONTE ALEGRE DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5213707,
      descricao: "MONTES CLAROS DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5213772,
      descricao: "MONTIVIDIU DO NORTE",
      id_estado: 52,
    },
    {
      id: 5213756,
      descricao: "MONTIVIDIU",
      id_estado: 52,
    },
    {
      id: 5213905,
      descricao: "MOSSAMEDES",
      id_estado: 52,
    },
    {
      id: 5213855,
      descricao: "MORRO AGUDO DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5213806,
      descricao: "MORRINHOS",
      id_estado: 52,
    },
    {
      id: 5214002,
      descricao: "MOZARLANDIA",
      id_estado: 52,
    },
    {
      id: 5214051,
      descricao: "MUNDO NOVO",
      id_estado: 52,
    },
    {
      id: 5214101,
      descricao: "MUTUNOPOLIS",
      id_estado: 52,
    },
    {
      id: 5214606,
      descricao: "NIQUELANDIA",
      id_estado: 52,
    },
    {
      id: 5214507,
      descricao: "NEROPOLIS",
      id_estado: 52,
    },
    {
      id: 5214408,
      descricao: "NAZARIO",
      id_estado: 52,
    },
    {
      id: 5214804,
      descricao: "NOVA AURORA",
      id_estado: 52,
    },
    {
      id: 5214705,
      descricao: "NOVA AMERICA",
      id_estado: 52,
    },
    {
      id: 5214838,
      descricao: "NOVA CRIXAS",
      id_estado: 52,
    },
    {
      id: 5214861,
      descricao: "NOVA GLORIA",
      id_estado: 52,
    },
    {
      id: 5215009,
      descricao: "NOVA VENEZA",
      id_estado: 52,
    },
    {
      id: 5214903,
      descricao: "NOVA ROMA",
      id_estado: 52,
    },
    {
      id: 5214879,
      descricao: "NOVA IGUACU DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5215207,
      descricao: "NOVO BRASIL",
      id_estado: 52,
    },
    {
      id: 5215256,
      descricao: "NOVO PLANALTO",
      id_estado: 52,
    },
    {
      id: 5215231,
      descricao: "NOVO GAMA",
      id_estado: 52,
    },
    {
      id: 5215306,
      descricao: "ORIZONA",
      id_estado: 52,
    },
    {
      id: 5215405,
      descricao: "OURO VERDE DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5215504,
      descricao: "OUVIDOR",
      id_estado: 52,
    },
    {
      id: 5215702,
      descricao: "PALMEIRAS DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5215652,
      descricao: "PALESTINA DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5215603,
      descricao: "PADRE BERNARDO",
      id_estado: 52,
    },
    {
      id: 5216007,
      descricao: "PANAMA",
      id_estado: 52,
    },
    {
      id: 5215900,
      descricao: "PALMINOPOLIS",
      id_estado: 52,
    },
    {
      id: 5215801,
      descricao: "PALMELO",
      id_estado: 52,
    },
    {
      id: 5216304,
      descricao: "PARANAIGUARA",
      id_estado: 52,
    },
    {
      id: 5216452,
      descricao: "PEROLANDIA",
      id_estado: 52,
    },
    {
      id: 5216403,
      descricao: "PARAUNA",
      id_estado: 52,
    },
    {
      id: 5217104,
      descricao: "PIRACANJUBA",
      id_estado: 52,
    },
    {
      id: 5216908,
      descricao: "PILAR DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5216809,
      descricao: "PETROLINA DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5217302,
      descricao: "PIRENOPOLIS",
      id_estado: 52,
    },
    {
      id: 5217203,
      descricao: "PIRANHAS",
      id_estado: 52,
    },
    {
      id: 5217401,
      descricao: "PIRES DO RIO",
      id_estado: 52,
    },
    {
      id: 5218003,
      descricao: "PORANGATU",
      id_estado: 52,
    },
    {
      id: 5217708,
      descricao: "PONTALINA",
      id_estado: 52,
    },
    {
      id: 5217609,
      descricao: "PLANALTINA",
      id_estado: 52,
    },
    {
      id: 5218102,
      descricao: "PORTELANDIA",
      id_estado: 52,
    },
    {
      id: 5218052,
      descricao: "PORTEIRAO",
      id_estado: 52,
    },
    {
      id: 5218300,
      descricao: "POSSE",
      id_estado: 52,
    },
    {
      id: 5218391,
      descricao: "PROFESSOR JAMIL",
      id_estado: 52,
    },
    {
      id: 5218607,
      descricao: "RIALMA",
      id_estado: 52,
    },
    {
      id: 5218508,
      descricao: "QUIRINOPOLIS",
      id_estado: 52,
    },
    {
      id: 5218789,
      descricao: "RIO QUENTE",
      id_estado: 52,
    },
    {
      id: 5218706,
      descricao: "RIANAPOLIS",
      id_estado: 52,
    },
    {
      id: 5218805,
      descricao: "RIO VERDE",
      id_estado: 52,
    },
    {
      id: 5218904,
      descricao: "RUBIATABA",
      id_estado: 52,
    },
    {
      id: 5219001,
      descricao: "SANCLERLANDIA",
      id_estado: 52,
    },
    {
      id: 5219100,
      descricao: "SANTA BARBARA DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5219308,
      descricao: "SANTA HELENA DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5219258,
      descricao: "SANTA FE DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5219209,
      descricao: "SANTA CRUZ DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5219407,
      descricao: "SANTA RITA DO ARAGUAIA",
      id_estado: 52,
    },
    {
      id: 5219357,
      descricao: "SANTA ISABEL",
      id_estado: 52,
    },
    {
      id: 5219456,
      descricao: "SANTA RITA DO NOVO DESTINO",
      id_estado: 52,
    },
    {
      id: 5219506,
      descricao: "SANTA ROSA DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5219605,
      descricao: "SANTA TEREZA DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5219712,
      descricao: "SANTO ANTONIO DA BARRA",
      id_estado: 52,
    },
    {
      id: 5219704,
      descricao: "SANTA TEREZINHA DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5219753,
      descricao: "SANTO ANTONIO DO DESCOBERTO",
      id_estado: 52,
    },
    {
      id: 5219738,
      descricao: "SANTO ANTONIO DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5219803,
      descricao: "SAO DOMINGOS",
      id_estado: 52,
    },
    {
      id: 5220009,
      descricao: "SAO JOAO DALIANCA",
      id_estado: 52,
    },
    {
      id: 5219902,
      descricao: "SAO FRANCISCO DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5220058,
      descricao: "SAO JOAO DA PARAUNA",
      id_estado: 52,
    },
    {
      id: 5220108,
      descricao: "SAO LUIS DE MONTES BELOS",
      id_estado: 52,
    },
    {
      id: 5220264,
      descricao: "SAO MIGUEL DO PASSA QUATRO",
      id_estado: 52,
    },
    {
      id: 5220207,
      descricao: "SAO MIGUEL DO ARAGUAIA",
      id_estado: 52,
    },
    {
      id: 5220157,
      descricao: "SAO LUIZ DO NORTE",
      id_estado: 52,
    },
    {
      id: 5220405,
      descricao: "SAO SIMAO",
      id_estado: 52,
    },
    {
      id: 5220280,
      descricao: "SAO PATRICIO",
      id_estado: 52,
    },
    {
      id: 5220454,
      descricao: "SENADOR CANEDO",
      id_estado: 52,
    },
    {
      id: 5220504,
      descricao: "SERRANOPOLIS",
      id_estado: 52,
    },
    {
      id: 5220686,
      descricao: "SIMOLANDIA",
      id_estado: 52,
    },
    {
      id: 5220603,
      descricao: "SILVANIA",
      id_estado: 52,
    },
    {
      id: 5221080,
      descricao: "TERESINA DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5221007,
      descricao: "TAQUARAL DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5220702,
      descricao: "SITIO DABADIA",
      id_estado: 52,
    },
    {
      id: 5221197,
      descricao: "TEREZOPOLIS DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5221403,
      descricao: "TRINDADE",
      id_estado: 52,
    },
    {
      id: 5221304,
      descricao: "TRES RANCHOS",
      id_estado: 52,
    },
    {
      id: 5221551,
      descricao: "TURVELANDIA",
      id_estado: 52,
    },
    {
      id: 5221502,
      descricao: "TURVANIA",
      id_estado: 52,
    },
    {
      id: 5221452,
      descricao: "TROMBAS",
      id_estado: 52,
    },
    {
      id: 5221577,
      descricao: "UIRAPURU",
      id_estado: 52,
    },
    {
      id: 5221601,
      descricao: "URUACU",
      id_estado: 52,
    },
    {
      id: 5221809,
      descricao: "URUTAI",
      id_estado: 52,
    },
    {
      id: 5221700,
      descricao: "URUANA",
      id_estado: 52,
    },
    {
      id: 5221858,
      descricao: "VALPARAISO DE GOIAS",
      id_estado: 52,
    },
    {
      id: 5222005,
      descricao: "VIANOPOLIS",
      id_estado: 52,
    },
    {
      id: 5221908,
      descricao: "VARJAO",
      id_estado: 52,
    },
    {
      id: 5222203,
      descricao: "VILA BOA",
      id_estado: 52,
    },
    {
      id: 5222054,
      descricao: "VICENTINOPOLIS",
      id_estado: 52,
    },
    {
      id: 2100105,
      descricao: "AFONSO CUNHA",
      id_estado: 21,
    },
    {
      id: 2100055,
      descricao: "ACAILANDIA",
      id_estado: 21,
    },
    {
      id: 5222302,
      descricao: "VILA PROPICIO",
      id_estado: 52,
    },
    {
      id: 2100154,
      descricao: "AGUA DOCE DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2100303,
      descricao: "ALDEIAS ALTAS",
      id_estado: 21,
    },
    {
      id: 2100204,
      descricao: "ALCANTARA",
      id_estado: 21,
    },
    {
      id: 2100402,
      descricao: "ALTAMIRA DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2100477,
      descricao: "ALTO ALEGRE DO PINDARE",
      id_estado: 21,
    },
    {
      id: 2100436,
      descricao: "ALTO ALEGRE DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2100501,
      descricao: "ALTO PARNAIBA",
      id_estado: 21,
    },
    {
      id: 2100600,
      descricao: "AMARANTE DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2100550,
      descricao: "AMAPA DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2100808,
      descricao: "ANAPURUS",
      id_estado: 21,
    },
    {
      id: 2100709,
      descricao: "ANAJATUBA",
      id_estado: 21,
    },
    {
      id: 2100832,
      descricao: "APICUMACU",
      id_estado: 21,
    },
    {
      id: 2100956,
      descricao: "ARAME",
      id_estado: 21,
    },
    {
      id: 2100907,
      descricao: "ARAIOSES",
      id_estado: 21,
    },
    {
      id: 2100873,
      descricao: "ARAGUANA",
      id_estado: 21,
    },
    {
      id: 2101004,
      descricao: "ARARI",
      id_estado: 21,
    },
    {
      id: 2101103,
      descricao: "AXIXA",
      id_estado: 21,
    },
    {
      id: 2101301,
      descricao: "BACURI",
      id_estado: 21,
    },
    {
      id: 2101251,
      descricao: "BACABEIRA",
      id_estado: 21,
    },
    {
      id: 2101202,
      descricao: "BACABAL",
      id_estado: 21,
    },
    {
      id: 2101400,
      descricao: "BALSAS",
      id_estado: 21,
    },
    {
      id: 2101350,
      descricao: "BACURITUBA",
      id_estado: 21,
    },
    {
      id: 2101509,
      descricao: "BARAO DE GRAJAU",
      id_estado: 21,
    },
    {
      id: 2101608,
      descricao: "BARRA DO CORDA",
      id_estado: 21,
    },
    {
      id: 2101707,
      descricao: "BARREIRINHAS",
      id_estado: 21,
    },
    {
      id: 2101731,
      descricao: "BELAGUA",
      id_estado: 21,
    },
    {
      id: 2101905,
      descricao: "BEQUIMAO",
      id_estado: 21,
    },
    {
      id: 2101806,
      descricao: "BENEDITO LEITE",
      id_estado: 21,
    },
    {
      id: 2101772,
      descricao: "BELA VISTA DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2101939,
      descricao: "BERNARDO DO MEARIM",
      id_estado: 21,
    },
    {
      id: 2102002,
      descricao: "BOM JARDIM",
      id_estado: 21,
    },
    {
      id: 2101970,
      descricao: "BOA VISTA DO GURUPI",
      id_estado: 21,
    },
    {
      id: 2102036,
      descricao: "BOM JESUS DAS SELVAS",
      id_estado: 21,
    },
    {
      id: 2102101,
      descricao: "BREJO",
      id_estado: 21,
    },
    {
      id: 2102077,
      descricao: "BOM LUGAR",
      id_estado: 21,
    },
    {
      id: 2102150,
      descricao: "BREJO DE AREIA",
      id_estado: 21,
    },
    {
      id: 2102309,
      descricao: "BURITI BRAVO",
      id_estado: 21,
    },
    {
      id: 2102200,
      descricao: "BURITI",
      id_estado: 21,
    },
    {
      id: 2102358,
      descricao: "BURITIRANA",
      id_estado: 21,
    },
    {
      id: 2102325,
      descricao: "BURITICUPU",
      id_estado: 21,
    },
    {
      id: 2102408,
      descricao: "CAJAPIO",
      id_estado: 21,
    },
    {
      id: 2102374,
      descricao: "CACHOEIRA GRANDE",
      id_estado: 21,
    },
    {
      id: 2102507,
      descricao: "CAJARI",
      id_estado: 21,
    },
    {
      id: 2102606,
      descricao: "CANDIDO MENDES",
      id_estado: 21,
    },
    {
      id: 2102556,
      descricao: "CAMPESTRE DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2102754,
      descricao: "CAPINZAL DO NORTE",
      id_estado: 21,
    },
    {
      id: 2102705,
      descricao: "CANTANHEDE",
      id_estado: 21,
    },
    {
      id: 2102804,
      descricao: "CAROLINA",
      id_estado: 21,
    },
    {
      id: 2102903,
      descricao: "CARUTAPERA",
      id_estado: 21,
    },
    {
      id: 2103109,
      descricao: "CEDRAL",
      id_estado: 21,
    },
    {
      id: 2103000,
      descricao: "CAXIAS",
      id_estado: 21,
    },
    {
      id: 2103125,
      descricao: "CENTRAL DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2103174,
      descricao: "CENTRO NOVO DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2103158,
      descricao: "CENTRO DO GUILHERME",
      id_estado: 21,
    },
    {
      id: 2103208,
      descricao: "CHAPADINHA",
      id_estado: 21,
    },
    {
      id: 2103307,
      descricao: "CODO",
      id_estado: 21,
    },
    {
      id: 2103257,
      descricao: "CIDELANDIA",
      id_estado: 21,
    },
    {
      id: 2103505,
      descricao: "COLINAS",
      id_estado: 21,
    },
    {
      id: 2103406,
      descricao: "COELHO NETO",
      id_estado: 21,
    },
    {
      id: 2103554,
      descricao: "CONCEICAO DO LAGOACU",
      id_estado: 21,
    },
    {
      id: 2103752,
      descricao: "DAVINOPOLIS",
      id_estado: 21,
    },
    {
      id: 2103703,
      descricao: "CURURUPU",
      id_estado: 21,
    },
    {
      id: 2103604,
      descricao: "COROATA",
      id_estado: 21,
    },
    {
      id: 2103901,
      descricao: "DUQUE BACELAR",
      id_estado: 21,
    },
    {
      id: 2104008,
      descricao: "ESPERANTINOPOLIS",
      id_estado: 21,
    },
    {
      id: 2103802,
      descricao: "DOM PEDRO",
      id_estado: 21,
    },
    {
      id: 2104057,
      descricao: "ESTREITO",
      id_estado: 21,
    },
    {
      id: 2104081,
      descricao: "FERNANDO FALCAO",
      id_estado: 21,
    },
    {
      id: 2104073,
      descricao: "FEIRA NOVA DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2104099,
      descricao: "FORMOSA DA SERRA NEGRA",
      id_estado: 21,
    },
    {
      id: 2104206,
      descricao: "FORTUNA",
      id_estado: 21,
    },
    {
      id: 2104107,
      descricao: "FORTALEZA DOS NOGUEIRAS",
      id_estado: 21,
    },
    {
      id: 2104503,
      descricao: "GOVERNADOR ARCHER",
      id_estado: 21,
    },
    {
      id: 2104404,
      descricao: "GONCALVES DIAS",
      id_estado: 21,
    },
    {
      id: 2104305,
      descricao: "GODOFREDO VIANA",
      id_estado: 21,
    },
    {
      id: 2104552,
      descricao: "GOVERNADOR EDISON LOBAO",
      id_estado: 21,
    },
    {
      id: 2104628,
      descricao: "GOVERNADOR LUIZ ROCHA",
      id_estado: 21,
    },
    {
      id: 2104602,
      descricao: "GOVERNADOR EUGENIO BARROS",
      id_estado: 21,
    },
    {
      id: 2104651,
      descricao: "GOVERNADOR NEWTON BELLO",
      id_estado: 21,
    },
    {
      id: 2104677,
      descricao: "GOVERNADOR NUNES FREIRE",
      id_estado: 21,
    },
    {
      id: 2104909,
      descricao: "GUIMARAES",
      id_estado: 21,
    },
    {
      id: 2104800,
      descricao: "GRAJAU",
      id_estado: 21,
    },
    {
      id: 2104701,
      descricao: "GRACA ARANHA",
      id_estado: 21,
    },
    {
      id: 2105005,
      descricao: "HUMBERTO DE CAMPOS",
      id_estado: 21,
    },
    {
      id: 2105153,
      descricao: "IGARAPE DO MEIO",
      id_estado: 21,
    },
    {
      id: 2105104,
      descricao: "ICATU",
      id_estado: 21,
    },
    {
      id: 2105203,
      descricao: "IGARAPE GRANDE",
      id_estado: 21,
    },
    {
      id: 2105302,
      descricao: "IMPERATRIZ",
      id_estado: 21,
    },
    {
      id: 2105351,
      descricao: "ITAIPAVA DO GRAJAU",
      id_estado: 21,
    },
    {
      id: 2105450,
      descricao: "JATOBA",
      id_estado: 21,
    },
    {
      id: 2105427,
      descricao: "ITINGA DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2105401,
      descricao: "ITAPECURU MIRIM",
      id_estado: 21,
    },
    {
      id: 2105500,
      descricao: "JOAO LISBOA",
      id_estado: 21,
    },
    {
      id: 2105476,
      descricao: "JENIPAPO DOS VIEIRAS",
      id_estado: 21,
    },
    {
      id: 2105609,
      descricao: "JOSELANDIA",
      id_estado: 21,
    },
    {
      id: 2105658,
      descricao: "JUNCO DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2105708,
      descricao: "LAGO DA PEDRA",
      id_estado: 21,
    },
    {
      id: 2105922,
      descricao: "LAGOA DO MATO",
      id_estado: 21,
    },
    {
      id: 2105906,
      descricao: "LAGO VERDE",
      id_estado: 21,
    },
    {
      id: 2105807,
      descricao: "LAGO DO JUNCO",
      id_estado: 21,
    },
    {
      id: 2105948,
      descricao: "LAGO DOS RODRIGUES",
      id_estado: 21,
    },
    {
      id: 2106003,
      descricao: "LIMA CAMPOS",
      id_estado: 21,
    },
    {
      id: 2105989,
      descricao: "LAJEADO NOVO",
      id_estado: 21,
    },
    {
      id: 2105963,
      descricao: "LAGOA GRANDE DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2106300,
      descricao: "MAGALHAES DE ALMEIDA",
      id_estado: 21,
    },
    {
      id: 2106201,
      descricao: "LUIS DOMINGUES",
      id_estado: 21,
    },
    {
      id: 2106102,
      descricao: "LORETO",
      id_estado: 21,
    },
    {
      id: 2106375,
      descricao: "MARANHAOZINHO",
      id_estado: 21,
    },
    {
      id: 2106359,
      descricao: "MARAJA DO SENA",
      id_estado: 21,
    },
    {
      id: 2106326,
      descricao: "MARACACUME",
      id_estado: 21,
    },
    {
      id: 2106508,
      descricao: "MATINHA",
      id_estado: 21,
    },
    {
      id: 2106607,
      descricao: "MATOES",
      id_estado: 21,
    },
    {
      id: 2106409,
      descricao: "MATA ROMA",
      id_estado: 21,
    },
    {
      id: 2106706,
      descricao: "MIRADOR",
      id_estado: 21,
    },
    {
      id: 2106672,
      descricao: "MILAGRES DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2106631,
      descricao: "MATOES DO NORTE",
      id_estado: 21,
    },
    {
      id: 2106755,
      descricao: "MIRANDA DO NORTE",
      id_estado: 21,
    },
    {
      id: 2106904,
      descricao: "MONCAO",
      id_estado: 21,
    },
    {
      id: 2106805,
      descricao: "MIRINZAL",
      id_estado: 21,
    },
    {
      id: 2107209,
      descricao: "NINA RODRIGUES",
      id_estado: 21,
    },
    {
      id: 2107001,
      descricao: "MONTES ALTOS",
      id_estado: 21,
    },
    {
      id: 2107100,
      descricao: "MORROS",
      id_estado: 21,
    },
    {
      id: 2107357,
      descricao: "NOVA OLINDA DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2107258,
      descricao: "NOVA COLINAS",
      id_estado: 21,
    },
    {
      id: 2107308,
      descricao: "NOVA IORQUE",
      id_estado: 21,
    },
    {
      id: 2107506,
      descricao: "PACO DO LUMIAR",
      id_estado: 21,
    },
    {
      id: 2107407,
      descricao: "OLHO DAGUA DAS CUNHAS",
      id_estado: 21,
    },
    {
      id: 2107456,
      descricao: "OLINDA NOVA DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2107704,
      descricao: "PARAIBANO",
      id_estado: 21,
    },
    {
      id: 2107605,
      descricao: "PALMEIRANDIA",
      id_estado: 21,
    },
    {
      id: 2107803,
      descricao: "PARNARAMA",
      id_estado: 21,
    },
    {
      id: 2108009,
      descricao: "PASTOS BONS",
      id_estado: 21,
    },
    {
      id: 2107902,
      descricao: "PASSAGEM FRANCA",
      id_estado: 21,
    },
    {
      id: 2108207,
      descricao: "PEDREIRAS",
      id_estado: 21,
    },
    {
      id: 2108108,
      descricao: "PAULO RAMOS",
      id_estado: 21,
    },
    {
      id: 2108058,
      descricao: "PAULINO NEVES",
      id_estado: 21,
    },
    {
      id: 2108256,
      descricao: "PEDRO DO ROSARIO",
      id_estado: 21,
    },
    {
      id: 2108306,
      descricao: "PENALVA",
      id_estado: 21,
    },
    {
      id: 2108405,
      descricao: "PERI MIRIM",
      id_estado: 21,
    },
    {
      id: 2108454,
      descricao: "PERITORO",
      id_estado: 21,
    },
    {
      id: 2108504,
      descricao: "PINDAREMIRIM",
      id_estado: 21,
    },
    {
      id: 2108603,
      descricao: "PINHEIRO",
      id_estado: 21,
    },
    {
      id: 2108801,
      descricao: "PIRAPEMAS",
      id_estado: 21,
    },
    {
      id: 2108702,
      descricao: "PIO XII",
      id_estado: 21,
    },
    {
      id: 2109056,
      descricao: "PORTO RICO DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2108900,
      descricao: "POCAO DE PEDRAS",
      id_estado: 21,
    },
    {
      id: 2109007,
      descricao: "PORTO FRANCO",
      id_estado: 21,
    },
    {
      id: 2109106,
      descricao: "PRESIDENTE DUTRA",
      id_estado: 21,
    },
    {
      id: 2109205,
      descricao: "PRESIDENTE JUSCELINO",
      id_estado: 21,
    },
    {
      id: 2109239,
      descricao: "PRESIDENTE MEDICI",
      id_estado: 21,
    },
    {
      id: 2109270,
      descricao: "PRESIDENTE SARNEY",
      id_estado: 21,
    },
    {
      id: 2109403,
      descricao: "PRIMEIRA CRUZ",
      id_estado: 21,
    },
    {
      id: 2109304,
      descricao: "PRESIDENTE VARGAS",
      id_estado: 21,
    },
    {
      id: 2109452,
      descricao: "RAPOSA",
      id_estado: 21,
    },
    {
      id: 2109502,
      descricao: "RIACHAO",
      id_estado: 21,
    },
    {
      id: 2109551,
      descricao: "RIBAMAR FIQUENE",
      id_estado: 21,
    },
    {
      id: 2109601,
      descricao: "ROSARIO",
      id_estado: 21,
    },
    {
      id: 2109759,
      descricao: "SANTA FILOMENA DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2109700,
      descricao: "SAMBAIBA",
      id_estado: 21,
    },
    {
      id: 2109809,
      descricao: "SANTA HELENA",
      id_estado: 21,
    },
    {
      id: 2110005,
      descricao: "SANTA LUZIA",
      id_estado: 21,
    },
    {
      id: 2109908,
      descricao: "SANTA INES",
      id_estado: 21,
    },
    {
      id: 2110104,
      descricao: "SANTA QUITERIA DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2110203,
      descricao: "SANTA RITA",
      id_estado: 21,
    },
    {
      id: 2110039,
      descricao: "SANTA LUZIA DO PARUA",
      id_estado: 21,
    },
    {
      id: 2110302,
      descricao: "SANTO ANTONIO DOS LOPES",
      id_estado: 21,
    },
    {
      id: 2110237,
      descricao: "SANTANA DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2110278,
      descricao: "SANTO AMARO DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2110401,
      descricao: "SAO BENEDITO DO RIO PRETO",
      id_estado: 21,
    },
    {
      id: 2110609,
      descricao: "SAO BERNARDO",
      id_estado: 21,
    },
    {
      id: 2110500,
      descricao: "SAO BENTO",
      id_estado: 21,
    },
    {
      id: 2110658,
      descricao: "SAO DOMINGOS DO AZEITAO",
      id_estado: 21,
    },
    {
      id: 2110807,
      descricao: "SAO FELIX DE BALSAS",
      id_estado: 21,
    },
    {
      id: 2110708,
      descricao: "SAO DOMINGOS DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2110906,
      descricao: "SAO FRANCISCO DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2110856,
      descricao: "SAO FRANCISCO DO BREJAO",
      id_estado: 21,
    },
    {
      id: 2111052,
      descricao: "SAO JOAO DO PARAISO",
      id_estado: 21,
    },
    {
      id: 2111003,
      descricao: "SAO JOAO BATISTA",
      id_estado: 21,
    },
    {
      id: 2111029,
      descricao: "SAO JOAO DO CARU",
      id_estado: 21,
    },
    {
      id: 2111201,
      descricao: "SAO JOSE DE RIBAMAR",
      id_estado: 21,
    },
    {
      id: 2111102,
      descricao: "SAO JOAO DOS PATOS",
      id_estado: 21,
    },
    {
      id: 2111078,
      descricao: "SAO JOAO DO SOTER",
      id_estado: 21,
    },
    {
      id: 2111250,
      descricao: "SAO JOSE DOS BASILIOS",
      id_estado: 21,
    },
    {
      id: 2111409,
      descricao: "SAO LUIS GONZAGA DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2111300,
      descricao: "SAO LUIS",
      id_estado: 21,
    },
    {
      id: 2111508,
      descricao: "SAO MATEUS DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2111532,
      descricao: "SAO PEDRO DA AGUA BRANCA",
      id_estado: 21,
    },
    {
      id: 2111573,
      descricao: "SAO PEDRO DOS CRENTES",
      id_estado: 21,
    },
    {
      id: 2111631,
      descricao: "SAO RAIMUNDO DO DOCA BEZERRA",
      id_estado: 21,
    },
    {
      id: 2111672,
      descricao: "SAO ROBERTO",
      id_estado: 21,
    },
    {
      id: 2111607,
      descricao: "SAO RAIMUNDO DAS MANGABEIRAS",
      id_estado: 21,
    },
    {
      id: 2111722,
      descricao: "SATUBINHA",
      id_estado: 21,
    },
    {
      id: 2111706,
      descricao: "SAO VICENTE FERRER",
      id_estado: 21,
    },
    {
      id: 2111748,
      descricao: "SENADOR ALEXANDRE COSTA",
      id_estado: 21,
    },
    {
      id: 2111789,
      descricao: "SERRANO DO MARANHAO",
      id_estado: 21,
    },
    {
      id: 2111805,
      descricao: "SITIO NOVO",
      id_estado: 21,
    },
    {
      id: 2111763,
      descricao: "SENADOR LA ROCQUE",
      id_estado: 21,
    },
    {
      id: 2111953,
      descricao: "SUCUPIRA DO RIACHAO",
      id_estado: 21,
    },
    {
      id: 2112001,
      descricao: "TASSO FRAGOSO",
      id_estado: 21,
    },
    {
      id: 2111904,
      descricao: "SUCUPIRA DO NORTE",
      id_estado: 21,
    },
    {
      id: 2112209,
      descricao: "TIMON",
      id_estado: 21,
    },
    {
      id: 2112100,
      descricao: "TIMBIRAS",
      id_estado: 21,
    },
    {
      id: 2112233,
      descricao: "TRIZIDELA DO VALE",
      id_estado: 21,
    },
    {
      id: 2112308,
      descricao: "TUNTUM",
      id_estado: 21,
    },
    {
      id: 2112274,
      descricao: "TUFILANDIA",
      id_estado: 21,
    },
    {
      id: 2112407,
      descricao: "TURIACU",
      id_estado: 21,
    },
    {
      id: 2112456,
      descricao: "TURILANDIA",
      id_estado: 21,
    },
    {
      id: 2112506,
      descricao: "TUTOIA",
      id_estado: 21,
    },
    {
      id: 2112704,
      descricao: "VARGEM GRANDE",
      id_estado: 21,
    },
    {
      id: 2112605,
      descricao: "URBANO SANTOS",
      id_estado: 21,
    },
    {
      id: 2112803,
      descricao: "VIANA",
      id_estado: 21,
    },
    {
      id: 2112852,
      descricao: "VILA NOVA DOS MARTIRIOS",
      id_estado: 21,
    },
    {
      id: 2112902,
      descricao: "VITORIA DO MEARIM",
      id_estado: 21,
    },
    {
      id: 2113009,
      descricao: "VITORINO FREIRE",
      id_estado: 21,
    },
    {
      id: 2114007,
      descricao: "ZE DOCA",
      id_estado: 21,
    },
    {
      id: 5100102,
      descricao: "ACORIZAL",
      id_estado: 51,
    },
    {
      id: 5100250,
      descricao: "ALTA FLORESTA",
      id_estado: 51,
    },
    {
      id: 5100201,
      descricao: "AGUA BOA",
      id_estado: 51,
    },
    {
      id: 5100359,
      descricao: "ALTO BOA VISTA",
      id_estado: 51,
    },
    {
      id: 5100300,
      descricao: "ALTO ARAGUAIA",
      id_estado: 51,
    },
    {
      id: 5100409,
      descricao: "ALTO GARCAS",
      id_estado: 51,
    },
    {
      id: 5100508,
      descricao: "ALTO PARAGUAI",
      id_estado: 51,
    },
    {
      id: 5100607,
      descricao: "ALTO TAQUARI",
      id_estado: 51,
    },
    {
      id: 5100805,
      descricao: "APIACAS",
      id_estado: 51,
    },
    {
      id: 5101001,
      descricao: "ARAGUAIANA",
      id_estado: 51,
    },
    {
      id: 5101209,
      descricao: "ARAGUAINHA",
      id_estado: 51,
    },
    {
      id: 5101308,
      descricao: "ARENAPOLIS",
      id_estado: 51,
    },
    {
      id: 5101407,
      descricao: "ARIPUANA",
      id_estado: 51,
    },
    {
      id: 5101258,
      descricao: "ARAPUTANGA",
      id_estado: 51,
    },
    {
      id: 5101605,
      descricao: "BARAO DE MELGACO",
      id_estado: 51,
    },
    {
      id: 5101704,
      descricao: "BARRA DO BUGRES",
      id_estado: 51,
    },
    {
      id: 5101803,
      descricao: "BARRA DO GARCAS",
      id_estado: 51,
    },
    {
      id: 5101852,
      descricao: "BOM JESUS DO ARAGUAIA",
      id_estado: 51,
    },
    {
      id: 5101902,
      descricao: "BRASNORTE",
      id_estado: 51,
    },
    {
      id: 5102504,
      descricao: "CACERES",
      id_estado: 51,
    },
    {
      id: 5102603,
      descricao: "CAMPINAPOLIS",
      id_estado: 51,
    },
    {
      id: 5102637,
      descricao: "CAMPO NOVO DO PARECIS",
      id_estado: 51,
    },
    {
      id: 5102678,
      descricao: "CAMPO VERDE",
      id_estado: 51,
    },
    {
      id: 5102694,
      descricao: "CANABRAVA DO NORTE",
      id_estado: 51,
    },
    {
      id: 5102686,
      descricao: "CAMPOS DE JULIO",
      id_estado: 51,
    },
    {
      id: 5102702,
      descricao: "CANARANA",
      id_estado: 51,
    },
    {
      id: 5102850,
      descricao: "CASTANHEIRA",
      id_estado: 51,
    },
    {
      id: 5102793,
      descricao: "CARLINDA",
      id_estado: 51,
    },
    {
      id: 5103007,
      descricao: "CHAPADA DOS GUIMARAES",
      id_estado: 51,
    },
    {
      id: 5103106,
      descricao: "COCALINHO",
      id_estado: 51,
    },
    {
      id: 5103205,
      descricao: "COLIDER",
      id_estado: 51,
    },
    {
      id: 5103056,
      descricao: "CLAUDIA",
      id_estado: 51,
    },
    {
      id: 5103254,
      descricao: "COLNIZA",
      id_estado: 51,
    },
    {
      id: 5103304,
      descricao: "COMODORO",
      id_estado: 51,
    },
    {
      id: 5103353,
      descricao: "CONFRESA",
      id_estado: 51,
    },
    {
      id: 5103361,
      descricao: "CONQUISTA DOESTE",
      id_estado: 51,
    },
    {
      id: 5103379,
      descricao: "COTRIGUACU",
      id_estado: 51,
    },
    {
      id: 5103403,
      descricao: "CUIABA",
      id_estado: 51,
    },
    {
      id: 5103452,
      descricao: "DENISE",
      id_estado: 51,
    },
    {
      id: 5103437,
      descricao: "CURVELANDIA",
      id_estado: 51,
    },
    {
      id: 5103502,
      descricao: "DIAMANTINO",
      id_estado: 51,
    },
    {
      id: 5103601,
      descricao: "DOM AQUINO",
      id_estado: 51,
    },
    {
      id: 5103700,
      descricao: "FELIZ NATAL",
      id_estado: 51,
    },
    {
      id: 5103809,
      descricao: "FIGUEIROPOLIS DOESTE",
      id_estado: 51,
    },
    {
      id: 5103908,
      descricao: "GENERAL CARNEIRO",
      id_estado: 51,
    },
    {
      id: 5103858,
      descricao: "GAUCHA DO NORTE",
      id_estado: 51,
    },
    {
      id: 5103957,
      descricao: "GLORIA DOESTE",
      id_estado: 51,
    },
    {
      id: 5104104,
      descricao: "GUARANTA DO NORTE",
      id_estado: 51,
    },
    {
      id: 5104500,
      descricao: "INDIAVAI",
      id_estado: 51,
    },
    {
      id: 5104203,
      descricao: "GUIRATINGA",
      id_estado: 51,
    },
    {
      id: 5104542,
      descricao: "ITANHANGA",
      id_estado: 51,
    },
    {
      id: 5104526,
      descricao: "IPIRANGA DO NORTE",
      id_estado: 51,
    },
    {
      id: 5104559,
      descricao: "ITAUBA",
      id_estado: 51,
    },
    {
      id: 5104807,
      descricao: "JACIARA",
      id_estado: 51,
    },
    {
      id: 5104906,
      descricao: "JANGADA",
      id_estado: 51,
    },
    {
      id: 5104609,
      descricao: "ITIQUIRA",
      id_estado: 51,
    },
    {
      id: 5105101,
      descricao: "JUARA",
      id_estado: 51,
    },
    {
      id: 5105002,
      descricao: "JAURU",
      id_estado: 51,
    },
    {
      id: 5105150,
      descricao: "JUINA",
      id_estado: 51,
    },
    {
      id: 5105176,
      descricao: "JURUENA",
      id_estado: 51,
    },
    {
      id: 5105200,
      descricao: "JUSCIMEIRA",
      id_estado: 51,
    },
    {
      id: 5105259,
      descricao: "LUCAS DO RIO VERDE",
      id_estado: 51,
    },
    {
      id: 5105234,
      descricao: "LAMBARI DOESTE",
      id_estado: 51,
    },
    {
      id: 5105507,
      descricao: "VILA BELA DA SANTISSIMA TRINDADE",
      id_estado: 51,
    },
    {
      id: 5105580,
      descricao: "MARCELANDIA",
      id_estado: 51,
    },
    {
      id: 5105309,
      descricao: "LUCIARA",
      id_estado: 51,
    },
    {
      id: 5105622,
      descricao: "MIRASSOL DOESTE",
      id_estado: 51,
    },
    {
      id: 5105606,
      descricao: "MATUPA",
      id_estado: 51,
    },
    {
      id: 5105903,
      descricao: "NOBRES",
      id_estado: 51,
    },
    {
      id: 5106109,
      descricao: "NOSSA SENHORA DO LIVRAMENTO",
      id_estado: 51,
    },
    {
      id: 5106000,
      descricao: "NORTELANDIA",
      id_estado: 51,
    },
    {
      id: 5106158,
      descricao: "NOVA BANDEIRANTES",
      id_estado: 51,
    },
    {
      id: 5106190,
      descricao: "NOVA SANTA HELENA",
      id_estado: 51,
    },
    {
      id: 5106208,
      descricao: "NOVA BRASILANDIA",
      id_estado: 51,
    },
    {
      id: 5106182,
      descricao: "NOVA LACERDA",
      id_estado: 51,
    },
    {
      id: 5106174,
      descricao: "NOVA NAZARE",
      id_estado: 51,
    },
    {
      id: 5106216,
      descricao: "NOVA CANAA DO NORTE",
      id_estado: 51,
    },
    {
      id: 5106232,
      descricao: "NOVA OLIMPIA",
      id_estado: 51,
    },
    {
      id: 5106224,
      descricao: "NOVA MUTUM",
      id_estado: 51,
    },
    {
      id: 5106240,
      descricao: "NOVA UBIRATA",
      id_estado: 51,
    },
    {
      id: 5106265,
      descricao: "NOVO MUNDO",
      id_estado: 51,
    },
    {
      id: 5106273,
      descricao: "NOVO HORIZONTE DO NORTE",
      id_estado: 51,
    },
    {
      id: 5106257,
      descricao: "NOVA XAVANTINA",
      id_estado: 51,
    },
    {
      id: 5106299,
      descricao: "PARANAITA",
      id_estado: 51,
    },
    {
      id: 5106307,
      descricao: "PARANATINGA",
      id_estado: 51,
    },
    {
      id: 5106281,
      descricao: "NOVO SAO JOAQUIM",
      id_estado: 51,
    },
    {
      id: 5106372,
      descricao: "PEDRA PRETA",
      id_estado: 51,
    },
    {
      id: 5106315,
      descricao: "NOVO SANTO ANTONIO",
      id_estado: 51,
    },
    {
      id: 5106455,
      descricao: "PLANALTO DA SERRA",
      id_estado: 51,
    },
    {
      id: 5106422,
      descricao: "PEIXOTO DE AZEVEDO",
      id_estado: 51,
    },
    {
      id: 5106505,
      descricao: "POCONE",
      id_estado: 51,
    },
    {
      id: 5106703,
      descricao: "PONTE BRANCA",
      id_estado: 51,
    },
    {
      id: 5106653,
      descricao: "PONTAL DO ARAGUAIA",
      id_estado: 51,
    },
    {
      id: 5106752,
      descricao: "PONTES E LACERDA",
      id_estado: 51,
    },
    {
      id: 5106778,
      descricao: "PORTO ALEGRE DO NORTE",
      id_estado: 51,
    },
    {
      id: 5106828,
      descricao: "PORTO ESPERIDIAO",
      id_estado: 51,
    },
    {
      id: 5106851,
      descricao: "PORTO ESTRELA",
      id_estado: 51,
    },
    {
      id: 5106802,
      descricao: "PORTO DOS GAUCHOS",
      id_estado: 51,
    },
    {
      id: 5107008,
      descricao: "POXOREO",
      id_estado: 51,
    },
    {
      id: 5107040,
      descricao: "PRIMAVERA DO LESTE",
      id_estado: 51,
    },
    {
      id: 5107107,
      descricao: "SAO JOSE DOS QUATRO MARCOS",
      id_estado: 51,
    },
    {
      id: 5107065,
      descricao: "QUERENCIA",
      id_estado: 51,
    },
    {
      id: 5107180,
      descricao: "RIBEIRAO CASCALHEIRA",
      id_estado: 51,
    },
    {
      id: 5107198,
      descricao: "RIBEIRAOZINHO",
      id_estado: 51,
    },
    {
      id: 5107156,
      descricao: "RESERVA DO CABACAL",
      id_estado: 51,
    },
    {
      id: 5107263,
      descricao: "SANTO AFONSO",
      id_estado: 51,
    },
    {
      id: 5107248,
      descricao: "SANTA CARMEM",
      id_estado: 51,
    },
    {
      id: 5107206,
      descricao: "RIO BRANCO",
      id_estado: 51,
    },
    {
      id: 5107305,
      descricao: "SAO JOSE DO RIO CLARO",
      id_estado: 51,
    },
    {
      id: 5107354,
      descricao: "SAO JOSE DO XINGU",
      id_estado: 51,
    },
    {
      id: 5107297,
      descricao: "SAO JOSE DO POVO",
      id_estado: 51,
    },
    {
      id: 5107578,
      descricao: "RONDOLANDIA",
      id_estado: 51,
    },
    {
      id: 5107404,
      descricao: "SAO PEDRO DA CIPA",
      id_estado: 51,
    },
    {
      id: 5107602,
      descricao: "RONDONOPOLIS",
      id_estado: 51,
    },
    {
      id: 5107743,
      descricao: "SANTA CRUZ DO XINGU",
      id_estado: 51,
    },
    {
      id: 5107701,
      descricao: "ROSARIO OESTE",
      id_estado: 51,
    },
    {
      id: 5107768,
      descricao: "SANTA RITA DO TRIVELATO",
      id_estado: 51,
    },
    {
      id: 5107750,
      descricao: "SALTO DO CEU",
      id_estado: 51,
    },
    {
      id: 5107800,
      descricao: "SANTO ANTONIO DO LEVERGER",
      id_estado: 51,
    },
    {
      id: 5107792,
      descricao: "SANTO ANTONIO DO LESTE",
      id_estado: 51,
    },
    {
      id: 5107776,
      descricao: "SANTA TEREZINHA",
      id_estado: 51,
    },
    {
      id: 5107859,
      descricao: "SAO FELIX DO ARAGUAIA",
      id_estado: 51,
    },
    {
      id: 5107883,
      descricao: "SERRA NOVA DOURADA",
      id_estado: 51,
    },
    {
      id: 5107875,
      descricao: "SAPEZAL",
      id_estado: 51,
    },
    {
      id: 5107909,
      descricao: "SINOP",
      id_estado: 51,
    },
    {
      id: 5107925,
      descricao: "SORRISO",
      id_estado: 51,
    },
    {
      id: 5107958,
      descricao: "TANGARA DA SERRA",
      id_estado: 51,
    },
    {
      id: 5107941,
      descricao: "TABAPORA",
      id_estado: 51,
    },
    {
      id: 5108006,
      descricao: "TAPURAH",
      id_estado: 51,
    },
    {
      id: 5108055,
      descricao: "TERRA NOVA DO NORTE",
      id_estado: 51,
    },
    {
      id: 5108105,
      descricao: "TESOURO",
      id_estado: 51,
    },
    {
      id: 5108204,
      descricao: "TORIXOREU",
      id_estado: 51,
    },
    {
      id: 5108303,
      descricao: "UNIAO DO SUL",
      id_estado: 51,
    },
    {
      id: 5108402,
      descricao: "VARZEA GRANDE",
      id_estado: 51,
    },
    {
      id: 5108352,
      descricao: "VALE DE SAO DOMINGOS",
      id_estado: 51,
    },
    {
      id: 5108501,
      descricao: "VERA",
      id_estado: 51,
    },
    {
      id: 5108600,
      descricao: "VILA RICA",
      id_estado: 51,
    },
    {
      id: 5108907,
      descricao: "NOVA MARINGA",
      id_estado: 51,
    },
    {
      id: 5108857,
      descricao: "NOVA MARILANDIA",
      id_estado: 51,
    },
    {
      id: 5108808,
      descricao: "NOVA GUARITA",
      id_estado: 51,
    },
    {
      id: 5000252,
      descricao: "ALCINOPOLIS",
      id_estado: 50,
    },
    {
      id: 5000203,
      descricao: "AGUA CLARA",
      id_estado: 50,
    },
    {
      id: 5108956,
      descricao: "NOVA MONTE VERDE",
      id_estado: 51,
    },
    {
      id: 5000708,
      descricao: "ANASTACIO",
      id_estado: 50,
    },
    {
      id: 5000609,
      descricao: "AMAMBAI",
      id_estado: 50,
    },
    {
      id: 5000856,
      descricao: "ANGELICA",
      id_estado: 50,
    },
    {
      id: 5000807,
      descricao: "ANAURILANDIA",
      id_estado: 50,
    },
    {
      id: 5001102,
      descricao: "AQUIDAUANA",
      id_estado: 50,
    },
    {
      id: 5001003,
      descricao: "APARECIDA DO TABOADO",
      id_estado: 50,
    },
    {
      id: 5000906,
      descricao: "ANTONIO JOAO",
      id_estado: 50,
    },
    {
      id: 5001904,
      descricao: "BATAGUASSU",
      id_estado: 50,
    },
    {
      id: 5001508,
      descricao: "BANDEIRANTES",
      id_estado: 50,
    },
    {
      id: 5001243,
      descricao: "ARAL MOREIRA",
      id_estado: 50,
    },
    {
      id: 5002100,
      descricao: "BELA VISTA",
      id_estado: 50,
    },
    {
      id: 5002001,
      descricao: "BATAYPORA",
      id_estado: 50,
    },
    {
      id: 5002159,
      descricao: "BODOQUENA",
      id_estado: 50,
    },
    {
      id: 5002209,
      descricao: "BONITO",
      id_estado: 50,
    },
    {
      id: 5002407,
      descricao: "CAARAPO",
      id_estado: 50,
    },
    {
      id: 5002308,
      descricao: "BRASILANDIA",
      id_estado: 50,
    },
    {
      id: 5002605,
      descricao: "CAMAPUA",
      id_estado: 50,
    },
    {
      id: 5002704,
      descricao: "CAMPO GRANDE",
      id_estado: 50,
    },
    {
      id: 5002902,
      descricao: "CASSILANDIA",
      id_estado: 50,
    },
    {
      id: 5002803,
      descricao: "CARACOL",
      id_estado: 50,
    },
    {
      id: 5002951,
      descricao: "CHAPADAO DO SUL",
      id_estado: 50,
    },
    {
      id: 5003108,
      descricao: "CORGUINHO",
      id_estado: 50,
    },
    {
      id: 5003207,
      descricao: "CORUMBA",
      id_estado: 50,
    },
    {
      id: 5003157,
      descricao: "CORONEL SAPUCAIA",
      id_estado: 50,
    },
    {
      id: 5003256,
      descricao: "COSTA RICA",
      id_estado: 50,
    },
    {
      id: 5003306,
      descricao: "COXIM",
      id_estado: 50,
    },
    {
      id: 5003488,
      descricao: "DOIS IRMAOS DO BURITI",
      id_estado: 50,
    },
    {
      id: 5003454,
      descricao: "DEODAPOLIS",
      id_estado: 50,
    },
    {
      id: 5003504,
      descricao: "DOURADINA",
      id_estado: 50,
    },
    {
      id: 5003702,
      descricao: "DOURADOS",
      id_estado: 50,
    },
    {
      id: 5003751,
      descricao: "ELDORADO",
      id_estado: 50,
    },
    {
      id: 5003801,
      descricao: "FATIMA DO SUL",
      id_estado: 50,
    },
    {
      id: 5004007,
      descricao: "GLORIA DE DOURADOS",
      id_estado: 50,
    },
    {
      id: 5003900,
      descricao: "FIGUEIRAO",
      id_estado: 50,
    },
    {
      id: 5004403,
      descricao: "INOCENCIA",
      id_estado: 50,
    },
    {
      id: 5004304,
      descricao: "IGUATEMI",
      id_estado: 50,
    },
    {
      id: 5004106,
      descricao: "GUIA LOPES DA LAGUNA",
      id_estado: 50,
    },
    {
      id: 5004502,
      descricao: "ITAPORA",
      id_estado: 50,
    },
    {
      id: 5004601,
      descricao: "ITAQUIRAI",
      id_estado: 50,
    },
    {
      id: 5004908,
      descricao: "JARAGUARI",
      id_estado: 50,
    },
    {
      id: 5004700,
      descricao: "IVINHEMA",
      id_estado: 50,
    },
    {
      id: 5004809,
      descricao: "JAPORA",
      id_estado: 50,
    },
    {
      id: 5005004,
      descricao: "JARDIM",
      id_estado: 50,
    },
    {
      id: 5005103,
      descricao: "JATEI",
      id_estado: 50,
    },
    {
      id: 5005251,
      descricao: "LAGUNA CARAPA",
      id_estado: 50,
    },
    {
      id: 5005202,
      descricao: "LADARIO",
      id_estado: 50,
    },
    {
      id: 5005152,
      descricao: "JUTI",
      id_estado: 50,
    },
    {
      id: 5005608,
      descricao: "MIRANDA",
      id_estado: 50,
    },
    {
      id: 5005400,
      descricao: "MARACAJU",
      id_estado: 50,
    },
    {
      id: 5005806,
      descricao: "NIOAQUE",
      id_estado: 50,
    },
    {
      id: 5005707,
      descricao: "NAVIRAI",
      id_estado: 50,
    },
    {
      id: 5005681,
      descricao: "MUNDO NOVO",
      id_estado: 50,
    },
    {
      id: 5006259,
      descricao: "NOVO HORIZONTE DO SUL",
      id_estado: 50,
    },
    {
      id: 5006002,
      descricao: "NOVA ALVORADA DO SUL",
      id_estado: 50,
    },
    {
      id: 5006200,
      descricao: "NOVA ANDRADINA",
      id_estado: 50,
    },
    {
      id: 5006309,
      descricao: "PARANAIBA",
      id_estado: 50,
    },
    {
      id: 5006408,
      descricao: "PEDRO GOMES",
      id_estado: 50,
    },
    {
      id: 5006358,
      descricao: "PARANHOS",
      id_estado: 50,
    },
    {
      id: 5006903,
      descricao: "PORTO MURTINHO",
      id_estado: 50,
    },
    {
      id: 5006606,
      descricao: "PONTA PORA",
      id_estado: 50,
    },
    {
      id: 5007109,
      descricao: "RIBAS DO RIO PARDO",
      id_estado: 50,
    },
    {
      id: 5007208,
      descricao: "RIO BRILHANTE",
      id_estado: 50,
    },
    {
      id: 5007307,
      descricao: "RIO NEGRO",
      id_estado: 50,
    },
    {
      id: 5007406,
      descricao: "RIO VERDE DE MATO GROSSO",
      id_estado: 50,
    },
    {
      id: 5007554,
      descricao: "SANTA RITA DO PARDO",
      id_estado: 50,
    },
    {
      id: 5007505,
      descricao: "ROCHEDO",
      id_estado: 50,
    },
    {
      id: 5007695,
      descricao: "SAO GABRIEL DO OESTE",
      id_estado: 50,
    },
    {
      id: 5007703,
      descricao: "SETE QUEDAS",
      id_estado: 50,
    },
    {
      id: 5007901,
      descricao: "SIDROLANDIA",
      id_estado: 50,
    },
    {
      id: 5007802,
      descricao: "SELVIRIA",
      id_estado: 50,
    },
    {
      id: 5007935,
      descricao: "SONORA",
      id_estado: 50,
    },
    {
      id: 5007950,
      descricao: "TACURU",
      id_estado: 50,
    },
    {
      id: 5008305,
      descricao: "TRES LAGOAS",
      id_estado: 50,
    },
    {
      id: 5008008,
      descricao: "TERENOS",
      id_estado: 50,
    },
    {
      id: 5007976,
      descricao: "TAQUARUSSU",
      id_estado: 50,
    },
    {
      id: 3100203,
      descricao: "ABAETE",
      id_estado: 31,
    },
    {
      id: 5008404,
      descricao: "VICENTINA",
      id_estado: 50,
    },
    {
      id: 3100104,
      descricao: "ABADIA DOS DOURADOS",
      id_estado: 31,
    },
    {
      id: 3100401,
      descricao: "ACAIACA",
      id_estado: 31,
    },
    {
      id: 3100302,
      descricao: "ABRE CAMPO",
      id_estado: 31,
    },
    {
      id: 3100500,
      descricao: "ACUCENA",
      id_estado: 31,
    },
    {
      id: 3100609,
      descricao: "AGUA BOA",
      id_estado: 31,
    },
    {
      id: 3100708,
      descricao: "AGUA COMPRIDA",
      id_estado: 31,
    },
    {
      id: 3100807,
      descricao: "AGUANIL",
      id_estado: 31,
    },
    {
      id: 3100906,
      descricao: "AGUAS FORMOSAS",
      id_estado: 31,
    },
    {
      id: 3101003,
      descricao: "AGUAS VERMELHAS",
      id_estado: 31,
    },
    {
      id: 3101102,
      descricao: "AIMORES",
      id_estado: 31,
    },
    {
      id: 3101300,
      descricao: "ALAGOA",
      id_estado: 31,
    },
    {
      id: 3101201,
      descricao: "AIURUOCA",
      id_estado: 31,
    },
    {
      id: 3101409,
      descricao: "ALBERTINA",
      id_estado: 31,
    },
    {
      id: 3101508,
      descricao: "ALEM PARAIBA",
      id_estado: 31,
    },
    {
      id: 3101607,
      descricao: "ALFENAS",
      id_estado: 31,
    },
    {
      id: 3101706,
      descricao: "ALMENARA",
      id_estado: 31,
    },
    {
      id: 3101631,
      descricao: "ALFREDO VASCONCELOS",
      id_estado: 31,
    },
    {
      id: 3101904,
      descricao: "ALPINOPOLIS",
      id_estado: 31,
    },
    {
      id: 3101805,
      descricao: "ALPERCATA",
      id_estado: 31,
    },
    {
      id: 3102001,
      descricao: "ALTEROSA",
      id_estado: 31,
    },
    {
      id: 3102050,
      descricao: "ALTO CAPARAO",
      id_estado: 31,
    },
    {
      id: 3102100,
      descricao: "ALTO RIO DOCE",
      id_estado: 31,
    },
    {
      id: 3102209,
      descricao: "ALVARENGA",
      id_estado: 31,
    },
    {
      id: 3102308,
      descricao: "ALVINOPOLIS",
      id_estado: 31,
    },
    {
      id: 3102407,
      descricao: "ALVORADA DE MINAS",
      id_estado: 31,
    },
    {
      id: 3102506,
      descricao: "AMPARO DO SERRA",
      id_estado: 31,
    },
    {
      id: 3102605,
      descricao: "ANDRADAS",
      id_estado: 31,
    },
    {
      id: 3102704,
      descricao: "CACHOEIRA DE PAJEU",
      id_estado: 31,
    },
    {
      id: 3102852,
      descricao: "ANGELANDIA",
      id_estado: 31,
    },
    {
      id: 3102803,
      descricao: "ANDRELANDIA",
      id_estado: 31,
    },
    {
      id: 3102902,
      descricao: "ANTONIO CARLOS",
      id_estado: 31,
    },
    {
      id: 3103009,
      descricao: "ANTONIO DIAS",
      id_estado: 31,
    },
    {
      id: 3103108,
      descricao: "ANTONIO PRADO DE MINAS",
      id_estado: 31,
    },
    {
      id: 3103207,
      descricao: "ARACAI",
      id_estado: 31,
    },
    {
      id: 3103306,
      descricao: "ARACITABA",
      id_estado: 31,
    },
    {
      id: 3103405,
      descricao: "ARACUAI",
      id_estado: 31,
    },
    {
      id: 3103504,
      descricao: "ARAGUARI",
      id_estado: 31,
    },
    {
      id: 3103603,
      descricao: "ARANTINA",
      id_estado: 31,
    },
    {
      id: 3103751,
      descricao: "ARAPORA",
      id_estado: 31,
    },
    {
      id: 3103702,
      descricao: "ARAPONGA",
      id_estado: 31,
    },
    {
      id: 3103801,
      descricao: "ARAPUA",
      id_estado: 31,
    },
    {
      id: 3103900,
      descricao: "ARAUJOS",
      id_estado: 31,
    },
    {
      id: 3104007,
      descricao: "ARAXA",
      id_estado: 31,
    },
    {
      id: 3104106,
      descricao: "ARCEBURGO",
      id_estado: 31,
    },
    {
      id: 3104304,
      descricao: "AREADO",
      id_estado: 31,
    },
    {
      id: 3104205,
      descricao: "ARCOS",
      id_estado: 31,
    },
    {
      id: 3104452,
      descricao: "ARICANDUVA",
      id_estado: 31,
    },
    {
      id: 3104403,
      descricao: "ARGIRITA",
      id_estado: 31,
    },
    {
      id: 3104502,
      descricao: "ARINOS",
      id_estado: 31,
    },
    {
      id: 3104601,
      descricao: "ASTOLFO DUTRA",
      id_estado: 31,
    },
    {
      id: 3104700,
      descricao: "ATALEIA",
      id_estado: 31,
    },
    {
      id: 3104809,
      descricao: "AUGUSTO DE LIMA",
      id_estado: 31,
    },
    {
      id: 3104908,
      descricao: "BAEPENDI",
      id_estado: 31,
    },
    {
      id: 3105004,
      descricao: "BALDIM",
      id_estado: 31,
    },
    {
      id: 3105103,
      descricao: "BAMBUI",
      id_estado: 31,
    },
    {
      id: 3105301,
      descricao: "BANDEIRA DO SUL",
      id_estado: 31,
    },
    {
      id: 3105202,
      descricao: "BANDEIRA",
      id_estado: 31,
    },
    {
      id: 3105509,
      descricao: "BARAO DE MONTE ALTO",
      id_estado: 31,
    },
    {
      id: 3105400,
      descricao: "BARAO DE COCAIS",
      id_estado: 31,
    },
    {
      id: 3105608,
      descricao: "BARBACENA",
      id_estado: 31,
    },
    {
      id: 3105707,
      descricao: "BARRA LONGA",
      id_estado: 31,
    },
    {
      id: 3105905,
      descricao: "BARROSO",
      id_estado: 31,
    },
    {
      id: 3106101,
      descricao: "BELMIRO BRAGA",
      id_estado: 31,
    },
    {
      id: 3106002,
      descricao: "BELA VISTA DE MINAS",
      id_estado: 31,
    },
    {
      id: 3106200,
      descricao: "BELO HORIZONTE",
      id_estado: 31,
    },
    {
      id: 3106309,
      descricao: "BELO ORIENTE",
      id_estado: 31,
    },
    {
      id: 3106408,
      descricao: "BELO VALE",
      id_estado: 31,
    },
    {
      id: 3106507,
      descricao: "BERILO",
      id_estado: 31,
    },
    {
      id: 3106655,
      descricao: "BERIZAL",
      id_estado: 31,
    },
    {
      id: 3106606,
      descricao: "BERTOPOLIS",
      id_estado: 31,
    },
    {
      id: 3106705,
      descricao: "BETIM",
      id_estado: 31,
    },
    {
      id: 3106804,
      descricao: "BIAS FORTES",
      id_estado: 31,
    },
    {
      id: 3107109,
      descricao: "BOA ESPERANCA",
      id_estado: 31,
    },
    {
      id: 3106903,
      descricao: "BICAS",
      id_estado: 31,
    },
    {
      id: 3107000,
      descricao: "BIQUINHAS",
      id_estado: 31,
    },
    {
      id: 3107208,
      descricao: "BOCAINA DE MINAS",
      id_estado: 31,
    },
    {
      id: 3107307,
      descricao: "BOCAIUVA",
      id_estado: 31,
    },
    {
      id: 3107406,
      descricao: "BOM DESPACHO",
      id_estado: 31,
    },
    {
      id: 3107505,
      descricao: "BOM JARDIM DE MINAS",
      id_estado: 31,
    },
    {
      id: 3107604,
      descricao: "BOM JESUS DA PENHA",
      id_estado: 31,
    },
    {
      id: 3107703,
      descricao: "BOM JESUS DO AMPARO",
      id_estado: 31,
    },
    {
      id: 3107802,
      descricao: "BOM JESUS DO GALHO",
      id_estado: 31,
    },
    {
      id: 3107901,
      descricao: "BOM REPOUSO",
      id_estado: 31,
    },
    {
      id: 3108107,
      descricao: "BONFIM",
      id_estado: 31,
    },
    {
      id: 3108008,
      descricao: "BOM SUCESSO",
      id_estado: 31,
    },
    {
      id: 3108255,
      descricao: "BONITO DE MINAS",
      id_estado: 31,
    },
    {
      id: 3108206,
      descricao: "BONFINOPOLIS DE MINAS",
      id_estado: 31,
    },
    {
      id: 3108305,
      descricao: "BORDA DA MATA",
      id_estado: 31,
    },
    {
      id: 3108404,
      descricao: "BOTELHOS",
      id_estado: 31,
    },
    {
      id: 3108503,
      descricao: "BOTUMIRIM",
      id_estado: 31,
    },
    {
      id: 3108552,
      descricao: "BRASILANDIA DE MINAS",
      id_estado: 31,
    },
    {
      id: 3108701,
      descricao: "BRAS PIRES",
      id_estado: 31,
    },
    {
      id: 3108602,
      descricao: "BRASILIA DE MINAS",
      id_estado: 31,
    },
    {
      id: 3108800,
      descricao: "BRAUNAS",
      id_estado: 31,
    },
    {
      id: 3108909,
      descricao: "BRASOPOLIS",
      id_estado: 31,
    },
    {
      id: 3109006,
      descricao: "BRUMADINHO",
      id_estado: 31,
    },
    {
      id: 3109105,
      descricao: "BUENO BRANDAO",
      id_estado: 31,
    },
    {
      id: 3109204,
      descricao: "BUENOPOLIS",
      id_estado: 31,
    },
    {
      id: 3109253,
      descricao: "BUGRE",
      id_estado: 31,
    },
    {
      id: 3109402,
      descricao: "BURITIZEIRO",
      id_estado: 31,
    },
    {
      id: 3109303,
      descricao: "BURITIS",
      id_estado: 31,
    },
    {
      id: 3109451,
      descricao: "CABECEIRA GRANDE",
      id_estado: 31,
    },
    {
      id: 3109501,
      descricao: "CABO VERDE",
      id_estado: 31,
    },
    {
      id: 3109600,
      descricao: "CACHOEIRA DA PRATA",
      id_estado: 31,
    },
    {
      id: 3109709,
      descricao: "CACHOEIRA DE MINAS",
      id_estado: 31,
    },
    {
      id: 3109808,
      descricao: "CACHOEIRA DOURADA",
      id_estado: 31,
    },
    {
      id: 3109907,
      descricao: "CAETANOPOLIS",
      id_estado: 31,
    },
    {
      id: 3110004,
      descricao: "CAETE",
      id_estado: 31,
    },
    {
      id: 3110301,
      descricao: "CALDAS",
      id_estado: 31,
    },
    {
      id: 3110103,
      descricao: "CAIANA",
      id_estado: 31,
    },
    {
      id: 3110202,
      descricao: "CAJURI",
      id_estado: 31,
    },
    {
      id: 3110400,
      descricao: "CAMACHO",
      id_estado: 31,
    },
    {
      id: 3110509,
      descricao: "CAMANDUCAIA",
      id_estado: 31,
    },
    {
      id: 3110608,
      descricao: "CAMBUI",
      id_estado: 31,
    },
    {
      id: 3110707,
      descricao: "CAMBUQUIRA",
      id_estado: 31,
    },
    {
      id: 3110905,
      descricao: "CAMPANHA",
      id_estado: 31,
    },
    {
      id: 3111002,
      descricao: "CAMPESTRE",
      id_estado: 31,
    },
    {
      id: 3110806,
      descricao: "CAMPANARIO",
      id_estado: 31,
    },
    {
      id: 3111150,
      descricao: "CAMPO AZUL",
      id_estado: 31,
    },
    {
      id: 3111101,
      descricao: "CAMPINA VERDE",
      id_estado: 31,
    },
    {
      id: 3111200,
      descricao: "CAMPO BELO",
      id_estado: 31,
    },
    {
      id: 3111309,
      descricao: "CAMPO DO MEIO",
      id_estado: 31,
    },
    {
      id: 3111507,
      descricao: "CAMPOS ALTOS",
      id_estado: 31,
    },
    {
      id: 3111408,
      descricao: "CAMPO FLORIDO",
      id_estado: 31,
    },
    {
      id: 3111705,
      descricao: "CANAA",
      id_estado: 31,
    },
    {
      id: 3111804,
      descricao: "CANAPOLIS",
      id_estado: 31,
    },
    {
      id: 3111606,
      descricao: "CAMPOS GERAIS",
      id_estado: 31,
    },
    {
      id: 3112000,
      descricao: "CANDEIAS",
      id_estado: 31,
    },
    {
      id: 3112059,
      descricao: "CANTAGALO",
      id_estado: 31,
    },
    {
      id: 3111903,
      descricao: "CANA VERDE",
      id_estado: 31,
    },
    {
      id: 3112208,
      descricao: "CAPELA NOVA",
      id_estado: 31,
    },
    {
      id: 3112109,
      descricao: "CAPARAO",
      id_estado: 31,
    },
    {
      id: 3112307,
      descricao: "CAPELINHA",
      id_estado: 31,
    },
    {
      id: 3112505,
      descricao: "CAPIM BRANCO",
      id_estado: 31,
    },
    {
      id: 3112406,
      descricao: "CAPETINGA",
      id_estado: 31,
    },
    {
      id: 3112653,
      descricao: "CAPITAO ANDRADE",
      id_estado: 31,
    },
    {
      id: 3112703,
      descricao: "CAPITAO ENEAS",
      id_estado: 31,
    },
    {
      id: 3112604,
      descricao: "CAPINOPOLIS",
      id_estado: 31,
    },
    {
      id: 3112901,
      descricao: "CAPUTIRA",
      id_estado: 31,
    },
    {
      id: 3112802,
      descricao: "CAPITOLIO",
      id_estado: 31,
    },
    {
      id: 3113107,
      descricao: "CARANAIBA",
      id_estado: 31,
    },
    {
      id: 3113008,
      descricao: "CARAI",
      id_estado: 31,
    },
    {
      id: 3113305,
      descricao: "CARANGOLA",
      id_estado: 31,
    },
    {
      id: 3113206,
      descricao: "CARANDAI",
      id_estado: 31,
    },
    {
      id: 3113404,
      descricao: "CARATINGA",
      id_estado: 31,
    },
    {
      id: 3113503,
      descricao: "CARBONITA",
      id_estado: 31,
    },
    {
      id: 3113602,
      descricao: "CAREACU",
      id_estado: 31,
    },
    {
      id: 3113701,
      descricao: "CARLOS CHAGAS",
      id_estado: 31,
    },
    {
      id: 3113800,
      descricao: "CARMESIA",
      id_estado: 31,
    },
    {
      id: 3114006,
      descricao: "CARMO DA MATA",
      id_estado: 31,
    },
    {
      id: 3113909,
      descricao: "CARMO DA CACHOEIRA",
      id_estado: 31,
    },
    {
      id: 3114204,
      descricao: "CARMO DO CAJURU",
      id_estado: 31,
    },
    {
      id: 3114105,
      descricao: "CARMO DE MINAS",
      id_estado: 31,
    },
    {
      id: 3114402,
      descricao: "CARMO DO RIO CLARO",
      id_estado: 31,
    },
    {
      id: 3114303,
      descricao: "CARMO DO PARANAIBA",
      id_estado: 31,
    },
    {
      id: 3114550,
      descricao: "CARNEIRINHO",
      id_estado: 31,
    },
    {
      id: 3114501,
      descricao: "CARMOPOLIS DE MINAS",
      id_estado: 31,
    },
    {
      id: 3114709,
      descricao: "CARVALHOPOLIS",
      id_estado: 31,
    },
    {
      id: 3114600,
      descricao: "CARRANCAS",
      id_estado: 31,
    },
    {
      id: 3114907,
      descricao: "CASA GRANDE",
      id_estado: 31,
    },
    {
      id: 3115003,
      descricao: "CASCALHO RICO",
      id_estado: 31,
    },
    {
      id: 3114808,
      descricao: "CARVALHOS",
      id_estado: 31,
    },
    {
      id: 3115201,
      descricao: "CONCEICAO DA BARRA DE MINAS",
      id_estado: 31,
    },
    {
      id: 3115300,
      descricao: "CATAGUASES",
      id_estado: 31,
    },
    {
      id: 3115102,
      descricao: "CASSIA",
      id_estado: 31,
    },
    {
      id: 3115458,
      descricao: "CATUJI",
      id_estado: 31,
    },
    {
      id: 3115409,
      descricao: "CATAS ALTAS DA NORUEGA",
      id_estado: 31,
    },
    {
      id: 3115359,
      descricao: "CATAS ALTAS",
      id_estado: 31,
    },
    {
      id: 3115508,
      descricao: "CAXAMBU",
      id_estado: 31,
    },
    {
      id: 3115474,
      descricao: "CATUTI",
      id_estado: 31,
    },
    {
      id: 3115706,
      descricao: "CENTRAL DE MINAS",
      id_estado: 31,
    },
    {
      id: 3115607,
      descricao: "CEDRO DO ABAETE",
      id_estado: 31,
    },
    {
      id: 3115904,
      descricao: "CHACARA",
      id_estado: 31,
    },
    {
      id: 3115805,
      descricao: "CENTRALINA",
      id_estado: 31,
    },
    {
      id: 3116001,
      descricao: "CHALE",
      id_estado: 31,
    },
    {
      id: 3116100,
      descricao: "CHAPADA DO NORTE",
      id_estado: 31,
    },
    {
      id: 3116159,
      descricao: "CHAPADA GAUCHA",
      id_estado: 31,
    },
    {
      id: 3116308,
      descricao: "CIPOTANEA",
      id_estado: 31,
    },
    {
      id: 3116209,
      descricao: "CHIADOR",
      id_estado: 31,
    },
    {
      id: 3116506,
      descricao: "CLARO DOS POCOES",
      id_estado: 31,
    },
    {
      id: 3116407,
      descricao: "CLARAVAL",
      id_estado: 31,
    },
    {
      id: 3116704,
      descricao: "COIMBRA",
      id_estado: 31,
    },
    {
      id: 3116803,
      descricao: "COLUNA",
      id_estado: 31,
    },
    {
      id: 3116605,
      descricao: "CLAUDIO",
      id_estado: 31,
    },
    {
      id: 3117009,
      descricao: "COMERCINHO",
      id_estado: 31,
    },
    {
      id: 3116902,
      descricao: "COMENDADOR GOMES",
      id_estado: 31,
    },
    {
      id: 3117207,
      descricao: "CONCEICAO DAS PEDRAS",
      id_estado: 31,
    },
    {
      id: 3117108,
      descricao: "CONCEICAO DA APARECIDA",
      id_estado: 31,
    },
    {
      id: 3117405,
      descricao: "CONCEICAO DE IPANEMA",
      id_estado: 31,
    },
    {
      id: 3117504,
      descricao: "CONCEICAO DO MATO DENTRO",
      id_estado: 31,
    },
    {
      id: 3117306,
      descricao: "CONCEICAO DAS ALAGOAS",
      id_estado: 31,
    },
    {
      id: 3117702,
      descricao: "CONCEICAO DO RIO VERDE",
      id_estado: 31,
    },
    {
      id: 3117603,
      descricao: "CONCEICAO DO PARA",
      id_estado: 31,
    },
    {
      id: 3117836,
      descricao: "CONEGO MARINHO",
      id_estado: 31,
    },
    {
      id: 3117801,
      descricao: "CONCEICAO DOS OUROS",
      id_estado: 31,
    },
    {
      id: 3117900,
      descricao: "CONGONHAL",
      id_estado: 31,
    },
    {
      id: 3117876,
      descricao: "CONFINS",
      id_estado: 31,
    },
    {
      id: 3118007,
      descricao: "CONGONHAS",
      id_estado: 31,
    },
    {
      id: 3118106,
      descricao: "CONGONHAS DO NORTE",
      id_estado: 31,
    },
    {
      id: 3118304,
      descricao: "CONSELHEIRO LAFAIETE",
      id_estado: 31,
    },
    {
      id: 3118205,
      descricao: "CONQUISTA",
      id_estado: 31,
    },
    {
      id: 3118403,
      descricao: "CONSELHEIRO PENA",
      id_estado: 31,
    },
    {
      id: 3118601,
      descricao: "CONTAGEM",
      id_estado: 31,
    },
    {
      id: 3118502,
      descricao: "CONSOLACAO",
      id_estado: 31,
    },
    {
      id: 3118700,
      descricao: "COQUEIRAL",
      id_estado: 31,
    },
    {
      id: 3118809,
      descricao: "CORACAO DE JESUS",
      id_estado: 31,
    },
    {
      id: 3119005,
      descricao: "CORDISLANDIA",
      id_estado: 31,
    },
    {
      id: 3118908,
      descricao: "CORDISBURGO",
      id_estado: 31,
    },
    {
      id: 3119104,
      descricao: "CORINTO",
      id_estado: 31,
    },
    {
      id: 3119203,
      descricao: "COROACI",
      id_estado: 31,
    },
    {
      id: 3119302,
      descricao: "COROMANDEL",
      id_estado: 31,
    },
    {
      id: 3119401,
      descricao: "CORONEL FABRICIANO",
      id_estado: 31,
    },
    {
      id: 3119609,
      descricao: "CORONEL PACHECO",
      id_estado: 31,
    },
    {
      id: 3119500,
      descricao: "CORONEL MURTA",
      id_estado: 31,
    },
    {
      id: 3119807,
      descricao: "CORREGO DANTA",
      id_estado: 31,
    },
    {
      id: 3119708,
      descricao: "CORONEL XAVIER CHAVES",
      id_estado: 31,
    },
    {
      id: 3120003,
      descricao: "CORREGO NOVO",
      id_estado: 31,
    },
    {
      id: 3119955,
      descricao: "CORREGO FUNDO",
      id_estado: 31,
    },
    {
      id: 3119906,
      descricao: "CORREGO DO BOM JESUS",
      id_estado: 31,
    },
    {
      id: 3120102,
      descricao: "COUTO DE MAGALHAES DE MINAS",
      id_estado: 31,
    },
    {
      id: 3120151,
      descricao: "CRISOLITA",
      id_estado: 31,
    },
    {
      id: 3120409,
      descricao: "CRISTIANO OTONI",
      id_estado: 31,
    },
    {
      id: 3120300,
      descricao: "CRISTALIA",
      id_estado: 31,
    },
    {
      id: 3120201,
      descricao: "CRISTAIS",
      id_estado: 31,
    },
    {
      id: 3120607,
      descricao: "CRUCILANDIA",
      id_estado: 31,
    },
    {
      id: 3120706,
      descricao: "CRUZEIRO DA FORTALEZA",
      id_estado: 31,
    },
    {
      id: 3120508,
      descricao: "CRISTINA",
      id_estado: 31,
    },
    {
      id: 3120839,
      descricao: "CUPARAQUE",
      id_estado: 31,
    },
    {
      id: 3120805,
      descricao: "CRUZILIA",
      id_estado: 31,
    },
    {
      id: 3120904,
      descricao: "CURVELO",
      id_estado: 31,
    },
    {
      id: 3120870,
      descricao: "CURRAL DE DENTRO",
      id_estado: 31,
    },
    {
      id: 3121001,
      descricao: "DATAS",
      id_estado: 31,
    },
    {
      id: 3121209,
      descricao: "DELFINOPOLIS",
      id_estado: 31,
    },
    {
      id: 3121100,
      descricao: "DELFIM MOREIRA",
      id_estado: 31,
    },
    {
      id: 3121407,
      descricao: "DESTERRO DE ENTRE RIOS",
      id_estado: 31,
    },
    {
      id: 3121258,
      descricao: "DELTA",
      id_estado: 31,
    },
    {
      id: 3121308,
      descricao: "DESCOBERTO",
      id_estado: 31,
    },
    {
      id: 3121605,
      descricao: "DIAMANTINA",
      id_estado: 31,
    },
    {
      id: 3121506,
      descricao: "DESTERRO DO MELO",
      id_estado: 31,
    },
    {
      id: 3121704,
      descricao: "DIOGO DE VASCONCELOS",
      id_estado: 31,
    },
    {
      id: 3121902,
      descricao: "DIVINESIA",
      id_estado: 31,
    },
    {
      id: 3121803,
      descricao: "DIONISIO",
      id_estado: 31,
    },
    {
      id: 3122108,
      descricao: "DIVINO DAS LARANJEIRAS",
      id_estado: 31,
    },
    {
      id: 3122009,
      descricao: "DIVINO",
      id_estado: 31,
    },
    {
      id: 3122306,
      descricao: "DIVINOPOLIS",
      id_estado: 31,
    },
    {
      id: 3122207,
      descricao: "DIVINOLANDIA DE MINAS",
      id_estado: 31,
    },
    {
      id: 3122405,
      descricao: "DIVISA NOVA",
      id_estado: 31,
    },
    {
      id: 3122355,
      descricao: "DIVISA ALEGRE",
      id_estado: 31,
    },
    {
      id: 3122504,
      descricao: "DOM CAVATI",
      id_estado: 31,
    },
    {
      id: 3122470,
      descricao: "DOM BOSCO",
      id_estado: 31,
    },
    {
      id: 3122454,
      descricao: "DIVISOPOLIS",
      id_estado: 31,
    },
    {
      id: 3122702,
      descricao: "DOM SILVERIO",
      id_estado: 31,
    },
    {
      id: 3122603,
      descricao: "DOM JOAQUIM",
      id_estado: 31,
    },
    {
      id: 3122801,
      descricao: "DOM VICOSO",
      id_estado: 31,
    },
    {
      id: 3122900,
      descricao: "DONA EUSEBIA",
      id_estado: 31,
    },
    {
      id: 3123205,
      descricao: "DORES DO INDAIA",
      id_estado: 31,
    },
    {
      id: 3123007,
      descricao: "DORES DE CAMPOS",
      id_estado: 31,
    },
    {
      id: 3123106,
      descricao: "DORES DE GUANHAES",
      id_estado: 31,
    },
    {
      id: 3123403,
      descricao: "DORESOPOLIS",
      id_estado: 31,
    },
    {
      id: 3123304,
      descricao: "DORES DO TURVO",
      id_estado: 31,
    },
    {
      id: 3123502,
      descricao: "DOURADOQUARA",
      id_estado: 31,
    },
    {
      id: 3123528,
      descricao: "DURANDE",
      id_estado: 31,
    },
    {
      id: 3123601,
      descricao: "ELOI MENDES",
      id_estado: 31,
    },
    {
      id: 3123700,
      descricao: "ENGENHEIRO CALDAS",
      id_estado: 31,
    },
    {
      id: 3123809,
      descricao: "ENGENHEIRO NAVARRO",
      id_estado: 31,
    },
    {
      id: 3123858,
      descricao: "ENTRE FOLHAS",
      id_estado: 31,
    },
    {
      id: 3123908,
      descricao: "ENTRE RIOS DE MINAS",
      id_estado: 31,
    },
    {
      id: 3124104,
      descricao: "ESMERALDAS",
      id_estado: 31,
    },
    {
      id: 3124005,
      descricao: "ERVALIA",
      id_estado: 31,
    },
    {
      id: 3124302,
      descricao: "ESPINOSA",
      id_estado: 31,
    },
    {
      id: 3124203,
      descricao: "ESPERA FELIZ",
      id_estado: 31,
    },
    {
      id: 3124500,
      descricao: "ESTIVA",
      id_estado: 31,
    },
    {
      id: 3124401,
      descricao: "ESPIRITO SANTO DO DOURADO",
      id_estado: 31,
    },
    {
      id: 3124708,
      descricao: "ESTRELA DO INDAIA",
      id_estado: 31,
    },
    {
      id: 3124609,
      descricao: "ESTRELA DALVA",
      id_estado: 31,
    },
    {
      id: 3124807,
      descricao: "ESTRELA DO SUL",
      id_estado: 31,
    },
    {
      id: 3124906,
      descricao: "EUGENOPOLIS",
      id_estado: 31,
    },
    {
      id: 3125101,
      descricao: "EXTREMA",
      id_estado: 31,
    },
    {
      id: 3125002,
      descricao: "EWBANK DA CAMARA",
      id_estado: 31,
    },
    {
      id: 3125200,
      descricao: "FAMA",
      id_estado: 31,
    },
    {
      id: 3125507,
      descricao: "SAO GONCALO DO RIO PRETO",
      id_estado: 31,
    },
    {
      id: 3125408,
      descricao: "FELICIO DOS SANTOS",
      id_estado: 31,
    },
    {
      id: 3125309,
      descricao: "FARIA LEMOS",
      id_estado: 31,
    },
    {
      id: 3125705,
      descricao: "FELIXLANDIA",
      id_estado: 31,
    },
    {
      id: 3125606,
      descricao: "FELISBURGO",
      id_estado: 31,
    },
    {
      id: 3125804,
      descricao: "FERNANDES TOURINHO",
      id_estado: 31,
    },
    {
      id: 3125903,
      descricao: "FERROS",
      id_estado: 31,
    },
    {
      id: 3125952,
      descricao: "FERVEDOURO",
      id_estado: 31,
    },
    {
      id: 3126109,
      descricao: "FORMIGA",
      id_estado: 31,
    },
    {
      id: 3126000,
      descricao: "FLORESTAL",
      id_estado: 31,
    },
    {
      id: 3126208,
      descricao: "FORMOSO",
      id_estado: 31,
    },
    {
      id: 3126406,
      descricao: "FORTUNA DE MINAS",
      id_estado: 31,
    },
    {
      id: 3126307,
      descricao: "FORTALEZA DE MINAS",
      id_estado: 31,
    },
    {
      id: 3126604,
      descricao: "FRANCISCO DUMONT",
      id_estado: 31,
    },
    {
      id: 3126505,
      descricao: "FRANCISCO BADARO",
      id_estado: 31,
    },
    {
      id: 3126703,
      descricao: "FRANCISCO SA",
      id_estado: 31,
    },
    {
      id: 3126752,
      descricao: "FRANCISCOPOLIS",
      id_estado: 31,
    },
    {
      id: 3126802,
      descricao: "FREI GASPAR",
      id_estado: 31,
    },
    {
      id: 1722107,
      descricao: "XAMBIOA",
      id_estado: 17,
    },
    {
      id: 3126901,
      descricao: "FREI INOCENCIO",
      id_estado: 31,
    },
    {
      id: 3127008,
      descricao: "FRONTEIRA",
      id_estado: 31,
    },
    {
      id: 3126950,
      descricao: "FREI LAGONEGRO",
      id_estado: 31,
    },
    {
      id: 3127073,
      descricao: "FRUTA DE LEITE",
      id_estado: 31,
    },
    {
      id: 3127107,
      descricao: "FRUTAL",
      id_estado: 31,
    },
    {
      id: 3127057,
      descricao: "FRONTEIRA DOS VALES",
      id_estado: 31,
    },
    {
      id: 3127206,
      descricao: "FUNILANDIA",
      id_estado: 31,
    },
    {
      id: 3127305,
      descricao: "GALILEIA",
      id_estado: 31,
    },
    {
      id: 3127339,
      descricao: "GAMELEIRAS",
      id_estado: 31,
    },
    {
      id: 3127354,
      descricao: "GLAUCILANDIA",
      id_estado: 31,
    },
    {
      id: 3127370,
      descricao: "GOIABEIRA",
      id_estado: 31,
    },
    {
      id: 3127388,
      descricao: "GOIANA",
      id_estado: 31,
    },
    {
      id: 3127404,
      descricao: "GONCALVES",
      id_estado: 31,
    },
    {
      id: 3127503,
      descricao: "GONZAGA",
      id_estado: 31,
    },
    {
      id: 3127602,
      descricao: "GOUVEIA",
      id_estado: 31,
    },
    {
      id: 3127701,
      descricao: "GOVERNADOR VALADARES",
      id_estado: 31,
    },
    {
      id: 3127800,
      descricao: "GRAO MOGOL",
      id_estado: 31,
    },
    {
      id: 3127909,
      descricao: "GRUPIARA",
      id_estado: 31,
    },
    {
      id: 3128006,
      descricao: "GUANHAES",
      id_estado: 31,
    },
    {
      id: 3128204,
      descricao: "GUARACIABA",
      id_estado: 31,
    },
    {
      id: 3128105,
      descricao: "GUAPE",
      id_estado: 31,
    },
    {
      id: 3128253,
      descricao: "GUARACIAMA",
      id_estado: 31,
    },
    {
      id: 3128303,
      descricao: "GUARANESIA",
      id_estado: 31,
    },
    {
      id: 3128501,
      descricao: "GUARARA",
      id_estado: 31,
    },
    {
      id: 3128402,
      descricao: "GUARANI",
      id_estado: 31,
    },
    {
      id: 3128600,
      descricao: "GUARDAMOR",
      id_estado: 31,
    },
    {
      id: 3128709,
      descricao: "GUAXUPE",
      id_estado: 31,
    },
    {
      id: 3128808,
      descricao: "GUIDOVAL",
      id_estado: 31,
    },
    {
      id: 3129004,
      descricao: "GUIRICEMA",
      id_estado: 31,
    },
    {
      id: 3128907,
      descricao: "GUIMARANIA",
      id_estado: 31,
    },
    {
      id: 3129103,
      descricao: "GURINHATA",
      id_estado: 31,
    },
    {
      id: 3129202,
      descricao: "HELIODORA",
      id_estado: 31,
    },
    {
      id: 3129301,
      descricao: "IAPU",
      id_estado: 31,
    },
    {
      id: 3129400,
      descricao: "IBERTIOGA",
      id_estado: 31,
    },
    {
      id: 3129509,
      descricao: "IBIA",
      id_estado: 31,
    },
    {
      id: 3129608,
      descricao: "IBIAI",
      id_estado: 31,
    },
    {
      id: 3129657,
      descricao: "IBIRACATU",
      id_estado: 31,
    },
    {
      id: 3129806,
      descricao: "IBIRITE",
      id_estado: 31,
    },
    {
      id: 3129707,
      descricao: "IBIRACI",
      id_estado: 31,
    },
    {
      id: 3130002,
      descricao: "IBITURUNA",
      id_estado: 31,
    },
    {
      id: 3129905,
      descricao: "IBITIURA DE MINAS",
      id_estado: 31,
    },
    {
      id: 3130051,
      descricao: "ICARAI DE MINAS",
      id_estado: 31,
    },
    {
      id: 3130101,
      descricao: "IGARAPE",
      id_estado: 31,
    },
    {
      id: 3130200,
      descricao: "IGARATINGA",
      id_estado: 31,
    },
    {
      id: 3130408,
      descricao: "IJACI",
      id_estado: 31,
    },
    {
      id: 3130309,
      descricao: "IGUATAMA",
      id_estado: 31,
    },
    {
      id: 3130606,
      descricao: "INCONFIDENTES",
      id_estado: 31,
    },
    {
      id: 3130556,
      descricao: "IMBE DE MINAS",
      id_estado: 31,
    },
    {
      id: 3130507,
      descricao: "ILICINEA",
      id_estado: 31,
    },
    {
      id: 3130655,
      descricao: "INDAIABIRA",
      id_estado: 31,
    },
    {
      id: 3130705,
      descricao: "INDIANOPOLIS",
      id_estado: 31,
    },
    {
      id: 3130804,
      descricao: "INGAI",
      id_estado: 31,
    },
    {
      id: 3130903,
      descricao: "INHAPIM",
      id_estado: 31,
    },
    {
      id: 3131000,
      descricao: "INHAUMA",
      id_estado: 31,
    },
    {
      id: 3131109,
      descricao: "INIMUTABA",
      id_estado: 31,
    },
    {
      id: 3131158,
      descricao: "IPABA",
      id_estado: 31,
    },
    {
      id: 3131208,
      descricao: "IPANEMA",
      id_estado: 31,
    },
    {
      id: 3131307,
      descricao: "IPATINGA",
      id_estado: 31,
    },
    {
      id: 3131406,
      descricao: "IPIACU",
      id_estado: 31,
    },
    {
      id: 3131505,
      descricao: "IPUIUNA",
      id_estado: 31,
    },
    {
      id: 3131604,
      descricao: "IRAI DE MINAS",
      id_estado: 31,
    },
    {
      id: 3131703,
      descricao: "ITABIRA",
      id_estado: 31,
    },
    {
      id: 3131802,
      descricao: "ITABIRINHA",
      id_estado: 31,
    },
    {
      id: 3131901,
      descricao: "ITABIRITO",
      id_estado: 31,
    },
    {
      id: 3132107,
      descricao: "ITACARAMBI",
      id_estado: 31,
    },
    {
      id: 3132206,
      descricao: "ITAGUARA",
      id_estado: 31,
    },
    {
      id: 3132008,
      descricao: "ITACAMBIRA",
      id_estado: 31,
    },
    {
      id: 3132404,
      descricao: "ITAJUBA",
      id_estado: 31,
    },
    {
      id: 3132305,
      descricao: "ITAIPE",
      id_estado: 31,
    },
    {
      id: 3132503,
      descricao: "ITAMARANDIBA",
      id_estado: 31,
    },
    {
      id: 3132701,
      descricao: "ITAMBACURI",
      id_estado: 31,
    },
    {
      id: 3132602,
      descricao: "ITAMARATI DE MINAS",
      id_estado: 31,
    },
    {
      id: 3133105,
      descricao: "ITANHANDU",
      id_estado: 31,
    },
    {
      id: 3133006,
      descricao: "ITAMONTE",
      id_estado: 31,
    },
    {
      id: 3132909,
      descricao: "ITAMOGI",
      id_estado: 31,
    },
    {
      id: 3132800,
      descricao: "ITAMBE DO MATO DENTRO",
      id_estado: 31,
    },
    {
      id: 3133204,
      descricao: "ITANHOMI",
      id_estado: 31,
    },
    {
      id: 3133303,
      descricao: "ITAOBIM",
      id_estado: 31,
    },
    {
      id: 3133402,
      descricao: "ITAPAGIPE",
      id_estado: 31,
    },
    {
      id: 3133501,
      descricao: "ITAPECERICA",
      id_estado: 31,
    },
    {
      id: 3133600,
      descricao: "ITAPEVA",
      id_estado: 31,
    },
    {
      id: 3133709,
      descricao: "ITATIAIUCU",
      id_estado: 31,
    },
    {
      id: 3133758,
      descricao: "ITAU DE MINAS",
      id_estado: 31,
    },
    {
      id: 3133808,
      descricao: "ITAUNA",
      id_estado: 31,
    },
    {
      id: 3133907,
      descricao: "ITAVERAVA",
      id_estado: 31,
    },
    {
      id: 3134004,
      descricao: "ITINGA",
      id_estado: 31,
    },
    {
      id: 3134301,
      descricao: "ITUMIRIM",
      id_estado: 31,
    },
    {
      id: 3134103,
      descricao: "ITUETA",
      id_estado: 31,
    },
    {
      id: 3134202,
      descricao: "ITUIUTABA",
      id_estado: 31,
    },
    {
      id: 3134400,
      descricao: "ITURAMA",
      id_estado: 31,
    },
    {
      id: 3134509,
      descricao: "ITUTINGA",
      id_estado: 31,
    },
    {
      id: 3134608,
      descricao: "JABOTICATUBAS",
      id_estado: 31,
    },
    {
      id: 3134707,
      descricao: "JACINTO",
      id_estado: 31,
    },
    {
      id: 3134905,
      descricao: "JACUTINGA",
      id_estado: 31,
    },
    {
      id: 3134806,
      descricao: "JACUI",
      id_estado: 31,
    },
    {
      id: 3135001,
      descricao: "JAGUARACU",
      id_estado: 31,
    },
    {
      id: 3135050,
      descricao: "JAIBA",
      id_estado: 31,
    },
    {
      id: 3135076,
      descricao: "JAMPRUCA",
      id_estado: 31,
    },
    {
      id: 3135100,
      descricao: "JANAUBA",
      id_estado: 31,
    },
    {
      id: 3135209,
      descricao: "JANUARIA",
      id_estado: 31,
    },
    {
      id: 3135308,
      descricao: "JAPARAIBA",
      id_estado: 31,
    },
    {
      id: 3135357,
      descricao: "JAPONVAR",
      id_estado: 31,
    },
    {
      id: 3135407,
      descricao: "JECEABA",
      id_estado: 31,
    },
    {
      id: 3135456,
      descricao: "JENIPAPO DE MINAS",
      id_estado: 31,
    },
    {
      id: 3135506,
      descricao: "JEQUERI",
      id_estado: 31,
    },
    {
      id: 3135704,
      descricao: "JEQUITIBA",
      id_estado: 31,
    },
    {
      id: 3135605,
      descricao: "JEQUITAI",
      id_estado: 31,
    },
    {
      id: 3135803,
      descricao: "JEQUITINHONHA",
      id_estado: 31,
    },
    {
      id: 3135902,
      descricao: "JESUANIA",
      id_estado: 31,
    },
    {
      id: 3136009,
      descricao: "JOAIMA",
      id_estado: 31,
    },
    {
      id: 3136108,
      descricao: "JOANESIA",
      id_estado: 31,
    },
    {
      id: 3136207,
      descricao: "JOAO MONLEVADE",
      id_estado: 31,
    },
    {
      id: 3136306,
      descricao: "JOAO PINHEIRO",
      id_estado: 31,
    },
    {
      id: 3136405,
      descricao: "JOAQUIM FELICIO",
      id_estado: 31,
    },
    {
      id: 3136504,
      descricao: "JORDANIA",
      id_estado: 31,
    },
    {
      id: 3136520,
      descricao: "JOSE GONCALVES DE MINAS",
      id_estado: 31,
    },
    {
      id: 3136553,
      descricao: "JOSE RAYDAN",
      id_estado: 31,
    },
    {
      id: 3136603,
      descricao: "NOVA UNIAO",
      id_estado: 31,
    },
    {
      id: 3136579,
      descricao: "JOSENOPOLIS",
      id_estado: 31,
    },
    {
      id: 3136652,
      descricao: "JUATUBA",
      id_estado: 31,
    },
    {
      id: 3136702,
      descricao: "JUIZ DE FORA",
      id_estado: 31,
    },
    {
      id: 3136801,
      descricao: "JURAMENTO",
      id_estado: 31,
    },
    {
      id: 3136900,
      descricao: "JURUAIA",
      id_estado: 31,
    },
    {
      id: 3136959,
      descricao: "JUVENILIA",
      id_estado: 31,
    },
    {
      id: 3137106,
      descricao: "LAGAMAR",
      id_estado: 31,
    },
    {
      id: 3137007,
      descricao: "LADAINHA",
      id_estado: 31,
    },
    {
      id: 3137205,
      descricao: "LAGOA DA PRATA",
      id_estado: 31,
    },
    {
      id: 3137304,
      descricao: "LAGOA DOS PATOS",
      id_estado: 31,
    },
    {
      id: 3137403,
      descricao: "LAGOA DOURADA",
      id_estado: 31,
    },
    {
      id: 3137502,
      descricao: "LAGOA FORMOSA",
      id_estado: 31,
    },
    {
      id: 3137601,
      descricao: "LAGOA SANTA",
      id_estado: 31,
    },
    {
      id: 3137536,
      descricao: "LAGOA GRANDE",
      id_estado: 31,
    },
    {
      id: 3137700,
      descricao: "LAJINHA",
      id_estado: 31,
    },
    {
      id: 3138005,
      descricao: "LARANJAL",
      id_estado: 31,
    },
    {
      id: 3137908,
      descricao: "LAMIM",
      id_estado: 31,
    },
    {
      id: 3137809,
      descricao: "LAMBARI",
      id_estado: 31,
    },
    {
      id: 3138203,
      descricao: "LAVRAS",
      id_estado: 31,
    },
    {
      id: 3138104,
      descricao: "LASSANCE",
      id_estado: 31,
    },
    {
      id: 3138351,
      descricao: "LEME DO PRADO",
      id_estado: 31,
    },
    {
      id: 3138302,
      descricao: "LEANDRO FERREIRA",
      id_estado: 31,
    },
    {
      id: 3138401,
      descricao: "LEOPOLDINA",
      id_estado: 31,
    },
    {
      id: 3138500,
      descricao: "LIBERDADE",
      id_estado: 31,
    },
    {
      id: 3138609,
      descricao: "LIMA DUARTE",
      id_estado: 31,
    },
    {
      id: 3138658,
      descricao: "LONTRA",
      id_estado: 31,
    },
    {
      id: 3138625,
      descricao: "LIMEIRA DO OESTE",
      id_estado: 31,
    },
    {
      id: 3138682,
      descricao: "LUISLANDIA",
      id_estado: 31,
    },
    {
      id: 3138708,
      descricao: "LUMINARIAS",
      id_estado: 31,
    },
    {
      id: 3138674,
      descricao: "LUISBURGO",
      id_estado: 31,
    },
    {
      id: 3138906,
      descricao: "MACHACALIS",
      id_estado: 31,
    },
    {
      id: 3138807,
      descricao: "LUZ",
      id_estado: 31,
    },
    {
      id: 3139003,
      descricao: "MACHADO",
      id_estado: 31,
    },
    {
      id: 3139201,
      descricao: "MALACACHETA",
      id_estado: 31,
    },
    {
      id: 3139102,
      descricao: "MADRE DE DEUS DE MINAS",
      id_estado: 31,
    },
    {
      id: 3139300,
      descricao: "MANGA",
      id_estado: 31,
    },
    {
      id: 3139250,
      descricao: "MAMONAS",
      id_estado: 31,
    },
    {
      id: 3139409,
      descricao: "MANHUACU",
      id_estado: 31,
    },
    {
      id: 3139508,
      descricao: "MANHUMIRIM",
      id_estado: 31,
    },
    {
      id: 3139706,
      descricao: "MARAVILHAS",
      id_estado: 31,
    },
    {
      id: 3139607,
      descricao: "MANTENA",
      id_estado: 31,
    },
    {
      id: 3139904,
      descricao: "MARIA DA FE",
      id_estado: 31,
    },
    {
      id: 3139805,
      descricao: "MAR DE ESPANHA",
      id_estado: 31,
    },
    {
      id: 3140001,
      descricao: "MARIANA",
      id_estado: 31,
    },
    {
      id: 3140159,
      descricao: "MARIO CAMPOS",
      id_estado: 31,
    },
    {
      id: 3140209,
      descricao: "MARIPA DE MINAS",
      id_estado: 31,
    },
    {
      id: 3140100,
      descricao: "MARILAC",
      id_estado: 31,
    },
    {
      id: 3140407,
      descricao: "MARMELOPOLIS",
      id_estado: 31,
    },
    {
      id: 3140308,
      descricao: "MARLIERIA",
      id_estado: 31,
    },
    {
      id: 3140506,
      descricao: "MARTINHO CAMPOS",
      id_estado: 31,
    },
    {
      id: 3140530,
      descricao: "MARTINS SOARES",
      id_estado: 31,
    },
    {
      id: 3140605,
      descricao: "MATERLANDIA",
      id_estado: 31,
    },
    {
      id: 3140555,
      descricao: "MATA VERDE",
      id_estado: 31,
    },
    {
      id: 3140704,
      descricao: "MATEUS LEME",
      id_estado: 31,
    },
    {
      id: 3140803,
      descricao: "MATIAS BARBOSA",
      id_estado: 31,
    },
    {
      id: 3140902,
      descricao: "MATIPO",
      id_estado: 31,
    },
    {
      id: 3140852,
      descricao: "MATIAS CARDOSO",
      id_estado: 31,
    },
    {
      id: 3141009,
      descricao: "MATO VERDE",
      id_estado: 31,
    },
    {
      id: 3141108,
      descricao: "MATOZINHOS",
      id_estado: 31,
    },
    {
      id: 3141207,
      descricao: "MATUTINA",
      id_estado: 31,
    },
    {
      id: 3141405,
      descricao: "MEDINA",
      id_estado: 31,
    },
    {
      id: 3141306,
      descricao: "MEDEIROS",
      id_estado: 31,
    },
    {
      id: 3141702,
      descricao: "MESQUITA",
      id_estado: 31,
    },
    {
      id: 3141504,
      descricao: "MENDES PIMENTEL",
      id_estado: 31,
    },
    {
      id: 3141603,
      descricao: "MERCES",
      id_estado: 31,
    },
    {
      id: 3141801,
      descricao: "MINAS NOVAS",
      id_estado: 31,
    },
    {
      id: 3142007,
      descricao: "MIRABELA",
      id_estado: 31,
    },
    {
      id: 3141900,
      descricao: "MINDURI",
      id_estado: 31,
    },
    {
      id: 3142205,
      descricao: "MIRAI",
      id_estado: 31,
    },
    {
      id: 3142106,
      descricao: "MIRADOURO",
      id_estado: 31,
    },
    {
      id: 3142304,
      descricao: "MOEDA",
      id_estado: 31,
    },
    {
      id: 3142403,
      descricao: "MOEMA",
      id_estado: 31,
    },
    {
      id: 3142254,
      descricao: "MIRAVANIA",
      id_estado: 31,
    },
    {
      id: 3142601,
      descricao: "MONSENHOR PAULO",
      id_estado: 31,
    },
    {
      id: 3142502,
      descricao: "MONJOLOS",
      id_estado: 31,
    },
    {
      id: 3142700,
      descricao: "MONTALVANIA",
      id_estado: 31,
    },
    {
      id: 3142908,
      descricao: "MONTE AZUL",
      id_estado: 31,
    },
    {
      id: 3143005,
      descricao: "MONTE BELO",
      id_estado: 31,
    },
    {
      id: 3142809,
      descricao: "MONTE ALEGRE DE MINAS",
      id_estado: 31,
    },
    {
      id: 3143153,
      descricao: "MONTE FORMOSO",
      id_estado: 31,
    },
    {
      id: 3143104,
      descricao: "MONTE CARMELO",
      id_estado: 31,
    },
    {
      id: 3143203,
      descricao: "MONTE SANTO DE MINAS",
      id_estado: 31,
    },
    {
      id: 3143302,
      descricao: "MONTES CLAROS",
      id_estado: 31,
    },
    {
      id: 3143450,
      descricao: "MONTEZUMA",
      id_estado: 31,
    },
    {
      id: 3143401,
      descricao: "MONTE SIAO",
      id_estado: 31,
    },
    {
      id: 3143609,
      descricao: "MORRO DA GARCA",
      id_estado: 31,
    },
    {
      id: 3143500,
      descricao: "MORADA NOVA DE MINAS",
      id_estado: 31,
    },
    {
      id: 3143906,
      descricao: "MURIAE",
      id_estado: 31,
    },
    {
      id: 3143708,
      descricao: "MORRO DO PILAR",
      id_estado: 31,
    },
    {
      id: 3143807,
      descricao: "MUNHOZ",
      id_estado: 31,
    },
    {
      id: 3144003,
      descricao: "MUTUM",
      id_estado: 31,
    },
    {
      id: 3144102,
      descricao: "MUZAMBINHO",
      id_estado: 31,
    },
    {
      id: 3144201,
      descricao: "NACIP RAYDAN",
      id_estado: 31,
    },
    {
      id: 3144300,
      descricao: "NANUQUE",
      id_estado: 31,
    },
    {
      id: 3144359,
      descricao: "NAQUE",
      id_estado: 31,
    },
    {
      id: 3144409,
      descricao: "NATERCIA",
      id_estado: 31,
    },
    {
      id: 3144375,
      descricao: "NATALANDIA",
      id_estado: 31,
    },
    {
      id: 3144607,
      descricao: "NEPOMUCENO",
      id_estado: 31,
    },
    {
      id: 3144508,
      descricao: "NAZARENO",
      id_estado: 31,
    },
    {
      id: 3144656,
      descricao: "NINHEIRA",
      id_estado: 31,
    },
    {
      id: 3144805,
      descricao: "NOVA LIMA",
      id_estado: 31,
    },
    {
      id: 3144706,
      descricao: "NOVA ERA",
      id_estado: 31,
    },
    {
      id: 3144672,
      descricao: "NOVA BELEM",
      id_estado: 31,
    },
    {
      id: 3145000,
      descricao: "NOVA PONTE",
      id_estado: 31,
    },
    {
      id: 3144904,
      descricao: "NOVA MODICA",
      id_estado: 31,
    },
    {
      id: 3145059,
      descricao: "NOVA PORTEIRINHA",
      id_estado: 31,
    },
    {
      id: 3145208,
      descricao: "NOVA SERRANA",
      id_estado: 31,
    },
    {
      id: 3145109,
      descricao: "NOVA RESENDE",
      id_estado: 31,
    },
    {
      id: 3145307,
      descricao: "NOVO CRUZEIRO",
      id_estado: 31,
    },
    {
      id: 3145372,
      descricao: "NOVORIZONTE",
      id_estado: 31,
    },
    {
      id: 3145356,
      descricao: "NOVO ORIENTE DE MINAS",
      id_estado: 31,
    },
    {
      id: 3145505,
      descricao: "OLIMPIO NORONHA",
      id_estado: 31,
    },
    {
      id: 3145455,
      descricao: "OLHOSDAGUA",
      id_estado: 31,
    },
    {
      id: 3145406,
      descricao: "OLARIA",
      id_estado: 31,
    },
    {
      id: 3145703,
      descricao: "OLIVEIRA FORTES",
      id_estado: 31,
    },
    {
      id: 3145604,
      descricao: "OLIVEIRA",
      id_estado: 31,
    },
    {
      id: 3145851,
      descricao: "ORATORIOS",
      id_estado: 31,
    },
    {
      id: 3145802,
      descricao: "ONCA DE PITANGUI",
      id_estado: 31,
    },
    {
      id: 3146008,
      descricao: "OURO FINO",
      id_estado: 31,
    },
    {
      id: 3145877,
      descricao: "ORIZANIA",
      id_estado: 31,
    },
    {
      id: 3145901,
      descricao: "OURO BRANCO",
      id_estado: 31,
    },
    {
      id: 3146107,
      descricao: "OURO PRETO",
      id_estado: 31,
    },
    {
      id: 3146206,
      descricao: "OURO VERDE DE MINAS",
      id_estado: 31,
    },
    {
      id: 3146305,
      descricao: "PADRE PARAISO",
      id_estado: 31,
    },
    {
      id: 3146255,
      descricao: "PADRE CARVALHO",
      id_estado: 31,
    },
    {
      id: 3146404,
      descricao: "PAINEIRAS",
      id_estado: 31,
    },
    {
      id: 3146503,
      descricao: "PAINS",
      id_estado: 31,
    },
    {
      id: 3146602,
      descricao: "PAIVA",
      id_estado: 31,
    },
    {
      id: 3146701,
      descricao: "PALMA",
      id_estado: 31,
    },
    {
      id: 3146552,
      descricao: "PAI PEDRO",
      id_estado: 31,
    },
    {
      id: 3146750,
      descricao: "PALMOPOLIS",
      id_estado: 31,
    },
    {
      id: 3147105,
      descricao: "PARA DE MINAS",
      id_estado: 31,
    },
    {
      id: 3147006,
      descricao: "PARACATU",
      id_estado: 31,
    },
    {
      id: 3146909,
      descricao: "PAPAGAIOS",
      id_estado: 31,
    },
    {
      id: 3147204,
      descricao: "PARAGUACU",
      id_estado: 31,
    },
    {
      id: 3147303,
      descricao: "PARAISOPOLIS",
      id_estado: 31,
    },
    {
      id: 3147600,
      descricao: "PASSA QUATRO",
      id_estado: 31,
    },
    {
      id: 3147402,
      descricao: "PARAOPEBA",
      id_estado: 31,
    },
    {
      id: 3147501,
      descricao: "PASSABEM",
      id_estado: 31,
    },
    {
      id: 3147709,
      descricao: "PASSA TEMPO",
      id_estado: 31,
    },
    {
      id: 3147808,
      descricao: "PASSAVINTE",
      id_estado: 31,
    },
    {
      id: 3147907,
      descricao: "PASSOS",
      id_estado: 31,
    },
    {
      id: 3148004,
      descricao: "PATOS DE MINAS",
      id_estado: 31,
    },
    {
      id: 3147956,
      descricao: "PATIS",
      id_estado: 31,
    },
    {
      id: 3148103,
      descricao: "PATROCINIO",
      id_estado: 31,
    },
    {
      id: 3148202,
      descricao: "PATROCINIO DO MURIAE",
      id_estado: 31,
    },
    {
      id: 3148509,
      descricao: "PAVAO",
      id_estado: 31,
    },
    {
      id: 3148301,
      descricao: "PAULA CANDIDO",
      id_estado: 31,
    },
    {
      id: 3148400,
      descricao: "PAULISTAS",
      id_estado: 31,
    },
    {
      id: 3148608,
      descricao: "PECANHA",
      id_estado: 31,
    },
    {
      id: 3148707,
      descricao: "PEDRA AZUL",
      id_estado: 31,
    },
    {
      id: 3148905,
      descricao: "PEDRA DO INDAIA",
      id_estado: 31,
    },
    {
      id: 3148806,
      descricao: "PEDRA DO ANTA",
      id_estado: 31,
    },
    {
      id: 3148756,
      descricao: "PEDRA BONITA",
      id_estado: 31,
    },
    {
      id: 3149150,
      descricao: "PEDRAS DE MARIA DA CRUZ",
      id_estado: 31,
    },
    {
      id: 3149101,
      descricao: "PEDRALVA",
      id_estado: 31,
    },
    {
      id: 3149002,
      descricao: "PEDRA DOURADA",
      id_estado: 31,
    },
    {
      id: 3149309,
      descricao: "PEDRO LEOPOLDO",
      id_estado: 31,
    },
    {
      id: 3149200,
      descricao: "PEDRINOPOLIS",
      id_estado: 31,
    },
    {
      id: 3149507,
      descricao: "PEQUERI",
      id_estado: 31,
    },
    {
      id: 3149408,
      descricao: "PEDRO TEIXEIRA",
      id_estado: 31,
    },
    {
      id: 3149606,
      descricao: "PEQUI",
      id_estado: 31,
    },
    {
      id: 3149705,
      descricao: "PERDIGAO",
      id_estado: 31,
    },
    {
      id: 3149804,
      descricao: "PERDIZES",
      id_estado: 31,
    },
    {
      id: 3149952,
      descricao: "PERIQUITO",
      id_estado: 31,
    },
    {
      id: 3149903,
      descricao: "PERDOES",
      id_estado: 31,
    },
    {
      id: 3150000,
      descricao: "PESCADOR",
      id_estado: 31,
    },
    {
      id: 3150158,
      descricao: "PIEDADE DE CARATINGA",
      id_estado: 31,
    },
    {
      id: 3150109,
      descricao: "PIAU",
      id_estado: 31,
    },
    {
      id: 3150208,
      descricao: "PIEDADE DE PONTE NOVA",
      id_estado: 31,
    },
    {
      id: 3150406,
      descricao: "PIEDADE DOS GERAIS",
      id_estado: 31,
    },
    {
      id: 3150307,
      descricao: "PIEDADE DO RIO GRANDE",
      id_estado: 31,
    },
    {
      id: 3150570,
      descricao: "PINTOPOLIS",
      id_estado: 31,
    },
    {
      id: 3150539,
      descricao: "PINGODAGUA",
      id_estado: 31,
    },
    {
      id: 3150505,
      descricao: "PIMENTA",
      id_estado: 31,
    },
    {
      id: 3150604,
      descricao: "PIRACEMA",
      id_estado: 31,
    },
    {
      id: 3150703,
      descricao: "PIRAJUBA",
      id_estado: 31,
    },
    {
      id: 3150901,
      descricao: "PIRANGUCU",
      id_estado: 31,
    },
    {
      id: 3150802,
      descricao: "PIRANGA",
      id_estado: 31,
    },
    {
      id: 3151008,
      descricao: "PIRANGUINHO",
      id_estado: 31,
    },
    {
      id: 3151107,
      descricao: "PIRAPETINGA",
      id_estado: 31,
    },
    {
      id: 3151305,
      descricao: "PIRAUBA",
      id_estado: 31,
    },
    {
      id: 3151206,
      descricao: "PIRAPORA",
      id_estado: 31,
    },
    {
      id: 3151503,
      descricao: "PIUMHI",
      id_estado: 31,
    },
    {
      id: 3151404,
      descricao: "PITANGUI",
      id_estado: 31,
    },
    {
      id: 3151602,
      descricao: "PLANURA",
      id_estado: 31,
    },
    {
      id: 3151701,
      descricao: "POCO FUNDO",
      id_estado: 31,
    },
    {
      id: 3151800,
      descricao: "POCOS DE CALDAS",
      id_estado: 31,
    },
    {
      id: 3151909,
      descricao: "POCRANE",
      id_estado: 31,
    },
    {
      id: 3152006,
      descricao: "POMPEU",
      id_estado: 31,
    },
    {
      id: 3152105,
      descricao: "PONTE NOVA",
      id_estado: 31,
    },
    {
      id: 3152170,
      descricao: "PONTO DOS VOLANTES",
      id_estado: 31,
    },
    {
      id: 3152204,
      descricao: "PORTEIRINHA",
      id_estado: 31,
    },
    {
      id: 3152131,
      descricao: "PONTO CHIQUE",
      id_estado: 31,
    },
    {
      id: 3152303,
      descricao: "PORTO FIRME",
      id_estado: 31,
    },
    {
      id: 3152402,
      descricao: "POTE",
      id_estado: 31,
    },
    {
      id: 3152600,
      descricao: "POUSO ALTO",
      id_estado: 31,
    },
    {
      id: 3152501,
      descricao: "POUSO ALEGRE",
      id_estado: 31,
    },
    {
      id: 3152709,
      descricao: "PRADOS",
      id_estado: 31,
    },
    {
      id: 3152907,
      descricao: "PRATAPOLIS",
      id_estado: 31,
    },
    {
      id: 3152808,
      descricao: "PRATA",
      id_estado: 31,
    },
    {
      id: 3153004,
      descricao: "PRATINHA",
      id_estado: 31,
    },
    {
      id: 3153103,
      descricao: "PRESIDENTE BERNARDES",
      id_estado: 31,
    },
    {
      id: 3153202,
      descricao: "PRESIDENTE JUSCELINO",
      id_estado: 31,
    },
    {
      id: 3153301,
      descricao: "PRESIDENTE KUBITSCHEK",
      id_estado: 31,
    },
    {
      id: 3153400,
      descricao: "PRESIDENTE OLEGARIO",
      id_estado: 31,
    },
    {
      id: 3153509,
      descricao: "ALTO JEQUITIBA",
      id_estado: 31,
    },
    {
      id: 3153608,
      descricao: "PRUDENTE DE MORAIS",
      id_estado: 31,
    },
    {
      id: 3153707,
      descricao: "QUARTEL GERAL",
      id_estado: 31,
    },
    {
      id: 3154002,
      descricao: "RAUL SOARES",
      id_estado: 31,
    },
    {
      id: 3153905,
      descricao: "RAPOSOS",
      id_estado: 31,
    },
    {
      id: 3153806,
      descricao: "QUELUZITO",
      id_estado: 31,
    },
    {
      id: 3154101,
      descricao: "RECREIO",
      id_estado: 31,
    },
    {
      id: 3154150,
      descricao: "REDUTO",
      id_estado: 31,
    },
    {
      id: 3154200,
      descricao: "RESENDE COSTA",
      id_estado: 31,
    },
    {
      id: 3154309,
      descricao: "RESPLENDOR",
      id_estado: 31,
    },
    {
      id: 3154408,
      descricao: "RESSAQUINHA",
      id_estado: 31,
    },
    {
      id: 3154457,
      descricao: "RIACHINHO",
      id_estado: 31,
    },
    {
      id: 3154507,
      descricao: "RIACHO DOS MACHADOS",
      id_estado: 31,
    },
    {
      id: 3154705,
      descricao: "RIBEIRAO VERMELHO",
      id_estado: 31,
    },
    {
      id: 3154606,
      descricao: "RIBEIRAO DAS NEVES",
      id_estado: 31,
    },
    {
      id: 3154804,
      descricao: "RIO ACIMA",
      id_estado: 31,
    },
    {
      id: 3154903,
      descricao: "RIO CASCA",
      id_estado: 31,
    },
    {
      id: 3155108,
      descricao: "RIO DO PRADO",
      id_estado: 31,
    },
    {
      id: 3155009,
      descricao: "RIO DOCE",
      id_estado: 31,
    },
    {
      id: 3155207,
      descricao: "RIO ESPERA",
      id_estado: 31,
    },
    {
      id: 3155405,
      descricao: "RIO NOVO",
      id_estado: 31,
    },
    {
      id: 3155306,
      descricao: "RIO MANSO",
      id_estado: 31,
    },
    {
      id: 3155603,
      descricao: "RIO PARDO DE MINAS",
      id_estado: 31,
    },
    {
      id: 3155504,
      descricao: "RIO PARANAIBA",
      id_estado: 31,
    },
    {
      id: 3155702,
      descricao: "RIO PIRACICABA",
      id_estado: 31,
    },
    {
      id: 3155801,
      descricao: "RIO POMBA",
      id_estado: 31,
    },
    {
      id: 3156007,
      descricao: "RIO VERMELHO",
      id_estado: 31,
    },
    {
      id: 3155900,
      descricao: "RIO PRETO",
      id_estado: 31,
    },
    {
      id: 3156106,
      descricao: "RITAPOLIS",
      id_estado: 31,
    },
    {
      id: 3156205,
      descricao: "ROCHEDO DE MINAS",
      id_estado: 31,
    },
    {
      id: 3156452,
      descricao: "ROSARIO DA LIMEIRA",
      id_estado: 31,
    },
    {
      id: 3156304,
      descricao: "RODEIRO",
      id_estado: 31,
    },
    {
      id: 3156403,
      descricao: "ROMARIA",
      id_estado: 31,
    },
    {
      id: 3156601,
      descricao: "RUBIM",
      id_estado: 31,
    },
    {
      id: 3156502,
      descricao: "RUBELITA",
      id_estado: 31,
    },
    {
      id: 3156700,
      descricao: "SABARA",
      id_estado: 31,
    },
    {
      id: 3156809,
      descricao: "SABINOPOLIS",
      id_estado: 31,
    },
    {
      id: 3157005,
      descricao: "SALINAS",
      id_estado: 31,
    },
    {
      id: 3156908,
      descricao: "SACRAMENTO",
      id_estado: 31,
    },
    {
      id: 3157104,
      descricao: "SALTO DA DIVISA",
      id_estado: 31,
    },
    {
      id: 3157203,
      descricao: "SANTA BARBARA",
      id_estado: 31,
    },
    {
      id: 3157252,
      descricao: "SANTA BARBARA DO LESTE",
      id_estado: 31,
    },
    {
      id: 3157278,
      descricao: "SANTA BARBARA DO MONTE VERDE",
      id_estado: 31,
    },
    {
      id: 3157336,
      descricao: "SANTA CRUZ DE MINAS",
      id_estado: 31,
    },
    {
      id: 3157302,
      descricao: "SANTA BARBARA DO TUGURIO",
      id_estado: 31,
    },
    {
      id: 3157377,
      descricao: "SANTA CRUZ DE SALINAS",
      id_estado: 31,
    },
    {
      id: 3157401,
      descricao: "SANTA CRUZ DO ESCALVADO",
      id_estado: 31,
    },
    {
      id: 3157609,
      descricao: "SANTA FE DE MINAS",
      id_estado: 31,
    },
    {
      id: 3157500,
      descricao: "SANTA EFIGENIA DE MINAS",
      id_estado: 31,
    },
    {
      id: 3157708,
      descricao: "SANTA JULIANA",
      id_estado: 31,
    },
    {
      id: 3157807,
      descricao: "SANTA LUZIA",
      id_estado: 31,
    },
    {
      id: 3157658,
      descricao: "SANTA HELENA DE MINAS",
      id_estado: 31,
    },
    {
      id: 3157906,
      descricao: "SANTA MARGARIDA",
      id_estado: 31,
    },
    {
      id: 1722081,
      descricao: "WANDERLANDIA",
      id_estado: 17,
    },
    {
      id: 3158003,
      descricao: "SANTA MARIA DE ITABIRA",
      id_estado: 31,
    },
    {
      id: 3158102,
      descricao: "SANTA MARIA DO SALTO",
      id_estado: 31,
    },
    {
      id: 3158201,
      descricao: "SANTA MARIA DO SUACUI",
      id_estado: 31,
    },
    {
      id: 3158300,
      descricao: "SANTANA DA VARGEM",
      id_estado: 31,
    },
    {
      id: 3158409,
      descricao: "SANTANA DE CATAGUASES",
      id_estado: 31,
    },
    {
      id: 3158508,
      descricao: "SANTANA DE PIRAPAMA",
      id_estado: 31,
    },
    {
      id: 3158706,
      descricao: "SANTANA DO GARAMBEU",
      id_estado: 31,
    },
    {
      id: 3158607,
      descricao: "SANTANA DO DESERTO",
      id_estado: 31,
    },
    {
      id: 3158805,
      descricao: "SANTANA DO JACARE",
      id_estado: 31,
    },
    {
      id: 3158904,
      descricao: "SANTANA DO MANHUACU",
      id_estado: 31,
    },
    {
      id: 3158953,
      descricao: "SANTANA DO PARAISO",
      id_estado: 31,
    },
    {
      id: 3159001,
      descricao: "SANTANA DO RIACHO",
      id_estado: 31,
    },
    {
      id: 3159100,
      descricao: "SANTANA DOS MONTES",
      id_estado: 31,
    },
    {
      id: 3159209,
      descricao: "SANTA RITA DE CALDAS",
      id_estado: 31,
    },
    {
      id: 3159308,
      descricao: "SANTA RITA DE JACUTINGA",
      id_estado: 31,
    },
    {
      id: 3159357,
      descricao: "SANTA RITA DE MINAS",
      id_estado: 31,
    },
    {
      id: 3159407,
      descricao: "SANTA RITA DE IBITIPOCA",
      id_estado: 31,
    },
    {
      id: 3159506,
      descricao: "SANTA RITA DO ITUETO",
      id_estado: 31,
    },
    {
      id: 3159605,
      descricao: "SANTA RITA DO SAPUCAI",
      id_estado: 31,
    },
    {
      id: 3159704,
      descricao: "SANTA ROSA DA SERRA",
      id_estado: 31,
    },
    {
      id: 3159803,
      descricao: "SANTA VITORIA",
      id_estado: 31,
    },
    {
      id: 3159902,
      descricao: "SANTO ANTONIO DO AMPARO",
      id_estado: 31,
    },
    {
      id: 3160009,
      descricao: "SANTO ANTONIO DO AVENTUREIRO",
      id_estado: 31,
    },
    {
      id: 3160108,
      descricao: "SANTO ANTONIO DO GRAMA",
      id_estado: 31,
    },
    {
      id: 3160207,
      descricao: "SANTO ANTONIO DO ITAMBE",
      id_estado: 31,
    },
    {
      id: 3160306,
      descricao: "SANTO ANTONIO DO JACINTO",
      id_estado: 31,
    },
    {
      id: 3160405,
      descricao: "SANTO ANTONIO DO MONTE",
      id_estado: 31,
    },
    {
      id: 3160454,
      descricao: "SANTO ANTONIO DO RETIRO",
      id_estado: 31,
    },
    {
      id: 3160603,
      descricao: "SANTO HIPOLITO",
      id_estado: 31,
    },
    {
      id: 3160504,
      descricao: "SANTO ANTONIO DO RIO ABAIXO",
      id_estado: 31,
    },
    {
      id: 3160702,
      descricao: "SANTOS DUMONT",
      id_estado: 31,
    },
    {
      id: 3160900,
      descricao: "SAO BRAS DO SUACUI",
      id_estado: 31,
    },
    {
      id: 3160959,
      descricao: "SAO DOMINGOS DAS DORES",
      id_estado: 31,
    },
    {
      id: 3160801,
      descricao: "SAO BENTO ABADE",
      id_estado: 31,
    },
    {
      id: 3161007,
      descricao: "SAO DOMINGOS DO PRATA",
      id_estado: 31,
    },
    {
      id: 3161056,
      descricao: "SAO FELIX DE MINAS",
      id_estado: 31,
    },
    {
      id: 3161106,
      descricao: "SAO FRANCISCO",
      id_estado: 31,
    },
    {
      id: 3161205,
      descricao: "SAO FRANCISCO DE PAULA",
      id_estado: 31,
    },
    {
      id: 3161304,
      descricao: "SAO FRANCISCO DE SALES",
      id_estado: 31,
    },
    {
      id: 3161403,
      descricao: "SAO FRANCISCO DO GLORIA",
      id_estado: 31,
    },
    {
      id: 3161601,
      descricao: "SAO GERALDO DA PIEDADE",
      id_estado: 31,
    },
    {
      id: 3161502,
      descricao: "SAO GERALDO",
      id_estado: 31,
    },
    {
      id: 3161650,
      descricao: "SAO GERALDO DO BAIXIO",
      id_estado: 31,
    },
    {
      id: 3161700,
      descricao: "SAO GONCALO DO ABAETE",
      id_estado: 31,
    },
    {
      id: 3161908,
      descricao: "SAO GONCALO DO RIO ABAIXO",
      id_estado: 31,
    },
    {
      id: 3161809,
      descricao: "SAO GONCALO DO PARA",
      id_estado: 31,
    },
    {
      id: 3162005,
      descricao: "SAO GONCALO DO SAPUCAI",
      id_estado: 31,
    },
    {
      id: 3162104,
      descricao: "SAO GOTARDO",
      id_estado: 31,
    },
    {
      id: 3162203,
      descricao: "SAO JOAO BATISTA DO GLORIA",
      id_estado: 31,
    },
    {
      id: 3162302,
      descricao: "SAO JOAO DA MATA",
      id_estado: 31,
    },
    {
      id: 3162401,
      descricao: "SAO JOAO DA PONTE",
      id_estado: 31,
    },
    {
      id: 3162252,
      descricao: "SAO JOAO DA LAGOA",
      id_estado: 31,
    },
    {
      id: 3162500,
      descricao: "SAO JOAO DEL REI",
      id_estado: 31,
    },
    {
      id: 3162450,
      descricao: "SAO JOAO DAS MISSOES",
      id_estado: 31,
    },
    {
      id: 3162575,
      descricao: "SAO JOAO DO MANTENINHA",
      id_estado: 31,
    },
    {
      id: 3162559,
      descricao: "SAO JOAO DO MANHUACU",
      id_estado: 31,
    },
    {
      id: 3162609,
      descricao: "SAO JOAO DO ORIENTE",
      id_estado: 31,
    },
    {
      id: 3162658,
      descricao: "SAO JOAO DO PACUI",
      id_estado: 31,
    },
    {
      id: 3162807,
      descricao: "SAO JOAO EVANGELISTA",
      id_estado: 31,
    },
    {
      id: 3162708,
      descricao: "SAO JOAO DO PARAISO",
      id_estado: 31,
    },
    {
      id: 3162906,
      descricao: "SAO JOAO NEPOMUCENO",
      id_estado: 31,
    },
    {
      id: 3162948,
      descricao: "SAO JOSE DA BARRA",
      id_estado: 31,
    },
    {
      id: 3162922,
      descricao: "SAO JOAQUIM DE BICAS",
      id_estado: 31,
    },
    {
      id: 3162955,
      descricao: "SAO JOSE DA LAPA",
      id_estado: 31,
    },
    {
      id: 3163201,
      descricao: "SAO JOSE DO ALEGRE",
      id_estado: 31,
    },
    {
      id: 3163102,
      descricao: "SAO JOSE DA VARGINHA",
      id_estado: 31,
    },
    {
      id: 3163003,
      descricao: "SAO JOSE DA SAFIRA",
      id_estado: 31,
    },
    {
      id: 3163409,
      descricao: "SAO JOSE DO GOIABAL",
      id_estado: 31,
    },
    {
      id: 3163508,
      descricao: "SAO JOSE DO JACURI",
      id_estado: 31,
    },
    {
      id: 3163300,
      descricao: "SAO JOSE DO DIVINO",
      id_estado: 31,
    },
    {
      id: 3163805,
      descricao: "SAO MIGUEL DO ANTA",
      id_estado: 31,
    },
    {
      id: 3163607,
      descricao: "SAO JOSE DO MANTIMENTO",
      id_estado: 31,
    },
    {
      id: 3163706,
      descricao: "SAO LOURENCO",
      id_estado: 31,
    },
    {
      id: 3164001,
      descricao: "SAO PEDRO DOS FERROS",
      id_estado: 31,
    },
    {
      id: 3164100,
      descricao: "SAO PEDRO DO SUACUI",
      id_estado: 31,
    },
    {
      id: 3163904,
      descricao: "SAO PEDRO DA UNIAO",
      id_estado: 31,
    },
    {
      id: 3164308,
      descricao: "SAO ROQUE DE MINAS",
      id_estado: 31,
    },
    {
      id: 3164209,
      descricao: "SAO ROMAO",
      id_estado: 31,
    },
    {
      id: 3164431,
      descricao: "SAO SEBASTIAO DA VARGEM ALEGRE",
      id_estado: 31,
    },
    {
      id: 3164407,
      descricao: "SAO SEBASTIAO DA BELA VISTA",
      id_estado: 31,
    },
    {
      id: 3164506,
      descricao: "SAO SEBASTIAO DO MARANHAO",
      id_estado: 31,
    },
    {
      id: 3164472,
      descricao: "SAO SEBASTIAO DO ANTA",
      id_estado: 31,
    },
    {
      id: 3164605,
      descricao: "SAO SEBASTIAO DO OESTE",
      id_estado: 31,
    },
    {
      id: 3164704,
      descricao: "SAO SEBASTIAO DO PARAISO",
      id_estado: 31,
    },
    {
      id: 3164803,
      descricao: "SAO SEBASTIAO DO RIO PRETO",
      id_estado: 31,
    },
    {
      id: 3165008,
      descricao: "SAO TIAGO",
      id_estado: 31,
    },
    {
      id: 3164902,
      descricao: "SAO SEBASTIAO DO RIO VERDE",
      id_estado: 31,
    },
    {
      id: 3165206,
      descricao: "SAO THOME DAS LETRAS",
      id_estado: 31,
    },
    {
      id: 3165305,
      descricao: "SAO VICENTE DE MINAS",
      id_estado: 31,
    },
    {
      id: 3165107,
      descricao: "SAO TOMAS DE AQUINO",
      id_estado: 31,
    },
    {
      id: 3165537,
      descricao: "SARZEDO",
      id_estado: 31,
    },
    {
      id: 3165503,
      descricao: "SARDOA",
      id_estado: 31,
    },
    {
      id: 3165404,
      descricao: "SAPUCAIMIRIM",
      id_estado: 31,
    },
    {
      id: 3165560,
      descricao: "SEMPEIXE",
      id_estado: 31,
    },
    {
      id: 3165552,
      descricao: "SETUBINHA",
      id_estado: 31,
    },
    {
      id: 3165578,
      descricao: "SENADOR AMARAL",
      id_estado: 31,
    },
    {
      id: 3165701,
      descricao: "SENADOR FIRMINO",
      id_estado: 31,
    },
    {
      id: 3165800,
      descricao: "SENADOR JOSE BENTO",
      id_estado: 31,
    },
    {
      id: 3165602,
      descricao: "SENADOR CORTES",
      id_estado: 31,
    },
    {
      id: 3166006,
      descricao: "SENHORA DE OLIVEIRA",
      id_estado: 31,
    },
    {
      id: 3166105,
      descricao: "SENHORA DO PORTO",
      id_estado: 31,
    },
    {
      id: 3165909,
      descricao: "SENADOR MODESTINO GONCALVES",
      id_estado: 31,
    },
    {
      id: 3166303,
      descricao: "SERICITA",
      id_estado: 31,
    },
    {
      id: 3166204,
      descricao: "SENHORA DOS REMEDIOS",
      id_estado: 31,
    },
    {
      id: 3166501,
      descricao: "SERRA AZUL DE MINAS",
      id_estado: 31,
    },
    {
      id: 3166600,
      descricao: "SERRA DA SAUDADE",
      id_estado: 31,
    },
    {
      id: 3166402,
      descricao: "SERITINGA",
      id_estado: 31,
    },
    {
      id: 3166808,
      descricao: "SERRA DO SALITRE",
      id_estado: 31,
    },
    {
      id: 3166907,
      descricao: "SERRANIA",
      id_estado: 31,
    },
    {
      id: 3166709,
      descricao: "SERRA DOS AIMORES",
      id_estado: 31,
    },
    {
      id: 3167103,
      descricao: "SERRO",
      id_estado: 31,
    },
    {
      id: 3167004,
      descricao: "SERRANOS",
      id_estado: 31,
    },
    {
      id: 3166956,
      descricao: "SERRANOPOLIS DE MINAS",
      id_estado: 31,
    },
    {
      id: 3167202,
      descricao: "SETE LAGOAS",
      id_estado: 31,
    },
    {
      id: 3167301,
      descricao: "SILVEIRANIA",
      id_estado: 31,
    },
    {
      id: 3167608,
      descricao: "SIMONESIA",
      id_estado: 31,
    },
    {
      id: 3167509,
      descricao: "SIMAO PEREIRA",
      id_estado: 31,
    },
    {
      id: 3167400,
      descricao: "SILVIANOPOLIS",
      id_estado: 31,
    },
    {
      id: 3167707,
      descricao: "SOBRALIA",
      id_estado: 31,
    },
    {
      id: 3167905,
      descricao: "TABULEIRO",
      id_estado: 31,
    },
    {
      id: 3168002,
      descricao: "TAIOBEIRAS",
      id_estado: 31,
    },
    {
      id: 3167806,
      descricao: "SOLEDADE DE MINAS",
      id_estado: 31,
    },
    {
      id: 3168200,
      descricao: "TAPIRAI",
      id_estado: 31,
    },
    {
      id: 3168051,
      descricao: "TAPARUBA",
      id_estado: 31,
    },
    {
      id: 3168101,
      descricao: "TAPIRA",
      id_estado: 31,
    },
    {
      id: 3168408,
      descricao: "TARUMIRIM",
      id_estado: 31,
    },
    {
      id: 3168309,
      descricao: "TAQUARACU DE MINAS",
      id_estado: 31,
    },
    {
      id: 3168606,
      descricao: "TEOFILO OTONI",
      id_estado: 31,
    },
    {
      id: 3168507,
      descricao: "TEIXEIRAS",
      id_estado: 31,
    },
    {
      id: 3168705,
      descricao: "TIMOTEO",
      id_estado: 31,
    },
    {
      id: 3168804,
      descricao: "TIRADENTES",
      id_estado: 31,
    },
    {
      id: 3169000,
      descricao: "TOCANTINS",
      id_estado: 31,
    },
    {
      id: 3168903,
      descricao: "TIROS",
      id_estado: 31,
    },
    {
      id: 3169109,
      descricao: "TOLEDO",
      id_estado: 31,
    },
    {
      id: 3169059,
      descricao: "TOCOS DO MOJI",
      id_estado: 31,
    },
    {
      id: 3169208,
      descricao: "TOMBOS",
      id_estado: 31,
    },
    {
      id: 3169307,
      descricao: "TRES CORACOES",
      id_estado: 31,
    },
    {
      id: 3169356,
      descricao: "TRES MARIAS",
      id_estado: 31,
    },
    {
      id: 3169505,
      descricao: "TUMIRITINGA",
      id_estado: 31,
    },
    {
      id: 3169406,
      descricao: "TRES PONTAS",
      id_estado: 31,
    },
    {
      id: 3169703,
      descricao: "TURMALINA",
      id_estado: 31,
    },
    {
      id: 3169604,
      descricao: "TUPACIGUARA",
      id_estado: 31,
    },
    {
      id: 3169802,
      descricao: "TURVOLANDIA",
      id_estado: 31,
    },
    {
      id: 3170008,
      descricao: "UBAI",
      id_estado: 31,
    },
    {
      id: 3169901,
      descricao: "UBA",
      id_estado: 31,
    },
    {
      id: 3170057,
      descricao: "UBAPORANGA",
      id_estado: 31,
    },
    {
      id: 3170206,
      descricao: "UBERLANDIA",
      id_estado: 31,
    },
    {
      id: 3170107,
      descricao: "UBERABA",
      id_estado: 31,
    },
    {
      id: 3170404,
      descricao: "UNAI",
      id_estado: 31,
    },
    {
      id: 3170305,
      descricao: "UMBURATIBA",
      id_estado: 31,
    },
    {
      id: 3170503,
      descricao: "URUCANIA",
      id_estado: 31,
    },
    {
      id: 3170438,
      descricao: "UNIAO DE MINAS",
      id_estado: 31,
    },
    {
      id: 3170479,
      descricao: "URUANA DE MINAS",
      id_estado: 31,
    },
    {
      id: 3170578,
      descricao: "VARGEM ALEGRE",
      id_estado: 31,
    },
    {
      id: 3170529,
      descricao: "URUCUIA",
      id_estado: 31,
    },
    {
      id: 3170701,
      descricao: "VARGINHA",
      id_estado: 31,
    },
    {
      id: 3170651,
      descricao: "VARGEM GRANDE DO RIO PARDO",
      id_estado: 31,
    },
    {
      id: 3170602,
      descricao: "VARGEM BONITA",
      id_estado: 31,
    },
    {
      id: 3170909,
      descricao: "VARZELANDIA",
      id_estado: 31,
    },
    {
      id: 3170800,
      descricao: "VARZEA DA PALMA",
      id_estado: 31,
    },
    {
      id: 3170750,
      descricao: "VARJAO DE MINAS",
      id_estado: 31,
    },
    {
      id: 3171006,
      descricao: "VAZANTE",
      id_estado: 31,
    },
    {
      id: 3171071,
      descricao: "VEREDINHA",
      id_estado: 31,
    },
    {
      id: 3171030,
      descricao: "VERDELANDIA",
      id_estado: 31,
    },
    {
      id: 3171105,
      descricao: "VERISSIMO",
      id_estado: 31,
    },
    {
      id: 3171154,
      descricao: "VERMELHO NOVO",
      id_estado: 31,
    },
    {
      id: 3171303,
      descricao: "VICOSA",
      id_estado: 31,
    },
    {
      id: 3171204,
      descricao: "VESPASIANO",
      id_estado: 31,
    },
    {
      id: 3171402,
      descricao: "VIEIRAS",
      id_estado: 31,
    },
    {
      id: 3171600,
      descricao: "VIRGEM DA LAPA",
      id_estado: 31,
    },
    {
      id: 3171501,
      descricao: "MATHIAS LOBATO",
      id_estado: 31,
    },
    {
      id: 3171907,
      descricao: "VIRGOLANDIA",
      id_estado: 31,
    },
    {
      id: 3171808,
      descricao: "VIRGINOPOLIS",
      id_estado: 31,
    },
    {
      id: 3171709,
      descricao: "VIRGINIA",
      id_estado: 31,
    },
    {
      id: 3172103,
      descricao: "VOLTA GRANDE",
      id_estado: 31,
    },
    {
      id: 3172004,
      descricao: "VISCONDE DO RIO BRANCO",
      id_estado: 31,
    },
    {
      id: 3172202,
      descricao: "WENCESLAU BRAZ",
      id_estado: 31,
    },
    {
      id: 1500206,
      descricao: "ACARA",
      id_estado: 15,
    },
    {
      id: 1500107,
      descricao: "ABAETETUBA",
      id_estado: 15,
    },
    {
      id: 1500131,
      descricao: "ABEL FIGUEIREDO",
      id_estado: 15,
    },
    {
      id: 1500305,
      descricao: "AFUA",
      id_estado: 15,
    },
    {
      id: 1500404,
      descricao: "ALENQUER",
      id_estado: 15,
    },
    {
      id: 1500503,
      descricao: "ALMEIRIM",
      id_estado: 15,
    },
    {
      id: 1500347,
      descricao: "AGUA AZUL DO NORTE",
      id_estado: 15,
    },
    {
      id: 1500701,
      descricao: "ANAJAS",
      id_estado: 15,
    },
    {
      id: 1500602,
      descricao: "ALTAMIRA",
      id_estado: 15,
    },
    {
      id: 1500800,
      descricao: "ANANINDEUA",
      id_estado: 15,
    },
    {
      id: 1500859,
      descricao: "ANAPU",
      id_estado: 15,
    },
    {
      id: 1500909,
      descricao: "AUGUSTO CORREA",
      id_estado: 15,
    },
    {
      id: 1500958,
      descricao: "AURORA DO PARA",
      id_estado: 15,
    },
    {
      id: 1501006,
      descricao: "AVEIRO",
      id_estado: 15,
    },
    {
      id: 1501105,
      descricao: "BAGRE",
      id_estado: 15,
    },
    {
      id: 1501204,
      descricao: "BAIAO",
      id_estado: 15,
    },
    {
      id: 1501253,
      descricao: "BANNACH",
      id_estado: 15,
    },
    {
      id: 1501402,
      descricao: "BELEM",
      id_estado: 15,
    },
    {
      id: 1501303,
      descricao: "BARCARENA",
      id_estado: 15,
    },
    {
      id: 1501501,
      descricao: "BENEVIDES",
      id_estado: 15,
    },
    {
      id: 1501451,
      descricao: "BELTERRA",
      id_estado: 15,
    },
    {
      id: 1501600,
      descricao: "BONITO",
      id_estado: 15,
    },
    {
      id: 1501576,
      descricao: "BOM JESUS DO TOCANTINS",
      id_estado: 15,
    },
    {
      id: 1501709,
      descricao: "BRAGANCA",
      id_estado: 15,
    },
    {
      id: 1501758,
      descricao: "BREJO GRANDE DO ARAGUAIA",
      id_estado: 15,
    },
    {
      id: 1501725,
      descricao: "BRASIL NOVO",
      id_estado: 15,
    },
    {
      id: 1501808,
      descricao: "BREVES",
      id_estado: 15,
    },
    {
      id: 1501782,
      descricao: "BREU BRANCO",
      id_estado: 15,
    },
    {
      id: 1501956,
      descricao: "CACHOEIRA DO PIRIA",
      id_estado: 15,
    },
    {
      id: 1501907,
      descricao: "BUJARU",
      id_estado: 15,
    },
    {
      id: 1502103,
      descricao: "CAMETA",
      id_estado: 15,
    },
    {
      id: 1502004,
      descricao: "CACHOEIRA DO ARARI",
      id_estado: 15,
    },
    {
      id: 1502152,
      descricao: "CANAA DOS CARAJAS",
      id_estado: 15,
    },
    {
      id: 1502202,
      descricao: "CAPANEMA",
      id_estado: 15,
    },
    {
      id: 1502301,
      descricao: "CAPITAO POCO",
      id_estado: 15,
    },
    {
      id: 1502400,
      descricao: "CASTANHAL",
      id_estado: 15,
    },
    {
      id: 1502608,
      descricao: "COLARES",
      id_estado: 15,
    },
    {
      id: 1502509,
      descricao: "CHAVES",
      id_estado: 15,
    },
    {
      id: 1502756,
      descricao: "CONCORDIA DO PARA",
      id_estado: 15,
    },
    {
      id: 1502764,
      descricao: "CUMARU DO NORTE",
      id_estado: 15,
    },
    {
      id: 1502707,
      descricao: "CONCEICAO DO ARAGUAIA",
      id_estado: 15,
    },
    {
      id: 1502806,
      descricao: "CURRALINHO",
      id_estado: 15,
    },
    {
      id: 1502772,
      descricao: "CURIONOPOLIS",
      id_estado: 15,
    },
    {
      id: 1502905,
      descricao: "CURUCA",
      id_estado: 15,
    },
    {
      id: 1502855,
      descricao: "CURUA",
      id_estado: 15,
    },
    {
      id: 1502939,
      descricao: "DOM ELISEU",
      id_estado: 15,
    },
    {
      id: 1502954,
      descricao: "ELDORADO DOS CARAJAS",
      id_estado: 15,
    },
    {
      id: 1503044,
      descricao: "FLORESTA DO ARAGUAIA",
      id_estado: 15,
    },
    {
      id: 1503002,
      descricao: "FARO",
      id_estado: 15,
    },
    {
      id: 1503093,
      descricao: "GOIANESIA DO PARA",
      id_estado: 15,
    },
    {
      id: 1503077,
      descricao: "GARRAFAO DO NORTE",
      id_estado: 15,
    },
    {
      id: 1503101,
      descricao: "GURUPA",
      id_estado: 15,
    },
    {
      id: 1503200,
      descricao: "IGARAPEACU",
      id_estado: 15,
    },
    {
      id: 1503309,
      descricao: "IGARAPEMIRI",
      id_estado: 15,
    },
    {
      id: 1503408,
      descricao: "INHANGAPI",
      id_estado: 15,
    },
    {
      id: 1503457,
      descricao: "IPIXUNA DO PARA",
      id_estado: 15,
    },
    {
      id: 1503507,
      descricao: "IRITUIA",
      id_estado: 15,
    },
    {
      id: 1503754,
      descricao: "JACAREACANGA",
      id_estado: 15,
    },
    {
      id: 1503606,
      descricao: "ITAITUBA",
      id_estado: 15,
    },
    {
      id: 1503705,
      descricao: "ITUPIRANGA",
      id_estado: 15,
    },
    {
      id: 1503804,
      descricao: "JACUNDA",
      id_estado: 15,
    },
    {
      id: 1503903,
      descricao: "JURUTI",
      id_estado: 15,
    },
    {
      id: 1504000,
      descricao: "LIMOEIRO DO AJURU",
      id_estado: 15,
    },
    {
      id: 1504109,
      descricao: "MAGALHAES BARATA",
      id_estado: 15,
    },
    {
      id: 1504059,
      descricao: "MAE DO RIO",
      id_estado: 15,
    },
    {
      id: 1504208,
      descricao: "MARABA",
      id_estado: 15,
    },
    {
      id: 1504307,
      descricao: "MARACANA",
      id_estado: 15,
    },
    {
      id: 1504406,
      descricao: "MARAPANIM",
      id_estado: 15,
    },
    {
      id: 1504455,
      descricao: "MEDICILANDIA",
      id_estado: 15,
    },
    {
      id: 1504422,
      descricao: "MARITUBA",
      id_estado: 15,
    },
    {
      id: 1504505,
      descricao: "MELGACO",
      id_estado: 15,
    },
    {
      id: 1504604,
      descricao: "MOCAJUBA",
      id_estado: 15,
    },
    {
      id: 1504802,
      descricao: "MONTE ALEGRE",
      id_estado: 15,
    },
    {
      id: 1504703,
      descricao: "MOJU",
      id_estado: 15,
    },
    {
      id: 1504950,
      descricao: "NOVA ESPERANCA DO PIRIA",
      id_estado: 15,
    },
    {
      id: 1504901,
      descricao: "MUANA",
      id_estado: 15,
    },
    {
      id: 1505007,
      descricao: "NOVA TIMBOTEUA",
      id_estado: 15,
    },
    {
      id: 1504976,
      descricao: "NOVA IPIXUNA",
      id_estado: 15,
    },
    {
      id: 1505031,
      descricao: "NOVO PROGRESSO",
      id_estado: 15,
    },
    {
      id: 1505064,
      descricao: "NOVO REPARTIMENTO",
      id_estado: 15,
    },
    {
      id: 1505106,
      descricao: "OBIDOS",
      id_estado: 15,
    },
    {
      id: 1505205,
      descricao: "OEIRAS DO PARA",
      id_estado: 15,
    },
    {
      id: 1505304,
      descricao: "ORIXIMINA",
      id_estado: 15,
    },
    {
      id: 1505403,
      descricao: "OUREM",
      id_estado: 15,
    },
    {
      id: 1505437,
      descricao: "OURILANDIA DO NORTE",
      id_estado: 15,
    },
    {
      id: 1505486,
      descricao: "PACAJA",
      id_estado: 15,
    },
    {
      id: 1505502,
      descricao: "PARAGOMINAS",
      id_estado: 15,
    },
    {
      id: 1505494,
      descricao: "PALESTINA DO PARA",
      id_estado: 15,
    },
    {
      id: 1505536,
      descricao: "PARAUAPEBAS",
      id_estado: 15,
    },
    {
      id: 1505551,
      descricao: "PAU DARCO",
      id_estado: 15,
    },
    {
      id: 1505635,
      descricao: "PICARRA",
      id_estado: 15,
    },
    {
      id: 1505601,
      descricao: "PEIXEBOI",
      id_estado: 15,
    },
    {
      id: 1505809,
      descricao: "PORTEL",
      id_estado: 15,
    },
    {
      id: 1505700,
      descricao: "PONTA DE PEDRAS",
      id_estado: 15,
    },
    {
      id: 1505650,
      descricao: "PLACAS",
      id_estado: 15,
    },
    {
      id: 1505908,
      descricao: "PORTO DE MOZ",
      id_estado: 15,
    },
    {
      id: 1506104,
      descricao: "PRIMAVERA",
      id_estado: 15,
    },
    {
      id: 1506005,
      descricao: "PRAINHA",
      id_estado: 15,
    },
    {
      id: 1506112,
      descricao: "QUATIPURU",
      id_estado: 15,
    },
    {
      id: 1506138,
      descricao: "REDENCAO",
      id_estado: 15,
    },
    {
      id: 1506195,
      descricao: "RUROPOLIS",
      id_estado: 15,
    },
    {
      id: 1506161,
      descricao: "RIO MARIA",
      id_estado: 15,
    },
    {
      id: 1506187,
      descricao: "RONDON DO PARA",
      id_estado: 15,
    },
    {
      id: 1506302,
      descricao: "SALVATERRA",
      id_estado: 15,
    },
    {
      id: 1506203,
      descricao: "SALINOPOLIS",
      id_estado: 15,
    },
    {
      id: 1506351,
      descricao: "SANTA BARBARA DO PARA",
      id_estado: 15,
    },
    {
      id: 1506401,
      descricao: "SANTA CRUZ DO ARARI",
      id_estado: 15,
    },
    {
      id: 1506500,
      descricao: "SANTA ISABEL DO PARA",
      id_estado: 15,
    },
    {
      id: 1506559,
      descricao: "SANTA LUZIA DO PARA",
      id_estado: 15,
    },
    {
      id: 1506583,
      descricao: "SANTA MARIA DAS BARREIRAS",
      id_estado: 15,
    },
    {
      id: 1506708,
      descricao: "SANTANA DO ARAGUAIA",
      id_estado: 15,
    },
    {
      id: 1506609,
      descricao: "SANTA MARIA DO PARA",
      id_estado: 15,
    },
    {
      id: 1506807,
      descricao: "SANTAREM",
      id_estado: 15,
    },
    {
      id: 1507003,
      descricao: "SANTO ANTONIO DO TAUA",
      id_estado: 15,
    },
    {
      id: 1506906,
      descricao: "SANTAREM NOVO",
      id_estado: 15,
    },
    {
      id: 1507102,
      descricao: "SAO CAETANO DE ODIVELAS",
      id_estado: 15,
    },
    {
      id: 1507201,
      descricao: "SAO DOMINGOS DO CAPIM",
      id_estado: 15,
    },
    {
      id: 1507151,
      descricao: "SAO DOMINGOS DO ARAGUAIA",
      id_estado: 15,
    },
    {
      id: 1507300,
      descricao: "SAO FELIX DO XINGU",
      id_estado: 15,
    },
    {
      id: 1507409,
      descricao: "SAO FRANCISCO DO PARA",
      id_estado: 15,
    },
    {
      id: 1507458,
      descricao: "SAO GERALDO DO ARAGUAIA",
      id_estado: 15,
    },
    {
      id: 1507466,
      descricao: "SAO JOAO DA PONTA",
      id_estado: 15,
    },
    {
      id: 1507474,
      descricao: "SAO JOAO DE PIRABAS",
      id_estado: 15,
    },
    {
      id: 1507508,
      descricao: "SAO JOAO DO ARAGUAIA",
      id_estado: 15,
    },
    {
      id: 1507607,
      descricao: "SAO MIGUEL DO GUAMA",
      id_estado: 15,
    },
    {
      id: 1507706,
      descricao: "SAO SEBASTIAO DA BOA VISTA",
      id_estado: 15,
    },
    {
      id: 1507755,
      descricao: "SAPUCAIA",
      id_estado: 15,
    },
    {
      id: 1507805,
      descricao: "SENADOR JOSE PORFIRIO",
      id_estado: 15,
    },
    {
      id: 1507904,
      descricao: "SOURE",
      id_estado: 15,
    },
    {
      id: 1507953,
      descricao: "TAILANDIA",
      id_estado: 15,
    },
    {
      id: 1507961,
      descricao: "TERRA ALTA",
      id_estado: 15,
    },
    {
      id: 1507979,
      descricao: "TERRA SANTA",
      id_estado: 15,
    },
    {
      id: 1508001,
      descricao: "TOMEACU",
      id_estado: 15,
    },
    {
      id: 1508035,
      descricao: "TRACUATEUA",
      id_estado: 15,
    },
    {
      id: 1508050,
      descricao: "TRAIRAO",
      id_estado: 15,
    },
    {
      id: 1508084,
      descricao: "TUCUMA",
      id_estado: 15,
    },
    {
      id: 1508100,
      descricao: "TUCURUI",
      id_estado: 15,
    },
    {
      id: 1508126,
      descricao: "ULIANOPOLIS",
      id_estado: 15,
    },
    {
      id: 1508159,
      descricao: "URUARA",
      id_estado: 15,
    },
    {
      id: 1508209,
      descricao: "VIGIA",
      id_estado: 15,
    },
    {
      id: 1508308,
      descricao: "VISEU",
      id_estado: 15,
    },
    {
      id: 1508357,
      descricao: "VITORIA DO XINGU",
      id_estado: 15,
    },
    {
      id: 1508407,
      descricao: "XINGUARA",
      id_estado: 15,
    },
    {
      id: 2500106,
      descricao: "AGUA BRANCA",
      id_estado: 25,
    },
    {
      id: 2500205,
      descricao: "AGUIAR",
      id_estado: 25,
    },
    {
      id: 2500304,
      descricao: "ALAGOA GRANDE",
      id_estado: 25,
    },
    {
      id: 2500403,
      descricao: "ALAGOA NOVA",
      id_estado: 25,
    },
    {
      id: 2500536,
      descricao: "ALCANTIL",
      id_estado: 25,
    },
    {
      id: 2500577,
      descricao: "ALGODAO DE JANDAIRA",
      id_estado: 25,
    },
    {
      id: 2500502,
      descricao: "ALAGOINHA",
      id_estado: 25,
    },
    {
      id: 2500601,
      descricao: "ALHANDRA",
      id_estado: 25,
    },
    {
      id: 2500700,
      descricao: "SAO JOAO DO RIO DO PEIXE",
      id_estado: 25,
    },
    {
      id: 2500734,
      descricao: "AMPARO",
      id_estado: 25,
    },
    {
      id: 2500775,
      descricao: "APARECIDA",
      id_estado: 25,
    },
    {
      id: 2500908,
      descricao: "ARARA",
      id_estado: 25,
    },
    {
      id: 2501005,
      descricao: "ARARUNA",
      id_estado: 25,
    },
    {
      id: 2500809,
      descricao: "ARACAGI",
      id_estado: 25,
    },
    {
      id: 2501104,
      descricao: "AREIA",
      id_estado: 25,
    },
    {
      id: 2501153,
      descricao: "AREIA DE BARAUNAS",
      id_estado: 25,
    },
    {
      id: 2501203,
      descricao: "AREIAL",
      id_estado: 25,
    },
    {
      id: 2501302,
      descricao: "AROEIRAS",
      id_estado: 25,
    },
    {
      id: 2501351,
      descricao: "ASSUNCAO",
      id_estado: 25,
    },
    {
      id: 2501401,
      descricao: "BAIA DA TRAICAO",
      id_estado: 25,
    },
    {
      id: 2501500,
      descricao: "BANANEIRAS",
      id_estado: 25,
    },
    {
      id: 2501534,
      descricao: "BARAUNA",
      id_estado: 25,
    },
    {
      id: 2501575,
      descricao: "BARRA DE SANTANA",
      id_estado: 25,
    },
    {
      id: 2501708,
      descricao: "BARRA DE SAO MIGUEL",
      id_estado: 25,
    },
    {
      id: 2501609,
      descricao: "BARRA DE SANTA ROSA",
      id_estado: 25,
    },
    {
      id: 2501807,
      descricao: "BAYEUX",
      id_estado: 25,
    },
    {
      id: 2501906,
      descricao: "BELEM",
      id_estado: 25,
    },
    {
      id: 2502052,
      descricao: "BERNARDINO BATISTA",
      id_estado: 25,
    },
    {
      id: 2502003,
      descricao: "BELEM DO BREJO DO CRUZ",
      id_estado: 25,
    },
    {
      id: 2502102,
      descricao: "BOA VENTURA",
      id_estado: 25,
    },
    {
      id: 2502151,
      descricao: "BOA VISTA",
      id_estado: 25,
    },
    {
      id: 2502201,
      descricao: "BOM JESUS",
      id_estado: 25,
    },
    {
      id: 2502300,
      descricao: "BOM SUCESSO",
      id_estado: 25,
    },
    {
      id: 2502508,
      descricao: "BOQUEIRAO",
      id_estado: 25,
    },
    {
      id: 2502409,
      descricao: "BONITO DE SANTA FE",
      id_estado: 25,
    },
    {
      id: 2502607,
      descricao: "IGARACY",
      id_estado: 25,
    },
    {
      id: 2502904,
      descricao: "BREJO DOS SANTOS",
      id_estado: 25,
    },
    {
      id: 2502805,
      descricao: "BREJO DO CRUZ",
      id_estado: 25,
    },
    {
      id: 2502706,
      descricao: "BORBOREMA",
      id_estado: 25,
    },
    {
      id: 2503100,
      descricao: "CABACEIRAS",
      id_estado: 25,
    },
    {
      id: 2503001,
      descricao: "CAAPORA",
      id_estado: 25,
    },
    {
      id: 2503209,
      descricao: "CABEDELO",
      id_estado: 25,
    },
    {
      id: 2503308,
      descricao: "CACHOEIRA DOS INDIOS",
      id_estado: 25,
    },
    {
      id: 2503506,
      descricao: "CACIMBA DE DENTRO",
      id_estado: 25,
    },
    {
      id: 2503407,
      descricao: "CACIMBA DE AREIA",
      id_estado: 25,
    },
    {
      id: 2503555,
      descricao: "CACIMBAS",
      id_estado: 25,
    },
    {
      id: 2503704,
      descricao: "CAJAZEIRAS",
      id_estado: 25,
    },
    {
      id: 2503605,
      descricao: "CAICARA",
      id_estado: 25,
    },
    {
      id: 2503803,
      descricao: "CALDAS BRANDAO",
      id_estado: 25,
    },
    {
      id: 2503753,
      descricao: "CAJAZEIRINHAS",
      id_estado: 25,
    },
    {
      id: 2503902,
      descricao: "CAMALAU",
      id_estado: 25,
    },
    {
      id: 2504009,
      descricao: "CAMPINA GRANDE",
      id_estado: 25,
    },
    {
      id: 2504033,
      descricao: "CAPIM",
      id_estado: 25,
    },
    {
      id: 2504108,
      descricao: "CARRAPATEIRA",
      id_estado: 25,
    },
    {
      id: 2504074,
      descricao: "CARAUBAS",
      id_estado: 25,
    },
    {
      id: 2504207,
      descricao: "CATINGUEIRA",
      id_estado: 25,
    },
    {
      id: 2504157,
      descricao: "CASSERENGUE",
      id_estado: 25,
    },
    {
      id: 2504306,
      descricao: "CATOLE DO ROCHA",
      id_estado: 25,
    },
    {
      id: 2504405,
      descricao: "CONCEICAO",
      id_estado: 25,
    },
    {
      id: 2504355,
      descricao: "CATURITE",
      id_estado: 25,
    },
    {
      id: 2504504,
      descricao: "CONDADO",
      id_estado: 25,
    },
    {
      id: 2504702,
      descricao: "CONGO",
      id_estado: 25,
    },
    {
      id: 2504801,
      descricao: "COREMAS",
      id_estado: 25,
    },
    {
      id: 2504603,
      descricao: "CONDE",
      id_estado: 25,
    },
    {
      id: 2504900,
      descricao: "CRUZ DO ESPIRITO SANTO",
      id_estado: 25,
    },
    {
      id: 2504850,
      descricao: "COXIXOLA",
      id_estado: 25,
    },
    {
      id: 2505105,
      descricao: "CUITE",
      id_estado: 25,
    },
    {
      id: 2505006,
      descricao: "CUBATI",
      id_estado: 25,
    },
    {
      id: 2505238,
      descricao: "CUITE DE MAMANGUAPE",
      id_estado: 25,
    },
    {
      id: 2505204,
      descricao: "CUITEGI",
      id_estado: 25,
    },
    {
      id: 2505352,
      descricao: "DAMIAO",
      id_estado: 25,
    },
    {
      id: 2505303,
      descricao: "CURRAL VELHO",
      id_estado: 25,
    },
    {
      id: 2505279,
      descricao: "CURRAL DE CIMA",
      id_estado: 25,
    },
    {
      id: 2505501,
      descricao: "VISTA SERRANA",
      id_estado: 25,
    },
    {
      id: 2505402,
      descricao: "DESTERRO",
      id_estado: 25,
    },
    {
      id: 2505709,
      descricao: "DONA INES",
      id_estado: 25,
    },
    {
      id: 2505600,
      descricao: "DIAMANTE",
      id_estado: 25,
    },
    {
      id: 2505907,
      descricao: "EMAS",
      id_estado: 25,
    },
    {
      id: 2505808,
      descricao: "DUAS ESTRADAS",
      id_estado: 25,
    },
    {
      id: 2506103,
      descricao: "FAGUNDES",
      id_estado: 25,
    },
    {
      id: 2506202,
      descricao: "FREI MARTINHO",
      id_estado: 25,
    },
    {
      id: 2506004,
      descricao: "ESPERANCA",
      id_estado: 25,
    },
    {
      id: 2506301,
      descricao: "GUARABIRA",
      id_estado: 25,
    },
    {
      id: 2506251,
      descricao: "GADO BRAVO",
      id_estado: 25,
    },
    {
      id: 2506400,
      descricao: "GURINHEM",
      id_estado: 25,
    },
    {
      id: 2506608,
      descricao: "IBIARA",
      id_estado: 25,
    },
    {
      id: 2506509,
      descricao: "GURJAO",
      id_estado: 25,
    },
    {
      id: 2506707,
      descricao: "IMACULADA",
      id_estado: 25,
    },
    {
      id: 2506905,
      descricao: "ITABAIANA",
      id_estado: 25,
    },
    {
      id: 2506806,
      descricao: "INGA",
      id_estado: 25,
    },
    {
      id: 2507002,
      descricao: "ITAPORANGA",
      id_estado: 25,
    },
    {
      id: 2507200,
      descricao: "ITATUBA",
      id_estado: 25,
    },
    {
      id: 2507101,
      descricao: "ITAPOROROCA",
      id_estado: 25,
    },
    {
      id: 2507408,
      descricao: "JERICO",
      id_estado: 25,
    },
    {
      id: 2507309,
      descricao: "JACARAU",
      id_estado: 25,
    },
    {
      id: 2507507,
      descricao: "JOAO PESSOA",
      id_estado: 25,
    },
    {
      id: 2507606,
      descricao: "JUAREZ TAVORA",
      id_estado: 25,
    },
    {
      id: 2507804,
      descricao: "JUNCO DO SERIDO",
      id_estado: 25,
    },
    {
      id: 2507705,
      descricao: "JUAZEIRINHO",
      id_estado: 25,
    },
    {
      id: 2508000,
      descricao: "JURU",
      id_estado: 25,
    },
    {
      id: 2507903,
      descricao: "JURIPIRANGA",
      id_estado: 25,
    },
    {
      id: 2508208,
      descricao: "LAGOA DE DENTRO",
      id_estado: 25,
    },
    {
      id: 2508109,
      descricao: "LAGOA",
      id_estado: 25,
    },
    {
      id: 2508307,
      descricao: "LAGOA SECA",
      id_estado: 25,
    },
    {
      id: 2508505,
      descricao: "LIVRAMENTO",
      id_estado: 25,
    },
    {
      id: 2508406,
      descricao: "LASTRO",
      id_estado: 25,
    },
    {
      id: 2508604,
      descricao: "LUCENA",
      id_estado: 25,
    },
    {
      id: 2508554,
      descricao: "LOGRADOURO",
      id_estado: 25,
    },
    {
      id: 2508802,
      descricao: "MALTA",
      id_estado: 25,
    },
    {
      id: 2508703,
      descricao: "MAE DAGUA",
      id_estado: 25,
    },
    {
      id: 2508901,
      descricao: "MAMANGUAPE",
      id_estado: 25,
    },
    {
      id: 2509057,
      descricao: "MARCACAO",
      id_estado: 25,
    },
    {
      id: 2509008,
      descricao: "MANAIRA",
      id_estado: 25,
    },
    {
      id: 2509107,
      descricao: "MARI",
      id_estado: 25,
    },
    {
      id: 2509156,
      descricao: "MARIZOPOLIS",
      id_estado: 25,
    },
    {
      id: 2509305,
      descricao: "MATARACA",
      id_estado: 25,
    },
    {
      id: 2509206,
      descricao: "MASSARANDUBA",
      id_estado: 25,
    },
    {
      id: 2509396,
      descricao: "MATUREIA",
      id_estado: 25,
    },
    {
      id: 2509370,
      descricao: "MATO GROSSO",
      id_estado: 25,
    },
    {
      id: 2509339,
      descricao: "MATINHAS",
      id_estado: 25,
    },
    {
      id: 2509404,
      descricao: "MOGEIRO",
      id_estado: 25,
    },
    {
      id: 2509503,
      descricao: "MONTADAS",
      id_estado: 25,
    },
    {
      id: 2509701,
      descricao: "MONTEIRO",
      id_estado: 25,
    },
    {
      id: 2509602,
      descricao: "MONTE HOREBE",
      id_estado: 25,
    },
    {
      id: 2509800,
      descricao: "MULUNGU",
      id_estado: 25,
    },
    {
      id: 2509909,
      descricao: "NATUBA",
      id_estado: 25,
    },
    {
      id: 2510204,
      descricao: "NOVA OLINDA",
      id_estado: 25,
    },
    {
      id: 2510105,
      descricao: "NOVA FLORESTA",
      id_estado: 25,
    },
    {
      id: 2510006,
      descricao: "NAZAREZINHO",
      id_estado: 25,
    },
    {
      id: 2510303,
      descricao: "NOVA PALMEIRA",
      id_estado: 25,
    },
    {
      id: 2510402,
      descricao: "OLHO DAGUA",
      id_estado: 25,
    },
    {
      id: 2510501,
      descricao: "OLIVEDOS",
      id_estado: 25,
    },
    {
      id: 2510600,
      descricao: "OURO VELHO",
      id_estado: 25,
    },
    {
      id: 2510709,
      descricao: "PASSAGEM",
      id_estado: 25,
    },
    {
      id: 2510659,
      descricao: "PARARI",
      id_estado: 25,
    },
    {
      id: 2510907,
      descricao: "PAULISTA",
      id_estado: 25,
    },
    {
      id: 2510808,
      descricao: "PATOS",
      id_estado: 25,
    },
    {
      id: 2511004,
      descricao: "PEDRA BRANCA",
      id_estado: 25,
    },
    {
      id: 2511301,
      descricao: "PIANCO",
      id_estado: 25,
    },
    {
      id: 2511202,
      descricao: "PEDRAS DE FOGO",
      id_estado: 25,
    },
    {
      id: 2511103,
      descricao: "PEDRA LAVRADA",
      id_estado: 25,
    },
    {
      id: 2511400,
      descricao: "PICUI",
      id_estado: 25,
    },
    {
      id: 2511509,
      descricao: "PILAR",
      id_estado: 25,
    },
    {
      id: 2511608,
      descricao: "PILOES",
      id_estado: 25,
    },
    {
      id: 2511806,
      descricao: "PIRPIRITUBA",
      id_estado: 25,
    },
    {
      id: 2511707,
      descricao: "PILOEZINHOS",
      id_estado: 25,
    },
    {
      id: 2512002,
      descricao: "POCINHOS",
      id_estado: 25,
    },
    {
      id: 2511905,
      descricao: "PITIMBU",
      id_estado: 25,
    },
    {
      id: 2512036,
      descricao: "POCO DANTAS",
      id_estado: 25,
    },
    {
      id: 2512077,
      descricao: "POCO DE JOSE DE MOURA",
      id_estado: 25,
    },
    {
      id: 2512200,
      descricao: "PRATA",
      id_estado: 25,
    },
    {
      id: 2512101,
      descricao: "POMBAL",
      id_estado: 25,
    },
    {
      id: 2512408,
      descricao: "PUXINANA",
      id_estado: 25,
    },
    {
      id: 2512309,
      descricao: "PRINCESA ISABEL",
      id_estado: 25,
    },
    {
      id: 2512507,
      descricao: "QUEIMADAS",
      id_estado: 25,
    },
    {
      id: 2512705,
      descricao: "REMIGIO",
      id_estado: 25,
    },
    {
      id: 2512606,
      descricao: "QUIXABA",
      id_estado: 25,
    },
    {
      id: 2512747,
      descricao: "RIACHAO",
      id_estado: 25,
    },
    {
      id: 2512721,
      descricao: "PEDRO REGIS",
      id_estado: 25,
    },
    {
      id: 2512754,
      descricao: "RIACHAO DO BACAMARTE",
      id_estado: 25,
    },
    {
      id: 2512762,
      descricao: "RIACHAO DO POCO",
      id_estado: 25,
    },
    {
      id: 2512804,
      descricao: "RIACHO DOS CAVALOS",
      id_estado: 25,
    },
    {
      id: 2512903,
      descricao: "RIO TINTO",
      id_estado: 25,
    },
    {
      id: 2512788,
      descricao: "RIACHO DE SANTO ANTONIO",
      id_estado: 25,
    },
    {
      id: 2513000,
      descricao: "SALGADINHO",
      id_estado: 25,
    },
    {
      id: 2513109,
      descricao: "SALGADO DE SAO FELIX",
      id_estado: 25,
    },
    {
      id: 2513158,
      descricao: "SANTA CECILIA",
      id_estado: 25,
    },
    {
      id: 2513208,
      descricao: "SANTA CRUZ",
      id_estado: 25,
    },
    {
      id: 2513356,
      descricao: "SANTA INES",
      id_estado: 25,
    },
    {
      id: 2513307,
      descricao: "SANTA HELENA",
      id_estado: 25,
    },
    {
      id: 2513406,
      descricao: "SANTA LUZIA",
      id_estado: 25,
    },
    {
      id: 2513505,
      descricao: "SANTANA DE MANGUEIRA",
      id_estado: 25,
    },
    {
      id: 2513604,
      descricao: "SANTANA DOS GARROTES",
      id_estado: 25,
    },
    {
      id: 2513703,
      descricao: "SANTA RITA",
      id_estado: 25,
    },
    {
      id: 2513653,
      descricao: "SANTAREM",
      id_estado: 25,
    },
    {
      id: 2513851,
      descricao: "SANTO ANDRE",
      id_estado: 25,
    },
    {
      id: 2513802,
      descricao: "SANTA TERESINHA",
      id_estado: 25,
    },
    {
      id: 2513927,
      descricao: "SAO BENTINHO",
      id_estado: 25,
    },
    {
      id: 2513901,
      descricao: "SAO BENTO",
      id_estado: 25,
    },
    {
      id: 2513943,
      descricao: "SAO DOMINGOS DO CARIRI",
      id_estado: 25,
    },
    {
      id: 2513968,
      descricao: "SAO DOMINGOS",
      id_estado: 25,
    },
    {
      id: 2513984,
      descricao: "SAO FRANCISCO",
      id_estado: 25,
    },
    {
      id: 2514008,
      descricao: "SAO JOAO DO CARIRI",
      id_estado: 25,
    },
    {
      id: 2514206,
      descricao: "SAO JOSE DA LAGOA TAPADA",
      id_estado: 25,
    },
    {
      id: 2514107,
      descricao: "SAO JOAO DO TIGRE",
      id_estado: 25,
    },
    {
      id: 2514305,
      descricao: "SAO JOSE DE CAIANA",
      id_estado: 25,
    },
    {
      id: 2514404,
      descricao: "SAO JOSE DE ESPINHARAS",
      id_estado: 25,
    },
    {
      id: 2514503,
      descricao: "SAO JOSE DE PIRANHAS",
      id_estado: 25,
    },
    {
      id: 2514453,
      descricao: "SAO JOSE DOS RAMOS",
      id_estado: 25,
    },
    {
      id: 2514552,
      descricao: "SAO JOSE DE PRINCESA",
      id_estado: 25,
    },
    {
      id: 2514602,
      descricao: "SAO JOSE DO BONFIM",
      id_estado: 25,
    },
    {
      id: 2514651,
      descricao: "SAO JOSE DO BREJO DO CRUZ",
      id_estado: 25,
    },
    {
      id: 2514701,
      descricao: "SAO JOSE DO SABUGI",
      id_estado: 25,
    },
    {
      id: 2514800,
      descricao: "SAO JOSE DOS CORDEIROS",
      id_estado: 25,
    },
    {
      id: 2515005,
      descricao: "SAO MIGUEL DE TAIPU",
      id_estado: 25,
    },
    {
      id: 2515104,
      descricao: "SAO SEBASTIAO DE LAGOA DE ROCA",
      id_estado: 25,
    },
    {
      id: 2514909,
      descricao: "SAO MAMEDE",
      id_estado: 25,
    },
    {
      id: 2515203,
      descricao: "SAO SEBASTIAO DO UMBUZEIRO",
      id_estado: 25,
    },
    {
      id: 2515302,
      descricao: "SAPE",
      id_estado: 25,
    },
    {
      id: 2515401,
      descricao: "SERIDO",
      id_estado: 25,
    },
    {
      id: 2515500,
      descricao: "SERRA BRANCA",
      id_estado: 25,
    },
    {
      id: 2515609,
      descricao: "SERRA DA RAIZ",
      id_estado: 25,
    },
    {
      id: 2515708,
      descricao: "SERRA GRANDE",
      id_estado: 25,
    },
    {
      id: 2515807,
      descricao: "SERRA REDONDA",
      id_estado: 25,
    },
    {
      id: 2515930,
      descricao: "SERTAOZINHO",
      id_estado: 25,
    },
    {
      id: 2515906,
      descricao: "SERRARIA",
      id_estado: 25,
    },
    {
      id: 2516102,
      descricao: "SOLEDADE",
      id_estado: 25,
    },
    {
      id: 2516003,
      descricao: "SOLANEA",
      id_estado: 25,
    },
    {
      id: 2515971,
      descricao: "SOBRADO",
      id_estado: 25,
    },
    {
      id: 2516151,
      descricao: "SOSSEGO",
      id_estado: 25,
    },
    {
      id: 2516201,
      descricao: "SOUSA",
      id_estado: 25,
    },
    {
      id: 2516300,
      descricao: "SUME",
      id_estado: 25,
    },
    {
      id: 2516409,
      descricao: "CAMPO DE SANTANA",
      id_estado: 25,
    },
    {
      id: 2516508,
      descricao: "TAPEROA",
      id_estado: 25,
    },
    {
      id: 2516607,
      descricao: "TAVARES",
      id_estado: 25,
    },
    {
      id: 2516755,
      descricao: "TENORIO",
      id_estado: 25,
    },
    {
      id: 2516706,
      descricao: "TEIXEIRA",
      id_estado: 25,
    },
    {
      id: 2516904,
      descricao: "UIRAUNA",
      id_estado: 25,
    },
    {
      id: 2517001,
      descricao: "UMBUZEIRO",
      id_estado: 25,
    },
    {
      id: 2516805,
      descricao: "TRIUNFO",
      id_estado: 25,
    },
    {
      id: 2517407,
      descricao: "ZABELE",
      id_estado: 25,
    },
    {
      id: 2517209,
      descricao: "VIEIROPOLIS",
      id_estado: 25,
    },
    {
      id: 2517100,
      descricao: "VARZEA",
      id_estado: 25,
    },
    {
      id: 4100202,
      descricao: "ADRIANOPOLIS",
      id_estado: 41,
    },
    {
      id: 4100103,
      descricao: "ABATIA",
      id_estado: 41,
    },
    {
      id: 4100301,
      descricao: "AGUDOS DO SUL",
      id_estado: 41,
    },
    {
      id: 4100400,
      descricao: "ALMIRANTE TAMANDARE",
      id_estado: 41,
    },
    {
      id: 4100509,
      descricao: "ALTONIA",
      id_estado: 41,
    },
    {
      id: 4100459,
      descricao: "ALTAMIRA DO PARANA",
      id_estado: 41,
    },
    {
      id: 4100707,
      descricao: "ALTO PIQUIRI",
      id_estado: 41,
    },
    {
      id: 4100608,
      descricao: "ALTO PARANA",
      id_estado: 41,
    },
    {
      id: 4100806,
      descricao: "ALVORADA DO SUL",
      id_estado: 41,
    },
    {
      id: 4100905,
      descricao: "AMAPORA",
      id_estado: 41,
    },
    {
      id: 4101051,
      descricao: "ANAHY",
      id_estado: 41,
    },
    {
      id: 4101002,
      descricao: "AMPERE",
      id_estado: 41,
    },
    {
      id: 4101101,
      descricao: "ANDIRA",
      id_estado: 41,
    },
    {
      id: 4101150,
      descricao: "ANGULO",
      id_estado: 41,
    },
    {
      id: 4101200,
      descricao: "ANTONINA",
      id_estado: 41,
    },
    {
      id: 4101309,
      descricao: "ANTONIO OLINTO",
      id_estado: 41,
    },
    {
      id: 4101408,
      descricao: "APUCARANA",
      id_estado: 41,
    },
    {
      id: 4101606,
      descricao: "ARAPOTI",
      id_estado: 41,
    },
    {
      id: 4101507,
      descricao: "ARAPONGAS",
      id_estado: 41,
    },
    {
      id: 4101655,
      descricao: "ARAPUA",
      id_estado: 41,
    },
    {
      id: 4101705,
      descricao: "ARARUNA",
      id_estado: 41,
    },
    {
      id: 4101853,
      descricao: "ARIRANHA DO IVAI",
      id_estado: 41,
    },
    {
      id: 4101804,
      descricao: "ARAUCARIA",
      id_estado: 41,
    },
    {
      id: 4101903,
      descricao: "ASSAI",
      id_estado: 41,
    },
    {
      id: 4102109,
      descricao: "ASTORGA",
      id_estado: 41,
    },
    {
      id: 4102000,
      descricao: "ASSIS CHATEAUBRIAND",
      id_estado: 41,
    },
    {
      id: 4102208,
      descricao: "ATALAIA",
      id_estado: 41,
    },
    {
      id: 4102406,
      descricao: "BANDEIRANTES",
      id_estado: 41,
    },
    {
      id: 4102307,
      descricao: "BALSA NOVA",
      id_estado: 41,
    },
    {
      id: 4102505,
      descricao: "BARBOSA FERRAZ",
      id_estado: 41,
    },
    {
      id: 4102604,
      descricao: "BARRACAO",
      id_estado: 41,
    },
    {
      id: 4102703,
      descricao: "BARRA DO JACARE",
      id_estado: 41,
    },
    {
      id: 4102752,
      descricao: "BELA VISTA DA CAROBA",
      id_estado: 41,
    },
    {
      id: 4102802,
      descricao: "BELA VISTA DO PARAISO",
      id_estado: 41,
    },
    {
      id: 4102901,
      descricao: "BITURUNA",
      id_estado: 41,
    },
    {
      id: 4103008,
      descricao: "BOA ESPERANCA",
      id_estado: 41,
    },
    {
      id: 4103024,
      descricao: "BOA ESPERANCA DO IGUACU",
      id_estado: 41,
    },
    {
      id: 4103057,
      descricao: "BOA VISTA DA APARECIDA",
      id_estado: 41,
    },
    {
      id: 4103040,
      descricao: "BOA VENTURA DE SAO ROQUE",
      id_estado: 41,
    },
    {
      id: 4103156,
      descricao: "BOM JESUS DO SUL",
      id_estado: 41,
    },
    {
      id: 4103107,
      descricao: "BOCAIUVA DO SUL",
      id_estado: 41,
    },
    {
      id: 4103222,
      descricao: "BOM SUCESSO DO SUL",
      id_estado: 41,
    },
    {
      id: 4103305,
      descricao: "BORRAZOPOLIS",
      id_estado: 41,
    },
    {
      id: 4103206,
      descricao: "BOM SUCESSO",
      id_estado: 41,
    },
    {
      id: 4103370,
      descricao: "BRASILANDIA DO SUL",
      id_estado: 41,
    },
    {
      id: 4103404,
      descricao: "CAFEARA",
      id_estado: 41,
    },
    {
      id: 4103354,
      descricao: "BRAGANEY",
      id_estado: 41,
    },
    {
      id: 4103479,
      descricao: "CAFEZAL DO SUL",
      id_estado: 41,
    },
    {
      id: 4103453,
      descricao: "CAFELANDIA",
      id_estado: 41,
    },
    {
      id: 4103503,
      descricao: "CALIFORNIA",
      id_estado: 41,
    },
    {
      id: 4103602,
      descricao: "CAMBARA",
      id_estado: 41,
    },
    {
      id: 4103800,
      descricao: "CAMBIRA",
      id_estado: 41,
    },
    {
      id: 4103701,
      descricao: "CAMBE",
      id_estado: 41,
    },
    {
      id: 4103909,
      descricao: "CAMPINA DA LAGOA",
      id_estado: 41,
    },
    {
      id: 4103958,
      descricao: "CAMPINA DO SIMAO",
      id_estado: 41,
    },
    {
      id: 4104006,
      descricao: "CAMPINA GRANDE DO SUL",
      id_estado: 41,
    },
    {
      id: 4104055,
      descricao: "CAMPO BONITO",
      id_estado: 41,
    },
    {
      id: 4104105,
      descricao: "CAMPO DO TENENTE",
      id_estado: 41,
    },
    {
      id: 4104204,
      descricao: "CAMPO LARGO",
      id_estado: 41,
    },
    {
      id: 4104253,
      descricao: "CAMPO MAGRO",
      id_estado: 41,
    },
    {
      id: 4104303,
      descricao: "CAMPO MOURAO",
      id_estado: 41,
    },
    {
      id: 4104402,
      descricao: "CANDIDO DE ABREU",
      id_estado: 41,
    },
    {
      id: 4104428,
      descricao: "CANDOI",
      id_estado: 41,
    },
    {
      id: 4104501,
      descricao: "CAPANEMA",
      id_estado: 41,
    },
    {
      id: 4104451,
      descricao: "CANTAGALO",
      id_estado: 41,
    },
    {
      id: 4104600,
      descricao: "CAPITAO LEONIDAS MARQUES",
      id_estado: 41,
    },
    {
      id: 4104659,
      descricao: "CARAMBEI",
      id_estado: 41,
    },
    {
      id: 4104709,
      descricao: "CARLOPOLIS",
      id_estado: 41,
    },
    {
      id: 4104808,
      descricao: "CASCAVEL",
      id_estado: 41,
    },
    {
      id: 4104907,
      descricao: "CASTRO",
      id_estado: 41,
    },
    {
      id: 4105003,
      descricao: "CATANDUVAS",
      id_estado: 41,
    },
    {
      id: 4105102,
      descricao: "CENTENARIO DO SUL",
      id_estado: 41,
    },
    {
      id: 4105201,
      descricao: "CERRO AZUL",
      id_estado: 41,
    },
    {
      id: 4105409,
      descricao: "CHOPINZINHO",
      id_estado: 41,
    },
    {
      id: 4105300,
      descricao: "CEU AZUL",
      id_estado: 41,
    },
    {
      id: 4105508,
      descricao: "CIANORTE",
      id_estado: 41,
    },
    {
      id: 4105607,
      descricao: "CIDADE GAUCHA",
      id_estado: 41,
    },
    {
      id: 4105706,
      descricao: "CLEVELANDIA",
      id_estado: 41,
    },
    {
      id: 4105805,
      descricao: "COLOMBO",
      id_estado: 41,
    },
    {
      id: 4105904,
      descricao: "COLORADO",
      id_estado: 41,
    },
    {
      id: 4106001,
      descricao: "CONGONHINHAS",
      id_estado: 41,
    },
    {
      id: 4106100,
      descricao: "CONSELHEIRO MAIRINCK",
      id_estado: 41,
    },
    {
      id: 4106209,
      descricao: "CONTENDA",
      id_estado: 41,
    },
    {
      id: 4106308,
      descricao: "CORBELIA",
      id_estado: 41,
    },
    {
      id: 4106407,
      descricao: "CORNELIO PROCOPIO",
      id_estado: 41,
    },
    {
      id: 4106456,
      descricao: "CORONEL DOMINGOS SOARES",
      id_estado: 41,
    },
    {
      id: 4106506,
      descricao: "CORONEL VIVIDA",
      id_estado: 41,
    },
    {
      id: 4106555,
      descricao: "CORUMBATAI DO SUL",
      id_estado: 41,
    },
    {
      id: 4106605,
      descricao: "CRUZEIRO DO OESTE",
      id_estado: 41,
    },
    {
      id: 4106571,
      descricao: "CRUZEIRO DO IGUACU",
      id_estado: 41,
    },
    {
      id: 4106704,
      descricao: "CRUZEIRO DO SUL",
      id_estado: 41,
    },
    {
      id: 4106803,
      descricao: "CRUZ MACHADO",
      id_estado: 41,
    },
    {
      id: 4106852,
      descricao: "CRUZMALTINA",
      id_estado: 41,
    },
    {
      id: 4106902,
      descricao: "CURITIBA",
      id_estado: 41,
    },
    {
      id: 4107009,
      descricao: "CURIUVA",
      id_estado: 41,
    },
    {
      id: 4107108,
      descricao: "DIAMANTE DO NORTE",
      id_estado: 41,
    },
    {
      id: 4107124,
      descricao: "DIAMANTE DO SUL",
      id_estado: 41,
    },
    {
      id: 4107157,
      descricao: "DIAMANTE DOESTE",
      id_estado: 41,
    },
    {
      id: 4107207,
      descricao: "DOIS VIZINHOS",
      id_estado: 41,
    },
    {
      id: 4107256,
      descricao: "DOURADINA",
      id_estado: 41,
    },
    {
      id: 4107405,
      descricao: "ENEAS MARQUES",
      id_estado: 41,
    },
    {
      id: 4107306,
      descricao: "DOUTOR CAMARGO",
      id_estado: 41,
    },
    {
      id: 4107504,
      descricao: "ENGENHEIRO BELTRAO",
      id_estado: 41,
    },
    {
      id: 4107520,
      descricao: "ESPERANCA NOVA",
      id_estado: 41,
    },
    {
      id: 4107538,
      descricao: "ENTRE RIOS DO OESTE",
      id_estado: 41,
    },
    {
      id: 4107546,
      descricao: "ESPIGAO ALTO DO IGUACU",
      id_estado: 41,
    },
    {
      id: 4107603,
      descricao: "FAXINAL",
      id_estado: 41,
    },
    {
      id: 4107553,
      descricao: "FAROL",
      id_estado: 41,
    },
    {
      id: 4107652,
      descricao: "FAZENDA RIO GRANDE",
      id_estado: 41,
    },
    {
      id: 4107702,
      descricao: "FENIX",
      id_estado: 41,
    },
    {
      id: 4107751,
      descricao: "FIGUEIRA",
      id_estado: 41,
    },
    {
      id: 4107736,
      descricao: "FERNANDES PINHEIRO",
      id_estado: 41,
    },
    {
      id: 4107850,
      descricao: "FLOR DA SERRA DO SUL",
      id_estado: 41,
    },
    {
      id: 4107801,
      descricao: "FLORAI",
      id_estado: 41,
    },
    {
      id: 4108007,
      descricao: "FLORESTOPOLIS",
      id_estado: 41,
    },
    {
      id: 4108106,
      descricao: "FLORIDA",
      id_estado: 41,
    },
    {
      id: 4107900,
      descricao: "FLORESTA",
      id_estado: 41,
    },
    {
      id: 4108304,
      descricao: "FOZ DO IGUACU",
      id_estado: 41,
    },
    {
      id: 4108205,
      descricao: "FORMOSA DO OESTE",
      id_estado: 41,
    },
    {
      id: 4108320,
      descricao: "FRANCISCO ALVES",
      id_estado: 41,
    },
    {
      id: 4108403,
      descricao: "FRANCISCO BELTRAO",
      id_estado: 41,
    },
    {
      id: 4108452,
      descricao: "FOZ DO JORDAO",
      id_estado: 41,
    },
    {
      id: 4108551,
      descricao: "GODOY MOREIRA",
      id_estado: 41,
    },
    {
      id: 4108601,
      descricao: "GOIOERE",
      id_estado: 41,
    },
    {
      id: 4108502,
      descricao: "GENERAL CARNEIRO",
      id_estado: 41,
    },
    {
      id: 4108700,
      descricao: "GRANDES RIOS",
      id_estado: 41,
    },
    {
      id: 4108650,
      descricao: "GOIOXIM",
      id_estado: 41,
    },
    {
      id: 4108809,
      descricao: "GUAIRA",
      id_estado: 41,
    },
    {
      id: 4108908,
      descricao: "GUAIRACA",
      id_estado: 41,
    },
    {
      id: 4109104,
      descricao: "GUAPOREMA",
      id_estado: 41,
    },
    {
      id: 4109005,
      descricao: "GUAPIRAMA",
      id_estado: 41,
    },
    {
      id: 4108957,
      descricao: "GUAMIRANGA",
      id_estado: 41,
    },
    {
      id: 4109302,
      descricao: "GUARANIACU",
      id_estado: 41,
    },
    {
      id: 4109203,
      descricao: "GUARACI",
      id_estado: 41,
    },
    {
      id: 4109401,
      descricao: "GUARAPUAVA",
      id_estado: 41,
    },
    {
      id: 4109500,
      descricao: "GUARAQUECABA",
      id_estado: 41,
    },
    {
      id: 4109658,
      descricao: "HONORIO SERPA",
      id_estado: 41,
    },
    {
      id: 4109609,
      descricao: "GUARATUBA",
      id_estado: 41,
    },
    {
      id: 4109708,
      descricao: "IBAITI",
      id_estado: 41,
    },
    {
      id: 4109807,
      descricao: "IBIPORA",
      id_estado: 41,
    },
    {
      id: 4109757,
      descricao: "IBEMA",
      id_estado: 41,
    },
    {
      id: 4110003,
      descricao: "IGUARACU",
      id_estado: 41,
    },
    {
      id: 4109906,
      descricao: "ICARAIMA",
      id_estado: 41,
    },
    {
      id: 4110078,
      descricao: "IMBAU",
      id_estado: 41,
    },
    {
      id: 4110102,
      descricao: "IMBITUVA",
      id_estado: 41,
    },
    {
      id: 4110052,
      descricao: "IGUATU",
      id_estado: 41,
    },
    {
      id: 4110300,
      descricao: "INAJA",
      id_estado: 41,
    },
    {
      id: 4110201,
      descricao: "INACIO MARTINS",
      id_estado: 41,
    },
    {
      id: 4110508,
      descricao: "IPIRANGA",
      id_estado: 41,
    },
    {
      id: 4110409,
      descricao: "INDIANOPOLIS",
      id_estado: 41,
    },
    {
      id: 4110656,
      descricao: "IRACEMA DO OESTE",
      id_estado: 41,
    },
    {
      id: 4110607,
      descricao: "IPORA",
      id_estado: 41,
    },
    {
      id: 4110706,
      descricao: "IRATI",
      id_estado: 41,
    },
    {
      id: 4110904,
      descricao: "ITAGUAJE",
      id_estado: 41,
    },
    {
      id: 4110805,
      descricao: "IRETAMA",
      id_estado: 41,
    },
    {
      id: 4110953,
      descricao: "ITAIPULANDIA",
      id_estado: 41,
    },
    {
      id: 4111001,
      descricao: "ITAMBARACA",
      id_estado: 41,
    },
    {
      id: 4111209,
      descricao: "ITAPEJARA DOESTE",
      id_estado: 41,
    },
    {
      id: 4111100,
      descricao: "ITAMBE",
      id_estado: 41,
    },
    {
      id: 4111308,
      descricao: "ITAUNA DO SUL",
      id_estado: 41,
    },
    {
      id: 4111258,
      descricao: "ITAPERUCU",
      id_estado: 41,
    },
    {
      id: 4111407,
      descricao: "IVAI",
      id_estado: 41,
    },
    {
      id: 4111555,
      descricao: "IVATE",
      id_estado: 41,
    },
    {
      id: 4111506,
      descricao: "IVAIPORA",
      id_estado: 41,
    },
    {
      id: 4111704,
      descricao: "JABOTI",
      id_estado: 41,
    },
    {
      id: 4111605,
      descricao: "IVATUBA",
      id_estado: 41,
    },
    {
      id: 4111902,
      descricao: "JAGUAPITA",
      id_estado: 41,
    },
    {
      id: 4111803,
      descricao: "JACAREZINHO",
      id_estado: 41,
    },
    {
      id: 4112009,
      descricao: "JAGUARIAIVA",
      id_estado: 41,
    },
    {
      id: 4112108,
      descricao: "JANDAIA DO SUL",
      id_estado: 41,
    },
    {
      id: 4112306,
      descricao: "JAPIRA",
      id_estado: 41,
    },
    {
      id: 4112207,
      descricao: "JANIOPOLIS",
      id_estado: 41,
    },
    {
      id: 4112603,
      descricao: "JARDIM OLINDA",
      id_estado: 41,
    },
    {
      id: 4112504,
      descricao: "JARDIM ALEGRE",
      id_estado: 41,
    },
    {
      id: 4112405,
      descricao: "JAPURA",
      id_estado: 41,
    },
    {
      id: 4112751,
      descricao: "JESUITAS",
      id_estado: 41,
    },
    {
      id: 4112702,
      descricao: "JATAIZINHO",
      id_estado: 41,
    },
    {
      id: 4112900,
      descricao: "JUNDIAI DO SUL",
      id_estado: 41,
    },
    {
      id: 4112801,
      descricao: "JOAQUIM TAVORA",
      id_estado: 41,
    },
    {
      id: 4112959,
      descricao: "JURANDA",
      id_estado: 41,
    },
    {
      id: 4113007,
      descricao: "JUSSARA",
      id_estado: 41,
    },
    {
      id: 4113205,
      descricao: "LAPA",
      id_estado: 41,
    },
    {
      id: 4113106,
      descricao: "KALORE",
      id_estado: 41,
    },
    {
      id: 4113304,
      descricao: "LARANJEIRAS DO SUL",
      id_estado: 41,
    },
    {
      id: 4113254,
      descricao: "LARANJAL",
      id_estado: 41,
    },
    {
      id: 4113452,
      descricao: "LINDOESTE",
      id_estado: 41,
    },
    {
      id: 4113403,
      descricao: "LEOPOLIS",
      id_estado: 41,
    },
    {
      id: 4113429,
      descricao: "LIDIANOPOLIS",
      id_estado: 41,
    },
    {
      id: 4113700,
      descricao: "LONDRINA",
      id_estado: 41,
    },
    {
      id: 4113601,
      descricao: "LOBATO",
      id_estado: 41,
    },
    {
      id: 4113502,
      descricao: "LOANDA",
      id_estado: 41,
    },
    {
      id: 4113809,
      descricao: "LUPIONOPOLIS",
      id_estado: 41,
    },
    {
      id: 4113759,
      descricao: "LUNARDELLI",
      id_estado: 41,
    },
    {
      id: 4113734,
      descricao: "LUIZIANA",
      id_estado: 41,
    },
    {
      id: 4113908,
      descricao: "MALLET",
      id_estado: 41,
    },
    {
      id: 4114203,
      descricao: "MANDAGUARI",
      id_estado: 41,
    },
    {
      id: 4114104,
      descricao: "MANDAGUACU",
      id_estado: 41,
    },
    {
      id: 4114005,
      descricao: "MAMBORE",
      id_estado: 41,
    },
    {
      id: 4114401,
      descricao: "MANGUEIRINHA",
      id_estado: 41,
    },
    {
      id: 4114351,
      descricao: "MANFRINOPOLIS",
      id_estado: 41,
    },
    {
      id: 4114302,
      descricao: "MANDIRITUBA",
      id_estado: 41,
    },
    {
      id: 4114500,
      descricao: "MANOEL RIBAS",
      id_estado: 41,
    },
    {
      id: 4114609,
      descricao: "MARECHAL CANDIDO RONDON",
      id_estado: 41,
    },
    {
      id: 4114807,
      descricao: "MARIALVA",
      id_estado: 41,
    },
    {
      id: 4114708,
      descricao: "MARIA HELENA",
      id_estado: 41,
    },
    {
      id: 4114906,
      descricao: "MARILANDIA DO SUL",
      id_estado: 41,
    },
    {
      id: 4115002,
      descricao: "MARILENA",
      id_estado: 41,
    },
    {
      id: 4115200,
      descricao: "MARINGA",
      id_estado: 41,
    },
    {
      id: 4115101,
      descricao: "MARILUZ",
      id_estado: 41,
    },
    {
      id: 4115309,
      descricao: "MARIOPOLIS",
      id_estado: 41,
    },
    {
      id: 4115358,
      descricao: "MARIPA",
      id_estado: 41,
    },
    {
      id: 4115507,
      descricao: "MARUMBI",
      id_estado: 41,
    },
    {
      id: 4115457,
      descricao: "MARQUINHO",
      id_estado: 41,
    },
    {
      id: 4115408,
      descricao: "MARMELEIRO",
      id_estado: 41,
    },
    {
      id: 4115705,
      descricao: "MATINHOS",
      id_estado: 41,
    },
    {
      id: 4115606,
      descricao: "MATELANDIA",
      id_estado: 41,
    },
    {
      id: 4115804,
      descricao: "MEDIANEIRA",
      id_estado: 41,
    },
    {
      id: 4115739,
      descricao: "MATO RICO",
      id_estado: 41,
    },
    {
      id: 4115754,
      descricao: "MAUA DA SERRA",
      id_estado: 41,
    },
    {
      id: 4115903,
      descricao: "MIRADOR",
      id_estado: 41,
    },
    {
      id: 4115853,
      descricao: "MERCEDES",
      id_estado: 41,
    },
    {
      id: 4116000,
      descricao: "MIRASELVA",
      id_estado: 41,
    },
    {
      id: 4116059,
      descricao: "MISSAL",
      id_estado: 41,
    },
    {
      id: 4116208,
      descricao: "MORRETES",
      id_estado: 41,
    },
    {
      id: 4116109,
      descricao: "MOREIRA SALES",
      id_estado: 41,
    },
    {
      id: 4116406,
      descricao: "NOSSA SENHORA DAS GRACAS",
      id_estado: 41,
    },
    {
      id: 4116505,
      descricao: "NOVA ALIANCA DO IVAI",
      id_estado: 41,
    },
    {
      id: 4116307,
      descricao: "MUNHOZ DE MELO",
      id_estado: 41,
    },
    {
      id: 4116703,
      descricao: "NOVA AURORA",
      id_estado: 41,
    },
    {
      id: 4116604,
      descricao: "NOVA AMERICA DA COLINA",
      id_estado: 41,
    },
    {
      id: 4116802,
      descricao: "NOVA CANTU",
      id_estado: 41,
    },
    {
      id: 4116950,
      descricao: "NOVA ESPERANCA DO SUDOESTE",
      id_estado: 41,
    },
    {
      id: 4116901,
      descricao: "NOVA ESPERANCA",
      id_estado: 41,
    },
    {
      id: 4117057,
      descricao: "NOVA LARANJEIRAS",
      id_estado: 41,
    },
    {
      id: 4117008,
      descricao: "NOVA FATIMA",
      id_estado: 41,
    },
    {
      id: 4117107,
      descricao: "NOVA LONDRINA",
      id_estado: 41,
    },
    {
      id: 4117206,
      descricao: "NOVA OLIMPIA",
      id_estado: 41,
    },
    {
      id: 4117222,
      descricao: "NOVA SANTA ROSA",
      id_estado: 41,
    },
    {
      id: 4117214,
      descricao: "NOVA SANTA BARBARA",
      id_estado: 41,
    },
    {
      id: 4117271,
      descricao: "NOVA TEBAS",
      id_estado: 41,
    },
    {
      id: 4117255,
      descricao: "NOVA PRATA DO IGUACU",
      id_estado: 41,
    },
    {
      id: 4117305,
      descricao: "ORTIGUEIRA",
      id_estado: 41,
    },
    {
      id: 4117297,
      descricao: "NOVO ITACOLOMI",
      id_estado: 41,
    },
    {
      id: 4117404,
      descricao: "OURIZONA",
      id_estado: 41,
    },
    {
      id: 4117453,
      descricao: "OURO VERDE DO OESTE",
      id_estado: 41,
    },
    {
      id: 4117503,
      descricao: "PAICANDU",
      id_estado: 41,
    },
    {
      id: 4117602,
      descricao: "PALMAS",
      id_estado: 41,
    },
    {
      id: 4117701,
      descricao: "PALMEIRA",
      id_estado: 41,
    },
    {
      id: 4117800,
      descricao: "PALMITAL",
      id_estado: 41,
    },
    {
      id: 4118006,
      descricao: "PARAISO DO NORTE",
      id_estado: 41,
    },
    {
      id: 4117909,
      descricao: "PALOTINA",
      id_estado: 41,
    },
    {
      id: 4118303,
      descricao: "PARANAPOEMA",
      id_estado: 41,
    },
    {
      id: 4118204,
      descricao: "PARANAGUA",
      id_estado: 41,
    },
    {
      id: 4118105,
      descricao: "PARANACITY",
      id_estado: 41,
    },
    {
      id: 4118451,
      descricao: "PATO BRAGADO",
      id_estado: 41,
    },
    {
      id: 4118402,
      descricao: "PARANAVAI",
      id_estado: 41,
    },
    {
      id: 4118501,
      descricao: "PATO BRANCO",
      id_estado: 41,
    },
    {
      id: 4118600,
      descricao: "PAULA FREITAS",
      id_estado: 41,
    },
    {
      id: 4118709,
      descricao: "PAULO FRONTIN",
      id_estado: 41,
    },
    {
      id: 4118808,
      descricao: "PEABIRU",
      id_estado: 41,
    },
    {
      id: 4118907,
      descricao: "PEROLA",
      id_estado: 41,
    },
    {
      id: 4119004,
      descricao: "PEROLA DOESTE",
      id_estado: 41,
    },
    {
      id: 4118857,
      descricao: "PEROBAL",
      id_estado: 41,
    },
    {
      id: 4119152,
      descricao: "PINHAIS",
      id_estado: 41,
    },
    {
      id: 4119103,
      descricao: "PIEN",
      id_estado: 41,
    },
    {
      id: 4119202,
      descricao: "PINHALAO",
      id_estado: 41,
    },
    {
      id: 4119251,
      descricao: "PINHAL DE SAO BENTO",
      id_estado: 41,
    },
    {
      id: 4119301,
      descricao: "PINHAO",
      id_estado: 41,
    },
    {
      id: 4119400,
      descricao: "PIRAI DO SUL",
      id_estado: 41,
    },
    {
      id: 4119608,
      descricao: "PITANGA",
      id_estado: 41,
    },
    {
      id: 4119509,
      descricao: "PIRAQUARA",
      id_estado: 41,
    },
    {
      id: 4119657,
      descricao: "PITANGUEIRAS",
      id_estado: 41,
    },
    {
      id: 4119707,
      descricao: "PLANALTINA DO PARANA",
      id_estado: 41,
    },
    {
      id: 4119806,
      descricao: "PLANALTO",
      id_estado: 41,
    },
    {
      id: 4119905,
      descricao: "PONTA GROSSA",
      id_estado: 41,
    },
    {
      id: 4120101,
      descricao: "PORTO AMAZONAS",
      id_estado: 41,
    },
    {
      id: 4120002,
      descricao: "PORECATU",
      id_estado: 41,
    },
    {
      id: 4120150,
      descricao: "PORTO BARREIRO",
      id_estado: 41,
    },
    {
      id: 4119954,
      descricao: "PONTAL DO PARANA",
      id_estado: 41,
    },
    {
      id: 4120309,
      descricao: "PORTO VITORIA",
      id_estado: 41,
    },
    {
      id: 4120200,
      descricao: "PORTO RICO",
      id_estado: 41,
    },
    {
      id: 4120333,
      descricao: "PRADO FERREIRA",
      id_estado: 41,
    },
    {
      id: 4120358,
      descricao: "PRANCHITA",
      id_estado: 41,
    },
    {
      id: 4120408,
      descricao: "PRESIDENTE CASTELO BRANCO",
      id_estado: 41,
    },
    {
      id: 4120507,
      descricao: "PRIMEIRO DE MAIO",
      id_estado: 41,
    },
    {
      id: 4120606,
      descricao: "PRUDENTOPOLIS",
      id_estado: 41,
    },
    {
      id: 4120655,
      descricao: "QUARTO CENTENARIO",
      id_estado: 41,
    },
    {
      id: 4120705,
      descricao: "QUATIGUA",
      id_estado: 41,
    },
    {
      id: 4120853,
      descricao: "QUATRO PONTES",
      id_estado: 41,
    },
    {
      id: 4120903,
      descricao: "QUEDAS DO IGUACU",
      id_estado: 41,
    },
    {
      id: 4120804,
      descricao: "QUATRO BARRAS",
      id_estado: 41,
    },
    {
      id: 4121000,
      descricao: "QUERENCIA DO NORTE",
      id_estado: 41,
    },
    {
      id: 4121208,
      descricao: "QUITANDINHA",
      id_estado: 41,
    },
    {
      id: 4121109,
      descricao: "QUINTA DO SOL",
      id_estado: 41,
    },
    {
      id: 4121356,
      descricao: "RANCHO ALEGRE DOESTE",
      id_estado: 41,
    },
    {
      id: 4121257,
      descricao: "RAMILANDIA",
      id_estado: 41,
    },
    {
      id: 4121307,
      descricao: "RANCHO ALEGRE",
      id_estado: 41,
    },
    {
      id: 4121406,
      descricao: "REALEZA",
      id_estado: 41,
    },
    {
      id: 4121604,
      descricao: "RENASCENCA",
      id_estado: 41,
    },
    {
      id: 4121505,
      descricao: "REBOUCAS",
      id_estado: 41,
    },
    {
      id: 4121752,
      descricao: "RESERVA DO IGUACU",
      id_estado: 41,
    },
    {
      id: 4121703,
      descricao: "RESERVA",
      id_estado: 41,
    },
    {
      id: 4121802,
      descricao: "RIBEIRAO CLARO",
      id_estado: 41,
    },
    {
      id: 4121901,
      descricao: "RIBEIRAO DO PINHAL",
      id_estado: 41,
    },
    {
      id: 4122107,
      descricao: "RIO BOM",
      id_estado: 41,
    },
    {
      id: 4122008,
      descricao: "RIO AZUL",
      id_estado: 41,
    },
    {
      id: 4122156,
      descricao: "RIO BONITO DO IGUACU",
      id_estado: 41,
    },
    {
      id: 4122206,
      descricao: "RIO BRANCO DO SUL",
      id_estado: 41,
    },
    {
      id: 4122172,
      descricao: "RIO BRANCO DO IVAI",
      id_estado: 41,
    },
    {
      id: 4122305,
      descricao: "RIO NEGRO",
      id_estado: 41,
    },
    {
      id: 4122503,
      descricao: "RONCADOR",
      id_estado: 41,
    },
    {
      id: 4122404,
      descricao: "ROLANDIA",
      id_estado: 41,
    },
    {
      id: 4122602,
      descricao: "RONDON",
      id_estado: 41,
    },
    {
      id: 4122651,
      descricao: "ROSARIO DO IVAI",
      id_estado: 41,
    },
    {
      id: 4122701,
      descricao: "SABAUDIA",
      id_estado: 41,
    },
    {
      id: 4122800,
      descricao: "SALGADO FILHO",
      id_estado: 41,
    },
    {
      id: 4122909,
      descricao: "SALTO DO ITARARE",
      id_estado: 41,
    },
    {
      id: 4123105,
      descricao: "SANTA AMELIA",
      id_estado: 41,
    },
    {
      id: 4123006,
      descricao: "SALTO DO LONTRA",
      id_estado: 41,
    },
    {
      id: 4123204,
      descricao: "SANTA CECILIA DO PAVAO",
      id_estado: 41,
    },
    {
      id: 4123402,
      descricao: "SANTA FE",
      id_estado: 41,
    },
    {
      id: 4123303,
      descricao: "SANTA CRUZ DE MONTE CASTELO",
      id_estado: 41,
    },
    {
      id: 4123501,
      descricao: "SANTA HELENA",
      id_estado: 41,
    },
    {
      id: 4123600,
      descricao: "SANTA INES",
      id_estado: 41,
    },
    {
      id: 4123808,
      descricao: "SANTA IZABEL DO OESTE",
      id_estado: 41,
    },
    {
      id: 4123709,
      descricao: "SANTA ISABEL DO IVAI",
      id_estado: 41,
    },
    {
      id: 4123857,
      descricao: "SANTA MARIA DO OESTE",
      id_estado: 41,
    },
    {
      id: 4123824,
      descricao: "SANTA LUCIA",
      id_estado: 41,
    },
    {
      id: 4123956,
      descricao: "SANTA MONICA",
      id_estado: 41,
    },
    {
      id: 4123907,
      descricao: "SANTA MARIANA",
      id_estado: 41,
    },
    {
      id: 4124020,
      descricao: "SANTA TEREZA DO OESTE",
      id_estado: 41,
    },
    {
      id: 4124053,
      descricao: "SANTA TEREZINHA DE ITAIPU",
      id_estado: 41,
    },
    {
      id: 4124004,
      descricao: "SANTANA DO ITARARE",
      id_estado: 41,
    },
    {
      id: 4124103,
      descricao: "SANTO ANTONIO DA PLATINA",
      id_estado: 41,
    },
    {
      id: 4124400,
      descricao: "SANTO ANTONIO DO SUDOESTE",
      id_estado: 41,
    },
    {
      id: 4124202,
      descricao: "SANTO ANTONIO DO CAIUA",
      id_estado: 41,
    },
    {
      id: 4124301,
      descricao: "SANTO ANTONIO DO PARAISO",
      id_estado: 41,
    },
    {
      id: 4124608,
      descricao: "SAO CARLOS DO IVAI",
      id_estado: 41,
    },
    {
      id: 4124509,
      descricao: "SANTO INACIO",
      id_estado: 41,
    },
    {
      id: 4124707,
      descricao: "SAO JERONIMO DA SERRA",
      id_estado: 41,
    },
    {
      id: 4124806,
      descricao: "SAO JOAO",
      id_estado: 41,
    },
    {
      id: 4124905,
      descricao: "SAO JOAO DO CAIUA",
      id_estado: 41,
    },
    {
      id: 4125001,
      descricao: "SAO JOAO DO IVAI",
      id_estado: 41,
    },
    {
      id: 4125100,
      descricao: "SAO JOAO DO TRIUNFO",
      id_estado: 41,
    },
    {
      id: 4125209,
      descricao: "SAO JORGE DOESTE",
      id_estado: 41,
    },
    {
      id: 4125308,
      descricao: "SAO JORGE DO IVAI",
      id_estado: 41,
    },
    {
      id: 4125407,
      descricao: "SAO JOSE DA BOA VISTA",
      id_estado: 41,
    },
    {
      id: 4125357,
      descricao: "SAO JORGE DO PATROCINIO",
      id_estado: 41,
    },
    {
      id: 4125456,
      descricao: "SAO JOSE DAS PALMEIRAS",
      id_estado: 41,
    },
    {
      id: 4125506,
      descricao: "SAO JOSE DOS PINHAIS",
      id_estado: 41,
    },
    {
      id: 4125555,
      descricao: "SAO MANOEL DO PARANA",
      id_estado: 41,
    },
    {
      id: 4125704,
      descricao: "SAO MIGUEL DO IGUACU",
      id_estado: 41,
    },
    {
      id: 4125605,
      descricao: "SAO MATEUS DO SUL",
      id_estado: 41,
    },
    {
      id: 4125753,
      descricao: "SAO PEDRO DO IGUACU",
      id_estado: 41,
    },
    {
      id: 4125803,
      descricao: "SAO PEDRO DO IVAI",
      id_estado: 41,
    },
    {
      id: 4125902,
      descricao: "SAO PEDRO DO PARANA",
      id_estado: 41,
    },
    {
      id: 4126009,
      descricao: "SAO SEBASTIAO DA AMOREIRA",
      id_estado: 41,
    },
    {
      id: 4126108,
      descricao: "SAO TOME",
      id_estado: 41,
    },
    {
      id: 4126207,
      descricao: "SAPOPEMA",
      id_estado: 41,
    },
    {
      id: 4126256,
      descricao: "SARANDI",
      id_estado: 41,
    },
    {
      id: 4126272,
      descricao: "SAUDADE DO IGUACU",
      id_estado: 41,
    },
    {
      id: 4126306,
      descricao: "SENGES",
      id_estado: 41,
    },
    {
      id: 4126355,
      descricao: "SERRANOPOLIS DO IGUACU",
      id_estado: 41,
    },
    {
      id: 4126405,
      descricao: "SERTANEJA",
      id_estado: 41,
    },
    {
      id: 4126504,
      descricao: "SERTANOPOLIS",
      id_estado: 41,
    },
    {
      id: 4126652,
      descricao: "SULINA",
      id_estado: 41,
    },
    {
      id: 4126603,
      descricao: "SIQUEIRA CAMPOS",
      id_estado: 41,
    },
    {
      id: 4126702,
      descricao: "TAMBOARA",
      id_estado: 41,
    },
    {
      id: 4126678,
      descricao: "TAMARANA",
      id_estado: 41,
    },
    {
      id: 4126801,
      descricao: "TAPEJARA",
      id_estado: 41,
    },
    {
      id: 4126900,
      descricao: "TAPIRA",
      id_estado: 41,
    },
    {
      id: 4127007,
      descricao: "TEIXEIRA SOARES",
      id_estado: 41,
    },
    {
      id: 4127106,
      descricao: "TELEMACO BORBA",
      id_estado: 41,
    },
    {
      id: 4127205,
      descricao: "TERRA BOA",
      id_estado: 41,
    },
    {
      id: 4127304,
      descricao: "TERRA RICA",
      id_estado: 41,
    },
    {
      id: 4127403,
      descricao: "TERRA ROXA",
      id_estado: 41,
    },
    {
      id: 4127502,
      descricao: "TIBAGI",
      id_estado: 41,
    },
    {
      id: 4127601,
      descricao: "TIJUCAS DO SUL",
      id_estado: 41,
    },
    {
      id: 4127700,
      descricao: "TOLEDO",
      id_estado: 41,
    },
    {
      id: 4127809,
      descricao: "TOMAZINA",
      id_estado: 41,
    },
    {
      id: 4127858,
      descricao: "TRES BARRAS DO PARANA",
      id_estado: 41,
    },
    {
      id: 4127908,
      descricao: "TUNEIRAS DO OESTE",
      id_estado: 41,
    },
    {
      id: 4127882,
      descricao: "TUNAS DO PARANA",
      id_estado: 41,
    },
    {
      id: 4127957,
      descricao: "TUPASSI",
      id_estado: 41,
    },
    {
      id: 4127965,
      descricao: "TURVO",
      id_estado: 41,
    },
    {
      id: 4128005,
      descricao: "UBIRATA",
      id_estado: 41,
    },
    {
      id: 4128104,
      descricao: "UMUARAMA",
      id_estado: 41,
    },
    {
      id: 4128203,
      descricao: "UNIAO DA VITORIA",
      id_estado: 41,
    },
    {
      id: 4128302,
      descricao: "UNIFLOR",
      id_estado: 41,
    },
    {
      id: 4128401,
      descricao: "URAI",
      id_estado: 41,
    },
    {
      id: 4128500,
      descricao: "WENCESLAU BRAZ",
      id_estado: 41,
    },
    {
      id: 4128534,
      descricao: "VENTANIA",
      id_estado: 41,
    },
    {
      id: 4128559,
      descricao: "VERA CRUZ DO OESTE",
      id_estado: 41,
    },
    {
      id: 4128609,
      descricao: "VERE",
      id_estado: 41,
    },
    {
      id: 4128625,
      descricao: "ALTO PARAISO",
      id_estado: 41,
    },
    {
      id: 4128633,
      descricao: "DOUTOR ULYSSES",
      id_estado: 41,
    },
    {
      id: 4128658,
      descricao: "VIRMOND",
      id_estado: 41,
    },
    {
      id: 4128807,
      descricao: "XAMBRE",
      id_estado: 41,
    },
    {
      id: 2600054,
      descricao: "ABREU E LIMA",
      id_estado: 26,
    },
    {
      id: 4128708,
      descricao: "VITORINO",
      id_estado: 41,
    },
    {
      id: 2600203,
      descricao: "AFRANIO",
      id_estado: 26,
    },
    {
      id: 2600104,
      descricao: "AFOGADOS DA INGAZEIRA",
      id_estado: 26,
    },
    {
      id: 2600302,
      descricao: "AGRESTINA",
      id_estado: 26,
    },
    {
      id: 2600401,
      descricao: "AGUA PRETA",
      id_estado: 26,
    },
    {
      id: 2600609,
      descricao: "ALAGOINHA",
      id_estado: 26,
    },
    {
      id: 2600500,
      descricao: "AGUAS BELAS",
      id_estado: 26,
    },
    {
      id: 2600708,
      descricao: "ALIANCA",
      id_estado: 26,
    },
    {
      id: 2600807,
      descricao: "ALTINHO",
      id_estado: 26,
    },
    {
      id: 2601052,
      descricao: "ARACOIABA",
      id_estado: 26,
    },
    {
      id: 2601003,
      descricao: "ANGELIM",
      id_estado: 26,
    },
    {
      id: 2601102,
      descricao: "ARARIPINA",
      id_estado: 26,
    },
    {
      id: 2600906,
      descricao: "AMARAJI",
      id_estado: 26,
    },
    {
      id: 2601201,
      descricao: "ARCOVERDE",
      id_estado: 26,
    },
    {
      id: 2601300,
      descricao: "BARRA DE GUABIRABA",
      id_estado: 26,
    },
    {
      id: 2601409,
      descricao: "BARREIROS",
      id_estado: 26,
    },
    {
      id: 2601607,
      descricao: "BELEM DE SAO FRANCISCO",
      id_estado: 26,
    },
  ]);
};
