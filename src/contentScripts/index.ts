/* eslint-disable no-console */

async function vote() {
  let button = document.querySelector('.vote-action.js-vote-action') as HTMLButtonElement

  while (!button) {
    await new Promise(resolve => setTimeout(resolve, 3000))
    button = document.querySelector('.vote-action.js-vote-action') as HTMLButtonElement
  }

  button.click()
}

const timer = 60 * 1000;

(async () => {
  const isWeChoice = window.location.href.includes('wechoice.vn')
  if (!isWeChoice) {
    console.log('This is not WeChoice website')
    return
  }
  else {
    console.log('This is WeChoice website')
  }

  vote()
  setInterval(() => {
    console.log('Voting...')
    vote()
  }, timer)
})()
