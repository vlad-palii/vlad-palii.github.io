import React, { useState, useEffect } from 'react';

export default function UserLocationComponent() {

  let [currentPosition, setCurrentPosition] = useState("Detecting position...");

  useEffect(() => {

    function getCurrentPosition(options = {}) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
      });
    };

    let fetchCoordinates = async () => {
      try {
        let { coords } = await getCurrentPosition();
        let { latitude, longitude } = coords;
        setCurrentPosition([latitude.toFixed(3), longitude.toFixed(3)].join(", "))
      } catch (error) {
        console.error(error);
      }
    };

    fetchCoordinates();

  });

  return (
    <p><b>You are here: </b>{`${currentPosition}`}</p>
  )

}
