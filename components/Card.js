

function Card(props) {
  
  return (
    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
    <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
    {props.children}
      <h2 class="title-font font-medium text-3xl text-gray-900">{props.number}</h2>
      <p class="leading-relaxed">{props.title}</p>
    </div>
  </div>

  
  );
}

export default Card;
