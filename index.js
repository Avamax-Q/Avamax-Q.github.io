
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

let streakCount=0
let streakCountEl=document.getElementById("streak_count")

let resultEl=document.getElementById("result-btn")
let streakEl = document.getElementById("streakEl")
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
                setTimeout(allTypesComplete,2000,this)
                randomise()

            }
            return true
        }
        else
        {
            resultEl.textContent = "Wrong Guess"
            streakEl.textContent=0
            return false
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
                setTimeout(allTypesComplete,2000,this)


            }
            return true
        }
        else
        {
            resultEl.textContent = "Wrong Guess"
            streakEl.textContent=0
            return false
        }

        console.log((final_effec))
    }
}

function allTypesComplete()
{
    reset()
    randomise()
    streakCount++
    streakCountEl.textContent="Streak - "+streakCount

}
function reset()
{
    x=18
    y=18
    selection=""
    typeEl.textContent=" - "
    resultEl.textContent=" - "
    streakEl.textContent=0
    streakCountEl.textContent="Streak - "
}
function btn1(selected_effectiveness,el)
{
    selection=type[0]
   if( check(0,selected_effectiveness))
   {
        el.classList.add("bg-color-true")
   }

   else
   {
       el.classList.add("bg-color-false")
   }
}

function btn2(selected_effectiveness,el)
{
    selection=type[1]
    if(check(1,selected_effectiveness))
    {
        el.classList.add("bg-color-true")
    }

    else
    {
        el.classList.add("bg-color-false")
    }
}

function btn3(selected_effectiveness,el)
{
    selection=type[2]
    if(check(2,selected_effectiveness))
    {
        el.classList.add("bg-color-true")
    }

    else
    {
        el.classList.add("bg-color-false")
    }

}

function btn4(selected_effectiveness,el)
{
    selection=type[3]
    if(check(3,selected_effectiveness))
    {
        el.classList.add("bg-color-true")
    }

    else
    {
        el.classList.add("bg-color-false")
    }
}

function btn5(selected_effectiveness,el)
{
    selection=type[4]
    if(check(4,selected_effectiveness))
    {
        el.classList.add("bg-color-true")
    }

    else
    {
        el.classList.add("bg-color-false")
    }
}

function btn6(selected_effectiveness,el)
{
    selection=type[5]
    if(check(5,selected_effectiveness))
    {
        el.classList.add("bg-color-true")
    }

    else
    {
        el.classList.add("bg-color-false")
    }
}

function btn7(selected_effectiveness,el)
{
    selection=type[6]
    if(check(6,selected_effectiveness))
    {
        el.classList.add("bg-color-true")
    }

    else
    {
        el.classList.add("bg-color-false")
    }
}

function btn8(selected_effectiveness,el)
{
    selection=type[7]
    if(check(7,selected_effectiveness))
    {
        el.classList.add("bg-color-true")
    }

    else
    {
        el.classList.add("bg-color-false")
    }
}

function btn9(selected_effectiveness,el)
{
    selection=type[8]
    if(check(8,selected_effectiveness))
    {
        el.classList.add("bg-color-true")
    }

    else
    {
        el.classList.add("bg-color-false")
    }
}

function btn10(selected_effectiveness,el)
{
    selection=type[9]
    if(check(9,selected_effectiveness))
    {
        el.classList.add("bg-color-true")
    }

    else
    {
        el.classList.add("bg-color-false")
    }
}

function btn11(selected_effectiveness,el)
{
    selection=type[10]
    if(check(10,selected_effectiveness))
    {
        el.classList.add("bg-color-true")
    }

    else
    {
        el.classList.add("bg-color-false")
    }
}

function btn12(selected_effectiveness,el)
{
    selection=type[11]
    if(check(11,selected_effectiveness))
    {
        el.classList.add("bg-color-true")
    }

    else
    {
        el.classList.add("bg-color-false")
    }
}

function btn13(selected_effectiveness,el)
{
    selection=type[12]
    if(check(12,selected_effectiveness))
    {
        el.classList.add("bg-color-true")
    }

    else
    {
        el.classList.add("bg-color-false")
    }
}

function btn14(selected_effectiveness,el)
{
    selection=type[13]
    if(check(13,selected_effectiveness))
    {
        el.classList.add("bg-color-true")
    }

    else
    {
        el.classList.add("bg-color-false")
    }
}

function btn15(selected_effectiveness,el)
{
    selection=type[14]
    if(check(14,selected_effectiveness))
    {
        el.classList.add("bg-color-true")
    }

    else
    {
        el.classList.add("bg-color-false")
    }
}


function btn16(selected_effectiveness,el)
{
    selection=type[15]
    if(check(15,selected_effectiveness))
    {
        el.classList.add("bg-color-true")
    }

    else
    {
        el.classList.add("bg-color-false")
    }
}

function btn17(selected_effectiveness,el)
{
    selection=type[16]
    if(check(16,selected_effectiveness))
    {
        el.classList.add("bg-color-true")
    }

    else
    {
        el.classList.add("bg-color-false")
    }
}

function btn18(selected_effectiveness,el)
{
    selection=type[17]
    if(check(17,selected_effectiveness))
    {
        el.classList.add("bg-color-true")
    }

    else
    {
        el.classList.add("bg-color-false")
    }
}
