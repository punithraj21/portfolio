export default function Contact() {
    return (
        <>
            <section class="text-gray-600 dark:bg-[#21272F] body-font relative">
                <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap ">
                    <div class="p-80 bg-white dark:bg-[#21272F] flex flex-col md:ml-auto w-full md:py-8  md:mt-0">
                        <h2 class="text-gray-900 dark:text-white text-lg mb-1 font-medium title-font">
                            Contact
                        </h2>
                        <p class="leading-relaxed mb-5 dark:text-white text-gray-600">
                            Click here to contact me.
                        </p>
                        <div class="relative mb-4">
                            <label
                                for="name"
                                class="leading-7 text-sm dark:text-white text-gray-600"
                            >
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            ></input>
                        </div>
                        <div class="relative mb-4">
                            <label
                                for="email"
                                class="leading-7 text-sm dark:text-white text-gray-600"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            ></input>
                        </div>
                        <div class="relative mb-4">
                            <label
                                for="message"
                                class="leading-7 text-sm dark:text-white text-gray-600"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            ></textarea>
                        </div>
                        <button className="dark:bg-green-500 dark:shadow-lg dark:shadow-green-500/50 transition delay-150 duration-300 ease-in-out text-black bg-[#06C190] rounded-xl px- py-3 my-6 w-32 justify-center">
                            Send Message
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
