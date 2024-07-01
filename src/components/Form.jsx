import { useState } from "react";
import toast from "react-hot-toast";

function Form() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    messageContent: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const { firstName, lastName, email, messageContent } = formData;

    if (!firstName || !lastName || !email || !messageContent) {
      toast.error("Please fill in all required fields");
      setSubmitted(false);
      return;
    }
    setTimeout(() => {
      setSubmitted(false);

      toast.success("Message sent successfully");
    }, 800);

    // Handle form submission
  };

  return (
    <div className="flex flex-col gap-8 px-6 lg:flex-row lg:mt-16 lg:gap-0">
      <div className="flex flex-col gap-8 lg:w-[80%] lg:justify-between lg:h-1/2">
        <div className="flex flex-col gap-5 pt-8 text-[#20331B] lg:justify-between lg:pt-0 lg:gap-4">
          <h2>Contact Me</h2>
          <h1 className="text-2xl font-bold lg:text-4xl">Get in touch</h1>
          <p className="text-sm leading-6 lg:w-[90%] ">
            Feel free to reach out to me for any web development needs or
            inquiries. Let's collaborate and create something amazing together.
          </p>
        </div>
        <div className="flex flex-col self-start gap-4 text-[#20331B]">
          <h2>Follow me on social</h2>
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/cindy-may-5ab757229/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-linkedin transition duration-200 hover:fill-[#4d5c49]"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
            <a
              href="https://t.me/zCindyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-telegram transition duration-200 hover:fill-[#4d5c49]"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/vincenzommm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                fill="currentColor"
                y="0px"
                width="25"
                height="25"
                className="bi bi-telegram transition duration-200 hover:fill-[#4d5c49]"
                viewBox="0 0 48 48"
              >
                <path d="M 16.5 5 C 10.159 5 5 10.159 5 16.5 L 5 31.5 C 5 37.841 10.159 43 16.5 43 L 31.5 43 C 37.841 43 43 37.841 43 31.5 L 43 16.5 C 43 10.159 37.841 5 31.5 5 L 16.5 5 z M 34 12 C 35.105 12 36 12.895 36 14 C 36 15.104 35.105 16 34 16 C 32.895 16 32 15.104 32 14 C 32 12.895 32.895 12 34 12 z M 24 14 C 29.514 14 34 18.486 34 24 C 34 29.514 29.514 34 24 34 C 18.486 34 14 29.514 14 24 C 14 18.486 18.486 14 24 14 z M 24 17 A 7 7 0 1 0 24 31 A 7 7 0 1 0 24 17 z"></path>
              </svg>
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-github transition duration-200 hover:text-[#4d5c49]"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <form
        className="grid grid-cols-2 gap-3 lg:w-full"
        onSubmit={handleSubmit}
      >
        <input
          className="px-4 py-3 text-sm text-purple-800 placeholder-purple-700 bg-purple-100 rounded-md outline-none"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          className="px-4 py-3 text-sm text-purple-800 placeholder-purple-700 bg-purple-100 rounded-md outline-none"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          className="col-span-2 px-4 py-3 text-sm text-purple-800 placeholder-purple-700 bg-purple-100 rounded-md outline-none md:col-span-1 lg:col-span-1"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          className="col-span-2 px-4 py-3 text-sm text-purple-800 placeholder-purple-700 bg-purple-100 rounded-md outline-none md:col-span-1 lg:col-span-1"
          type="text"
          name="website"
          placeholder="Website"
          value={formData.website}
          onChange={handleChange}
        />
        <textarea
          placeholder="Message"
          className="col-span-2 px-4 py-2 text-sm text-purple-800 placeholder-purple-700 bg-purple-100 rounded-md outline-none lg:h-40"
          name="messageContent"
          cols="30"
          rows="10"
          value={formData.messageContent}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-sky-300 transition duration-300 rounded-[5px] text-blue-600 py-[12px] col-span-2 border hover:bg-transparent hover:text-blue-600 hover:border-blue-600 outline-none flex items-center justify-center flex-row-reverse gap-2"
        >
          {submitted && (
            <svg
              className="w-5 h-5 mr-3 text-blue-600 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          )}
          <span className="font-medium">Submit</span>
        </button>
      </form>
    </div>
  );
}

export default Form;
