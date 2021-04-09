//チェックが入ったら、ボタンを押せる
$(function() {
    $(".label_inner").click(function(){
      $(".notes_required").toggleClass("_check");
      $(".btnArea").toggleClass("_check");
    });
  });