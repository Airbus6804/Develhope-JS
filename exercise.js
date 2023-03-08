function repeatHello(callback){
    setInterval(callback, 1000);
}

repeatHello(() => {
    console.log("Hello")
})

//La funzione di callback puo essere anche una arrow function anonima perché
//le verra assegnato un nome all'interno della funzione a cui è stata passata 
