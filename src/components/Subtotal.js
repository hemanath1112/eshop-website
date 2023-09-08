import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";

const Subtotal = () => {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal(0 items): <strong>$0</strong>
            </p>
            <small className="suntotal__gift">
              <input type="checkbox" />
              This oder Condains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType="text"
        thousandSeparator={true}
        prefix="$"
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
