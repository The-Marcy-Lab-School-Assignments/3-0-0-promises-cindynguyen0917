const resolvedWrapper = (val) => {
  return new Promise((resolve, reject) => {
    resolve(val)
  })
};

const rejectedWrapper = (val) => {
  const faulty = new Error(val)
  return Promise.reject(faulty)
};

const handleResolvedPromise = (promise) => {
  return promise.then((val) => {
    console.log(val)
    return val
  })
};

const handleResolvedOrRejectedPromise = (promise) => {

  return promise
    .then((val) => {
      console.log(val)
      return val
    })
    .catch((error) => {
      new Error(error)
      console.error(`Your error message was: ${error.message}`)
      return null
    })
};

const pauseForMs = (secs) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, secs)
  })
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};
