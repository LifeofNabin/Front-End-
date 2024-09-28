const function populateDiv(){
    const a=document.getElementById("first_number").value
    const b=document.getElementById("Second_number").value
    const element=document.getElementById("finalsum");

    element.innerHTML=parseInt(a)+parseInt(b)


}