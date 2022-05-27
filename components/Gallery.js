import Image from "next/image";

export default function Gallery() {
  return (
    <section id="Gallery" className="w-full">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full p-1 lg:w-1/2">
          <Image
            src="/b-entrance3.jpg"
            alt="photo of front entrance"
            height={583}
            width={900}
            layout="responsive"
          />
        </div>
        <div className="w-full p-1 pt-0 lg:pt-1 lg:w-1/2">
          <Image
            src="/b-shed2.jpg"
            alt="photo of shed"
            height={583}
            width={900}
            layout="responsive"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full p-1 pt-0 lg:w-1/2 lg:pt-1">
          <Image
            src="/b-walkway2.jpg"
            alt="photo of front entrance"
            height={583}
            width={900}
            layout="responsive"
          />
        </div>
        <div className="w-full p-1 pt-0 lg:pt-1 lg:w-1/2">
          <Image
            src="/b-firepit2.jpg"
            alt="photo of shed"
            height={583}
            width={900}
            layout="responsive"
          />
        </div>
      </div>
    </section>
  );
}
