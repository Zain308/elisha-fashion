"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
          <p className="mb-6">
            We'd love to hear from you. Please fill out the form and we'll get back to you as soon as possible.
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 text-gray-600" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-gray-600">Landmark Plaza, Jail Road, Lahore, Pakistan</p>
              </div>
            </div>

            <div className="flex items-start">
              <Phone className="w-5 h-5 mr-3 text-gray-600" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">Whatsapp: +92 322 6773534</p>
              </div>
            </div>

            <div className="flex items-start">
              <Mail className="w-5 h-5 mr-3 text-gray-600" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-gray-600">elisha@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border rounded p-2"
              />
            </div>

            <button type="submit" className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
