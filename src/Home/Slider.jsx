const Slider = () => {
    return (
      <section>
        <div className="carousel w-full mt-24">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://fox40.com/wp-content/uploads/sites/13/2022/03/000_best-piano-mat-78056c-2.jpg?w=1280g"
              className="w-full h-96"
            />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src="https://fox40.com/wp-content/uploads/sites/13/2022/03/000_best-piano-mat-78056c-2.jpg?w=1280g"
              className="w-full h-96"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src="https://images.unsplash.com/photo-1601312378427-822b2b41da35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
              className="w-full h-96"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src="https://media.istockphoto.com/id/535020733/photo/keyboard-on-stage.jpg?s=170667a&w=0&k=20&c=Zuh9KK8bkPCxQT8qND55x7tjffyaL7f6IvgnnqirZvI="
              className="w-full h-96"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
           1
          </a>
          <a href="#item2" className="btn btn-xs">
           2
          </a>
          <a href="#item3" className="btn btn-xs">
           3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
        </div>
      </section>
    );
  };
  
  export default Slider;
  