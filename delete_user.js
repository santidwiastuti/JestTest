var client = new HttpClient();
var request = new HttpRequestMessage();
request.RequestUri = new Uri("https://gorest.co.in/public/v1/users/3632");
request.Method = HttpMethod.Delete;

request.Headers.Add("Accept", "*/*");
request.Headers.Add("User-Agent", "Thunder Client (https://www.thunderclient.io)");
request.Headers.Add("Authorization", "Bearer e158368081cbddc742ac2dc49a048d785a0b60d49f9eb927e9f55fc16dd43971");

var response = await client.SendAsync(request);
var result = await response.Content.ReadAsStringAsync();
Console.WriteLine(result);