setInterval ( function()  {
  document.getElementById("clock")
    .innerHTML = new Date ().toLocaleTimeString ();
}, 1000 );