
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));



  window.fbAsyncInit = function() {
    FB.init({
      appId            : '1475641712491934',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.9'
    });
    FB.AppEvents.logPageView();
  };

  
  (function ($) {
    $(function() {
        $('.button.facebook.btn').on('click', function() {
            $('.facebook-share').toggleClass('hidden');
        });


        $('.btn-facebook-share').on('click', function() {

            var fbshareUrl = $(this).attr('data-href');

            FB.ui(
            {
              method: 'save',
              href: fbshareUrl
            }, function(response) {
                console.log(response);
            });

        });
        

    });


  })(jQuery);

