import * as React from 'react'
import './App.css'

import Hello from './components/Hello'
import Header from './components/Header'
import logo from './logo.svg'

declare global {
  interface Window { neo4j: any; }
}

window.neo4j = window.neo4j || {};

const username: string = 'neo4j'
const password: string = 'i-0fda16514ccf6c24a'
const uri: string = 'bolt://18.191.9.110:7687'

const driver = window.neo4j.v1.driver(uri, window.neo4j.v1.auth.basic(username, password),
  {
    encrypted: 'ENCRYPTION_ON',
    trust: 'TRUST_CUSTOM_CA_SIGNED_CERTIFICATES'
  }
)
var session: any = driver.session()

const resultPromise: any = session.writeTransaction((tx: any) => tx.run(
  "MATCH (n) RETURN n;", {}
))

console.log(new Date().getMilliseconds())
resultPromise.then((result: any) => {
  session.close()

  console.log(result)

  // on application exit:
  driver.close()
  console.log(new Date().getMilliseconds())
})


// function getMovie(): any {
//   var session = driver.session();
//   return session
//     .run(
//       "MATCH (n) RETURN n;"
//     )
//     .then((result: any) => {
//       session.close()

//       var record = result.records[0]
//       console.log(record)
//       return record
//     })
//     .catch((error: any) => {
//       session.close()
//       throw error
//     });
// }

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header 
          // getMovie={getMovie}
        />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Hello 
          name="Brandon"
          enthusiasmLevel={2}
        />
      </div>
    )
  }
}

export default App
