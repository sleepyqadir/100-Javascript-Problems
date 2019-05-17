const  palindrome = (str) => {
    return str.split('').every((char, i) => {
      return char === str[str.length - i - 1]
    })
  }

const palindrome2 = (str) => {
    const reversed = str
      .split('')
      .reverse()
      .join('')
  
    return str === reversed
  }
  

