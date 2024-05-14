var input, check, number, subtract, counter;

function checker()
{
    if (input % 2 == 0)
    {
        subtract = 1;
        return true;
    }
    else if (input % 2 == 1)
    {
        subtract = 0;
        return true;
    }
    else
    {
        alert ("Not a number, please enter a number.")
        return false;
    }
}

do
{
    check = true;
    input = prompt("Enter a number:");
    check = checker();
} while (check == false)

document.write ("Number inputted: " + input + "<br/>" + "<br/>");
number = input;

do
{
    counter = number;

    do
    {
        document.write (input + " ");
        counter--;
    } while (counter >= 1);

    number -= subtract;
    input--;
    document.write ("<br/>");
} while (input >= 1);
