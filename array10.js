let jogos = ['Sally Face', 'Valorant', 'Stardew Valley'];
let jogoFav = 'Stardew Valley';

for(let i = 0; i < jogos.length; i++){
    if(jogoFav == jogos[i]){
        console.log(`o meu jogo favorito é ${jogos[i]} e está na posição ${i + 1}`);
    }
}