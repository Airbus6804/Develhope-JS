function repeatHello(callback) {

  const interval = setInterval(callback, 1000);
  setTimeout(() => {
    clearInterval(interval)
  }, 5001)
}

repeatHello(() => {
  console.log("Hello");
});
