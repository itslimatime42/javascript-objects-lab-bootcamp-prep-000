var recipes = new Object();

function updateObjectWithKeyAndValue (obj, key, value) {
  var newObject = Object.assign({}, obj, { [key]: value })
}