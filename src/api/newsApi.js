var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2024-05-02&' +
          'sortBy=popularity&' +
          'apiKey=36057452c2f449f2bb228294bb9aabb0';

var req = new Request(url);

fetch(req)
    .then(function(response) {
        console.log(response.json());
    })