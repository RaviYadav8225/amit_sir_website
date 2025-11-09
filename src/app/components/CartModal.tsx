"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { FaTimes, FaShoppingCart, FaTrash } from 'react-icons/fa';
import EnrollmentModal from './EnrollmentModal';

export default function CartModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const { cart, removeFromCart, clearCart, getCartTotal, getBundleDiscount, getCartCount } = useCart();

  const bundleDiscount = getBundleDiscount();
  const subtotal = getCartTotal();
  const finalTotal = subtotal - bundleDiscount;

  const handleCheckout = () => {
    // Close cart modal
    setIsOpen(false);
    // Open enrollment modal with all cart data
    setIsEnrollModalOpen(true);
  };

  // Prepare cart data for enrollment
  const cartEnrollmentData = {
    name: cart.length > 1 
      ? `Bundle of ${cart.length} Courses` 
      : cart[0]?.name || 'Course',
    code: cart.map(c => c.code).join(', '),
    price: `₹${finalTotal.toLocaleString()}`,
    originalPrice: `₹${subtotal.toLocaleString()}`,
    duration: cart.length > 1 
      ? `${cart.length} Courses` 
      : cart[0]?.duration || '',
    level: cart.length > 1 
      ? 'Multiple Levels' 
      : cart[0]?.level || 'Beginner',
    discount: bundleDiscount > 0 
      ? `₹${bundleDiscount.toLocaleString()} OFF` 
      : '0% OFF',
    courses: cart.map(c => c.name).join('\n• ')
  };

  return (
    <>
      {/* Cart Button in Navbar */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative p-2 hover:bg-white/10 rounded-lg transition-colors"
        aria-label="Shopping Cart"
      >
        <FaShoppingCart className="text-xl" />
        {getCartCount() > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold animate-pulse">
            {getCartCount()}
          </span>
        )}
      </button>

      {/* Cart Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FaShoppingCart className="text-2xl" />
                <div>
                  <h2 className="text-2xl font-bold">Your Cart</h2>
                  <p className="text-white/90 text-sm">{getCartCount()} course(s) selected</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                aria-label="Close cart"
                title="Close cart"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <FaShoppingCart className="text-6xl text-gray-300 mx-auto mb-4" />
                  <p className="text-xl text-gray-600 mb-2">Your cart is empty</p>
                  <p className="text-gray-500 mb-6">Add courses to get started!</p>
                  <Link
                    href="/explore-courses"
                    onClick={() => setIsOpen(false)}
                    className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:scale-105 transition-all"
                  >
                    Explore Courses
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((course) => (
                    <div
                      key={course.id}
                      className="bg-gray-50 rounded-2xl p-4 flex gap-4 hover:bg-gray-100 transition-all"
                    >
                      {/* Course Info */}
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-900 mb-1">{course.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{course.code} • {course.duration}</p>
                        <div className="flex items-center gap-3">
                          <span className="text-2xl font-black text-green-600">
                            ₹{course.price.toLocaleString()}
                          </span>
                          <span className="text-gray-400 line-through">
                            ₹{course.originalPrice.toLocaleString()}
                          </span>
                          <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full font-bold">
                            {course.discount}
                          </span>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(course.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-all"
                        aria-label="Remove from cart"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ))}

                  {/* Bundle Discount Banner */}
                  {bundleDiscount > 0 && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">🎉</span>
                        <span className="font-bold text-green-700">Bundle Discount Applied!</span>
                      </div>
                      <p className="text-sm text-green-600">
                        {cart.length >= 3 
                          ? "You saved 15% by enrolling in 3+ courses!" 
                          : "You saved 10% by enrolling in 2+ courses!"}
                      </p>
                    </div>
                  )}

                  {/* Discount Incentive */}
                  {cart.length === 1 && (
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">💡</span>
                        <span className="font-bold text-blue-700">Pro Tip!</span>
                      </div>
                      <p className="text-sm text-blue-600">
                        Add 1 more course to get <strong>10% off</strong> your total! 
                        Add 2 more for <strong>15% off</strong>!
                      </p>
                    </div>
                  )}
                  {cart.length === 2 && (
                    <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">🚀</span>
                        <span className="font-bold text-purple-700">Almost There!</span>
                      </div>
                      <p className="text-sm text-purple-600">
                        Add 1 more course to unlock <strong>15% discount</strong> instead of 10%!
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer - Total & Actions */}
            {cart.length > 0 && (
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({cart.length} courses)</span>
                    <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
                  </div>
                  {bundleDiscount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span className="flex items-center gap-2">
                        <span>🎁</span>
                        Bundle Discount ({cart.length >= 3 ? '15%' : '10%'})
                      </span>
                      <span className="font-bold">-₹{bundleDiscount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-2xl font-black text-gray-900 pt-3 border-t-2 border-gray-300">
                    <span>Total</span>
                    <span className="text-green-600">₹{finalTotal.toLocaleString()}</span>
                  </div>
                  {bundleDiscount > 0 && (
                    <p className="text-xs text-green-600 text-center">
                      You saved ₹{bundleDiscount.toLocaleString()} with bundle discount! 🎉
                    </p>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={clearCart}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 transition-all"
                  >
                    Clear Cart
                  </button>
                  <button
                    onClick={handleCheckout}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 rounded-xl font-bold hover:scale-105 transition-all shadow-lg"
                  >
                    Proceed to Enroll
                  </button>
                </div>

                <p className="text-xs text-center text-gray-500 mt-3">
                  📞 Need help? Call us at +91-9522220892
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Enrollment Modal for Cart Checkout */}
      {isEnrollModalOpen && cart.length > 0 && (
        <EnrollmentModal
          isOpen={isEnrollModalOpen}
          onClose={() => setIsEnrollModalOpen(false)}
          courseData={cartEnrollmentData}
        />
      )}
    </>
  );
}
