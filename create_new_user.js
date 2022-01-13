var client = new HttpClient();
var request = new HttpRequestMessage();
request.RequestUri = new Uri("https://gorest.co.in/public-api/users");
request.Method = HttpMethod.Post;

request.Headers.Add("Accept", "*/*");
request.Headers.Add("User-Agent", "Thunder Client (https://www.thunderclient.io)");

var content = new StringContent("{\"id\":0045,\"name\":\"Oren\",\"email\":\"tetx@mail.id\",\"gender\":\"male\",\"status\":\"active\"}", Encoding.UTF8, "application/json");
request.Content = content;

var response = await client.SendAsync(request);
var result = await response.Content.ReadAsStringAsync();
Console.WriteLine(result);