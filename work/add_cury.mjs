import { readFileSync, writeFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const path = new URL('../site/dist/data.js', import.meta.url);
const source = readFileSync(path, 'utf8');
const { candidates, themes, base } = runInNewContext(source + '\n;({ candidates, themes, base })');
if (candidates.length !== 7 || themes.length !== 26 || themes.some(([, rows]) => rows.length !== 7)) {
  throw new Error('A base original de sete candidatos e 26 temas mudou.');
}

const proposals = new Map([
  ['Segurança pública', ['Recriar o Ministério da Segurança Pública, combater facções e instituir força municipal de prevenção (Polícia FOCO).', 45]],
  ['Saúde', ['Ampliar atenção preventiva e telemedicina pelo programa Tele Saúde Brasil para desafogar o SUS.', 161]],
  ['Educação', ['Priorizar educação básica e alfabetização, valorizar professores e incluir gestão da emoção nas escolas.', 43]],
  ['Fisco e tributação', ['Simplificar tributos e procedimentos e buscar carga tributária menor ao fim da transição.', 38]],
  ['Relações internacionais', ['Criar embaixadas empreendedoras e ampliar integração econômica e comercial regional e global.', 59]],
  ['Comércio exterior', ['Criar zonas de processamento de exportação e corredores estratégicos de comércio.', 41]],
  ['Funcionalismo público', ['Reformar a administração, modernizar carreiras e avaliar desempenho, com valorização de servidores competentes.', 37]],
  ['Relação entre os Poderes', ['Implantar semipresidencialismo e reformar o STF com nove ministros e mandatos de oito anos.', 60]],
  ['Relação federativa', ['Rever a divisão federativa dos tributos para fortalecer os municípios.', 38]],
  ['Proteção ambiental', ['Criar o programa Floresta Viva para combater incêndios com inteligência artificial e drones.', 182]],
  ['Combate à corrupção', ['Usar inteligência artificial e controle social no combate à corrupção (projeto SEO).', 39]],
  ['Emergência climática', ['Promover economia verde, hidrogênio verde, mercado de carbono e diplomacia climática.', 51]],
  ['Industrialização e complexidade econômica', ['Criar dez mil agroindústrias para ampliar o processamento da produção agropecuária.', 126]],
  ['Trabalho e economia', ['Criar Banco do Empreendedor e crédito produtivo para desenvolver novos empreendedores.', 39]],
  ['Soberania', ['Desenvolver terras raras e minerais estratégicos brasileiros pelo projeto PETRA-BR.', 178]],
  ['Tecnologias digitais', ['Oferecer serviços públicos em plataformas digitais integradas e avaliar políticas por indicadores.', 38]],
  ['Modernização do Estado', ['Fazer reforma administrativa, simplificar estruturas e adotar metas e avaliação permanente de políticas.', 37]],
  ['Redução da burocracia', ['Digitalizar serviços públicos e simplificar tributos e procedimentos para cidadãos e empresas.', 38]],
  ['Mulheres e pessoas LGBT', ['Criar o programa Mulheres Vivas contra o feminicídio e promover autonomia econômica e igualdade salarial das mulheres; não foi localizada medida específica para pessoas LGBT.', 53]],
  ['Saúde mental', ['Criar programa nacional de saúde mental e apoio emocional e incluir gestão da emoção nas escolas.', 44]],
]);

candidates.push({ name: 'Augusto Cury', party: 'Avante', file: 'avante', index: 'escritor-augusto-cury-propostas-de-governo' });
for (const [title, rows] of themes) rows.push(proposals.get(title) ?? null);
if (themes.some(([, rows]) => rows.length !== 8)) throw new Error('Falha ao acrescentar Augusto Cury em todos os temas.');

const updated = '/* Síntese editorial dos programas oficiais das eleições de 2026. A numeração remete à página impressa do PDF. */\n'
  + 'const candidates = ' + JSON.stringify(candidates, null, 2) + ';\n'
  + 'const base = ' + JSON.stringify(base) + ';\n'
  + 'const themes = ' + JSON.stringify(themes, null, 2) + ';\n';
writeFileSync(path, updated);
