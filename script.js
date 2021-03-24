function compute() {
    p = document.getElementById("principal");
    r = document.getElementById("rate");
    y = document.getElementById("years");

    // Check principal field has a value
    if(p.value == ""){
        alert("Please enter an Amount");
        p.focus();
        return false;
    }
    // check if principal field has a positive value
    if(parseFloat(p.value) <= 0){
        alert("Please enter a positive Amount");
        p.focus();
        return false;
    }

    d = new Date();
    return_year = parseInt(d.getFullYear())+parseInt(y.value);

    i = p.value * r.value / 100 * y.value ;

    output_element = document.getElementById("calculation_output");
    output_element.innerHTML = "If you deposit "+this.p.value+",<br>";
    output_element.innerHTML = output_element.innerHTML + "at an interest rate of "+this.r.value+"%.<br>";
    output_element.innerHTML = output_element.innerHTML + "You will receive an amount of "+this.i+",<br>";
    output_element.innerHTML = output_element.innerHTML + "in the year "+this.return_year;
    return false;
}

function updateRateTextInput(val) {
    document.getElementById('rate_value_text').value=val;
}
