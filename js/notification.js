setTimeout(function () {
  document.getElementById('notification').style.display = 'block'
  document.getElementById('closeButton').addEventListener('click', () => {
    document.getElementById('notification').style.display = 'none'
  })
}, 3000)
