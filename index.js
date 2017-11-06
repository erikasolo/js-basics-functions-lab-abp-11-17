// Code your solution in this file!
function distanceFromHqInBlocks (destination){
  return destination > 42? destination - 42 : 42 - destination;
  }
function distanceFromHqInFeet (destination) {
  distanceFromHqInBlocks(destination * 264);
}
