import { Director, View } from '@millicast/sdk'

// Get Media Element
const video = document.getElementById('my-video')

//Define callback for generate new token
const tokenGenerator = () => Director.getSubscriber({
    streamName: 'my-stream-name', 
    streamAccountId: 'my-account-id'
  })

//Create a new instance
const millicastView = new View(streamName, tokenGenerator, video)

//Start connection to publisher
try {
  await millicastView.connect()
} catch (e) {
  console.log('Connection failed, handle error', e)
}