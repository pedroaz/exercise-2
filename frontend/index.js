function get(){
    axios.get("http://localhost:3000/soma?x=5&y=7")
        .then(res =>showResponse(res))
}
get()

function showResponse(res){

    console.log(res)
}

