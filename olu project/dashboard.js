    localStorage.setItem("searchResult", JSON.stringify({
        "schools for girls":"forgirls.html",
        "schools for boys":"forboys.html",
        "schools for the disabled":"fordisabled.html",
        "schools for deaf":"fordeaf.html"
    }));
    function search(){
        const userinput = document.getElementById("search-input").value.toLowerCase();
        const searchResult =JSON.parse(localStorage.getItem("searchResult"));
        if(searchResult[userinput]){        
            window.location.href= searchResult[userinput];
        } else {
            alert("not found");
        }
    }
    
    // if(userinput === "schools for girls"){
    //     window.location.href ="forgirls.html";
    // }else if ( userinput === "Schools for boys"){
    //     window.location.href="forboys.html";
    // }else if (userinput=== "Schools for the disabled"){
    //     window.location.href= "fordisabled.html";
    // }else if (userinput=== "Schools for deaf"){
    //     window.location.href= "fordeaf.html";
    // }else{
    //     alert("Not found");
    // }
    // }
    