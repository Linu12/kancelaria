
  
  <div class="lg:w-full mx-auto p-6  bg-gradient-to-r from-teal-700 from-10% to-cyan-900 to-90% rounded-lg  lg:rounded-none shadow-2xl shadow-teal-900 lg:mb-5 ">
  
  
    <form  class="space-y-4  rounded ">
      <!-- Name Field -->
      <div>
        <label for="name" class="block text-sm font-medium text-white">Imię i Nazwisko</label>
        <input
          id="name"
          type="text"
         
          class="mt-2 p-2 w-full border border-cyan-600 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
          placeholder="Imię i nazwisko"
          required
        />
      </div>
  
      <!-- Email Field -->
      <div>
        <label for="email" class="block text-sm font-medium text-white">Email</label>
        <input
          id="email"
          type="email"
       
          class="mt-2 p-2 w-full border border-cyan-600 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
          placeholder="Email"
          required
        />
      </div>
  
      <!-- Message Field -->
      <div>
        <label for="message" class="block text-sm font-medium text-white">Wiadomość</label>
        <textarea
          id="message"
       
          class="mt-2 p-2 w-full border border-cyan-600 rounded-md shadow-sm focus:ring-teal-500 focus:border-cyan-500"
          placeholder="Twoja wiadomość"
          required
        ></textarea>
      </div>
  
   
  
      <!-- Submit Button -->
      <div>
        <button
          type="submit"
          class="w-full bg-transparent border border-cyan-600 text-white p-2 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
        >
          Wyślij wiadomość
        </button>
      </div>
    </form>
  </div>
  
  <style>
    /* Optional: Custom styling if needed */
  </style>
  