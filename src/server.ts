import { http } from './http'
import './websocket/admin'
import './websocket/client'

http.listen(3333, () => {
  console.log('server is runnning on port 3333')
})