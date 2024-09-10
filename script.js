fetch(
  "https://api.giphy.com/v1/stickers/search?api_key=Jr6lbehv6neANdE81IUyOwBciEwhcsQ3&q=&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
)
  .then(function (response) {
    if (response.status == 200) {
      return response.json();
    } else {
      console.log("Failed to Fetch");
    }
  })

  .then(function (data) {
    console.log(data);
  })

  .catch(function (error) {
    console.log("there is an error fetehicng", error);
  });
