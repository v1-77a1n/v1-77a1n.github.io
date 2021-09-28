//Declare userInput variable
let userInput;
let shape;

//Declare validateEntry function
//Checks to see if input is a number
//If it is a number, it takes absolute value and parses it into an integer
//Loop triggers if input is not number OR number is greater than 10
function validateEntry(userInput)
{
    if(isNaN(userInput))
    {
        return false;
    }
    else
    {
        if(Math.abs(parseInt(userInput)) > 10)
        {
            return false;
        }
    }

    return true;
}

//Declare getShape function
//Takes one parameter, userInput, returns polygon associated with number of sides
function getShape(userInput)
{
    switch(userInput)
    {
        case 0:
            shape = "circle";
            break;
        case 1:
            shape = "monogon";
            break;
        case 2:
            shape = "bigon";
            break;
        case 3:
            shape = "triangle";
            break;
        case 4:
            shape = "quadrilateral";
            break;
        case 5:
            shape = "pentagon";
            break;
        case 6:
            shape = "hexagon";
            break;
        case 7:
            shape = "septagon";
            break;
        case 8:
            shape = "octagon";
            break;
        case 9:
            shape = "nonagon";
            break;
        case 10:
            shape = "decagon";
            break;
    }
}

//Prompts user for input
userInput = prompt("The Cackling Leopard requires a number from 0 to 10: ");

while(!validateEntry(userInput))
{
    userInput = prompt("Invalid input, enter a number from 0 to 10: ");
}

userInput = Math.abs(parseInt(userInput));

getShape(userInput);