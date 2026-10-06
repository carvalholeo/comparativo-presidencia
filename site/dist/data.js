/* Síntese editorial dos programas oficiais das eleições de 2026. A numeração remete à página impressa do PDF. */
const candidates = [
  {
    "name": "Lula",
    "party": "PT",
    "file": "pt",
    "index": "lula-propostas-de-governo"
  },
  {
    "name": "Flávio Bolsonaro",
    "party": "PL",
    "file": "pl",
    "index": "flavio-bolsonaro"
  },
  {
    "name": "Renan Santos",
    "party": "Missão",
    "file": "missao",
    "index": "renan-santos-propostas-de-governo"
  },
  {
    "name": "Ronaldo Caiado",
    "party": "PSD",
    "file": "psd",
    "index": "ronaldo-caiado-propostas-de-governo"
  },
  {
    "name": "Romeu Zema",
    "party": "Novo",
    "file": "novo",
    "index": "zema"
  },
  {
    "name": "Samara Martins",
    "party": "UP",
    "file": "up",
    "index": "samara-propostas-de-governo"
  },
  {
    "name": "Hertz Dias",
    "party": "PSTU",
    "file": "pstu",
    "index": "hertz-dias-propostas-de-governo"
  },
  {
    "name": "Augusto Cury",
    "party": "Avante",
    "file": "avante",
    "index": "escritor-augusto-cury-propostas-de-governo"
  }
];
const base = "https://www.tse.jus.br/eleicoes/eleicoes-2026-content/";
const themes = [
  [
    "Segurança pública",
    [
      [
        "Criar Ministério da Segurança Pública após aprovação da PEC; integrar SUSP, inteligência e investigação financeira do crime organizado.",
        29
      ],
      [
        "Endurecer penas para crimes hediondos, combater facções e ampliar reconhecimento facial e presídios.",
        13
      ],
      [
        "Declarar guerra ao crime organizado; propor superpresídios, confisco de bens e tecnologia urbana preditiva.",
        11
      ],
      [
        "Criar Ministério da Segurança Pública, sistema nacional de inteligência criminal e asfixia financeira de facções.",
        16
      ],
      [
        "Classificar facções como organizações terroristas e construir presídios de segurança máxima.",
        5
      ],
      [
        "Desmilitarizar e unificar polícias em estrutura civil; substituir guerra às drogas por abordagem de saúde pública.",
        48
      ],
      [
        "Desmilitarizar polícias, adotar câmeras corporais e atingir patrimônio e redes financeiras do crime organizado.",
        19
      ],
      [
        "Recriar o Ministério da Segurança Pública, combater facções e instituir força municipal de prevenção (Polícia FOCO).",
        45
      ]
    ]
  ],
  [
    "Imigração",
    [
      [
        "Implementar a Política Nacional de Migrações, Refúgio e Apatridia; acolher migrantes e refugiados e combater xenofobia.",
        30
      ],
      null,
      null,
      null,
      [
        "Simplificar reconhecimento de qualificações e concessão de vistos a especialistas de setores de fronteira tecnológica.",
        56
      ],
      null,
      [
        "Defender regularização de documentos, nacionalidade e direitos civis, sociais e trabalhistas para imigrantes.",
        25
      ],
      null
    ]
  ],
  [
    "Saúde",
    [
      [
        "Ampliar atenção especializada, reduzir filas e fortalecer Mais Médicos, Farmácia Popular e produção nacional de insumos.",
        35
      ],
      [
        "Digitalizar o SUS, unificar prontuário e aproveitar horários ociosos da rede privada.",
        26
      ],
      [
        "Implantar prontuário nacional interoperável, telessaúde com IA e fila dinâmica por gravidade.",
        25
      ],
      [
        "Fortalecer atenção primária, fila transparente e regulação inteligente no SUS.",
        77
      ],
      [
        "Adotar telemedicina e prontuário nacional; usar parcerias privadas para reduzir filas do SUS.",
        57
      ],
      [
        "Defender gestão 100% estatal do SUS, encerrar organizações sociais de saúde e produzir remédios e vacinas no país.",
        20
      ],
      [
        "Defender SUS público, universal, gratuito e 100% estatal; ampliar produção pública de medicamentos.",
        11
      ],
      [
        "Ampliar atenção preventiva e telemedicina pelo programa Tele Saúde Brasil para desafogar o SUS.",
        161
      ]
    ]
  ],
  [
    "Educação",
    [
      [
        "Cumprir metas do PNE 2026–2036, expandir educação infantil, ensino técnico e escola em tempo integral.",
        31
      ],
      [
        "Priorizar alfabetização pelo método fônico, escolas em tempo integral e ensino técnico.",
        34
      ],
      [
        "Buscar alfabetização universal pelo método fônico e reformar ensino superior com foco em STEM.",
        30
      ],
      [
        "Firmar pacto pela alfabetização na idade certa e ampliar creches e escola em tempo integral.",
        32
      ],
      [
        "Recompor alfabetização e aprendizagens; revisar BNCC e vincular Pé-de-Meia a aprendizado e frequência.",
        51
      ],
      [
        "Destinar ao menos 10% do PIB à educação pública, revogar Novo Ensino Médio e ampliar acesso ao ensino superior.",
        22
      ],
      [
        "Defender educação pública e laica; revogar BNCC e Novo Ensino Médio e valorizar trabalhadores da educação.",
        12
      ],
      [
        "Priorizar educação básica e alfabetização, valorizar professores e incluir gestão da emoção nas escolas.",
        43
      ]
    ]
  ],
  [
    "Previdência",
    [
      null,
      [
        "Reduzir filas do INSS e criar pacote antifraude previdenciária.",
        73
      ],
      null,
      null,
      [
        "Reformar previdência de estados, municípios, militares e rural; ajustar idade mínima à expectativa de vida.",
        14
      ],
      [
        "Revogar a reforma previdenciária.",
        13
      ],
      [
        "Revogar reforma previdenciária, reduzir idade mínima e incluir trabalhadores informais na proteção.",
        14
      ],
      null
    ]
  ],
  [
    "Fisco e tributação",
    [
      [
        "Prosseguir na reforma tributária e combinar responsabilidade fiscal com financiamento de políticas públicas.",
        48
      ],
      [
        "Reduzir impostos e reformular regras fiscais e tributárias.",
        71
      ],
      [
        "Desindexar despesas e revisar renúncias fiscais e benefícios tributários.",
        10
      ],
      [
        "Revisar subsídios e benefícios tributários e estabilizar as contas públicas.",
        12
      ],
      [
        "Reduzir gradualmente o IRPJ e executar choque fiscal para estabilizar dívida/PIB.",
        19
      ],
      [
        "Tributar progressivamente, criar imposto sobre grandes fortunas e isentar baixa renda.",
        17
      ],
      [
        "Suspender pagamento da dívida pública e submetê-la a auditoria.",
        27
      ],
      [
        "Simplificar tributos e procedimentos e buscar carga tributária menor ao fim da transição.",
        38
      ]
    ]
  ],
  [
    "Relações internacionais",
    [
      [
        "Fortalecer multilateralismo, BRICS e integração sul-americana; aprofundar relações com Sul Global.",
        78
      ],
      [
        "Buscar adesão à OCDE e fortalecer defesa nacional e inserção em cadeias globais.",
        63
      ],
      [
        "Adotar diplomacia pragmática e atuar como mediador do Sul Global.",
        45
      ],
      [
        "Atuar em ONU, OMC, G20, BRICS e OCDE, com integração sul-americana.",
        74
      ],
      [
        "Promover saída diplomática do BRICS e adesão à OCDE.",
        37
      ],
      [
        "Defender autodeterminação; romper relações com Israel e tratados considerados de submissão.",
        65
      ],
      [
        "Recusar acordos considerados subordinados aos EUA, Europa e China.",
        4
      ],
      [
        "Criar embaixadas empreendedoras e ampliar integração econômica e comercial regional e global.",
        59
      ]
    ]
  ],
  [
    "Comércio exterior",
    [
      [
        "Ampliar presença internacional da produção brasileira e usar a política externa para apoiar desenvolvimento e exportações.",
        79
      ],
      [
        "Ampliar abertura comercial e integração às cadeias globais de valor.",
        62
      ],
      null,
      [
        "Avançar no acordo Mercosul–União Europeia e abrir mercados na Ásia, África e Indo-Pacífico.",
        73
      ],
      [
        "Transformar o Mercosul em zona de livre comércio.",
        38
      ],
      null,
      [
        "Opor-se a tratados que mantenham o país como exportador de commodities.",
        4
      ],
      [
        "Criar zonas de processamento de exportação e corredores estratégicos de comércio.",
        41
      ]
    ]
  ],
  [
    "Funcionalismo público",
    [
      [
        "Valorizar serviços públicos e modernizar capacidades do Estado.",
        16
      ],
      [
        "Promover reforma administrativa e profissionalização da gestão pública.",
        69
      ],
      [
        "Reformar funcionalismo e combater supersalários.",
        9
      ],
      [
        "Profissionalizar a alta administração e selecionar gestores por capacidade.",
        9
      ],
      [
        "Enxugar ministérios e cargos por meio de reforma administrativa.",
        15
      ],
      [
        "Acabar com supersalários e privilégios de políticos e magistrados.",
        13
      ],
      [
        "Valorizar carreiras e salários de profissionais da educação e dos serviços públicos.",
        12
      ],
      [
        "Reformar a administração, modernizar carreiras e avaliar desempenho, com valorização de servidores competentes.",
        37
      ]
    ]
  ],
  [
    "Relação entre os Poderes",
    [
      [
        "Ampliar transparência e debate público sobre emendas parlamentares.",
        15
      ],
      [
        "Reformar o Judiciário e limitar decisões monocráticas.",
        65
      ],
      [
        "Propor lei de responsabilidade gerencial com metas ligadas ao financiamento partidário.",
        17
      ],
      [
        "Reordenar emendas parlamentares e reformar sistema político e partidário.",
        9
      ],
      [
        "Endurecer requisitos para ministros do STF e adotar sistema distrital misto.",
        11
      ],
      [
        "Propor eleição direta para juízes e tribunais superiores.",
        49
      ],
      null,
      [
        "Implantar semipresidencialismo e reformar o STF com nove ministros e mandatos de oito anos.",
        60
      ]
    ]
  ],
  [
    "Relação federativa",
    [
      [
        "Coordenar segurança, educação e saúde com estados e municípios e fortalecer o SUSP.",
        29
      ],
      [
        "Articular contratos de infraestrutura e habitação em parceria com governos locais.",
        48
      ],
      [
        "Fundir municípios considerados fiscalmente inviáveis.",
        14
      ],
      [
        "Coordenar e financiar transporte coletivo respeitando a titularidade de estados e municípios.",
        48
      ],
      [
        "Cofinanciar sistemas metropolitanos de transporte em parceria com estados e municípios.",
        30
      ],
      null,
      null,
      [
        "Rever a divisão federativa dos tributos para fortalecer os municípios.",
        38
      ]
    ]
  ],
  [
    "Proteção ambiental",
    [
      [
        "Buscar desmatamento líquido zero, combater incêndios e fortalecer Fundo Amazônia e Fundo Clima.",
        70
      ],
      [
        "Combinar fiscalização da Amazônia, bioeconomia, mercado de carbono e pagamento por serviços ambientais.",
        58
      ],
      [
        "Acelerar licenciamento de minerais estratégicos e desenvolver fertilizantes nacionais.",
        42
      ],
      [
        "Combater incêndios, grilagem e desmatamento, com proteção da Amazônia e pagamento por serviços ambientais.",
        51
      ],
      [
        "Implementar nova lei do licenciamento ambiental e atrair investimentos em créditos de carbono.",
        47
      ],
      [
        "Combater desmatamento, garimpo ilegal e uso de agrotóxicos proibidos.",
        63
      ],
      [
        "Proibir exploração de petróleo na Margem Equatorial e proteger biomas.",
        15
      ],
      [
        "Criar o programa Floresta Viva para combater incêndios com inteligência artificial e drones.",
        182
      ]
    ]
  ],
  [
    "Mobilidade urbana",
    [
      [
        "Ampliar metrôs, trens, VLTs e corredores de ônibus; renovar frotas de transporte coletivo.",
        46
      ],
      [
        "Financiar metrôs, transporte sobre trilhos e ônibus elétricos ou movidos a biocombustíveis.",
        51
      ],
      null,
      [
        "Inserir transporte coletivo na carteira nacional de infraestrutura e no financiamento de longo prazo.",
        56
      ],
      [
        "Cofinanciar expansão de metrôs, trens e VLTs em regiões metropolitanas.",
        30
      ],
      [
        "Estatizar transporte coletivo e implantar passe livre ou tarifa zero.",
        51
      ],
      null,
      null
    ]
  ],
  [
    "Coalizão de poder",
    [
      null,
      null,
      null,
      [
        "Formar maioria de programa e pacto nacional para governabilidade.",
        8
      ],
      null,
      [
        "Dar poder orçamentário a conselhos populares e ampliar democracia direta.",
        37
      ],
      [
        "Formar governo socialista da classe trabalhadora, sem capitalistas.",
        29
      ],
      null
    ]
  ],
  [
    "Combate à corrupção",
    [
      [
        "Fortalecer integridade, controles públicos e transparência das emendas parlamentares.",
        17
      ],
      [
        "Combater corrupção, ampliar transparência e avaliar políticas públicas.",
        70
      ],
      [
        "Criar comissariado federal de gestão com fiscalização em tempo real.",
        17
      ],
      [
        "Propor lei de enriquecimento ilícito e rastreabilidade do financiamento político.",
        20
      ],
      [
        "Acabar com sigilo de 100 anos e ampliar transparência ativa.",
        10
      ],
      [
        "Confiscar bens de corruptos e sonegadores e vedar lobby corporativo em campanhas.",
        24
      ],
      [
        "Investigar e punir corruptos e corruptores, com confisco dos bens obtidos por corrupção.",
        19
      ],
      [
        "Usar inteligência artificial e controle social no combate à corrupção (projeto SEO).",
        39
      ]
    ]
  ],
  [
    "Emergência climática",
    [
      [
        "Liderar transição energética, reduzir desmatamento e ampliar financiamento climático.",
        69
      ],
      [
        "Promover biocombustíveis, bioeconomia e mercado de carbono.",
        57
      ],
      [
        "Criar zonas econômicas para transição verde e minerais estratégicos.",
        34
      ],
      [
        "Expandir agricultura de baixo carbono, energias limpas e mercado de carbono.",
        51
      ],
      [
        "Atrair capital para créditos de carbono e ampliar transporte coletivo de massa.",
        48
      ],
      [
        "Reindustrializar e enfrentar desmatamento e garimpo ilegal.",
        63
      ],
      [
        "Proibir petróleo na Margem Equatorial e fortalecer agroecologia.",
        15
      ],
      [
        "Promover economia verde, hidrogênio verde, mercado de carbono e diplomacia climática.",
        51
      ]
    ]
  ],
  [
    "Industrialização e complexidade econômica",
    [
      [
        "Expandir Nova Indústria Brasil e o complexo industrial da saúde com inovação e domínio tecnológico.",
        50
      ],
      [
        "Inserir empresas brasileiras em cadeias globais e desenvolver minerais críticos.",
        63
      ],
      [
        "Criar zonas econômicas especiais para terras raras, semicondutores, defesa e transição verde.",
        34
      ],
      [
        "Promover reindustrialização, inovação e agenda nacional de produtividade.",
        42
      ],
      [
        "Aprimorar ambiente de negócios e infraestrutura para investimento privado.",
        18
      ],
      [
        "Reindustrializar com cadeias produtivas completas e planejamento público.",
        56
      ],
      [
        "Expropriar grandes empresas de setores estratégicos para controle público.",
        26
      ],
      [
        "Criar dez mil agroindústrias para ampliar o processamento da produção agropecuária.",
        126
      ]
    ]
  ],
  [
    "Trabalho e economia",
    [
      [
        "Defender fim da escala 6×1, jornada de 40 horas, valorização do salário mínimo e regulação do trabalho por aplicativos.",
        74
      ],
      [
        "Reduzir custo do trabalho, priorizar primeiro emprego e negociação coletiva sobre legislação.",
        44
      ],
      [
        "Substituir Bolsa Família por frentes de trabalho comunitário remunerado.",
        20
      ],
      [
        "Modernizar mercado de trabalho e fortalecer micro e pequenas empresas.",
        15
      ],
      [
        "Reduzir encargos da folha e criar alternativa flexível à CLT.",
        23
      ],
      [
        "Dobrar salário mínimo, eliminar escala 6×1 e adotar jornada de 30 a 36 horas.",
        9
      ],
      [
        "Eliminar escala 6×1, adotar 36 horas semanais e dobrar salário mínimo.",
        8
      ],
      [
        "Criar Banco do Empreendedor e crédito produtivo para desenvolver novos empreendedores.",
        39
      ]
    ]
  ],
  [
    "Soberania",
    [
      [
        "Fortalecer base industrial, ciência, defesa e autonomia sobre recursos estratégicos.",
        78
      ],
      [
        "Fortalecer defesa nacional e capacidade brasileira sobre minerais críticos.",
        62
      ],
      [
        "Completar ciclo nacional do combustível nuclear e ampliar vigilância de fronteiras.",
        46
      ],
      [
        "Articular defesa nacional, proteção de fronteiras e autonomia produtiva.",
        30
      ],
      [
        "Desenvolver produção nacional de fertilizantes e ampliar autonomia produtiva.",
        43
      ],
      [
        "Defender autodeterminação e soberania farmacêutica e financeira.",
        20
      ],
      [
        "Controlar recursos estratégicos e proibir hospedagem de dados governamentais em nuvens estrangeiras.",
        27
      ],
      [
        "Desenvolver terras raras e minerais estratégicos brasileiros pelo projeto PETRA-BR.",
        178
      ]
    ]
  ],
  [
    "Tecnologias digitais",
    [
      [
        "Expandir Estado digital, infraestrutura pública de dados e regulação de plataformas e IA.",
        17
      ],
      [
        "Digitalizar 100% dos serviços públicos, criar identidade digital única e prontuário de saúde.",
        24
      ],
      [
        "Implantar prontuário interoperável e telessaúde com inteligência artificial.",
        25
      ],
      [
        "Usar IA em saúde, conectividade e serviços públicos integrados.",
        26
      ],
      [
        "Criar registro nacional de saúde com telemedicina e prontuário eletrônico.",
        57
      ],
      null,
      [
        "Assegurar soberania digital e guardar dados governamentais em infraestrutura nacional.",
        27
      ],
      [
        "Oferecer serviços públicos em plataformas digitais integradas e avaliar políticas por indicadores.",
        38
      ]
    ]
  ],
  [
    "Modernização do Estado",
    [
      [
        "Integrar serviços públicos, dados e compras governamentais com participação e transparência.",
        17
      ],
      [
        "Digitalizar serviços, revisar ministérios e profissionalizar a gestão.",
        69
      ],
      [
        "Criar comissariado federal para acompanhar execução e desempenho em tempo real.",
        17
      ],
      [
        "Criar centro de governo e PPA orientado a missões.",
        9
      ],
      [
        "Reorganizar ministérios e cargos mediante reforma administrativa.",
        15
      ],
      [
        "Ampliar democracia direta por conselhos populares com poder de decisão orçamentária.",
        37
      ],
      [
        "Organizar Estado operário com democracia e conselhos de trabalhadores.",
        31
      ],
      [
        "Fazer reforma administrativa, simplificar estruturas e adotar metas e avaliação permanente de políticas.",
        37
      ]
    ]
  ],
  [
    "Redução da burocracia",
    [
      [
        "Integrar serviços digitais para simplificar atendimento ao cidadão.",
        17
      ],
      [
        "Digitalizar serviços, facilitar abertura de empresas e revisar normas infralegais.",
        27
      ],
      null,
      [
        "Integrar serviços digitais e desburocratizar cadeias de infraestrutura.",
        27
      ],
      [
        "Automatizar cálculo de tributos a partir de notas fiscais e simplificar abertura, operação e fechamento de empresas.",
        19
      ],
      null,
      null,
      [
        "Digitalizar serviços públicos e simplificar tributos e procedimentos para cidadãos e empresas.",
        38
      ]
    ]
  ],
  [
    "Mulheres e pessoas LGBT",
    [
      [
        "Combater violência contra mulheres, promover igualdade salarial e direitos LGBTQIAP+.",
        22
      ],
      [
        "Criar Central da Mulher e ampliar canais de denúncia e programas de autonomia financeira.",
        18
      ],
      null,
      [
        "Combater violência contra mulheres, promover igualdade salarial e proteção no trabalho.",
        58
      ],
      [
        "Expandir Patrulhas Maria da Penha, Salas Lilás e redes de acolhimento a vítimas.",
        7
      ],
      [
        "Enfrentar LGBTfobia, criar casas de acolhimento e descriminalizar o aborto.",
        33
      ],
      [
        "Criminalizar LGBTfobia, legalizar aborto, criar cotas trans e casas-abrigo para mulheres.",
        23
      ],
      [
        "Criar o programa Mulheres Vivas contra o feminicídio e promover autonomia econômica e igualdade salarial das mulheres; não foi localizada medida específica para pessoas LGBT.",
        53
      ]
    ]
  ],
  [
    "Privatizações",
    [
      null,
      [
        "Criar Programa Nacional de Desestatização.",
        69
      ],
      null,
      [
        "Ampliar concessões e parcerias na infraestrutura.",
        47
      ],
      [
        "Privatizar todas as empresas estatais.",
        15
      ],
      [
        "Reestatizar empresas privatizadas, incluindo Eletrobras e Vale.",
        59
      ],
      [
        "Proibir privatização de empresas estratégicas e reverter privatizações em setores essenciais.",
        26
      ],
      null
    ]
  ],
  [
    "Religião",
    [
      null,
      [
        "Defender a liberdade religiosa como princípio do programa.",
        9
      ],
      null,
      [
        "Proteger liberdade religiosa, investigar ataques a templos e preservar laicidade do Estado.",
        68
      ],
      null,
      [
        "Assegurar liberdade religiosa, combater ataques a religiões afro-brasileiras e garantir Estado laico.",
        36
      ],
      null,
      null
    ]
  ],
  [
    "Saúde mental",
    [
      [
        "Fortalecer CAPS e atenção psicossocial no SUS.",
        35
      ],
      [
        "Ampliar ações de saúde mental na rede de cuidado.",
        39
      ],
      null,
      [
        "Desenvolver política de saúde mental e ampliar acesso a cuidado.",
        84
      ],
      [
        "Criar indicadores e capacitar equipes da rede CAPS e CRAS.",
        59
      ],
      null,
      [
        "Expandir CAPS e suspender financiamento público de comunidades terapêuticas.",
        11
      ],
      [
        "Criar programa nacional de saúde mental e apoio emocional e incluir gestão da emoção nas escolas.",
        44
      ]
    ]
  ],
  [
    "Turismo",
    [
      [
        "Criar novos roteiros de gastronomia, arte, cultura e ecoturismo e ampliar a promoção internacional do Brasil.",
        57
      ],
      [
        "Promover o destino Brasil e as vocações regionais, com infraestrutura de transporte para gerar renda e emprego no interior.",
        60
      ],
      null,
      [
        "Criar a Estratégia Nacional de Turismo 2035, com metas de viagens, receitas, empregos e dispersão regional.",
        97
      ],
      [
        "Ampliar concessões e parcerias para infraestrutura turística e profissionalizar a gestão dos destinos.",
        71
      ],
      null,
      null,
      [
        "Implantar polos de serviços e comércio nas rodovias para incentivar o turismo rodoviário e o desenvolvimento do interior.",
        121
      ]
    ]
  ],
  [
    "Esporte",
    [
      [
        "Ampliar o Bolsa Atleta e o patrocínio das estatais ao esporte olímpico e paralímpico.",
        43
      ],
      [
        "Criar o programa Escola de Campeões, com treinos e competições escolares em parceria com a iniciativa privada.",
        40
      ],
      null,
      [
        "Criar Plano Nacional do Esporte 2035 e cofinanciar atividades escolares e comunitárias.",
        39
      ],
      [
        "Vincular repasses às entidades esportivas a governança e resultados e ampliar investimentos privados.",
        67
      ],
      [
        "Criar praças, ginásios esportivos e centros recreativos para ampliar o acesso da juventude ao esporte e lazer.",
        30
      ],
      null,
      null
    ]
  ],
  [
    "Cultura",
    [
      [
        "Integrar artes à educação com Mais Cultura nas Escolas e Arte e Cultura na Educação de Tempo Integral.",
        43
      ],
      [
        "Aperfeiçoar leis de incentivo, descentralizar o apoio a artistas e preservar o patrimônio histórico.",
        41
      ],
      [
        "Limitar progressivamente o fomento via Lei Rouanet e incentivar novos talentos.",
        28
      ],
      [
        "Consolidar o Sistema Nacional de Cultura com metas, financiamento estável e acesso à arte em escolas e territórios desatendidos.",
        28
      ],
      [
        "Priorizar artistas locais e produções regionais nos mecanismos de financiamento cultural.",
        69
      ],
      [
        "Ampliar investimento público em cultura, com equipamentos gratuitos e financiamento direto à cultura popular.",
        40
      ],
      [
        "Implementar o ensino de história e cultura afro-brasileira e indígena em toda a rede escolar.",
        22
      ],
      null
    ]
  ],
  [
    "Agricultura",
    [
      [
        "Expandir o Plano Safra da Agricultura Familiar, com crédito para alimentos, agroecologia e produção orgânica.",
        59
      ],
      [
        "Retomar a regularização e a titulação de pequenos proprietários rurais para facilitar crédito e investimento.",
        54
      ],
      [
        "Auditar a produtividade dos assentamentos existentes e suspender novos assentamentos até atingirem as metas propostas.",
        42
      ],
      [
        "Recuperar pastagens e ampliar integração lavoura-pecuária-floresta e agricultura de precisão nas áreas já abertas.",
        22
      ],
      [
        "Ampliar assistência técnica a pequenos e médios produtores, vinculando repasses às Emater a metas de produtividade.",
        44
      ],
      [
        "Fazer reforma agrária popular e ampliar crédito, assistência técnica e compras públicas da agricultura familiar.",
        45
      ],
      [
        "Dar crédito público barato, seguro agrícola e compras públicas aos pequenos produtores, priorizando alimentos e agroecologia.",
        17
      ],
      [
        "Criar o programa Raízes do Brasil para apoiar agricultura familiar com crédito, assistência técnica, irrigação e cooperativismo.",
        115
      ]
    ]
  ],
  [
    "Agronegócio",
    [
      [
        "Ampliar Plano Safra, crédito para mecanização e irrigação, seguro rural e promoção comercial das exportações do setor.",
        61
      ],
      [
        "Ampliar seguro rural e armazenagem das safras e apoiar produção nacional de fertilizantes.",
        54
      ],
      [
        "Executar o AgroBrasil 2030, com produção nacional de fertilizantes e agroindústria para agregar valor aos produtos exportados.",
        42
      ],
      [
        "Criar Plano Safra plurianual, fundo garantidor de crédito privado e ampliar instrumentos do mercado de capitais para o setor.",
        23
      ],
      [
        "Facilitar insumos, inovação privada e logística para elevar a competitividade e exportação do agro.",
        44
      ],
      [
        "Desapropriar grandes terras controladas por empresas do agronegócio e destiná-las à reforma agrária.",
        44
      ],
      [
        "Encerrar crédito público e subsídios estatais ao grande agronegócio.",
        15
      ],
      [
        "Criar a frente Safra de Gigantes para expandir agricultura empresarial irrigada e exportadora, com seguro rural e crédito.",
        115
      ]
    ]
  ],
  [
    "Energia",
    [
      [
        "Ampliar investimentos em geração e transmissão de eletricidade para assegurar o abastecimento e reduzir dependências externas.",
        64
      ],
      [
        "Expandir a infraestrutura de petróleo e gás e reduzir encargos embutidos na conta de luz.",
        53
      ],
      [
        "Criar marco regulatório da transmissão para reduzir cortes de geração renovável e retomar as obras de Angra 3.",
        24
      ],
      [
        "Rever encargos e subsídios da conta de luz com transparência e proteger o acesso das famílias de baixa renda.",
        35
      ],
      [
        "Reformar a formação de preços da eletricidade e reduzir encargos setoriais da tarifa.",
        33
      ],
      [
        "Reestatizar Eletrobras e Petrobras e instituir controle público da geração de energia e dos combustíveis.",
        60
      ],
      [
        "Reestatizar empresas estratégicas de petróleo e energia sob controle público e social.",
        26
      ],
      [
        "Criar o PENER-BR para mapear e ampliar a geração solar, eólica e de outras fontes renováveis.",
        175
      ]
    ]
  ],
  [
    "Transição energética",
    [
      [
        "Aumentar a participação das renováveis, investir em armazenamento e substituir progressivamente combustíveis fósseis por biocombustíveis e hidrogênio de baixa emissão.",
        64
      ],
      [
        "Fomentar etanol, biodiesel, combustível sustentável de aviação e biogás e ampliar o RenovaBio.",
        53
      ],
      [
        "Explorar a produção de hidrogênio verde, inclusive na bacia amazônica.",
        24
      ],
      [
        "Expandir biometano, etanol, biodiesel, combustível sustentável de aviação e hidrogênio de baixa emissão.",
        37
      ],
      [
        "Acelerar a eletrificação da economia e desenvolver mercados para biocombustíveis avançados e hidrogênio verde.",
        34
      ],
      [
        "Criar programa de transição das matrizes energéticas e da extração de matérias-primas com metas de eficiência e conservação.",
        63
      ],
      [
        "Proibir exploração de petróleo na Margem Equatorial; o plano não detalha fontes substitutas nessa medida.",
        15
      ],
      [
        "Ampliar energia solar, eólica, biomassa e pequenas hidrelétricas e incentivar polos de hidrogênio verde.",
        51
      ]
    ]
  ],
  [
    "Dívida pública",
    [
      [
        "Manter o novo arcabouço fiscal, controlar o crescimento do gasto primário e reduzir o déficit; o plano não fixa meta para o estoque da dívida.",
        49
      ],
      [
        "Estabilizar e reduzir a dívida pública para criar condições de juros menores.",
        33
      ],
      [
        "Substituir o arcabouço fiscal por uma PEC de equilíbrio fiscal com desindexação de despesas e revisão de renúncias fiscais.",
        10
      ],
      [
        "Adotar estratégia plurianual com metas anuais para estabilizar a dívida em relação ao PIB e recuperar superávits primários.",
        12
      ],
      [
        "Fazer um choque fiscal e manter superávits primários para estabilizar a relação dívida/PIB.",
        18
      ],
      [
        "Suspender imediatamente o pagamento da dívida pública e realizar auditoria cidadã.",
        15
      ],
      [
        "Suspender o pagamento da dívida pública aos grandes investidores e realizar auditoria.",
        28
      ],
      [
        "Reduzir gradualmente a dívida pública por crescimento econômico, equilíbrio fiscal e modernização do Estado.",
        36
      ]
    ]
  ]
];
