let button = document.querySelector('button');
//event listner
button.addEventListener("click", displayStats);

let resultdiv = document.createElement("div")
    resultdiv.id = "result"   //creat id for style
    document.getElementById("wrapper").appendChild(resultdiv)

function displayStats(){
    console.log("sdas")
    let input = document.getElementById("input");
    let citys = input.options[input.selectedIndex].value;
    let population = 0
switch(citys) {
        case 'colombo':
            population = 0;
            break;

        case 'gampha':
            population = 0;
            break;

        case 'puttalam':
            population = 0
            break;

        case 'galle':
            population = 0
            break;
        }

    let text = `The srilankan city of ${citys} has a population of
    ${population}`;
    console.log(text)

    

    document.getElementById("result").innerHTML = text

}