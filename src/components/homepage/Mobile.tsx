import MobileImage from "../../assets/mobile.png";
import CustomButton from "../CustomButton";

import PlayStore from "../../assets/playstore.png";
import AppStore from "../../assets/appstore.png";

const Mobile : React.FC = () => {
    return (
      <div className="flex justify-center align-center">
        <img src={MobileImage} alt="Mobile Image" className="w-[50%] h-[50%]" />
        <div className="w-[40%] py-[10%]">
            <h1 className="section-title">Mobile Application</h1>
            <p className="text-s w-[100%] text-darkgray leading-7 pb-2">
            You can install La Vie mobile application and enjoy with new
            featurs, earn more points and get discounts Also you can scan QR
            codes in your plants’ pots so that you can get discount on
            everything in the website up to 70%
            </p>
            <h1 className="text-md text-black font-semibold pb-5">Install by</h1>
            <div className="w-[95%] flex justify-between">            
                <CustomButton label="Play Store" Image={PlayStore} color="black" textColor="white"/>
                <CustomButton label="App Store" Image={AppStore} color="black" textColor="white"/>
            </div>
        </div>
      </div>
    );
};

export default Mobile;