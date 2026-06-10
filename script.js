document.addEventListener('DOMContentLoaded',()=>{
  const btn=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav');
  if(btn&&nav){btn.addEventListener('click',()=>nav.classList.toggle('open'));}
  document.querySelectorAll('form[data-static]').forEach(form=>{
    form.addEventListener('submit',(e)=>{
      e.preventDefault();
      alert('ეს არის GitHub Pages-ის საცდელი სტატიკური ვერსია. საბოლოო ფორმას დავუკავშირებთ ელფოსტას ან CMS-ს.');
    });
  });
});
