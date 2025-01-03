import LaptopDiscount from "./LaptopDiscount";


export const metadata = {
    title: "Laptops Page",
    description: "Best laptops in city",
  };

export default function laptopLayout({children}){
    return(
        <div>
            <LaptopDiscount />
            {children}
        </div>
    )

}