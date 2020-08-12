const service = () => {
  const hostname = 'http://localhost';
  const port = '3003';
  const host = `${hostname}:${port}/api`;

  const promise = async (method, url, data) => {
    if (method === 'GET') {
      var requestOptions = {
        method: 'GET',
      };
    } else if (method === 'POST') {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify(data);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
      };
    }

    return await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log('error', error));
  };

  const getMemes = async () => {
    const url = `${host}/memeTrend`;

    return await promise('GET', url);
  };

  const postMeme = async (data) => {
    const url = `${host}/memeTrend`;

    return await promise('GET', url, data);
  };

  return {
    getMemes,
    postMeme,
  };
};

export default service;
