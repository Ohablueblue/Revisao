// As chaves servem apenas para separar os resultados em quadros distintos
{ // canvas1
    const can = document.getElementById("canvas1");
    const ctx = can.getContext("2d");

    const xp_max = ctx.canvas.width // largura em pixel
    const yp_max = ctx.canvas.height // altura em pixel

    // Posição em pixel onde os zeros de cada eixo irão se cruzar, divide por dois para o meio do quadro
    const x0p = xp_max/10;
    const y0p = yp_max/2;

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(0,y0p); ctx.lineTo(xp_max,y0p); // eixo x
    ctx.moveTo(x0p,0); ctx.lineTo(x0p,yp_max); // eixo y
    ctx.stroke()
}

{ // canvas2
    const can = document.getElementById("canvas2");
    const ctx = can.getContext("2d");

    const xp_max = ctx.canvas.width // largura em pixel
    const yp_max = ctx.canvas.height // altura em pixel

    // Posição em pixel onde os zeros de cada eixo irão se cruzar, divide por dois para o meio do quadro
    const x0p = 2*xp_max/10;
    const y0p = yp_max/2;

    // Inicia o desenho
    ctx.beginPath();
    ctx.strokeStyle = "black";
    
    // Eixos
    ctx.moveTo(0,y0p); ctx.lineTo(xp_max,y0p); // eixo x
    ctx.moveTo(x0p,0); ctx.lineTo(x0p,yp_max); // eixo y
    
    // Escalas
    const dim = 4 // dimensão das marcas nos eixos
    
    // Marcas no eixo x
    const Nx = 11; // Número de marcas no eixo x
    let Dxp = xp_max/(Nx-1); // Espaçamento em pixel para colocar as marcas
    
    // Início do intervalo
    let xmin = -5/4;
    // Fim do intervalo
    let xmax = 5;
    // Tamanho do intervalo
    let Deltax = xmax-xmin;
    let deltax = Deltax/xp_max;
    
    for(let i=0;i<Nx;i++) {
        let xp = i*Dxp; // posição x em pixel
        let x = (xp-x0p)*deltax; // posição x na escala do eixo
        ctx.moveTo(xp,y0p-dim); ctx.lineTo(xp,y0p+dim); // desenha a linha
        ctx.fillText(x.toFixed(3),xp+4,y0p+9);
    }
    ctx.stroke()
}

{ // canvas 3
    const can = document.getElementById("canvas3");
    const ctx = can.getContext("2d");

    const xp_max = ctx.canvas.width // largura em pixel
    const yp_max = ctx.canvas.height // altura em pixel

    // Posição em pixel onde os zeros de cada eixo irão se cruzar, divide por dois para o meio do quadro
    const x0p = 2*xp_max/10;
    const y0p = yp_max/2;

    // Inicia o desenho
    ctx.beginPath();
    ctx.strokeStyle = "black";
    
    // Eixos
    ctx.moveTo(0,y0p); ctx.lineTo(xp_max,y0p); // eixo x
    ctx.moveTo(x0p,0); ctx.lineTo(x0p,yp_max); // eixo y
    
    // Escalas
    const dim = 4 // dimensão das marcas nos eixos
    
    // Marcas nos eixo x e y
    const Nx = 11; // Número de marcas no eixo x
    let Dxp = xp_max/(Nx-1); // Espaçamento em pixel para colocar as marcas
    const Ny = 11; // Número de marcas no eixo y
    let Dyp = yp_max/(Ny-1); // Espaçamento em pixel para colocar as marcas em y
    
    // Início do intervalo
    let xmin = -5/4;
    let ymin = -10;
    // Fim do intervalo
    let xmax = 5;
    let ymax = 10;
    // Tamanho do intervalo
    let Deltax = xmax-xmin;
    let deltax = Deltax/xp_max;
    let Deltay = ymax-ymin;
    let deltay = Deltay/yp_max;
    
    for(let i=0;i<Nx;i++) {
        let xp = i*Dxp; // posição x em pixel
        let x = (xp-x0p)*deltax; // posição x na escala do eixo
        ctx.moveTo(xp,y0p-dim); ctx.lineTo(xp,y0p+dim); // desenha a linha
        ctx.fillText(x.toFixed(3),xp+4,y0p+9);
    }
    
    for(let i=0;i<Ny;i++) {
        let yp = i*Dyp; // posição y em pixel
        let y = (y0p-yp)*deltay; // posição y na escala do eixo
        ctx.moveTo(x0p-dim,yp); ctx.lineTo(x0p+dim,yp); // desenha a linha
        ctx.fillText(y.toFixed(1),x0p-20,yp-4);
    }
    ctx.stroke()
   
}

