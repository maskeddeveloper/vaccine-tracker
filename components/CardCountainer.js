function CardCountainer(props) {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4 text-center">{props.children}</div>
      </div>
    </section>
  );
}

export default CardCountainer;
