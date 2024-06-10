const resolvedWrapper = (val) => {
  return new Promise((resolve, reject) => {
    resolve(val)
  })
};

const rejectedWrapper = (val) => {
  const faulty = new Error(val)
  return Promise.reject(faulty)
};

const handleResolvedPromise = () => {
};

const handleResolvedOrRejectedPromise = () => {
};

const pauseForMs = () => {
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
