import Head from "next/head";
import { ContactForm } from "../components/ContactForm/ContactForm";

const Contact = () => (
  <>
    <Head>
      <title>Contact Me</title>
      <meta name="description" content="Send me your messages!" />
    </Head>
    <ContactForm />
  </>
);

export default Contact;
