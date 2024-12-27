/* eslint-disable no-console */

const listOfUrls = [
  'https://wechoice.vn/chi-tiet-de-cu-6/quang-hung-masterd-512.htm',
  'https://wechoice.vn/chi-tiet-de-cu-1/ca-si-quang-hung-masterd-678.htm',
  'https://wechoice.vn/chi-tiet-de-cu-18/muzik-fc-quang-hung-masterd-698.htm',
]

async function vote() {
  let button = document.querySelector('.vote-action.js-vote-action') as HTMLButtonElement

  while (!button) {
    await new Promise(resolve => setTimeout(resolve, 3000))
    button = document.querySelector('.vote-action.js-vote-action') as HTMLButtonElement
  }

  button.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'center',
  })
  button.click()
}

const oneMinute = 10 * 1000;

(async () => {
  const isWeChoice = window.location.href.includes('wechoice.vn')
  if (isWeChoice) {
    console.log('This is WeChoice website')
  }

  const index = listOfUrls.findIndex(url => window.location.href === url)
  if (index === -1) {
    window.location.replace(listOfUrls[0])
    return
  }

  await vote()

  // Wait for 30 seconds
  await new Promise(resolve => setTimeout(resolve, oneMinute))
  const nextIndex = (index + 1) % listOfUrls.length
  window.location.replace(listOfUrls[nextIndex])
})()
