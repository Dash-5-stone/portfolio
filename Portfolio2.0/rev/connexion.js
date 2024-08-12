function log(){
    event.preventDefault();
    var mail=document.getElementById("emai").value;
    var nom=document.getElementById("pas").value;
    if(mail=="" || nom==""){
        document.getElementById("mai").innerHTML='la saisie de l\'email et du mot de passe sont obligatoire';
    }
}