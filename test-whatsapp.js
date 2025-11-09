// Test WhatsApp Integration
// Copy-paste this in browser console to test WhatsApp opening

const testWhatsApp = () => {
  const formData = {
    fullName: 'Test User',
    phone: '9876543210',
    interestedCourses: ['AWS Cloud Training']
  };
  
  const message = `Hi LITC Team! I just submitted a consultation request. My name is ${formData.fullName} and I'm interested in ${formData.interestedCourses.join(', ')}. Please contact me at ${formData.phone}.`;
  
  const whatsappURL = `https://wa.me/918225852734?text=${encodeURIComponent(message)}`;
  
  console.log('Testing WhatsApp URL:', whatsappURL);
  
  // Try opening
  const opened = window.open(whatsappURL, '_blank');
  
  if (opened) {
    console.log('✅ WhatsApp opened successfully');
  } else {
    console.log('❌ WhatsApp blocked by popup blocker');
    console.log('🔗 Manual link:', whatsappURL);
  }
};

// Call this function in console
testWhatsApp();