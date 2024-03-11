import { useState } from "react";

const Section = ({title,description,isVisible,setIsVisible})=> {
    
    return(
        <div className="border border-black p-2 m-2">   
        <h1 className="font-bold">{title}</h1>
        {isVisible ? 
        <button className="bg-blue-500" onClick={()=> {setIsVisible(false)}}>Hide</button>
        
        : 
        <button className="bg-blue-500" onClick={()=> {setIsVisible(true)}}>Show</button>
        
        }
        {isVisible && <h2>{description}</h2>}
        </div>
    )

}



const Cart = () => {
    const [isSectionVisible,setIsSectionVisible] = useState("About");
    return(

        <>
        <Section  title={"About"} 
        description={"An ecommerce shopping cart is a software that lets customers select, store, and manage items before buying them. It reflects the concept of shopping in a store. You can add items to the cart that you want to buy, change the quantity, and get a total cost before finishing the transaction."}
        isVisible = {isSectionVisible == "About"}
        setIsVisible = {() => {
            isSectionVisible == "About" ? setIsSectionVisible(""): setIsSectionVisible("About")
        }}
        />

        <Section  title={"Cart"} 
        description={"Flipkart has also introduced several new capabilities that include 'Brand Mall' mode, aimed to offer a premium experience to customers, 'image search' to simplify and narrow down the product discovery journey for customers, 'live commerce' to provide an interactive shopping experience"}
        isVisible = {isSectionVisible == "Cart"}
        setIsVisible = {() => {
            isSectionVisible == "Cart" ? setIsSectionVisible(""): setIsSectionVisible("Cart")
        }}
        />

<       Section  title={"Shopee"} 
        description={"Flipkart has also introduced several new capabilities that include 'Brand Mall' mode, aimed to offer a premium experience to customers, 'image search' to simplify and narrow down the product discovery journey for customers, 'live commerce' to provide an interactive shopping experience"}
        isVisible = {isSectionVisible == "Shopee"}
        setIsVisible = {() => {
            isSectionVisible == "Shopee" ? setIsSectionVisible("") : setIsSectionVisible("Shopee")
        }}
        />

        </>


    )
}

export default Cart;