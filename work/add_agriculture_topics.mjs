import { readFileSync, writeFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const path = new URL('../site/dist/data.js', import.meta.url);
const source = readFileSync(path, 'utf8');
const { candidates, themes, base } = runInNewContext(source + '\n;({ candidates, themes, base })');
if (candidates.length !== 8 || themes.length !== 29 || themes.some(([, rows]) => rows.length !== 8)) {
  throw new Error('A base de oito candidatos e 29 temas mudou.');
}

themes.push(
  ['Agricultura', [
    ['Expandir o Plano Safra da Agricultura Familiar, com crédito para alimentos, agroecologia e produção orgânica.', 59],
    ['Retomar a regularização e a titulação de pequenos proprietários rurais para facilitar crédito e investimento.', 54],
    ['Auditar a produtividade dos assentamentos existentes e suspender novos assentamentos até atingirem as metas propostas.', 42],
    ['Recuperar pastagens e ampliar integração lavoura-pecuária-floresta e agricultura de precisão nas áreas já abertas.', 22],
    ['Ampliar assistência técnica a pequenos e médios produtores, vinculando repasses às Emater a metas de produtividade.', 44],
    ['Fazer reforma agrária popular e ampliar crédito, assistência técnica e compras públicas da agricultura familiar.', 45],
    ['Dar crédito público barato, seguro agrícola e compras públicas aos pequenos produtores, priorizando alimentos e agroecologia.', 17],
    ['Criar o programa Raízes do Brasil para apoiar agricultura familiar com crédito, assistência técnica, irrigação e cooperativismo.', 115],
  ]],
  ['Agronegócio', [
    ['Ampliar Plano Safra, crédito para mecanização e irrigação, seguro rural e promoção comercial das exportações do setor.', 61],
    ['Ampliar seguro rural e armazenagem das safras e apoiar produção nacional de fertilizantes.', 54],
    ['Executar o AgroBrasil 2030, com produção nacional de fertilizantes e agroindústria para agregar valor aos produtos exportados.', 42],
    ['Criar Plano Safra plurianual, fundo garantidor de crédito privado e ampliar instrumentos do mercado de capitais para o setor.', 23],
    ['Facilitar insumos, inovação privada e logística para elevar a competitividade e exportação do agro.', 44],
    ['Desapropriar grandes terras controladas por empresas do agronegócio e destiná-las à reforma agrária.', 44],
    ['Encerrar crédito público e subsídios estatais ao grande agronegócio.', 15],
    ['Criar a frente Safra de Gigantes para expandir agricultura empresarial irrigada e exportadora, com seguro rural e crédito.', 115],
  ]],
);

const updated = '/* Síntese editorial dos programas oficiais das eleições de 2026. A numeração remete à página impressa do PDF. */\n'
  + 'const candidates = ' + JSON.stringify(candidates, null, 2) + ';\n'
  + 'const base = ' + JSON.stringify(base) + ';\n'
  + 'const themes = ' + JSON.stringify(themes, null, 2) + ';\n';
writeFileSync(path, updated);
