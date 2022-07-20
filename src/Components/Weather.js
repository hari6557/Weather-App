import React from "react";

function Weather(props) {
  return (
    <div className="container pt-2 mt-3 col-lg-8 mx-auto text-center">
      {props.city && props.country && <h4>Present Conditions</h4>}
      <table className="table pb-3 mb-2">
        <tbody>
          {props.city && props.country && (
            <tr>
              <td className="text-right mx-auto">
                <b>Location:</b>
              </td>
              <td className="text-left mx-auto">
                {props.city}, {props.country}
              </td>
            </tr>
          )}
          {props.description && (
            <tr className="mb-5">
              <td className="text-right">
                <span className="text-bold">Current weather:</span>
              </td>
              <td className="text-left">{props.description}</td>
            </tr>
          )}
          {props.temperature && (
            <tr>
              <td className="text-right">
                <b>Current Temp:</b>
              </td>
              <td className="text-left">{props.temperature}&#8451;</td>
            </tr>
          )}
          {props.maxtemperature && (
            <tr>
              <td className="text-right">
                <b>Max Temp Today:</b>
              </td>
              <td className="text-left">{props.maxtemperature}&#8451;</td>
            </tr>
          )}
          {props.mintemperature && (
            <tr>
              <td className="text-right">
                <b>Min Temp Today:</b>
              </td>
              <td className="text-left">{props.mintemperature}&#8451;</td>
            </tr>
          )}

          {props.humidity && (
            <tr>
              <td className="text-right">
                <b>Humidity:</b>
              </td>
              <td className="text-left">{props.humidity} %</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Weather;
