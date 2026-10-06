import { readFileSync, writeFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const path = new URL('../site/dist/data.js', import.meta.url);
const source = readFileSync(path, 'utf8');
const { candidates, themes, base } = runInNewContext(source + '\n;({ candidates, themes, base })');
if (candidates.length !== 8 || themes.length !== 33 || themes.some(([, rows]) => rows.length !== 8)) {
  throw new Error('A base de oito candidatos e 33 temas mudou.');
}

themes.push(['Dívida pública', [
  ['Manter o novo arcabouço fiscal, controlar o crescimento do gasto primário e reduzir o déficit; o plano não fixa meta para o estoque da dívida.', 49],
  ['Estabilizar e reduzir a dívida pública para criar condições de juros menores.', 33],
  ['Substituir o arcabouço fiscal por uma PEC de equilíbrio fiscal com desindexação de despesas e revisão de renúncias fiscais.', 10],
  ['Adotar estratégia plurianual com metas anuais para estabilizar a dívida em relação ao PIB e recuperar superávits primários.', 12],
  ['Fazer um choque fiscal e manter superávits primários para estabilizar a relação dívida/PIB.', 18],
  ['Suspender imediatamente o pagamento da dívida pública e realizar auditoria cidadã.', 15],
  ['Suspender o pagamento da dívida pública aos grandes investidores e realizar auditoria.', 28],
  ['Reduzir gradualmente a dívida pública por crescimento econômico, equilíbrio fiscal e modernização do Estado.', 36],
]]);

const updated = '/* Síntese editorial dos programas oficiais das eleições de 2026. A numeração remete à página impressa do PDF. */\n'
  + 'const candidates = ' + JSON.stringify(candidates, null, 2) + ';\n'
  + 'const base = ' + JSON.stringify(base) + ';\n'
  + 'const themes = ' + JSON.stringify(themes, null, 2) + ';\n';
writeFileSync(path, updated);
