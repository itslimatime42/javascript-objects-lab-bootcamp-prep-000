var recipes = new Object();

function updateObjectWithKeyAndValue (obj, key, value) {
  var newObj = Object.assign({}, obj, { [key]: value });
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj
}

function deleteFromObjectByKey(obj, key) {
  newObj = 
}