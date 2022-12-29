import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

export default function Hero() {
    return (
        <section class="text-gray-600 body-font overflow-hidden">
            <div class="container px-2 py-10 mx-auto">
                <div class="lg:w-4/5 mx-36 flex flex-wrap">
                    <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <span className="dark:text-white text-black text-xl font-medium">
                            Hello,
                        </span>
                        <span className="dark:text-[#06C190] text-green-700 text-xl font-medium">
                            &nbsp;&nbsp;I'm
                        </span>
                        <h1 className="dark:text-[#06C190] text-green-700 text-5xl my-2 font-bold font-serif">
                            Punith Raj T
                        </h1>
                        <h1 className="dark:text-white text-black text-2xl font-medium ">
                            Software Engineer And Software Developer
                        </h1>
                        <h1 className="dark:text-white text-sm mr-52 my-6 text-black">
                            I am a committed, diligent software engineer with stong experience in
                            Javascript, Typescript, Node.js, Express.js, MongoDb, and many more
                            technologies.
                        </h1>

                        <button className="dark:text-white dark:font-medium text-black bg-[#06C190] dark:bg-green-500 dark:shadow-lg dark:shadow-green-500/50 rounded-xl px-5 py-3 my-6">
                            Let's Talk
                        </button>
                        <br></br>
                        <div className="dark:text-[#155750] text-5xl flex text-gray-700 justify- gap-3 my-6">
                            <h1 className="dark:text-white text-base my-3">
                                Check Out My&nbsp;&nbsp;
                            </h1>
                            <AiFillFacebook />
                            <AiFillLinkedin />
                            <AiFillInstagram />
                        </div>
                    </div>

                    <div class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded justify-center ">
                        <img
                            src="/main.jpg"
                            width={500}
                            height={500}
                            className="rounded-full justify-center shadow-2xl dark:shadow-cyan-500/50"
                        ></img>
                    </div>
                </div>
            </div>
        </section>
    );
}
