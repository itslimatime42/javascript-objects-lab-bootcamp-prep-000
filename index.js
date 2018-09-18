var recipes = new Object();

function updateObjectWithKeyAndValue (obj, key, value) {
  var newObject = Object.assign({}, obj, { [key]: value });
  return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj
}

function deleteFromObjectByKey(obj, key) {
  
}