{ //canvas4
    
    // ----------------------------------------------
    // Desenhando os eixos
    // ----------------------------------------------
    const can = document.getElementById("canvas4");
    const ctx = can.getContext("2d");

    const xp_max = ctx.canvas.width // largura em pixel
    const yp_max = ctx.canvas.height // altura em pixel

    // Posição em pixel onde os zeros de cada eixo irão se cruzar, divide por dois para o meio do quadro
    const x0p = xp_max/2;
    const y0p = yp_max/2;

    // Inicia o desenho
    ctx.beginPath();
    ctx.strokeStyle = "black";
    
    // Eixos
    ctx.moveTo(0,y0p); ctx.lineTo(xp_max,y0p); // eixo x
    ctx.moveTo(x0p,0); ctx.lineTo(x0p,yp_max); // eixo y
    
    // Escalas
    const dim = 4 // dimensão das marcas nos eixos
    
    // Marcas nos eixo x e y
    const Nx = 11; // Número de marcas no eixo x
    let Dxp = xp_max/(Nx-1); // Espaçamento em pixel para colocar as marcas
    const Ny = 11; // Número de marcas no eixo y
    let Dyp = yp_max/(Ny-1); // Espaçamento em pixel para colocar as marcas em y
    
    // Início do intervalo
    let xmin = -2;
    let ymin = -2;
    // Fim do intervalo
    let xmax = 2;
    let ymax = 2;
    // Tamanho do intervalo
    let Deltax = xmax-xmin;
    let deltax = Deltax/xp_max;
    let Deltay = ymax-ymin;
    let deltay = Deltay/yp_max;
    
    for(let i=0;i<Nx;i++) {
        let xp = i*Dxp; // posição x em pixel
        let x = (xp-x0p)*deltax; // posição x na escala do eixo
        ctx.moveTo(xp,y0p-dim); ctx.lineTo(xp,y0p+dim); // desenha a linha
        ctx.fillText(x.toFixed(3),xp+4,y0p+9);
    }
    
    for(let i=0;i<Ny;i++) {
        let yp = i*Dyp; // posição y em pixel
        let y = (y0p-yp)*deltay; // posição y na escala do eixo
        ctx.moveTo(x0p-dim,yp); ctx.lineTo(x0p+dim,yp); // desenha a linha
        ctx.fillText(y.toFixed(1),x0p-20,yp-4);
    }
    ctx.stroke()
    
    // ----------------------------------------------
    // Simulando a gravitação
    // ----------------------------------------------
    
    // Constantes do problema
    const m1 = 1; // Massa do Sol, incluindo a constante G
    const m2 = 0.000003002513826043238; // Massa da Terra, incluindo a contante G
    const Dt = 0.1; // Como a escala tempral é em segundos um dia será essa quantidade de segundos
    const N = 63; // Quantidade de pontos simulados, nesse caso 365 dias que é um ano
    
    // Posição inicial do Sol (corpo 1)
    let x1 = 0;
    let y1 = 0;
    // Posição inicial da Terra (corpo 2)
    let x2 = 0;
    let y2 = 1; // escolhemos inicialmente a Terra em cima do eixo x
    
    // Velocidade inicial do Sol
    let v1x = 0;
    let v1y = 0;
    // Velocidade inicial da Terra 
    let v2x = -1; // caso ele tivesse velocidade positiva nessa direção o corpo se afastaria do Sol inicialmente
    let v2y = 0; // a única componente inical é na direção de y, subindo
    
    // Algumas funções para facilitar a vida na hora de calcular
    const f = (r1,r2,idx) => (r2[idx]-r1[idx])/Math.sqrt((r2[0]-r1[0])**2+(r2[1]-r1[1])**2)**3;
    
    // Iniciar o cálculo das demais posiçoes e velocidades
    for(let i=0;i<N;i++) {
        // Calculo das coordenadas
        let r1 = [x1,y1];
        let r2 = [x2,y2];
        
        let f21x = f(r1,r2,0)*Dt;
        let f21y = f(r1,r2,1)*Dt;
        v1x = v1x + m2*f21x;
        v2x = v2x - m1*f21x;
        v1y = v1y + m2*f21y;
        v2y = v2y - m1*f21y;
        
        x1 = x1 + v1x*Dt;
        x2 = x2 + v2x*Dt;
        y1 = y1 + v1y*Dt;
        y2 = y2 + v2y*Dt;
        
        // Mostrando coordenadas da Terra no canvas
        ctx.beginPath();
        ctx.fillStyle = "blue";
        let xp = x0p + x2/deltax;
        let yp = y0p - y2/deltay;
        ctx.fillRect(xp,yp,3,3);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.fillStyle = "yellow";
        xp = x0p + x1/deltax;
        yp = y0p - y1/deltay;
        ctx.fillRect(xp,yp,6,6);
        ctx.stroke();
    }
    
}

