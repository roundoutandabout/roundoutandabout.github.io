$(function () {


  $(window).on('hashchange', function(){
    // On every hash change the render function is called with the new hash.
    // This is how the navigation of our app happens.
    render(decodeURI(window.location.hash));
  });

  function render(url) {

    // Get the keyword from the url.
    var temp = url.split('/')[0];

    $('.about').addClass('d-none'); // Hide whatever is visible
    $('.contacts').addClass('d-none'); // Hide whatever is visible
    $('.projects').addClass('d-none'); // Hide whatever is visible
    $('.error').addClass('d-none'); // Hide whatever is visible

    var map = {

        // The Homepage.
        '': function() {


          renderHomePage();
        },

        // About page
        '#about': function() {

          renderAboutPage();
        },

        // Page with experience
        '#experience': function() {

          renderExperiencePage();
        },

        // Page with projects
        '#projects': function() {

          renderProjectsPage();
        },

        // Page with projects
        '#contact': function() {

          renderContactPage();
        }
      };

      // Execute the needed function depending on the url keyword (stored in temp).
      if(map[temp]){
        map[temp]();
      }
      // If the keyword isn't listed in the above - render the error page.
      else {
        renderErrorPage();
      }
    };

    function renderHomePage() {
      $('.about').removeClass('d-none');
      $('.contacts').removeClass('d-none');
    };

    function renderAboutPage() {
      $('.about').removeClass('d-none');
    };

    function renderExperiencePage() {
      $('.error').removeClass('d-none'); // Is experience page really needed?
    };

    function renderProjectsPage() {
      $('.projects').removeClass('d-none'); // Is experience page really needed?
    };

    function renderContactPage() {
      $('.contacts').removeClass('d-none');
    }


});
