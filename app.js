var arrPosts = []

function getCurrentDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd
  }

  if (mm < 10) {
    mm = '0' + mm
  }

  today = dd + '/' + mm + '/' + yyyy
  return today;
}


$("#sendMessageButton").click(function(event) {
  event.preventDefault();
  var name = $("#name").val();
  var email = $("#email").val();
  var subject = $("#subject").val();
  var message = $("#message").val();
  var today = getCurrentDate();
  var newPost = `
  <div class="post-preview" id="post2">
      <div class="subject-bar">
          <h2 class="post-title">${subject} </h2>
          <a href="#"><i class="fa fa-window-close-o" style="font-size:24px;"></i></a>
      </div>
      <a href="#">
        <h3 class="post-subtitle">
        ${message}
        </h3>
      </a>
    <p class="post-meta">Posted by
      <a href="#">${name}</a> ${today}</p>
  </div>
  <hr>
      				`;

  $('#name').val("");
  $('#email').val("");
  $('#subject').val("");
  $('#message').val("");
  $("#posts").append(newPost).after();
});

$(".deleteButton").click(function(event) {
  const a =1;
  event.preventDefault();
  var data = $(this).closest('.post-preview').attr('id');
  data = "#"+data;
  $(data).remove();
});
