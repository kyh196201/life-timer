self.onmessage = event => {
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
