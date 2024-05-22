export function getStateFromURL(input: string): string {
  // create a URL object with the input
  const url = new URL(input);

  // extract the query parameters into a URLSearchParams object
  const params = new URLSearchParams(url.search);

  // return the value of 'state' parameter
  return params.get('state') || 'No state parameter in the URL';
}
