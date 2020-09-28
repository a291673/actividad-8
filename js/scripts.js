function fun() {
var in1 = document.getElementById('nom').innerText;
var in2 = document.getElementById('sex').value;
if(in2==1)
{
    document.getElementById('out').innerHTML = 'Bienvenido Juanito'
}
else
{
    if(in2==2)
    {
        document.getElementById('out').innerHTML = 'Bienvenido Juanita'
    }
    else
    {
        if(in2==3)
        {
            document.getElementById('out').innerHTML = 'Bienvenido Juanite'
        }
    }
}

}