/* useOrder */

import { useState } from "react";
import { writeBatch, collection, documentId, getDocs, query, where, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useCart } from "./useCart";
import { useAuth } from "./useAuth";

export const useOrder = () => {

    const [loading, setLoading] = useState(false);
    const {cart, clearCart, totalQuantity, getTotalPrice } = useCart();
    const [orderCreated, setOrderCreated] = useState(false);
    const [newOrderId, setNewOrderId] = useState(null);
    const total = getTotalPrice();
    const { user } = useAuth();

    const [buyerInfo, setBuyerInfo] = useState({
        name: "",
        mail: user ? user.email : "",
        address: "",
        phone: ""
      });
    
      const handleInputChange = (type, value) => {
        setBuyerInfo({
          ...buyerInfo,
          [type]: value
        });
      };
  
    const createOrder = async () => {
        setLoading(true)
        try{

          const objOrder = {
            buyer: {
              name: buyerInfo.name,
              mail: user ? user.email : buyerInfo.mail,
              address: buyerInfo.address,
              phone: buyerInfo.phone
            },
            item: cart,
            totalQuantity,
            total,
            date: new Date()
          }; 

          console.log(objOrder)

          const ids = cart.map((item) => item.id);
          const productRef = collection(db, "products");
          const productsAddedFromFirestore = await getDocs(
            query(productRef, where(documentId(), "in", ids)));
            const {docs} = productsAddedFromFirestore;
    
            const outOfStock = [];
            const batch = writeBatch(db);
    
            docs.forEach((doc) => {
              const dataDoc = doc.data();
              const stockDB = dataDoc.stock;
              const productsAddedToCart = cart.find((prod) => prod.id === doc.id);
              const prodQuantity = productsAddedToCart?.cantidad;
    
              if(stockDB >= prodQuantity){
                // actualizar
                batch.update(doc.ref, {stock: stockDB - prodQuantity});
              } else {
                outOfStock.push({id: doc.id, ...dataDoc});
              }
            })
    
            if(outOfStock.length === 0){
              await batch.commit();
              const orderRef = collection(db, "orders");
              const orderAdded = addDoc(orderRef, objOrder);
              console.log(objOrder)
              const orderId = (await orderAdded).id;
              console.log(`El Id de su Orden es: ${orderId}`);
              setNewOrderId(orderId)
              clearCart();
              setOrderCreated(true);
            } else {
              console.log("Hay productos que estan fuera de Stock...")
            }
        } catch(error){
          console.log(error)
        } finally{
          setLoading(false)
        }
      }

    return {createOrder, loading, orderCreated, newOrderId, handleInputChange, buyerInfo }
}
