var arr = [];

function output ()
{
    var name = document.getElementById("name").value;
    
    if (arr.length > 6)
    {
        arr.shift();
    }

    arr.push(name);
    document.getElementById("output").innerHTML = (arr);

    return false;
}

function remove ()
{
    arr.pop();
    document.getElementById("output").innerHTML = (arr);

    return false;
}
