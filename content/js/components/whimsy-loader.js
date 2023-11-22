// This is used by the components in this folder to load
// public data from Whimsy
const fetchPublicData = async whimsyFilename => {
  var result = {};
  const response = await fetch(`https://whimsy.apache.org/public/${whimsyFilename}`);
  if (response.status == 200) {
    const data = await response.text();
    result = JSON.parse(data);
  }
  return result;
}

export default fetchPublicData;