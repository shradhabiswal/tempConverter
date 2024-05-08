const calculateTemp = () =>{
    const numberTemp = document.getElementById('temp').value; 

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;


    const celToFah = (num) =>{
        let fahrenheit = Math.round((num * 9/5) + 35);
        return fahrenheit;
    }
    const FahTocel = (num) =>{
        let celsius = Math.round((num - 32) * 5/9);
        return celsius;
    }

    let result;

    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}° Fahrenheit`;
    }else{
        result = FahTocel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}° Celsius`;
    }
}