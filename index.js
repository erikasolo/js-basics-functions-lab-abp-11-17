// Code your solution in this file!
const HQ = 42;

 function distanceFromHqInBlocks(location) {
   let distance = Math.abs(location-HQ);
   return distance
 }

 function distanceFromHqInFeet(location) {
   return distanceFromHqInBlocks(location) * 264
}

 function distanceTravelledInFeet(start, end) {
   let distance = Math.abs(end-start) * 264;
   return distance
function distanceFromHqInBlocks (destination){
  return destination > 42? destination - 42 : 42 - destination;
  }
function distanceFromHqInFeet (destination) {
  distanceFromHqInBlocks(destination * 264);
}
function distanceTravelledInFeet(start, destination) {
  if (destination > start) {
    return (destination - start) * 264;
  }else {
      return (start - destination) * 264;
  }
}
function calculatesFarePrice(start, destination) {

    if (distanceTravelledInFeet(start,destination) < 400) {
     return 0;
  }else if (distanceTravelledInFeet(start,destination) >= 400 && distanceTravelledInFeet(start,destination) <= 2000 ) {
    return (distanceTravelledInFeet(start,destination) * 2) / 100;
  }else if (distanceTravelledInFeet(start,destination) > 2000 && distanceTravelledInFeet(start,destination) < 2500) {
    return 25;
  }else if (distanceTravelledInFeet(start,destination) > 2500) {
    return "cannot travel that far";
  }
}
