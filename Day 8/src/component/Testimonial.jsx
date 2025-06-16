import { Avatar, Blockquote, Rating, RatingStar } from "flowbite-react";


function Testimonial() {
  return (
    <div class="flex justify-center flex-col items-center bg-[#f1f1f1]">
      <h2 className="text-[45px] font-semibold max-md:text-[34px]">
        Testimonial
      </h2>

      <div class="flex m-[92px] gap-[28px] max-md:flex-col max-md:m-[20px]">
        <figure className="bg-white text-black hover:bg-black hover:text-white p-[22px]">
          <div className="mb-4 flex items-center"></div>
          <Blockquote>
            <p className="text-lg font-medium text-gray-400 dark:text-white">
             “Complete account of the system and
expound the actual Contrary to popular
belief, Lorem Ipsum is not simply 
random text. It has roots”
            </p>
          </Blockquote>
          <figcaption className="mt-6 flex justify-between items-center space-x-6">
            <div className="flex gap-4">
              <Avatar rounded />
              <div className="flex flex-col items-center">
                <cite className="font-medium not-italic ">Bonnie Green</cite>
                <cite className="text-sm not-italic text-gray-500 dark:text-gray-400">
                  CTO at Flowbite
                </cite>
              </div>
            </div>
            <Rating size="md">
              <RatingStar />
              <RatingStar />
              <RatingStar />
              <RatingStar />
              <RatingStar />
            </Rating>
          </figcaption>
        </figure>
        <figure className="bg-white text-black hover:bg-black hover:text-white p-[22px]">
          <div className="mb-4 flex items-center"></div>
          <Blockquote>
            <p className="text-lg font-medium text-gray-400 dark:text-white">
              “Teachings of the great explore of truth, 
the master-builder of human happiness. 
no one rejects,dislikes, or avoids pleasure 
itself, pleasure itself”
            </p>
          </Blockquote>
          <figcaption className="mt-6 flex justify-between items-center space-x-6">
            <div className="flex gap-4">
              <Avatar rounded />
              <div className="flex flex-col items-center">
                <cite className="font-medium not-italic ">Bonnie Green</cite>
                <cite className="text-sm not-italic text-gray-500 dark:text-gray-400">
                  CTO at Flowbite
                </cite>
              </div>
            </div>
            <Rating size="md">
              <RatingStar />
              <RatingStar />
              <RatingStar />
              <RatingStar />
              <RatingStar />
            </Rating>
          </figcaption>
        </figure>
        <figure className="bg-white text-black hover:bg-black hover:text-white p-[22px]">
          <div className="mb-4 flex items-center"></div>
          <Blockquote>
            <p className="text-lg font-medium text-gray-400 dark:text-white">
              “There are many variations of passages
 of Lorem Ipsum available, but the majority
 have suffered alteration in some form,
 by injected humour”
            </p>
          </Blockquote>
          <figcaption className="mt-6 flex justify-between items-center space-x-6">
            <div className="flex gap-4">
              <Avatar rounded />
              <div className="flex flex-col items-center">
                <cite className="font-medium not-italic ">Bonnie Green</cite>
                <cite className="text-sm not-italic text-gray-500 dark:text-gray-400">
                  CTO at Flowbite
                </cite>
              </div>
            </div>
            <Rating size="md">
              <RatingStar />
              <RatingStar />
              <RatingStar />
              <RatingStar />
              <RatingStar />
            </Rating>
          </figcaption>
        </figure>
      </div>
      <div className="flex gap-4 mb-12">
        <button className="h-4 w-12 bg-[#4d2c5e] rounded-4xl"></button>
        <button className="h-4 w-[15px] bg-gray-400 rounded-4xl"></button>
         <button className="h-4 w-[15px] bg-gray-400 rounded-4xl"></button>
          <button className="h-4 w-[15px] bg-gray-400 rounded-4xl"></button>
      </div>
    </div>
  );
}

export default Testimonial;



