import { readFileSync, writeFileSync } from 'node:fs';
import { runInNewContext } from 'node:vm';

const path = new URL('../site/dist/data.js', import.meta.url);
const source = readFileSync(path, 'utf8');
const { candidates, themes, base } = runInNewContext(source + '\n;({ candidates, themes, base })');
if (candidates.length !== 8 || themes.length !== 31 || themes.some(([, rows]) => rows.length !== 8)) {
  throw new Error('A base de oito candidatos e 31 temas mudou.');
}

themes.push(
  ['Energia', [
    ['Ampliar investimentos em geração e transmissão de eletricidade para assegurar o abastecimento e reduzir dependências externas.', 64],
    ['Expandir a infraestrutura de petróleo e gás e reduzir encargos embutidos na conta de luz.', 53],
    ['Criar marco regulatório da transmissão para reduzir cortes de geração renovável e retomar as obras de Angra 3.', 24],
    ['Rever encargos e subsídios da conta de luz com transparência e proteger o acesso das famílias de baixa renda.', 35],
    ['Reformar a formação de preços da eletricidade e reduzir encargos setoriais da tarifa.', 33],
    ['Reestatizar Eletrobras e Petrobras e instituir controle público da geração de energia e dos combustíveis.', 60],
    ['Reestatizar empresas estratégicas de petróleo e energia sob controle público e social.', 26],
    ['Criar o PENER-BR para mapear e ampliar a geração solar, eólica e de outras fontes renováveis.', 175],
  ]],
  ['Transição energética', [
    ['Aumentar a participação das renováveis, investir em armazenamento e substituir progressivamente combustíveis fósseis por biocombustíveis e hidrogênio de baixa emissão.', 64],
    ['Fomentar etanol, biodiesel, combustível sustentável de aviação e biogás e ampliar o RenovaBio.', 53],
    ['Explorar a produção de hidrogênio verde, inclusive na bacia amazônica.', 24],
    ['Expandir biometano, etanol, biodiesel, combustível sustentável de aviação e hidrogênio de baixa emissão.', 37],
    ['Acelerar a eletrificação da economia e desenvolver mercados para biocombustíveis avançados e hidrogênio verde.', 34],
    ['Criar programa de transição das matrizes energéticas e da extração de matérias-primas com metas de eficiência e conservação.', 63],
    ['Proibir exploração de petróleo na Margem Equatorial; o plano não detalha fontes substitutas nessa medida.', 15],
    ['Ampliar energia solar, eólica, biomassa e pequenas hidrelétricas e incentivar polos de hidrogênio verde.', 51],
  ]],
);

const updated = '/* Síntese editorial dos programas oficiais das eleições de 2026. A numeração remete à página impressa do PDF. */\n'
  + 'const candidates = ' + JSON.stringify(candidates, null, 2) + ';\n'
  + 'const base = ' + JSON.stringify(base) + ';\n'
  + 'const themes = ' + JSON.stringify(themes, null, 2) + ';\n';
writeFileSync(path, updated);
