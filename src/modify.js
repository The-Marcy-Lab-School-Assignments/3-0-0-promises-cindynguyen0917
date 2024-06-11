const crypto = require('crypto');

const numsToRGBColor = ([color1, color2, color3]) => {
  return `rgb(${color1}, ${color2}, ${color3})`;
};

const getRandomBytes = () => new Promise((resolve, reject) => {
  crypto.randomFill(new Uint8Array(3), (err, buffer) => {
    if (err) return reject(err);
    resolve([...buffer]);
  });
});

const return4RandomColors = () => {
  const colors = [];
  return getRandomBytes()
    .then((randomBytes1) => {
      colors.push(numsToRGBColor(randomBytes1))
      return getRandomBytes();
    })
    .then((randomBytes2) => {
      colors.push(numsToRGBColor(randomBytes2))
      return getRandomBytes();
    })
    .then((randomBytes3) => {
      colors.push(numsToRGBColor(randomBytes3))
      return getRandomBytes();
    })
    .then((randomBytes4) => {
      colors.push(numsToRGBColor(randomBytes4))
      return colors;
    })
    .catch((err) => {
      console.error(err);

    });
};

return4RandomColors().then(console.log);

module.exports = {
  numsToRGBColor,
  getRandomBytes,
  return4RandomColors,
};
