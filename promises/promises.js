const myPromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve('Succeeded');
    }, 2000);
    console.log('waiting...');
  } else {
    reject('I have failed');
  }
});

myPromise
  .then((resolvedValue) => console.log(resolvedValue))
  .catch((rejectedValue) => console.log(rejectedValue));
