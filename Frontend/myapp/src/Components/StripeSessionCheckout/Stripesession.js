import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ThankYou = () => {
  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch(
          `/api/checkout-session?sessionId=${sessionId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSession(data);
      } catch (err) {
        setError(err.message);
      }
    };

    if (sessionId) {
      fetchSession();
    }
  }, [sessionId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!session) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Thank you for your purchase!</h1>
      <p>
        Payment was successful for {session.amount_total / 100}{" "}
        {session.currency.toUpperCase()}.
      </p>
      <p>Customer: {session.customer_details.email}</p>
      <p>Session ID: {session.id}</p>
    </div>
  );
};

export default ThankYou;
