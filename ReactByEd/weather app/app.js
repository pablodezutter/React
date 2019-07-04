window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".degree");
  let locationTimezone = document.querySelector(".location-timezone");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      long = position.coords.longitude;
      lat = position.coords.latitude;

      const proxy = `https://cors-anywhere.herokuapp.com/`;
      const api = `${proxy}https://api.darksky.net/forecast/5ac3dbd84a93da8df75aabde20171f18/${lat},${long}`;
      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          //   console.log(data);
          const { temperature, summary, icon } = data.currently;
          //set DOM elements from API
          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.timezone;
          setIcons(icon, document.querySelector(".icon"));
        });
    });
  } else {
    h1.textContent =
      "We're sorry. There seems to be no geolocator in your device.";
  }

  function setIcons(icon, iconID) {
    const skycons = new Skycons({ color: "white" });
    const currenIcon = icon.replace(/-/g, "_").toUpperCase();
    //look for every line and replace it with _
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
});
