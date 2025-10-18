// header-simple.js
Function createMotorRepairHeader() {
  Const header = document.createElement(‘header’);
  Header.className = ‘bg-white shadow-md sticky top-0 z-50’;
  
  Header.innerHTML = `
    <div class=”container mx-auto px-4”>
      <div class=”flex items-center justify-between h-16”>
        <a href=”/” class=”text-xl font-bold text-brand-primary”>MotorPro</a>
        
        <nav class=”hidden md:flex space-x-8”>
          <a href=”/” class=”text-gray-700 hover:text-brand-orange font-medium”>Home</a>
          <a href=”/services” class=”text-gray-700 hover:text-brand-orange font-medium”>Services</a>
          <a href=”/why-choose-us” class=”text-gray-700 hover:text-brand-orange font-medium”>Why Choose Us</a>
        </nav>
        
        <div class=”hidden md:block”>
          <button class=”bg-brand-orange hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition duration-200”>
            Book Repair
          </button>
        </div>
        
        <div class=”md:hidden”>
          <button class=”text-gray-700 font-medium mobile-menu-btn”>Menu</button>
        </div>
      </div>
    </div>
  `;

  Return header;
}

