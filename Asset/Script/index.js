document.getElementById("link").addEventListener("change",function(){
    const url = this.value
    if(url){
        location.assign(url)
    }
})