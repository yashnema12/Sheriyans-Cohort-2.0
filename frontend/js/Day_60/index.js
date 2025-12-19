function instagramsedatalao(username, cb){
    setTimeout(()=>{
        cb({uniquenumber:1234,username:"yash"});
    },3000);
}

instagramsedatalao("yash",function(data){
    console.log(data);
})