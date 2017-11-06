// Code your solution in this file!
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
