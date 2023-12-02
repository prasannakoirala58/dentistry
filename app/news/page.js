import React from 'react';

const News = () => {
  return (
    <div className="bg-news-color py-6">
      <div className="max-w-4xl mx-auto my-16">
        {/* <!-- Section for "Latest news and events" --> */}
        <div className="flex items-center justify-between text-center mb-8">
          <h2 className="text-2xl font-medium text-hero-text">Latest news and events</h2>
          <div className="flex justify-between transition transform text-hero-text hover:scale-125  hover:text-cyan-950 cursor-pointer px-2 py-1">
            <span className="text-xs">See all news and events</span>
            <img src="newsArrow.svg" alt="Right Arrow Icon" className="ml-2" />
          </div>
        </div>

        {/* <!-- Three-column grid for news cards --> */}
        <div className="grid grid-cols-3 gap-6">
          {/* <!-- Card 1 --> */}
          <div className="bg-white shadow-md">
            <div className="p-8 leading-15 tracking-wider">
              <p className="text-hero-text text-xs mb-8">NEWS - JAN 1, 2023</p>
              <h3 className="text-base font-medium text-hero-text mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
              <p className="text-hero-text mb-4 text-sm font-medium leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat nisi,
                lobortis eu eros at, egestas sollicitudin ipsum. Orci varius natoque penatibus
                et magnis dis parturient…
              </p>
            </div>
            <img src="image 3.png" alt="News Image" className="object-cover" />
          </div>

          {/* <!-- Card 2 --> */}
          <div className="bg-white shadow-md">
            <div className="p-8 leading-15 tracking-wider">
              <p className="text-hero-text text-xs mb-8">NEWS - JAN 1, 2023</p>
              <h3 className="text-base font-medium text-hero-text mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
              <p className="text-hero-text mb-4 text-sm font-medium leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat nisi,
                lobortis eu eros at, egestas sollicitudin ipsum. Orci varius natoque penatibus
                et magnis dis parturient…
              </p>
            </div>
            <img src="image 3.png" alt="News Image" className="object-cover" />
          </div>

          {/* <!-- Card 3 --> */}
          <div className="bg-white shadow-md">
            <div className="p-8 leading-15 tracking-wider">
              <p className="text-hero-text text-xs mb-8">NEWS - JAN 1, 2023</p>
              <h3 className="text-base font-medium text-hero-text mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
              <p className="text-hero-text mb-4 text-sm font-medium leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla erat nisi,
                lobortis eu eros at, egestas sollicitudin ipsum. Orci varius natoque penatibus
                et magnis dis parturient…
              </p>
            </div>
            <img src="image 3.png" alt="News Image" className="object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
