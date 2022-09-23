
 async function get(){
    const n1 = document.getElementById('n1').value;
    const n2 = document.getElementById('n2').value;
    const op = document.getElementById('op').value;
    let result = document.getElementById('result');
    let url = 'http://localhost:3000'

    if (op == "soma"){
        url = url + `/soma?x=${n1}&y=${n2}`
        const res = await axios.get(url)  
        result.innerHTML = `resultado: ${res.data.result}`
    }
} 

