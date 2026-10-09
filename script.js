let res=document.getElementById("res");
        let allelm= document.getElementById("table");
        allelm.addEventListener("click",(event)=>{
            if (event.target.innerText == "="){
                res.value = eval(res.value);
            } else if(event.target.innerText == "C"){
                res.value = "";
            }
            else{
                res.value += event.target.innerText;
            }
            //console.log(event);
        })