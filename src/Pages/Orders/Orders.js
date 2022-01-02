import React from "react";
import Order from "../../Components/Order";
import { useEffect, useState } from "react";
import { useStateValue } from "../../Store/StateProvider";
import { projectFirestore } from "../../Configs/firebase";
import "./Orders.css";
function Orders() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      projectFirestore
        .collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
