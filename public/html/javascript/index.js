$('document').ready(function(){
  $("#go").click(function() {
    var name = $("#name").val();
    $.post("/login",name,function(data) {
      console.log(data);
    });
  })
})
