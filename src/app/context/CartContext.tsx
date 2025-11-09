"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CartCourse {
  id: string;
  name: string;
  code: string;
  price: number;
  originalPrice: number;
  duration: string;
  level: string;
  discount: string;
  image?: string;
  urlPath?: string;
}

interface CartContextType {
  cart: CartCourse[];
  addToCart: (course: CartCourse) => void;
  removeFromCart: (courseId: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
  isInCart: (courseId: string) => boolean;
  getBundleDiscount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartCourse[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('litc_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('litc_cart', JSON.stringify(cart));
    } else {
      localStorage.removeItem('litc_cart');
    }
  }, [cart]);

  const addToCart = (course: CartCourse) => {
    setCart(prev => {
      // Check if course already in cart
      if (prev.find(item => item.id === course.id)) {
        return prev;
      }
      return [...prev, course];
    });
  };

  const removeFromCart = (courseId: string) => {
    setCart(prev => prev.filter(item => item.id !== courseId));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('litc_cart');
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const getCartCount = () => {
    return cart.length;
  };

  const isInCart = (courseId: string) => {
    return cart.some(item => item.id === courseId);
  };

  // Calculate bundle discount
  const getBundleDiscount = () => {
    const count = cart.length;
    const total = getCartTotal();
    
    if (count >= 3) {
      return Math.round(total * 0.15); // 15% off for 3+ courses
    } else if (count >= 2) {
      return Math.round(total * 0.10); // 10% off for 2+ courses
    }
    return 0;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getCartCount,
        isInCart,
        getBundleDiscount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
