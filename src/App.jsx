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
  <div className="w-screen h-2/6 bg-black">
  <button className=''></button>
  </div>
</div>





    </>
  )
}

export default App
