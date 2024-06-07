import React from "react";

function BottomHelper({ color }) {
  var divStyle = `${color} border border-gray-300 p-4 rounded-3xl bg-white shadow-md`;
  var buttonStyles = "";
  var verticalDividor = "border-r-2 border-gray-300 h-20";
  switch (color) {
    case "text-green-700":
      buttonStyles = "bg-green-700 p-2 border rounded-md text-white";
      break;
    case "text-blue-700":
      buttonStyles = "bg-blue-700 p-2 border rounded-md text-white";
      break;
    case "text-yellow-700":
      buttonStyles = "bg-yellow-700 p-2 border rounded-md text-white";
      break;
    case "text-red-700":
      buttonStyles = "bg-red-700 p-2 border rounded-md text-white";
      break;
    default:
      buttonStyles = "bg-green-700 p-2 border rounded-md text-white";
      break;
  }
  return (
    <div className={divStyle}>
      <div className="flex flex-row justify-around items-center">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Destinations</h1>
          <p className="text-sm">Where are you going</p>
        </div>
        <div className={verticalDividor}></div>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Destinations</h1>
          <p className="text-sm">Where are you going</p>
        </div>
        <div className={verticalDividor}></div>

        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl font-bold">Destinations</h1>
          <p className="text-sm">Where are you going</p>
        </div>
        <div className={verticalDividor}></div>

        <div className="flex items-center justify-center">
          <button className={buttonStyles}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default BottomHelper;
