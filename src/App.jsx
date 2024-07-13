import './App.css'

function App({content, content2}) {

  return (
    <>
      <h1>{content}</h1>
      <h2 className="text-3xl font-bold underline">{content2}</h2>
      <img className='rounded-lg h-screen m-auto mt-5' src="https://images.unsplash.com/photo-1687246493079-1361abc6d875?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </>
  )
}

export default App
