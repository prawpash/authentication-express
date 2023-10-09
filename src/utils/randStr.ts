const randomString = async (strLength: number = 6) => {
  const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%/?"

  let result = ""

  for (let i = 0; i < strLength; i++) {
    const randNum = Math.floor(Math.random() * (characters.length - 1))
    result += characters[randNum]
  }

  return result
}

export default randomString
