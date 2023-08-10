import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email.trim() ||
      !email.includes(".") ||
      !name.trim() ||
      !message.trim()
    ) {
      res.status(422).json({ message: "Invalid input." });

      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };
    let client;

    try {
      client = await MongoClient.connect(process.env.DB_CONNECTION);
    } catch {
      res.status(500).json({ message: "Failed to connect to database!" });

      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch {
      client.close();
      res.status(500).json({ message: "Sending message failed!" });

      return;
    }

    client.close();

    res.status(201).json({ message: "Successfully send the message!" });
  }
};

export default handler;
