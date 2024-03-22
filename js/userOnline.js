function updateOnlineStatus() {
  if (navigator.onLine) {
    document.getElementById('userOnline').style.display = 'none'
  } else {
    document.getElementById('userOnline').style.display = 'block'
  }
}
document.addEventListener('DOMContentLoaded', function () {
  updateOnlineStatus()
  window.addEventListener('online', updateOnlineStatus)
  window.addEventListener('offline', updateOnlineStatus)
})
