document.getElementById("b").addEventListener("click",function(){
    var num = document.getElementById("text_id").value;
    var fibo = fibonacci(num);
    document.getElementById("display").innerHTML = fibo;

});
function fibonacci(n) {
    var a = 1, b = 0, temp;
    while(n >= 0){
        temp = a;
        a = a+b;
        b=temp;
        n--;
    }
    return b;
}