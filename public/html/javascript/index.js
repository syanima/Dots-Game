$('document').ready(function(){
  $("#go").click(function() {
    var data = {name:$("#name").val()};
    $.post("login",data,function(data,status) {
      window.location.href = 'gameBoard.html';
    });
  })
})
