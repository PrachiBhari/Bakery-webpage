import { useCallback, useState } from "react";
import styles from "./styles.module.css";
import { AiFillCompass } from "react-icons/ai";
import {
  BsBank2,
  BsCashStack,
  BsCreditCard2Back,
  BsWallet,
} from "react-icons/bs";

function PaymentForm() {
  const [paymentTypes, setPaymentTypes] = useState([
    { method: "credit", label: "CREDIT CARD", selected: false },
    { method: "debit", label: "DEBIT CARD", selected: false },
    { method: "cash", label: "CASH", selected: false },
  ]);

  const handlePaymentSelector = useCallback(
    (method) => {
      const newPaymentTypes = paymentTypes.map((type) => {
        if (type.method === method) {
          type.selected = true;
        } else {
          type.selected = false;
        }
        return type;
      });
      setPaymentTypes(newPaymentTypes);
    },
    [paymentTypes]
  );

  return (
    <form className={styles.checkoutForm} name="orderForm">
      <div className={styles.topCard}></div>
      <div className={styles.bottomCard}>
        <header>
          <BsWallet size={17} />
          <div>
            <h2>Payment</h2>
            <p>Payment is made upon delivery. How would you like to pay?</p>
          </div>
        </header>

        <div className={styles.checkboxContainer}>
          {paymentTypes.map((type) => (
            <label
              key={type.method}
              htmlFor={type.method}
              className={`${type.selected ? styles.checked : ""}`}
            >
              <input
                type="radio"
                name="payment"
                id={type.method}
                value={type.method}
                onClick={() => handlePaymentSelector(type.method)}
              />
              {type.method === "credit" && <BsCreditCard2Back />}
              {type.method === "debit" && <BsBank2 />}
              {type.method === "cash" && <BsCashStack />}
              {type.label}
            </label>
          ))}
        </div>
      </div>
    </form>
  );
}

export default PaymentForm;
