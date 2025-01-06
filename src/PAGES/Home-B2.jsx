import Aoss from "../LAYOUT/Aoss";

export default function HomeB2() {
  return (
    <>
      <div className="flex flex-col items-center mt-20" data-aos="fade-down" data-aos-duration="1500"><Aoss/>
        <h1 className="lg:text-4xl text-2xl font-bold  ">Featured <br /> Categories</h1>
        <p className="py-4 lg:ml-[-2rem] ml-2">Discover the most <br /> trending products in <br /> Pixio.</p>
      </div>
    </>
  )
}
