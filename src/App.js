import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [markdown,setMarkdown] = useState('## mardown preview')
  return <main>
    <section className='markdown'>
      <textarea className='input' value={markdown} onChange={(e)=>setMarkdown(e.target.value)}>

      </textarea>
      <article className='markdown'>
        <ReactMarkdown >{markdown}</ReactMarkdown>
      </article>
    </section>
  </main>
}

export default App
