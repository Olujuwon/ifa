const members = ["Senad", 'Mohammed', 'Juwon', 'Sanjog', 'Sannu','Pragya','Anh', 'Raspin', 'Nilo', 'Lam'];

choosenOne= () =>{
    let choosen = Math.floor(Math.random()*10);
    console.log(choosen)
    
    return members[choosen]
}
const x =  choosenOne()

document.getElementById("here").innerHTML = x;