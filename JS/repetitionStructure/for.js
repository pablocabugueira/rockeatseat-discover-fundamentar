// for
// break - PARA A EXECUÇÃO DO LOOP
// continue - PULA A EXECUÇÃO DO MOMENTO

for(let i = 1; i <= 10; i++) {
    console.log(i)
}

for(let u = 1; u <= 10; u++) {
    if(u == 7) {
        break;
    }

    console.log(u)
}

for(let o = 1; o <= 25; o++) {
    if(o == 13) {
        continue;
    }

    console.log(o)
}