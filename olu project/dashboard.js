function promptUser(){
const childGender =prompt("is your child Male or Female?");

if(childGender.toLowerCase()==="Male"
|| childGender.toLowerCase()==="Female")
{
    const childStatus=prompt("is your child Deaf or Disabled?");
    if(childStatus.toLowerCase()==="Deaf")
        {
            window.location.href ="fordeaf.html";
        } else if(childStatus.toLowerCase()=== "Disabled"){
            window.location.href="fordisabled.html";
        }else{
            alert("Invalid input.please enter 'Deaf' or 'Disabled'.");
        }
    }else{
        alert("Invalid input.please enter 'Male' or 'Feamale'.");
    }
        
}