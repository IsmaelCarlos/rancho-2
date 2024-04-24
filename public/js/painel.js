
//  function Execultar(){
//  var shell = new ActiveXObject( "WScript.shell" );
//  shell.run( '"shutdown -r -t"', 1, true );}



 const botao = document.getElementById("btnClique")

botao.addEventListener("click",Execultar)

function Execultar(){
    // var shell = new ActiveXObject( "WScript.shell" );
    var shell = new ActiveXObject( "WScript.shell" )
    shell.exec( '"C:\\Windows\\System32\\notepad.exe"', 1, true )
}