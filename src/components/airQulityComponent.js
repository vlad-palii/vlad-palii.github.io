import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import request from 'superagent'
import './../App.scss';
import UserLocationComponent from './userLocationComponent'
import Clock from 'react-live-clock';

export default function AirQuality() {

  let [leafType, setLeafType] = useState("health-leaf");
  let [airVisualData, setAirVisualData] = useState("0");
  let [waqiData, setWaqiData] = useState("0");
  let [indexDescription, setIndexDescription] = useState("Processing...");
  let [weatherData, setWeatherData] = useState("Processing...");
  
  function setDescriptionByCO2(co2Level) {
    if (co2Level > 0 < 50) {
      setIndexDescription("Good")
    }
    else if (co2Level > 51 < 100) {
      setIndexDescription("Normal")
    }
    else if (co2Level > 101 < 150) {
      setIndexDescription("Unhealthy")
      setLeafType("sick-leaf")
    }
    else if (co2Level > 151) {
      setIndexDescription("DANGER")
      setLeafType("dead-leaf")
    }
  }

  useEffect(() => {

    let airVisualResult, waqiResult, weatherResult = {};

    let api = [airVisualResult, waqiResult, weatherResult];

    async function getAllData() {

      api = [await getO2Level(), await getWaqiData(), await getWeatherData()];

      setAirVisualData(JSON.parse(api[0].text).data.current.pollution.aqius);
      setWaqiData(JSON.parse(api[1].text).data.aqi);
      setDescriptionByCO2(JSON.parse(api[0].text).data.current.pollution.aqius);
      setWeatherData(JSON.parse(api[2]))
      console.log('weatherData', weatherData)

    }

    //getAllData();

  });

  function getO2Level() {

    return new Promise(resolve => {
      //37bff4af-0639-4402-a226-e188eb44984e - new key
      // request.get("https://api.airvisual.com/v2/city?city=kyiv&state=Kyiv&country=Ukraine&key=37bff4af-0639-4402-a226-e188eb44984e")
      //   .then(res => {
      //     resolve(res);
      //   })

    });

  }

  function getWaqiData() {

    return new Promise(resolve => {
      //waqi token = ed785b8620760c78d6723bc2f920080be62fa297
      // request.get("https://api.waqi.info/feed/kiev/?token=ed785b8620760c78d6723bc2f920080be62fa297")
      //   .then(res => {
      //     resolve(res);
      //   })

    });

  }

  function getWeatherData() {

    return new Promise(resolve => {

      // request.get("https://forecast.io/forecast?q=50.43,30.50&units=ca")
      //   .then(res => {
      //     resolve(res);
      //   }).catch(err => {
      //     console.warn(err);
      //   })

    });

  }

  return (
    <Container>
      <Row>
        <Col className={`card background-image-card`}>
          <Container>
            <Row>
              <Col sm={6}>
                <b>Kyiv: </b>
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Kiev'} /><br />
                <Clock format={'dddd DD MMMM'} ticking={true} timezone={'Europe/Kiev'} />
              </Col>

              <Col sm={6}>
                <b>California: </b>
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} /><br />
                <Clock format={'dddd DD MMMM'} ticking={true} timezone={'US/Pacific'} />
              </Col>
            </Row>
            <Row>

            </Row>
          </Container>
        </Col>
      </Row>

      <Row>
        <Col className={`card background-image-card ${leafType}`}>
          <div className="sensor-info">
            <h1 className="main-counter">{airVisualData} of 500</h1><h4>Air Visual AQI</h4><br />
            <h1 className="main-counter">{waqiData} of 500</h1><h4>WAQI</h4><br />
            <p className="sensor-description">{`${indexDescription}`}</p>
            <UserLocationComponent></UserLocationComponent>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
