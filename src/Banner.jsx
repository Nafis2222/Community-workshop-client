import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
<div className="carousel w-full">
  <div id="slide1" className="carousel-item h-96 relative w-full">
    <img className="md:h-96 bg-black opacity-40 w-full" src="https://i.postimg.cc/nzYGPkc0/images-27.jpg"  />
    <div className="absolute mt-8 md:mt-12 ml-12 md:ml-28">
       <h1 className="bg-green-500 text-center my-2 w-44 md:w-48 text-white mx-1 py-2 px-1 rounded-xl ">The tech repair experts</h1>
       <h1 className="text-2xl md:text-4xl my-2 font-bold">Highly trained & <br /> reliable repair team</h1>
       <p className="md:text-xl my-2 font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Distinctio earum incidunt eligendi quaera qora nad eget dolor</p>
       <Link><button className="btn btn-success my-3">Learn More</button></Link>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
  <div id="slide2" className="carousel-item relative h-96 w-full">
    <img src="https://i.postimg.cc/TP2db251/images-26.jpg" className="md:h-96 bg-black opacity-40 w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <div className="absolute -mt-28 md:-mt-24 ml-10 md:ml-28">
       <h1 className="bg-green-500 text-center my-2 w-44 md:w-48 text-white mx-1 py-2 px-1 rounded-xl ">The tech repair experts</h1>
       <h1 className="text-2xl md:text-4xl my-2 font-bold">Advanced reparing <br /> tools and equipment</h1>
       <p className="md:text-xl my-2 font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Distinctio earum incidunt eligendi quaera qora nad eget dolor</p>
       <Link><button className="btn btn-success my-3">Learn More</button></Link>
    </div>
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item h-96 relative w-full">
    <img src="https://i.postimg.cc/7LJBm02W/download-12.jpg" className="h-96 bg-black opacity-40 w-full"/>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <div className="absolute -mt-28 md:-mt-24 ml-10 md:ml-28">
       <h1 className="bg-green-500 text-center my-2 w-44 md:w-48 text-white mx-1 py-2 px-1 rounded-xl ">The tech repair experts</h1>
       <h1 className="text-2xl md:text-4xl my-2 font-bold">First and efficient repair <br />  for all devices</h1>
       <p className="md:text-xl my-2 font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Distinctio earum incidunt eligendi quaera qora nad eget dolor</p>
       <Link><button className="btn btn-success my-3">Learn More</button></Link>
    </div>
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item h-96 relative w-full">
    <img src="https://i.postimg.cc/524yBSZf/images-28.jpg" className="md:h-96 bg-black opacity-40 w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <div className="absolute -mt-28 md:-mt-24 ml-10 md:ml-28">
       <h1 className="bg-green-500 text-center my-2 w-44 md:w-48 text-white mx-1 py-2 px-1 rounded-xl ">The tech repair experts</h1>
       <h1 className="text-2xl md:text-4xl my-2 font-bold">Advanced reparing <br /> tools and equipment</h1>
       <p className="md:text-xl my-2 font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br /> Distinctio earum incidunt eligendi quaera qora nad eget dolor</p>
       <Link><button className="btn btn-success my-3">Learn More</button></Link>
    </div>
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;