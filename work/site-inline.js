
    const $=id=>document.getElementById(id);
    const norm=s=>(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
    let selected='all';
    function make(tag,cls,text){const el=document.createElement(tag);if(cls)el.className=cls;if(text!==undefined)el.textContent=text;return el}
    function sourceUrl(c,page){return base+'arquivos/proposta-'+c.file+(page?'#page='+page:'')}
    function indexUrl(c){return base+'propostas-de-governo-dos-candidatos-ao-cargo-de-presidente-da-republica-eleicoes-2026/'+c.index}
    const filterRoot=$('filters');
    [['all','Todos'],...candidates.map((c,i)=>[String(i),c.name])].forEach(([id,label])=>{const b=make('button','chip',label);b.type='button';b.setAttribute('aria-pressed',id===selected?'true':'false');b.addEventListener('click',()=>{selected=id;filterRoot.querySelectorAll('button').forEach(x=>x.setAttribute('aria-pressed',x===b?'true':'false'));render()});filterRoot.append(b)});
    function render(){const root=$('themes');const openBefore=new Set([...root.querySelectorAll('details[open]')].map(e=>e.dataset.theme));root.replaceChildren();const query=norm($('query').value.trim());let visible=0,proposals=0;
      themes.forEach(([title,rows],themeIndex)=>{const matches=[];rows.forEach((entry,i)=>{if(selected!=='all'&&selected!==String(i))return;const searchable=norm(title+' '+candidates[i].name+' '+(entry?entry[0]:''));if(query&&!searchable.includes(query))return;matches.push([entry,i])});if(!matches.length)return;visible++;proposals+=matches.filter(([x])=>x).length;
        const details=make('details','theme');details.dataset.theme=String(themeIndex);if(openBefore.has(String(themeIndex))||(!query&&themeIndex===0&&root.childElementCount===0))details.open=true;if(query)details.open=true;
        const summary=make('summary');summary.append(make('span','num',String(themeIndex+1).padStart(2,'0')),make('span','title',title),make('span','count',matches.filter(([x])=>x).length+' com proposta'),make('span','chev','⌄'));details.append(summary);
        const wrap=make('div','table-wrap'),table=make('table'),head=make('thead'),hr=make('tr');['Candidato','Proposta ou registro','Fonte oficial','Quando'].forEach(x=>hr.append(make('th','',x)));head.append(hr);table.append(head);const body=make('tbody');
        matches.forEach(([entry,i])=>{const c=candidates[i],tr=make('tr');const person=make('td');person.append(make('span','person',c.name),make('span','party',c.party));tr.append(person);const proposal=make('td',entry?'':'missing',entry?entry[0]:'Não localizada medida específica no plano consultado.');tr.append(proposal);
          const src=make('td');const link=make('a','link',entry?'Plano, p. '+entry[1]:'Plano completo');link.href=sourceUrl(c,entry&&entry[1]);link.target='_blank';link.rel='noopener noreferrer';src.append(link);const idx=make('a','link secondary','Índice do TSE');idx.href=indexUrl(c);idx.target='_blank';idx.rel='noopener noreferrer';src.append(idx);tr.append(src);
          const date=make('td','date','24/09/2026');date.append(make('small','', 'publicação do índice TSE'));tr.append(date);body.append(tr)});table.append(body);wrap.append(table);details.append(wrap);root.append(details)});
      $('resultCount').textContent=visible+' de '+themes.length+' temas · '+proposals+' propostas localizadas';$('empty').hidden=visible!==0;
    }
    $('query').addEventListener('input',render);
    $('openAll').addEventListener('click',()=>document.querySelectorAll('details.theme').forEach(x=>x.open=true));
    $('closeAll').addEventListener('click',()=>document.querySelectorAll('details.theme').forEach(x=>x.open=false));
    render();
  