{ // svg
    // As funções iniciais no svg é obter os objetos e não fornecer o contexto de desenho 2d 
    // como ocorre no canvas
    
    // Os objetos as serem animados:
    const svgObject = document.getElementById('external-1');
    // Pega o sol
    const sol = svgObject.getElementById('sol');
    // Pega o círculo
    const terra = svgObject.getElementById('terra');
    
    // Para o svg a largura e altura são obtidas de forma diferente que no canvas
    const xp_max = svgObject.getBoundingClientRect().width // largura em pixel
    const yp_max = svgObject.getBoundingClientRect().height // altura em pixel

    // Posição em pixel onde os zeros de cada eixo irão se cruzar, divide por dois para o meio do quadro
    const x0p = xp_max/2;
    const y0p = yp_max/2;
    
    // Não iremos desenhar os eixos no svg, porém vamos nos basear nos dados da escala do eixo 
    // portanto repetiremos os parâmetros do tamanho da escala, valores máximo e mínimo, etc.portanto
    // Início do intervalo
    let xmin = -2;
    let ymin = -2;
    // Fim do intervalo
    let xmax = 2;
    let ymax = 2;
    // Tamanho do intervalo
    let Deltax = xmax-xmin;
    let deltax = Deltax/xp_max;
    let Deltay = ymax-ymin;
    let deltay = Deltay/yp_max;

    // Finalmente podemos definir as constantes do problema e condições iniciais
    
    // Constantes do problema
    const m1 = 1; // Massa do Sol, incluindo a constante G
    const m2 = 0.000003002513826043238; // Massa da Terra, incluindo a contante G
    const Dt = 0.01; // Como a escala tempral é em segundos um dia será essa quantidade de segundos
    const N = 63; // Quantidade de pontos simulados, nesse caso 365 dias que é um ano
    
    // Posição inicial do Sol (corpo 1)
    let x1 = 0;
    let y1 = 0;
    // Posição inicial da Terra (corpo 2)
    let x2 = 0;
    let y2 = 1; // escolhemos inicialmente a Terra em cima do eixo x
    
    // Velocidade inicial do Sol
    let v1x = 0;
    let v1y = 0;
    // Velocidade inicial da Terra 
    let v2x = -1; // caso ele tivesse velocidade positiva nessa direção o corpo se afastaria do Sol inicialmente
    let v2y = 0; // a única componente inical é na direção de y, subindo
    
    // Algumas funções para facilitar a vida na hora de calcular
    const f = (r1,r2,c) => (r2[c]-r1[c])/Math.sqrt((r2[0]-r1[0])**2+(r2[1]-r1[1])**2)**3;
    
    // Variável da animação
    let c = 0;
    
    // Agora as funções de animação 
    function animar() {
    
        const frame = () => {
            
            // Calculo das coordenadas
            let r1 = [x1,y1];
            let r2 = [x2,y2];
        
            let f21x = f(r1,r2,0)*Dt;
            let f21y = f(r1,r2,1)*Dt;
            v1x = v1x + m2*f21x;
            v2x = v2x - m1*f21x;
            v1y = v1y + m2*f21y;
            v2y = v2y - m1*f21y;
        
            x1 = x1 + v1x*Dt;
            x2 = x2 + v2x*Dt;
            y1 = y1 + v1y*Dt;
            y2 = y2 + v2y*Dt;
        
            // Mostrando coordenadas da Terra no canvas
            let xp = x0p + x2/deltax;
            let yp = y0p - y2/deltay;
            terra.setAttributeNS(null,'cy',yp)
            terra.setAttributeNS(null,'cx',xp)
            
            // Mostrando as coordenadas do Sol
            xp = x0p + x1/deltax;
            yp = y0p - y1/deltay;
            sol.setAttributeNS(null,'cy',yp)
            sol.setAttributeNS(null,'cx',xp)
        
            if(c==0) {
                clearInterval(id); // espera um intervalo
            }
        
        }
    
        if(c==0) {
            c = 1;
            id = setInterval(frame, 5);
        }
        else {
            c = 0;
        } 
    
    }
    
}