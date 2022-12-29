export default function Header() {
    return (
        <header class="text-black body-font m-4 mx-36 dark:bg-[#21272F] dark:text-white">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="/p.gif" className="w-10 h-10 rounded-full "></img>
                    <span class="ml-3 text-xl hover:text-green-300 dark:text-white">
                        Punith Raj
                    </span>
                </a>
                <nav class="md:ml-auto md:mr-auto flex flex-wrap font-medium items-center text-base justify-center">
                    <a class="mr-5 hover:text-green- dark:text-[#06C190] ">Home</a>
                    <a class="mr-5 hover:text-green-300 drop-shadow-2xl ">Projects</a>
                    <a class="mr-5 hover:text-green-300">Contact</a>
                </nav>
                <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 dark:bg-green-500 dark:shadow-lg dark:shadow-green-500/50">
                    Search
                </button>
            </div>
        </header>
    );
}
