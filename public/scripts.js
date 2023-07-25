
    document.getElementById("button_json").onclick = function (){
      
        oddaj += '"'
        oddaj += document.getElementById("text_json_asdfasdfafd").value
        oddaj += '",'
        document.getElementById("text_json_asdfasdfafd").value = ""
    } 
    document.getElementById("button_json_send").onclick = function (){
    console.log(oddaj)
}




