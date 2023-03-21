function oi() {
    return "Oi, "
   }
   
   function cumprimentar(mensagem,nome) {
    console.log(mensagem()+nome)}
    
   cumprimentar(oi,"Zé");
   
   
   
   function fatorial(n) {
    if(n<=2) return 1//condição de retorno
    return n*fatorial(n-1)}
    fatorial(5)
    
    function loop(x) {
    if (x >= 10) return; 
    loop(x + 1); 
   }
   loop(9)