import { readFileSync, writeFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const path = new URL('../site/dist/data.js', import.meta.url);
const source = readFileSync(path, 'utf8');
const { candidates, themes, base } = runInNewContext(source + '\n;({ candidates, themes, base })');
if (candidates.length !== 8 || themes.length !== 26 || themes.some(([, rows]) => rows.length !== 8)) {
  throw new Error('A base de oito candidatos e 26 temas mudou.');
}

themes.push(
  ['Turismo', [
    ['Criar novos roteiros de gastronomia, arte, cultura e ecoturismo e ampliar a promoção internacional do Brasil.', 57],
    ['Promover o destino Brasil e as vocações regionais, com infraestrutura de transporte para gerar renda e emprego no interior.', 60],
    null,
    ['Criar a Estratégia Nacional de Turismo 2035, com metas de viagens, receitas, empregos e dispersão regional.', 97],
    ['Ampliar concessões e parcerias para infraestrutura turística e profissionalizar a gestão dos destinos.', 71],
    null,
    null,
    ['Implantar polos de serviços e comércio nas rodovias para incentivar o turismo rodoviário e o desenvolvimento do interior.', 121],
  ]],
  ['Esporte', [
    ['Ampliar o Bolsa Atleta e o patrocínio das estatais ao esporte olímpico e paralímpico.', 43],
    ['Criar o programa Escola de Campeões, com treinos e competições escolares em parceria com a iniciativa privada.', 40],
    null,
    ['Criar Plano Nacional do Esporte 2035 e cofinanciar atividades escolares e comunitárias.', 39],
    ['Vincular repasses às entidades esportivas a governança e resultados e ampliar investimentos privados.', 67],
    ['Criar praças, ginásios esportivos e centros recreativos para ampliar o acesso da juventude ao esporte e lazer.', 30],
    null,
    null,
  ]],
  ['Cultura', [
    ['Integrar artes à educação com Mais Cultura nas Escolas e Arte e Cultura na Educação de Tempo Integral.', 43],
    ['Aperfeiçoar leis de incentivo, descentralizar o apoio a artistas e preservar o patrimônio histórico.', 41],
    ['Limitar progressivamente o fomento via Lei Rouanet e incentivar novos talentos.', 28],
    ['Consolidar o Sistema Nacional de Cultura com metas, financiamento estável e acesso à arte em escolas e territórios desatendidos.', 28],
    ['Priorizar artistas locais e produções regionais nos mecanismos de financiamento cultural.', 69],
    ['Ampliar investimento público em cultura, com equipamentos gratuitos e financiamento direto à cultura popular.', 40],
    ['Implementar o ensino de história e cultura afro-brasileira e indígena em toda a rede escolar.', 22],
    null,
  ]],
);

const updated = '/* Síntese editorial dos programas oficiais das eleições de 2026. A numeração remete à página impressa do PDF. */\n'
  + 'const candidates = ' + JSON.stringify(candidates, null, 2) + ';\n'
  + 'const base = ' + JSON.stringify(base) + ';\n'
  + 'const themes = ' + JSON.stringify(themes, null, 2) + ';\n';
writeFileSync(path, updated);
