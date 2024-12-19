import React from "react";
import "./OrderTracking.css";

const OrderTracking = () => {
  return (
    <>
      <div className="order-tracking-form">
        <p className="track">
          To track your order please enter your Order ID in the box below and
          press the "Track" button. This was given to you on your receipt and in
          the confirmation email you should have received.
        </p>
        <form>
          <input type="text" name="order-id" placeholder="Order ID" required />
          <input
            type="email"
            name="billing-email"
            placeholder="Billing Email Address"
            required
          />
          <button type="submit">Track Order</button>
        </form>
      </div>
    </>
  );
};

export default OrderTracking;
