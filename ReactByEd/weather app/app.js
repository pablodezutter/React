window.addEventListener("load", () => {
  let long;
  let lat;
  let temperatureDescription = document.querySelector(
    ".temperature-description"
  );
  let temperatureDegree = document.querySelector(".degree");
  let locationTimezone = document.querySelector(".location-timezone");
  let temperatureSection = document.querySelector(".degree-section");
  const temperatureSpan = document.querySelector(".degree-section span");

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
          // console.log(data);
          const { temperature, summary, icon } = data.currently;
          //set DOM elements from API
          temperatureDegree.textContent = temperature;
          temperatureDescription.textContent = summary;
          locationTimezone.textContent = data.timezone;
          setIcons(icon, document.querySelector(".icon"));

          //formula for Celsius
          let celsius = (temperature - 32) * (5 / 9);

          //change temp to Celsius
          temperatureSection.addEventListener("click", () => {
            if (temperatureSpan.textContent === "F") {
              temperatureSpan.textContent = "C";
              temperatureDegree.textContent = Math.floor(celsius);
            } else {
              temperatureSpan.textContent = "F";
              temperatureDegree.textContent = temperature;
            }
          });
        });
    });
  } else {
    h1.textContent =
      "We're sorry. There seems to be no geolocator in your device.";
  }

  function setIcons(icon, iconID) {
    const skycons = new Skycons({ color: "white" });
    const currentIcon = icon.replace(/-/g, "_").toUpperCase();
    //look for every line and replace it with _
    skycons.play();
    return skycons.set(iconID, Skycons[currentIcon]);
  }
  //get temperature in Celsius ((5/9) * (F - 32))
  // function degreeCelsius() {
  //   const degreeCels = `(${temperature}-32):1,8`;
  //   console.log(degreeCels);
  //   Celsius.textContent = degreeCels;
  // }
});
