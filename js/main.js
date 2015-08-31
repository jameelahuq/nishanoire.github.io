var cookieMonsterWill =  {
  bakeCookie: function (name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 86400 * 1000));
      expires = "; expires=" + date.toGMTString();
    }

    document.cookie = name + "=" + value + expires + "; path=/";
  },

  findCookie:  function (name) {
    var searchName = name + "=";
    var cookies = document.cookie.split(';');
    for (var i=0; i < cookies.length; i++) {
      var c = cookies[i];
      while (c.charAt(0) == ' ')
        c = c.substring(1, c.length);
      if (c.indexOf(searchName) === 0)
        return c.substring(searchName.length, c.length);
    }
    return null;
  },

  trashCookie: function (name) {
    writeCookie(name, "", -1);
  }
};





