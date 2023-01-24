
import './App.css';
import Wallpaper from "../src/assets/Wallpaper.jpg";
// Header Icons
import WifiIcon from "../src/assets/WifiIcon.png";
import BatteryIcon from "../src/assets/BatteryIcon.png";
// ICONS 
import CameraSvg from "../src/assets/svg/camera.svg";
import WalletSvg from "../src/assets/svg/wallet.svg";
import FacetimeSvg from "../src/assets/svg/Facetime.svg";
import SettingSvg from "../src/assets/svg/Setting.svg";
import WeatherSvg from "../src/assets/svg/Weather.svg";
import PhotosSvg from "../src/assets/svg/Photos.svg";
import AppStoreSvg from "../src/assets/svg/App-Store.svg";
import HomeSvg from "../src/assets/svg/Home.svg";
import SafariSvg from "../src/assets/svg/Safari.svg";
import StocksSvg from "../src/assets/svg/Stocks.svg";
import MessageSvg from "../src/assets/svg/Message.svg";
import NotesSvg from "../src/assets/svg/Notes.svg";
import MailSvg from "../src/assets/svg/Mail.svg";
function App() {
  return (
 
    

    <div className="App h-screen w-screen " style={{backgroundImage:`url(${Wallpaper})`,backgroundSize:"cover" ,backgroundRepeat:"no-repeat"}}>
    
    {/* Header Start */}
    <div className='Header flex justify-between p-2 px-4'>
    <div className='Time'>
    <p className='font-semibold'>9:26</p>
    </div>
    <div className='Signal flex gap-2'>
    <img className='w-6' src={WifiIcon}></img>
    <img className='w-5' src={BatteryIcon}></img>
    </div>
    </div>
    {/* Header End */}
    {/* Apps Start  */}
    <div className='Grid py-4 px-5 max-w-5xl m-auto'>
    <div style={{gridColumn:"1/3",gridRow:"1/3"}} className="flex flex-col items-center ">
    <div className='Grids bg-yellow-500 rounded-xl p-4 mx-2 my-1 h-full w-10/12 md:w-9/12' >
    <p className='text-white font-bold '>Hi,<br/> Im Tushar Aanad<br></br> Full Stack Developer</p>
    </div>
    <p className='text-xs font-semibold text-white m-1'>Notes</p>
    </div>
  
    <div className='flex flex-col items-center Grids'>
    <img src={WalletSvg} className="w-14"></img>
     <p className='text-xs font-semibold text-white m-1'>Wallet</p>
    </div>
    <div className='flex flex-col items-center Grids'>
    <img src={CameraSvg} className="w-14"></img>
     <p className='text-xs font-semibold text-white m-1'>Camera</p>
    </div>
    <div className='flex flex-col items-center Grids'>
    <img src={SafariSvg} className="w-14"></img>
     <p className='text-xs font-semibold text-white m-1'>Safari</p>
    </div>
    <div className='flex flex-col items-center Grids'>
    <img src={FacetimeSvg} className="w-14"></img>
     <p className='text-xs font-semibold text-white m-1'>Facetime</p>
    </div>
    <div className='flex flex-col items-center Grids'>
    <img src={SettingSvg} className="w-14"></img>
     <p className='text-xs font-semibold text-white m-1'>Setting</p>
    </div>
    <div className='flex flex-col items-center Grids'>
    <img src={WeatherSvg} className="w-14"></img>
     <p className='text-xs font-semibold text-white m-1'>Weather</p>
    </div>
    <div className='flex flex-col items-center Grids'>
    <img src={PhotosSvg} className="w-14"></img>
     <p className='text-xs font-semibold text-white m-1'>Photos</p>
    </div>
    <div className='flex flex-col items-center Grids'>
    <img src={AppStoreSvg} className="w-14"></img>
     <p className='text-xs font-semibold text-white m-1'>App Store</p>
    </div>
    <div className='flex flex-col items-center Grids'>
    <img src={HomeSvg} className="w-14"></img>
     <p className='text-xs font-semibold text-white m-1'>Home</p>
    </div>
    <div className='flex flex-col items-center Grids'>
    <img src={StocksSvg} className="w-14"></img>
     <p className='text-xs font-semibold text-white m-1'>Stocks</p>
    </div>
    </div>
   {/* App End */}

   {/* Nav Start */}

   <div style={{backgroundColor:"gray"}} className='nav p-2 rounded-3xl flex gap-5 justify-center w-full '>
   <div className='flex flex-col items-center Grids'>
    <img src={MessageSvg} className="w-14"></img>
    </div>
    <div className='flex flex-col items-center Grids'>
    <img src={NotesSvg} className="w-14"></img>
    </div>
    <div className='flex flex-col items-center Grids'>
    <img src={MailSvg} className="w-14"></img>
    </div>
   </div>
  
    </div>
  );
}

export default App;
