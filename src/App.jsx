import img from './assets/react-logo.png'

function App() {

  return (
    <>
      <div className='h-screen'>
  <div className="w-screen h-1/6 bg-black"></div>
  <div 
    className='w-screen h-3/6 custom-shadow m-0 bg flex justify-center'>
      <img src={img} alt="" className='h-1/4 flex' />
    </div>
  <div className="w-screen h-2/6 bg-black flex flex-col justify-center items-center">
  <button className='w-5/6 py-2 bg-blue-600 my-2'>pay the bill</button>
  <button className='w-5/6 py-2 bg-red-400'>view the menu</button>
  </div>
</div>





    </>
  )
}

export default App
