function search(){
const userinput=document.getElementById("search-input").ariaValueMax.toLowerCase();

if(userinput === "schools for girls"){
    window.location.href ="forgirls.html";
}else if ( userinput === "Schools for boys"){
    window.location.href="forboys.html";
}else if (userinput=== "Schools for the disabled"){
    window.location.href= "fordisabled.html";
}else if (userinput=== "Schools for deaf"){
    window.location.href= "fordeaf.html";
}else{
    alert("Not found");
}
}
