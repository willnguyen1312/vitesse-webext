/* eslint-disable no-console */
import { onMessage } from 'webext-bridge/content-script'

(() => {
  console.info('[vitesse-webext] Hello world from content script ☺️')

  // Add hello world to the page
  const div = document.createElement('div')
  div.textContent = 'Hello world from Vitesse Webext!'
  document.body.prepend(div)

  // communication example: send previous tab title from background page
  onMessage('tab-prev', ({ data }) => {
    console.log(`[vitesse-webext] Navigate from page "${data.title}"`)
  })
})()
