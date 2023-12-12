import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import './app.scss'
import 'taro-icons/scss/MaterialCommunityIcons.scss'
import 'taro-icons/scss/MaterialIcons.scss' // 112KB

function App({ children }: PropsWithChildren) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return children
}

export default App
