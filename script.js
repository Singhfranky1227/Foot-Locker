var names =[];
var prices =[];

$("button").click(function() {
    var name = $("#name").val();
    var price =$ ("#price").val();
    names.push(name);
    prices.push(price);
    
    names.foreach(function(element) {
        console.log("Name: " + element);
    });
    
});