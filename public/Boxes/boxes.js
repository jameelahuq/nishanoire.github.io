/**
 * Created by HUQ on 8/29/15.
 */
var init = function() {
  console.time("run");
  ///this unusual way of creating HTML elements is for demonstration of manipulating the DOM
  var body = $("body");
  var $form = $("<form>" , {
    html: $("<input>", {type: 'text', placeholder: "search for..."})
  });

  var $header = $('<div>', {
    html: $("<h1/>", {class: 'title', text: 'Flickd'})
  });

  var $images = $('.imagesHere');
$header.append($("<h3/>", {class: 'subtitle', text: "What do you want to see?"}));
body.prepend($form);
body.prepend($header);

  var animalHTML = '';
  var flickrPromise;


  $form.on("submit" , (function (e) {
    e.preventDefault();
    var animal = encodeURI($('input').val());
    console.log(animalHTML);
    animalHTML = "https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=" + animal + "&jsoncallback=?";
    flickrPromise = $.getJSON(animalHTML);

    flickrPromise.success(function(data) {
      var catImagesArray = data.items.map(function (obj) {
        return $("<img/>", {src: obj.media.m});
      });
      $images.prepend(catImagesArray);
      console.log(catImagesArray);
    }); //here's your burger!


    flickrPromise = $.getJSON(animalHTML);
  }));



  //
  //flickrPromise.fail(function(data) {
  //
  //}); //oops, out of buns

  //append a box

  console.timeEnd("run");
}

$("document").ready(init);