var calculateFormula = function(){
    var x = document.getElementById("var-x").value;
    var a = document.getElementById("var-a").value;
    var b = document.getElementById("var-b").value;
    var c = document.getElementById("var-c").value;
    var d = document.getElementById("var-d").value;
    console.log(a, b, c, d, x);
    var sol = ((a*x) + b)/((c*x) + d);
    console.log(sol);
    document.getElementById("var-sol").value = sol;
};
document.getElementById("calc-btn").addEventListener("click", calculateFormula);