import './App.css'
import {MirrorInterface} from './MirrorInterface'

function App() {
  return (
    <div className="main">
      <h1>Where's That Mirror Fragment?</h1>
      <MirrorInterface />
      <div className="footer">
        <div>This app was built on top of the excellent work of <a href="https://demajen.co.uk/">Demajen</a>. Please consider giving him a donation: <a href="https://ko-fi.com/demajen">Demajen Ko-fi</a> </div>
        <div>Made with ❤️  by <a href="https://reddit.com/user/DaRizat">DaRizat</a></div>
      </div>
    </div>
  )
}

export default App
