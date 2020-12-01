let counter = 0
let timer = ["|", "/","-","\\"]
for(let i = 0; i < 4; i++) {
  setTimeout(() => {
    process.stdout.write('\r' + timer[i] + "    " );
  }, i * 200);
}