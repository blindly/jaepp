jQuery.extend({
    getApiData: function (url) {
      var result = null;
      $.ajax({
        url: url
        , type: 'get'
        , dataType: 'json'
        , async: false
        , success: function (data) {
          result = data.entries;
        }
      });
      return result;
    }
  });