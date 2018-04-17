class Header {
  constructor() {
    this.api = 'https://jaepp.borke.site/api/regions/get/analytics';
  }

  render() {
    fetch(this.api)
    .then(function(response) {
      return response.text();
    })
    .then(function(data) {
      console.debug(data);
      $('head').append(data);
    });
  }
}