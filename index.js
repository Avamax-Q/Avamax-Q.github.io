
const type=["Normal","Fire","Water","Grass","Electric","Ice","Fighting","Poison","Ground","Flying","Psychic","Bug","Rock","Ghost","Dragon","Dark","Steel","Fairy"]

const effectiveness=[[1,1,1,1,1,1,1,1,1,1,1,1,0.5,0,1,1,0.5,1],[1,0.5,0.5,2,1,2,1,1,1,1,1,2,0.5,1,0.5,1,2,1],[1,2,0.5,0.5,1,1,1,1,2,1,1,1,2,1,0.5,1,1,1],[1,0.5,2,0.5,1,1,1,0.5,2,0.5,1,0.5,2,1,0.5,1,0.5,1],[1,1,2,0.5,0.5,1,1,1,0,2,1,1,1,1,0.5,1,1,1],[1,0.5,0.5,2,1,0.5,1,1,2,2,1,1,1,1,2,1,0.5,1],[2,1,1,1,1,2,1,0.5,1,0.5,0.5,0.5,2,0,1,2,2,0.5],[1,1,1,2,1,1,1,0.5,0.5,1,1,1,0.5,0.5,1,1,0,2],[1,2,1,0.5,2,1,1,2,1,0,1,0.5,2,1,1,1,2,1],[1,1,1,2,0.5,1,2,1,1,1,1,2,0.5,1,1,1,0.5,1],[1,1,1,1,1,1,2,2,1,1,0.5,1,1,1,1,0,0.5,1],[1,0.5,1,2,1,1,0.5,0.5,1,0.5,2,1,1,0.5,1,2,0.5,0.5],[1,2,1,1,1,2,0.5,1,0.5,2,1,2,1,1,1,1,0.5,1],[0,1,1,1,1,1,1,1,1,1,2,1,1,2,1,0.5,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,0.5,0],[1,1,1,1,1,1,0.5,1,1,1,2,1,1,2,1,0.5,1,0.5],[1,0.5,0.5,1,0.5,2,1,1,1,1,1,1,2,1,1,1,0.5,2],[1,0.5,1,1,1,1,2,0.5,1,1,1,1,1,1,2,2,0.5,1]]

let typeEl=document.getElementById("type-el")

let x=0
let y=0
function randomise()
{
    x= Math.floor( Math.random()*17)+1
    let type1=type[x]
    y= Math.floor( Math.random()*17)+1
    let type2=type[y]
    typeEl.textContent=type1+" - "+type2
}
let selection=""

let resultEl=document.getElementById("result-btn")
let streakEl = document.getElementById("streak")
function check(selected_index,effective)
{
    console.log(type[selected_index])
    let type_effec_1=effectiveness[selected_index][x]
    console.log(type_effec_1)
    let type_effec_2=effectiveness[selected_index][y]
    console.log(type_effec_2)
    let final_effec
    if(x===y)
    {
        final_effec=type_effec_1*1.0
        if (final_effec === effective)
        {
            resultEl.textContent = "Correct Guess"
            streakEl.textContent++
            if(streakEl.textContent==18)
            {
                streakEl.textContent="All Types Guessed Correctly"
                setTimeout(reset,2000)
            }
        }
        else
        {
            resultEl.textContent = "Wrong Guess"
            streakEl.textContent=0
        }
    }
    else
    {


        final_effec= type_effec_1 * type_effec_2 * 1.0
        if (final_effec === effective)
        {
            resultEl.textContent = "Correct Guess"
            streakEl.textContent++
            if(streakEl.textContent==18)
            {
                streakEl.textContent="All Types Guessed Correctly"
                setTimeout(reset,2000)
            }
        }
        else
        {
            resultEl.textContent = "Wrong Guess"
            streakEl.textContent=0
        }

        console.log((final_effec))
    }
}
function reset()
{
    x=18
    y=18
    selection=""
    typeEl.textContent=" - "
    resultEl.textContent=" - "
    streakEl.textContent=0
}
function btn1(selected_effectiveness)
{
    selection=type[0]
    check(0,selected_effectiveness)
}

function btn2(selected_effectiveness)
{
    selection=type[1]
    check(1,selected_effectiveness)
}

function btn3(selected_effectiveness)
{
    selection=type[2]
    check(2,selected_effectiveness)
}

function btn4(selected_effectiveness)
{
    selection=type[3]
    check(3,selected_effectiveness)
}

function btn5(selected_effectiveness)
{
    selection=type[4]
    check(4,selected_effectiveness)
}

function btn6(selected_effectiveness)
{
    selection=type[5]
    check(5,selected_effectiveness)
}

function btn7(selected_effectiveness)
{
    selection=type[6]
    check(6,selected_effectiveness)
}

function btn8(selected_effectiveness)
{
    selection=type[7]
    check(7,selected_effectiveness)
}

function btn9(selected_effectiveness)
{
    selection=type[8]
    check(8,selected_effectiveness)
}

function btn10(selected_effectiveness)
{
    selection=type[9]
    check(9,selected_effectiveness)
}

function btn11(selected_effectiveness)
{
    selection=type[10]
    check(10,selected_effectiveness)
}

function btn12(selected_effectiveness)
{
    selection=type[11]
    check(11,selected_effectiveness)
}

function btn13(selected_effectiveness)
{
    selection=type[12]
    check(12,selected_effectiveness)
}

function btn14(selected_effectiveness)
{
    selection=type[13]
    check(13,selected_effectiveness)
}

function btn15(selected_effectiveness)
{
    selection=type[14]
    check(14,selected_effectiveness)
}


function btn16(selected_effectiveness)
{
    selection=type[15]
    check(15,selected_effectiveness)
}

function btn17(selected_effectiveness)
{
    selection=type[16]
    check(16,selected_effectiveness)
}

function btn18(selected_effectiveness)
{
    selection=type[17]
    check(17,selected_effectiveness)
}
