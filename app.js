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

function generateNotifMessage(name, email, subject, message) {
  if ((name === '') && (email === '') && (subject === '') && (message === '')) {
    return "please fill all form section";
  } else if (email.search("@") === -1) {
    return "please write your email address properly";
  } else if (email.search(".") === 0){
    return "please write your email address properly";
  } else {
    return true;
  }
}

$("#sendMessageButton").click(function(event) {
  event.preventDefault();
  var name = $("#name").val();
  var email = $("#email").val();
  var subject = $("#subject").val();
  var message = $("#message").val();
  var today = getCurrentDate();
  var notifMessage = generateNotifMessage(name, email, subject, message);

  if ((typeof notifMessage) === "string") {
    return $(".validationNotif").html(notifMessage);
  }


  var newPost = `
  <div class="post-preview forum-post" id="post3">
      <div class="subject-bar">
          <h2 class="post-title">${subject} </h2>
          <a href=""><i class="fa fa-window-close-o deleteButton" id="deleteButton" onclick="return false;deletepost("post3",event); " style="font-size:24px;"></i></a>
      </div>
      <a href="#">
        <h3 class="post-subtitle">
          ${message}
        </h3>
      </a>
    <p class="post-meta">Posted by
      <a href="#">${name}</a>${today}</p>
      <hr>
  </div>

  `;

  $('#name').val("");
  $('#email').val("");
  $('#subject').val("");
  $('#message').val("");
  $("body").find(".validationNotif").html("");
  $("#posts").append(newPost).after();
});

$(".deleteButton").click(function(event) {
  event.preventDefault();
  var data = $(this).closest('.post-preview').attr('id');
  data = "#" + data;
  $(data).remove();
});

function deletepost(postId,event) {
  event.preventDefault();
  postId = "#" + postId;
  window.alert(event);
  $(postId).remove();
  return false;
}
