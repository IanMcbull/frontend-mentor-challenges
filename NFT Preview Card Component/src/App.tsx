import mainImage from "./assets/images/image-equilibrium.jpg"
import etheriumIcon from "./assets/images/icon-ethereum.svg"
import clockIcon from "./assets/images/icon-clock.svg"
import avatarImage from "./assets/images/image-avatar.png"
import eyeIcon from "./assets/images/icon-view.svg"
function App() {
  return (
    <main className="h-screen bg-Very-dark-blue-main-BG flex items-center justify-center p-4">
     <section className="bg-Very-dark-blue-card rounded-xl p-6 flex flex-col gap-5 font-ff-outfit max-w-[350px]">
      <div className="relative">
       <div className="absolute hover:bg-cyan-transparent w-full h-full flex items-center justify-center rounded-xl">
        <img src={eyeIcon} alt="eye icon" className="hidden w-[40px]"/> 
       </div>
      <img src={mainImage} alt="Equilibrium image" className="rounded-xl"/>
      </div>
      <h1 className="font-bold text-White text-xl hover:text-Cyan cursor-pointer">Equilibrium #3429</h1>
      <p className="text-Soft-blue">Our Equilibrium collection promotes balance and calm.</p> 
      <div className="flex justify-between">
        <div className="flex gap-3 items-center">
          <img src={etheriumIcon} alt="etherium icon"/>
          <p className="font-semibold text-Cyan">0.041 ETH</p>
        </div>
        <div className="flex gap-2 items-center">
          <img src={clockIcon} alt="clock icon"/>
          <p className="text-Soft-blue">3 days left</p>
        </div>
      </div>
      <div className="border border-[#273951]"></div>
      <footer className="flex items-center gap-4">
        <img src={avatarImage} alt="avatar image" className="w-[30px] h-[30px] rounded-full object-cover border border-White"/>
        <p className="text-Soft-blue">Creator of <span className="text-White hover:text-Cyan cursor-pointer">Jules Wyvern</span></p>
      </footer>
    </section>
    </main>
  )
}

export default App
