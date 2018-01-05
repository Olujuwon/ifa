//checks if something is in the localstorage 
const token = (localStorage.getItem('token'))? JSON.parse(localStorage.getItem('token')):{
    day: [],
    month: [],
    user:[]
}

const resetAppData = ()=>{
    (token.day.length === 21) ? window.localStorage.clear() : document.getElementById("reset").innerHTML = `${21 - token.day.length } days to reset`
}
resetAppData();

const members = ["Senad", 'Mohammed', 'Juwon', 'Sanjog', 'Sannu','Pragya','Anh', 'Rasbin', 'Niloo', 'Lam'];
const button =document.getElementById('d1butt');
    let  d = new Date();
    let day = d.getDate();
    let month = d.getMonth();

choosenOne= () =>{
    let choosen = Math.floor(Math.random()*10);
    token.user.push(`${members[choosen]} - ${day} - ${month}`)
    return  document.getElementById("here").innerHTML = `${members[choosen]}!`; 
}

button.addEventListener('click', () => {
    if (token.day.includes(day)){
        alert(`Please , you'll have to wait another 24hours before you can run the program again!`)
    }else{
        token.day.push(day);
        token.month.push(month);
        //token.user.push(`${choosenOne} - ${day} - ${month}`);
        //console.log(`${choosenOne()} - ${day} - ${month}`);
        choosenOne();
        storeData();
    }
 });
console.log(token);

const storeData = ()=>{
    localStorage.setItem('token', JSON.stringify(token))
};

