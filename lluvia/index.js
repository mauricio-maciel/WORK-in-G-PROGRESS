const canvas=document.getElementById('Matrix');
const context=canvas.getContext('2d');

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
const numeros= '0123456789';

const alfabeto = katakana + latin + numeros;

const fontSize = 16;
const columnas = canvas.width/fontSize;

const gotas = [];

for(let x=0;x<columnas;x++){
    gotas[x]=1;
}

const dibujo=()=>{

    context.fillStyle='rgba(0,0,0,0.05)';
    context.fillRect(0,0,canvas.width,canvas.height);
    

    context.fillStyle='#0f0';
    context.font=fontSize + 'px monospace';
     

    for (let i = 0; i < gotas.length; i++) {
        const text = alfabeto.charAt(Math.floor(Math.random()*alfabeto.length));
        context.fillText(text,i*fontSize,gotas[i]*fontSize);

        if(gotas[i]*fontSize>canvas.height && Math.random() > 0.975 ){
            gotas[i]=0;
        }
        gotas[i]++;
    }
};

setInterval(dibujo,30);