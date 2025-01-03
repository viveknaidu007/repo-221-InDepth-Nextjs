import MobileDiscount from "./MobileDiscount";


export const metadata = {
    title: "Mobiles Pages",
    description: "Best mobiles with good discount in city",
  };

export default function mobileLayout({children}){
        return(
            <div>
                <MobileDiscount />
                {children}
            </div>
        )
}