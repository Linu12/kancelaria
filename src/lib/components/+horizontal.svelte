<script>
    let items = [
      { text: 'Adres', icon: '/icons/location.png' },
      { text: 'Telefon', icon: '/icons/phone-call.png' },
      { text: 'E:mail', icon: '/icons/email.png' },
      { text: 'E:mail', icon: '/icons/email.png' },
      { text: 'E:mail', icon: '/icons/email.png' },
    ];
  </script>
  
  <div class="overflow-x-auto whitespace-nowrap scroll-smooth sm:hidden ">
    <div class="flex gap-7 px-4 font-light uppercase">
      {#each items as item}
        <div class="inline-block  shadow-lg shadow-cyan-500/50 text-cyan-900  rounded-md p-4 min-w-[120px] text-center border-solid border border-cyan-800">
          <img src={item.icon} alt={item.text} class="w-5 h-5 mx-auto mb-2 " />
          {item.text}
        </div>
      {/each}
    </div>
  </div>
  