document.addEventListener("DOMContentLoaded", ()=>{
  const form = document.getElementById("myForm");
  
  

  async function sendData(e){
    e.preventDefault();
    let response = await fetch('https://example.com/',{
      method:"POST",
      mode:"no-cors",
      credentials: 'include',
      headers: {
                'Content-Type': "multipart/form-data",
            },
      body: JSON.stringify(form),
    });
  form.reset();
  }


  form.addEventListener('submit', sendData)
  

})
