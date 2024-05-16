
66
function mostraRaquete(x,y) {
67
  rect(x, y, raqueteComprimento, raqueteAltura);
68
}
69
​
70
function movimentaMinhaRaquete() {
71
  if(keyIsDown(UP_ARROW)) {
72
    yRaquete -= 10;
73
  }
74
  if(keyIsDown(DOWN_ARROW)) {
75
    yRaquete += 10;
76
  }
77
}
78
​
79
function verificaColisaoRaquete() {
80
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
81
    velocidadeXBolinha *= -1;
82
  }
83
}
84
​
85
function verificaColisaoRaquete(x,y) {
86
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
87
  if(colidiu) {
88
    velocidadeXBolinha *= -1;
89
  }
90
}
91
​
92
function movimentaRaqueteOponente() {
93
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
94
  yRaqueteOponente += velocidadeYOponente;
95
}
96
​
97
function incluiPlacar() {
98
  fill(255);
99
  text(meusPontos, 278, 26);
100
  text(pontosDoOponente, 321, 26);
101
}
102
​
103
function marcaPonto() {
104
  if (xBolinha > 590) {
105
    meusPontos += 1;
106
  }
107
  if (xBolinha < 10) {
108
    pontosDoOponente += 1;
109
  }
110
}
111
​
112
​
