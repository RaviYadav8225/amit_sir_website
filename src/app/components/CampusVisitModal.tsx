'use client';
import { useState } from 'react';

interface CampusVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface VisitFormData {
  name: string;
  email: string;
  phone: string;
  visitDate: string;
  timeSlot: string;
  numberOfVisitors: string;
  purpose: string;
  specialRequirements: string;
}

export default function CampusVisitModal({ isOpen, onClose }: CampusVisitModalProps) {
  const [formData, setFormData] = useState<VisitFormData>({
    name: '',
    email: '',
    phone: '',
    visitDate: '',
    timeSlot: '',
    numberOfVisitors: '1',
    purpose: 'course-inquiry',
    specialRequirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const timeSlots = [
    { id: 'morning', label: '🌅 Morning (9:00 AM - 12:00 PM)', value: 'Morning (9:00 AM - 12:00 PM)' },
    { id: 'afternoon', label: '☀️ Afternoon (12:00 PM - 4:00 PM)', value: 'Afternoon (12:00 PM - 4:00 PM)' },
    { id: 'evening', label: '🌆 Evening (4:00 PM - 7:00 PM)', value: 'Evening (4:00 PM - 7:00 PM)' }
  ];

  const purposes = [
    { id: 'course-inquiry', label: '📚 Course Inquiry', value: 'Course Inquiry' },
    { id: 'admission', label: '🎓 Admission Guidance', value: 'Admission Guidance' },
    { id: 'campus-tour', label: '🏫 Campus Tour', value: 'Campus Tour' },
    { id: 'meet-faculty', label: '👨‍🏫 Meet Faculty', value: 'Meet Faculty' },
    { id: 'facility-check', label: '🔬 Check Facilities', value: 'Check Facilities' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('📅 Booking campus visit...');

      // Send to campus visit booking API
      const response = await fetch('/api/campus-visit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
          bookingId: `VISIT-${Date.now()}`
        }),
      });

      const result = await response.json();

      if (result.success) {
        console.log('✅ Campus visit booked successfully!');
        alert(`✅ Campus Visit Booked Successfully!\n\n📅 Date: ${formData.visitDate}\n⏰ Time: ${formData.timeSlot}\n\n📧 Confirmation email sent to: ${formData.email}\n📱 We'll call you on: ${formData.phone}\n\n📍 Main Office: LITC Institute, P13-14, Metro Tower, Vijay Nagar, Indore\n📍 & : G5, 10/102, Shri Balaji Center, Station Road, Rau, Indore\n\n🅿️ Free parking available\n☕ Refreshments will be provided\n\nSee you soon!`);
        
        // Reset form and close modal
        setFormData({
          name: '',
          email: '',
          phone: '',
          visitDate: '',
          timeSlot: '',
          numberOfVisitors: '1',
          purpose: 'course-inquiry',
          specialRequirements: ''
        });
        onClose();
      } else {
        console.error('❌ Booking failed:', result);
        alert(`⚠️ Unable to book visit online.\n\n📞 Please call us directly:\n+91-9522220892\n\nWe're available Mon-Sat, 9 AM - 7 PM`);
      }
    } catch (error) {
      console.error('❌ Campus visit booking error:', error);
      alert(`❌ Booking failed.\n\n📞 Please contact us:\nPhone: +91-9522220892\nEmail: yyradhe751@gmail.com`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get today's date for min attribute
  const today = new Date().toISOString().split('T')[0];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-blue-500/30">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all"
        >
          <span className="text-white text-2xl">×</span>
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600/30 to-purple-600/30 p-8 text-center border-b border-white/10">
          <div className="text-5xl mb-4">🏫</div>
          <h2 className="text-3xl font-black text-white mb-2">
            Schedule Campus Visit
          </h2>
          <p className="text-gray-300">
            Book your visit to explore our world-class facilities
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span>👤</span> Personal Information
            </h3>
            
            <div>
              <label className="block text-gray-300 mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
              </div>
            </div>
          </div>

          {/* Visit Details */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span>📅</span> Visit Details
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 mb-2">Preferred Date *</label>
                <input
                  type="date"
                  name="visitDate"
                  value={formData.visitDate}
                  onChange={handleInputChange}
                  min={today}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-2">Number of Visitors *</label>
                <select
                  name="numberOfVisitors"
                  value={formData.numberOfVisitors}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5+">5+ People</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Preferred Time Slot *</label>
              <div className="grid md:grid-cols-3 gap-3">
                {timeSlots.map((slot) => (
                  <label
                    key={slot.id}
                    className={`flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                      formData.timeSlot === slot.value
                        ? 'border-blue-500 bg-blue-500/20 text-white'
                        : 'border-white/10 bg-white/5 text-gray-300 hover:border-blue-500/50 hover:bg-white/10'
                    }`}
                  >
                    <input
                      type="radio"
                      name="timeSlot"
                      value={slot.value}
                      checked={formData.timeSlot === slot.value}
                      onChange={handleInputChange}
                      required
                      className="hidden"
                    />
                    <span className="text-center text-sm font-semibold">{slot.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Purpose of Visit *</label>
              <div className="grid md:grid-cols-2 gap-3">
                {purposes.map((purpose) => (
                  <label
                    key={purpose.id}
                    className={`flex items-center p-3 border-2 rounded-xl cursor-pointer transition-all ${
                      formData.purpose === purpose.id
                        ? 'border-purple-500 bg-purple-500/20 text-white'
                        : 'border-white/10 bg-white/5 text-gray-300 hover:border-purple-500/50 hover:bg-white/10'
                    }`}
                  >
                    <input
                      type="radio"
                      name="purpose"
                      value={purpose.id}
                      checked={formData.purpose === purpose.id}
                      onChange={handleInputChange}
                      required
                      className="hidden"
                    />
                    <span className="text-sm font-semibold">{purpose.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Special Requirements */}
          <div>
            <label className="block text-gray-300 mb-2">
              Special Requirements (Optional)
            </label>
            <textarea
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleInputChange}
              rows={3}
              placeholder="Any specific areas you want to see or questions you have..."
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
            />
          </div>

          {/* Campus Information */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl p-6 border border-white/10">
            <h4 className="font-bold text-white mb-3 flex items-center gap-2">
              <span>📍</span> Campus Information
            </h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p><strong>Main Office:</strong> LITC Institute, P13-14, Ground Floor, Metro Tower, Vijay Nagar, Indore, MP - 452010</p>
              <p><strong>&:</strong> G5, 10/102, Shri Balaji Center Building, Station Road, Rau, Indore, MP - 453331</p>
              <p><strong>Timing:</strong> Monday - Saturday, 9:00 AM - 7:00 PM</p>
              <p><strong>Parking:</strong> Free parking available</p>
              <p><strong>Facilities:</strong> AC Labs, Library, Cafeteria, Recreation Area</p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-4 bg-white/10 text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Booking...</span>
                </>
              ) : (
                <>
                  <span>📅</span>
                  <span>Confirm Booking</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
