const service = () => {
  // const hostname = 'http://localhost';
  // const port = '3003';
  // const host = `${hostname}:${port}/api`;
  const hostname = 'https://meme-trends-backend.herokuapp.com';
  const host = `${hostname}/api`;

  const promise = async (method, url, data) => {
    if (data) {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify(data);

      var requestOptions = {
        method: method,
        headers: myHeaders,
        body: raw,
      };
    } else {
      var requestOptions = {
        method: method,
      };
    }

    return await fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log('error', error));
  };

  const getMemes = async (data) => {
    const url = data ? `${host}/memeTrend?tag__regex=/${data}/i` : `${host}/memeTrend`;

    return await promise('GET', url);
  };

  return {
    getMemes,
  };
};

export default service;
