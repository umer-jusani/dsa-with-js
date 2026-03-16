export default function debounce(func, wait) {
  let timer = null;

  return function (...args) {
    clearInterval(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

input.addEventListener("keyup", ()=> {
  debounce(()=> {
    const response = await fetchUsers();
  }, 4000)
})
