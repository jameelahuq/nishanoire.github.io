/**
 * Created by HUQ on 9/11/15.
 */
$(function() {


var myFirebaseRef = new Firebase("https://jameela.firebaseIO.com/");
myFirebaseRef.set({
  title: "test",
  author: "Jameela",
  locattion: "Fremont",
  state: "CA",
  zip:"I forgot"
});


  var test = new Firebase("https://cadesnewtest.firebaseIO.com/");
  test.child('CHILLI').child('thepenguin').update({NOOOOOO: "yeeeees", opps: "for real"});
  //var newPost = snapshot.val();
  //console.log(newPost);
  test.child('CHILLI').child('thepenguin').set({OVERWROTE: "done"});


var jamFirebase = new Firebase("https://cadesnewtest.firebaseIO.com/");
jamFirebase.on("child_added" , function(snapshot) {
  var newPost = snapshot.val();
  console.log(newPost);
});

var avalonFirebase = new Firebase("https://play-avalon.firebaseIO.com/");

  $('#newRoom').on('click', function() {
    console.log('new room!!!!');
    var roomID = createRoomID();
    avalonFirebase.push()
  });
  //
  //var createRoomID = function() {
  //  var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  //  var roomID = '';
  //  roomID += ();
  //}


});