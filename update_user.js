import axios from "axios";

let headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.io)",
 "Authorization": "Bearer e158368081cbddc742ac2dc49a048d785a0b60d49f9eb927e9f55fc16dd43971",
 "Content-Type": "application/json" 
}

let reqOptions = {
  url: "https://gorest.co.in/public/v1/users/3621",
  method: "PUT",
  headers: headersList,
  data: "{\"name\":\"Pink\",\"email\":\"testkly@mail.id\",\"status\":\"inactive\"}\n",
}

axios.request(reqOptions).then(function (response) {
  console.log(response.data);
})