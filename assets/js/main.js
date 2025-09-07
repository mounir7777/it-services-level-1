// Jahr ins Footer
document.getElementById('year')?.textContent = new Date().getFullYear();

// Kontaktformular
const form = document.getElementById('contactForm');
if(form){
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const data = { name: form.name.value, email: form.email.value, message: form.message.value };
    const res = await fetch('/api/contact', {
      method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(data)
    });
    if(res.ok){ window.location.href="/thankyou.html"; }
    else alert("Fehler beim Senden.");
  });
}
