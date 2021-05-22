import db from "../../../utils/db";

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      getMarkers(req, res);
      break;

    default:
      break;
  }
};

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

const getMarkers = async (req, res) => {
  const distance = getDistanceFromLatLonInKm(
    19.075983,
    72.877655,
    18.52043,
    73.856743
  );

  //get all crimes and if distance is less than 5km return them
  res.send(distance);
};
