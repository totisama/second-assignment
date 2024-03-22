function getGeolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude
      const longitude = position.coords.longitude
      // console.log(latitude, longitude)

      // fetch(
      //   `https://maps.googleapis.com/maps/api/geocode/json?latlng= + ${latitude} + , + ${longitude} + &sensor=true`
      // )
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log(data)
      //   })

      document.getElementById('locationBanner').style.display = 'block'
      document.getElementById(
        'location'
      ).innerHTML = `Latitude: ${latitude}, Longitude: ${longitude}`
    })
  } else {
    console.log('Geolocation is not supported by this browser.')
  }
}

getGeolocation()
