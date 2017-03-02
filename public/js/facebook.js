function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
  });
}

function statusChangeCallback(response) {
  console.log('Facebook login status changed.');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
        console.log('Successfully logged in with Facebook');
         FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
  }
}

function changeUser(response) {
  $(".facebookLogin").hide();
  console.log(response);
  $('#name').text("Ally Reiss");
  $('#photo').attr('src', "https://scontent.xx.fbcdn.net/v/t1.0-1/p480x480/14915217_1171717839574523_6805906061264997243_n.jpg?oh=341f260265e13fdab0d1885b0122020c&oe=593E2F78");
}