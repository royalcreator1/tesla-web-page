import { useState } from 'react';
import { motion } from 'framer-motion';

const BookTestDriveForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    location: '',
    model: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Replace with your Telegram bot details
    const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN';
    const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID';
    
    const message = `
📅 New Test Drive Booking Request

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
🚗 Model: ${formData.model}
📍 Location: ${formData.location}
📅 Preferred Date: ${formData.preferredDate}
⏰ Preferred Time: ${formData.preferredTime}
    `.trim();

    try {
      await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML',
        }),
      });
      
      setSubmitStatus({ type: 'success', message: 'Booking request sent successfully!' });
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        location: '',
        model: '',
      });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send request. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:border-white/50 focus:outline-none text-white"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:border-white/50 focus:outline-none text-white"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:border-white/50 focus:outline-none text-white"
          placeholder="+1 234 567 8900"
        />
      </div>

      <div>
        <label htmlFor="model" className="block text-sm font-medium text-gray-300 mb-2">
          Select Model *
        </label>
        <select
          id="model"
          name="model"
          required
          value={formData.model}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:border-white/50 focus:outline-none text-white"
        >
          <option value="">Choose a model</option>
          <option value="Model One - Performance Sedan">Model One - Performance Sedan</option>
          <option value="Model Two - Luxury SUV">Model Two - Luxury SUV</option>
          <option value="Model Three - Sport Coupe">Model Three - Sport Coupe</option>
        </select>
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-300 mb-2">
          Location *
        </label>
        <input
          type="text"
          id="location"
          name="location"
          required
          value={formData.location}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:border-white/50 focus:outline-none text-white"
          placeholder="City, State"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-300 mb-2">
            Preferred Date *
          </label>
          <input
            type="date"
            id="preferredDate"
            name="preferredDate"
            required
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:border-white/50 focus:outline-none text-white"
          />
        </div>

        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-300 mb-2">
            Preferred Time *
          </label>
          <input
            type="time"
            id="preferredTime"
            name="preferredTime"
            required
            value={formData.preferredTime}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-white/20 rounded-lg focus:border-white/50 focus:outline-none text-white"
          />
        </div>
      </div>

      {submitStatus && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-500/20 border border-green-500 text-green-400'
              : 'bg-red-500/20 border border-red-500 text-red-400'
          }`}
        >
          {submitStatus.message}
        </motion.div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : 'Request Test Drive'}
      </button>
    </form>
  );
};

export default BookTestDriveForm;

