import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const { email, name, message } = await request.json();

  if (
    !email.trim() ||
    !email.includes(".") ||
    !name.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ message: "Invalid input." }, { status: 422 });
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
    return NextResponse.json(
      { message: "Failed to connect to database!" },
      { status: 500 }
    );
  }

  const db = client.db();

  try {
    const result = await db.collection("messages").insertOne(newMessage);
    newMessage.id = result.insertedId;
  } catch {
    client.close();

    return NextResponse.json(
      { message: "Sending message failed!" },
      { status: 500 }
    );
  }

  client.close();

  return NextResponse.json(
    { message: "Successfully send the message!" },
    { status: 201 }
  );
};
