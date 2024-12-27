/* eslint-disable no-console */

async function vote() {
  let button = document.querySelector('.vote-action.js-vote-action') as HTMLButtonElement

  while (!button) {
    await new Promise(resolve => setTimeout(resolve, 3000))
    button = document.querySelector('.vote-action.js-vote-action') as HTMLButtonElement
  }

  await new Promise(resolve => setTimeout(resolve, 3000))

  button.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center',
  })
  button.click()
}

const timer = 30 * 1000;

(async () => {
  const isWeChoice = window.location.href.includes('wechoice.vn')
  if (isWeChoice) {
    console.log('This is WeChoice website')
  }

  console.log('Start voting...')
  await vote()

  // Wait for 30 seconds
  setTimeout(() => {
    window.location.reload()
  }, timer)
})()
