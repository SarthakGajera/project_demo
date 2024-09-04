import React from 'react';
import Img from '../../assets/edulearn.jpg'

const EcoLearn = () => {
  return (
    <section className="py-16 bg-gray-100   bg-cover bg-no-repeat"
    style={{backgroundImage:`url(${Img})`}}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white"></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <article className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4 text-green-600">Climate Change 101</h3>
            <p className="text-gray-600 mb-6">Learn the basics of climate change, its causes, and effects on our planet.</p>
            <a href="https://en.wikipedia.org/wiki/Climate_change" className="text-blue-500 font-semibold hover:text-blue-700">Read More</a>
          </article>
          <article className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4 text-green-600">Sustainable Living Tips</h3>
            <p className="text-gray-600 mb-6">Discover practical tips on how to live a more sustainable and eco-friendly life.</p>
            <a href="https://en.wikipedia.org/wiki/Sustainable_living" className="text-blue-500 font-semibold hover:text-blue-700">Read More</a>
          </article>
          <article className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4 text-green-600">Renewable Energy</h3>
            <p className="text-gray-600 mb-6">Explore the different types of renewable energy and their impact on the environment.</p>
            <a href="https://en.wikipedia.org/wiki/Renewable_energy" className="text-blue-500 font-semibold hover:text-blue-700 mt-11">Read More</a>
          </article>
          <article className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold mb-4 text-green-600">Conservation Efforts</h3>
            <p className="text-gray-600 mb-6">Understand the importance of conservation and how you can contribute.</p>
            <a href="https://en.wikipedia.org/wiki/Conservation" className="text-blue-500 font-semibold hover:text-blue-700">Read More</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default EcoLearn;
