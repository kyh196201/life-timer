self.onmessage = event => {
  console.log('web worker event data', event.data);

  let timer = null;
  const delay = 500;

  if (event.data) {
    const method = event.data;

    if (method === 'start') {
      timer = setTimeout(() => {
        postMessage('tick');
      }, delay);
    } else if (method === 'stop') {
      clearTimeout(timer);
      timer = null;
    }
  }
};
