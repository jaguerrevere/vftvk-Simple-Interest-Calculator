function compute() {
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    d = new Date();
    return_year = parseInt(d.getFullYear())+parseInt(y);

    i = p * r / 100 * y ;

    output_element = document.getElementById("calculation_output");
    output_element.innerHTML = "If you deposit "+this.p+",<br>";
    output_element.innerHTML = output_element.innerHTML + "at an interest rate of "+this.r+"%.<br>";
    output_element.innerHTML = output_element.innerHTML + "You will receive an amount of "+this.i+",<br>";
    output_element.innerHTML = output_element.innerHTML + "in the year "+this.return_year;
    return false;
}

function updateRateTextInput(val) {
    document.getElementById('rate_value_text').value=val;
}
