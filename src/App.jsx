import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Layout, Routing } from './components'
import { store } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routing />
        </Layout>
      </Router>
    </Provider>
  )
}

export default App
