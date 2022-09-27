    const Ccalculate   = document.getElementById("calculate");
    Ccalculate.onclick = calculate;
    
    function calculate(){
    
    var factorial=1;
    var number=document.getElementById("inputText").value;
    number=Number(number);
    const alert = document.getElementById("alert")
     
    
    if(number>=0)
    {
     
    for(var i=1;i<=number;i++)
    {
        factorial=factorial*i;
    }
    
    
    alert.className = 'alert alert-success';
    alert.textContent = "The Factorial Of" + " " + number +" "+ "İs"+" "+ factorial ;  
    }


    setTimeout(() => {
        alert.className = 'alert';
        alert.textContent = '';
      }, 8000); 
     
    }
     
    
    