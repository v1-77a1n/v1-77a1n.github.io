let userName = window.prompt("What's your name?: ");
let userWellBeing = window.prompt("How are you doing?: ");
let today = new Date();
let currentDate = today.toDateString();
let currentTime = today.getHours() + ":" + today.getMinutes();
let jokeCount = 0;

function multiplyNumbers()
{
    let num1 = window.prompt("Enter a number: ");
    let num2 = window.prompt("Enter another number: ");
    alert("The result is: " + (num1 * num2));
}

function addSpeeds()
{
    let speed1 = window.prompt("What's your first racing speed?: ");
    let speed2 = window.prompt("What's your second racing speed?:");
    alert("Your two racing speeds combined is: " + (speed1 + speed2));
}

function puns()
{
    let num = (Math.random() * 5) + 1;
    let pun;
    switch(num) {
        case 1:
            pun = "Never trust an atom, they make up everything.";
            jokeCount++;
            break;
        case 2:
            pun = "I knew a guy who collected candy canes, they were in mint condition.";
            jokeCount++;
            break;
        case 3:
            pun = "England doesn't have a kidney bank, but they do have a Liverpool.";
            jokeCount++;
            break;
        case 4:
            pun = "German sausage jokes are the wurst.";
            jokeCount++;
            break;
        case 5:
            pun = "I bought a boat because it was for sail.";
            jokeCount++;
            break;
        default:
            pun = "I've started sleeping in the fireplace. Now I sleep like a log!";
            jokeCount++;
            break;
    }
}

function nextRace()
{
    let futureDate = new Date();
    futureDate = futureDate.getDate() + 10;
    alert("The next race is on: " + futureDate);
}

function numOfJokes()
{
    alert("You've cracked " + jokeCount + " jokes!");
}