import React from 'react';
import "normalize.css"
import Footer from './components/Footer'

const App = () => (<>
    <div >server side Hello World</div>
    <button onClick={e => alert('Hello You!')}>Say Hello Back!</button>
    <Footer/>
</>);

export default App; 