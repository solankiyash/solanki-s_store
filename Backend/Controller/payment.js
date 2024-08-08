import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();
const stripe = new Stripe(process.env.stripekey);
export const stripepayment = async (req, res) => {
  const { image, category, size, quantity } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: "Total Amount",
              description: `Category:${category},Quantity:${quantity},Size:${size.join(
                ", "
              )}`,
              images: [image],
            },

            unit_amount: req.body.amount * 100,
          },
          quantity: quantity,
        },
      ],
      mode: "payment",
      success_url: 'http://localhost:3000/thank-you?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: "https://your-website.com/cancel",
    });

    res.send({ sessionId: session.id });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const stripecheckoutsession = async(req,res) => {
    const { sessionId } = req.query;
  
    try {
      const session = await stripe.checkout.sessions.retrieve(sessionId);
      res.json(session);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }

}