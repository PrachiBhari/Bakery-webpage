import React from "react";
import "./UserManual.css"; 

const UserManual = () => {
  return (
    <div className="user-manual">
      <h1 className="manual-title">How to Place an Order</h1>
      <ol className="manual-steps">
        <li>
          <strong>Step 1:</strong> Click on the <strong>"Buy"</strong> button for any item you want to add to your cart.
        </li>
        <li>
          <strong>Step 2:</strong> Click on the <strong>cart icon</strong> to manage your cart and proceed to place your order.
        </li>
        <li>
          <strong>Step 3:</strong> Click on <strong>"Continue"</strong> to proceed to the payment section.
        </li>
        <li>
          <strong>Step 4:</strong> Choose your desired payment option.
        </li>
        <li>
          <strong>Step 5:</strong> Click on <strong>"Check Out"</strong> to finalize and place your order.
        </li>
      </ol>
      <p className="thank-you">That's it! Enjoy your delicious treats!</p>
    </div>
  );
};

export default UserManual;
