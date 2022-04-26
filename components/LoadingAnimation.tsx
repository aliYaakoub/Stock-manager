import Lottie from "lottie-react";
import Anim from "../assets/loading.json";

const LoadingAnimation: React.FC = () => {
    
    return (
        <Lottie 
            loop 
            autoPlay 
            animationData={Anim} 
            style={{width: 400, height: 400}} 
        />
    )
};

export default LoadingAnimation;