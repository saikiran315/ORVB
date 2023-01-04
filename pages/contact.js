import React from 'react'

const contact = () => {
  return (
    <div>
  <head>
    <title>Contact Form</title>
  </head>
  <body className="bg-gray-100 h-screen"></body>
    <div className="container mx-auto p-8">
      <h1 classname="text-2xl font-bold text-gray-700 mb-4">Contact Us</h1>
      <form classname="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" id="contact-form">
        <div classname="mb-4">
          <label classname="block text-gray-700 text-sm font-bold mb-2" for="name">
            Name
          </label>
          <input
            classname="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="ENTER"
            required
          />
        </div>
        <div classname="mb-4">
          <label classname="block text-gray-700 text-sm font-bold mb-2" for="email">
            Email
          </label>
          <input
            classname="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="email"
            required
          />
        </div>
        <div classname="mb-4">
          <label classname="block text-gray-700 text-sm font-bold mb-2" for="message">
            Message
          </label>
          <textarea
            classname="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="5"
            placeholder="Your message here"
            required
          ></textarea>
        </div>
        <div classname="mb-6 text-center">
          <button
            classname="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    fetch('/contact', {
      method:'POST', 
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert('Message sent successfully');
        } else {
          alert('An error occurred');
        }
      });
  });
    </div>
  )
}

export default contact
