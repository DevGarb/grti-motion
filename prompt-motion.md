Crie em HTML (1920x1080, fundo preto, GSAP) um motion de 60s estilo lançamento de app: minimalista, P&B, headlines grandes com reveal palavra por palavra, mockups de UI desenhados em HTML/CSS, transições rápidas com echo trail e sem cortes secos.

Marca: {{APP}} — logo em {{CAMINHO_DA_LOGO}} (deixe branca) — tagline: "{{TAGLINE}}".
Funcionalidade apresentada: {{FEATURE}}, para {{PUBLICO}}.

Cenas:
1. Abertura: a logo se monta (~6s).
2. Frase 1, a novidade: "{{FRASE_1}}" + tela de entrada da funcionalidade (~12s).
3. Frase 2, na prática: "{{FRASE_2}}" + tela em uso, com mudança de estado e itens entrando um a um (~14s).
4. Frase 3, como usar: "{{FRASE_3}}" + 3 passos numerados com cursor clicando (~12s).
5. Frase 4, o ganho: "{{FRASE_4}}" + KPIs contando e 5 estrelas acendendo (~10s).
6. Final: os elementos das telas viram partículas que formam a logo, depois logo + tagline nítidos por ~4s e fade para preto (~8s).

Regras:
- Cada frase fica parada e legível por pelo menos 3s depois de aparecer. As transições são rápidas; o que dura é a permanência.
- Nada de tela congelada: zoom lento ou parallax leve enquanto a cena está parada.
- Textos, tempos e logo ficam num objeto CONFIG no topo do script, para reaproveitar com outra marca.
- Controles: R reinicia, Espaço pausa, H esconde a barra de progresso, #t=10 na URL abre pausado naquele segundo.
- Salve em {{PASTA}}/index.html, numa pasta fora de qualquer repositório git, e não rode comandos git.
- Sem erros de console; confira com screenshots em vários tempos antes de entregar.
