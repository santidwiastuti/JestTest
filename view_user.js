var client = new HttpClient();
var request = new HttpRequestMessage();
request.RequestUri = new Uri("https://gorest.co.in/public/v1/users/3676");
request.Method = HttpMethod.Get;

request.Headers.Add("Accept", "*/*");
request.Headers.Add("User-Agent", "Thunder Client (https://www.thunderclient.io)");

var response = await client.SendAsync(request);
var result = await response.Content.ReadAsStringAsync();
Console.WriteLine(result);
