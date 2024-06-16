import MainNavbar from "../Components/Navbar";

export default function AboutPage() {
  return (
    <>
      <MainNavbar></MainNavbar>
      <div className="flex items-center h-screen w-full justify-center">
        <div className="max-w-xs">
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="/1628795371490.jpeg"
                alt="Ade"
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                Ademola Mohammed
              </h3>
              <div className="text-center text-gray-400 text-xs font-semibold">
                <p>Martech Developer</p>
              </div>
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Skills
                    </td>
                    <td className="px-2 py-2">
                      HTML/CSS, Rest API, JavaScript, Python,BootStrap5, XML
                      (parsing and manipulation), JSON Handling, Agile
                      methodologies (Jira, Trello), VS Code, Database
                      Management, Debugging & Troubleshooting, API Testing
                      (Postman),Adobe Campaign Classic, Braze
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="text-center my-3"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
