import Sidebar from './Sidebar'
import SpotifyWebApi from 'spotify-web-api-node'
import Body from './Body'
import Right from './Right'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
})

const Dashboard = () => {
  return (
    <main className="flex min-h-screen bg-black min-w-max lg:pb-24">
      <Sidebar />
      <Body spotifyApi={spotifyApi} />
      <Right />
    </main>
  )
}

export default Dashboard
