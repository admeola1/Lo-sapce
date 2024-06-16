import MainNavbar from "../Components/Navbar";

export default function FirstPost() {
  return (
    
    <body className="bg-white">
       <MainNavbar></MainNavbar>
      <div className="container flex flex-col mx-auto bg-white">
        <div className="w-full draggable">
          <div className="container flex flex-col items-center gap-16 mx-auto my-32">
            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                <svg
                  data-name="1-Email"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 38 38">
                  <path d="M29 4H3a3 3 0 0 0-3 3v18a3 3 0 0 0 3 3h26a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.72 2L16 14.77 3.72 6zM30 25a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.23l13.42 9.58a1 1 0 0 0 1.16 0L30 7.23z" />
                </svg>
                <p className="text-2xl font-extrabold text-dark-grey-900">
                  Email
                </p>
                <p className="text-base leading-7 text-dark-grey-600">
                  Email Me
                </p>
                <a
                  className="text-lg font-bold text-purple-blue-500"
                  href="mailto: hello@loopple.com">
                  ademolami@gmail.com
                </a>
              </div>
              <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6">
                    <path
                      fillRule="evenodd"
                      d="M19.5 9.75a.75.75 0 0 1-.75.75h-4.5a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 1 1.5 0v2.69l4.72-4.72a.75.75 0 1 1 1.06 1.06L16.06 9h2.69a.75.75 0 0 1 .75.75Z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <p className="text-2xl font-extrabold text-dark-grey-900">
                  Phone
                </p>
                <p className="text-base leading-7 text-dark-grey-600">
                  Reach out to Me By Phone
                </p>
                <a
                  className="text-lg font-bold text-purple-blue-500"
                  href="tel:+07535691311
                  /////// ">
                  07535691311
                </a>
              </div>
              <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </span>

                <p className="text-base leading-7 text-dark-grey-600">
                  Find me on linkedIn
                </p>
                <a
                  className="text-lg font-bold text-purple-blue-500"
                  target="_blank"
                  href="https://www.linkedin.com/in/1ademolamohammed/">
                  Click Here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 my-5">
        <div className="w-full max-w-full sm:w-3/4 mx-auto text-center">
          <p className="text-sm text-slate-500 py-1">A work In Progress</p>
        </div>
      </div>
    </body>
  );
}
