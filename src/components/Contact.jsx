export default function Contact() {
  return (
    <section className="bg-white py-12 px-6 mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
      <form className="max-w-md mx-auto space-y-4">
        <input className="w-full p-2 border border-gray-300 rounded" type="text" placeholder="Name" />
        <input className="w-full p-2 border border-gray-300 rounded" type="email" placeholder="Email" />
        <textarea className="w-full p-2 border border-gray-300 rounded" rows="4" placeholder="Message"></textarea>
        <button className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600">Send Message</button>
      </form>
    </section>
  );
}
