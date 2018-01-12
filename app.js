var arrPosts = []

function getCurrentDate(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd = '0'+dd
  }

  if(mm<10) {
      mm = '0'+mm
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
            <div class="post-preview">
              <a href="post.html">
                <h2 class="post-title">
                    ${subject}
                  </h2>
                <h3 class="post-subtitle">
                    ${message}
                  </h3>
              </a>
              <p class="post-meta">Posted by
                <a href="#">${name}</a> ${today}</p>
            </div>
            <hr>
				`;

	$("#posts").append(newPost).after();
});

//Unfix del button
// $("input[name=delthis]").on("click", ".holder", function() {
// 	$(this).parent("ul").remove();
// });
