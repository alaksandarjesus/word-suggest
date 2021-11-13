import './App.css';
import Hero from './components/Hero'
import More from './components/More';
import Result from './components/Result';

import { useState } from 'react';

function App() {
  const [state, setState] = useState({showMore:false, query: {}})

  function toggleMore(val){
    setState({showMore: val});
  }

  function setQuery(query){
      setState({query:query});
  }

  return (
    <div className="App">
      <Hero toggleMore={toggleMore} setQuery={setQuery}  />
      <More show={state.showMore} toggleMore={toggleMore} setQuery={setQuery} />
      <Result query={state.query}/>
    </div>
  );
}

export default App;
