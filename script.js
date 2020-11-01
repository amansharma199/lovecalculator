function calculate() {
    var result = Math.floor(Math.random() * 101);
    document.getElementById("finalresult").value = result + "%";
    document.getElementById("atlast").innerHTML= "Your Love Percentage is "+ result + "%";
}