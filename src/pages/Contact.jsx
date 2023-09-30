import Header from "../components/Header";
import { useState } from "react";

const Contact =()=>{
    const [firstName, setFirstName] =useState (""); 
    const [email, setEmail] =useState ("");
    const [message, setMessage] =useState ("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("First Name:", firstName);
        console.log("Email:", email);
        console.log("Message:", message);
    
        // Reset form fields after submission
        setFirstName("");
        setEmail("");
        setMessage("");
      };
    return(
        <section>
               <Header />
               <div className=" py-8 ">
                <h4 className="font-bold flex  justify-center mx-auto lg:text-3xl text-2xl text-gray-700 mb-4 ">Contact us</h4>
                <p className="font-normal flex  justify-center mx-auto text-base text-gray-300 text-center mb-12">Feel free to reach out to us anytime for any inquiries, feedback, or assistance – we're here to help!</p>
                 <form onSubmit={handleSubmit} className="flex justify-center mx-auto flex-col gap-6 lg:w-[700px]  sm:w-[500px] w-[350px] border-gray-700 ">
                   <div className=" flex flex-row gap-6">
                    <input
                    type="text"
                    placeholder="Your name"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                    className="text-base  flex text-gray-700 w-1/2 h-[45px] px-4 border rounded-sm border-gray-700"
                    
                    />
                    <input
                    type="text"
                    placeholder="Your email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="text-base   text-gray-700 w-1/2 h-[45px] px-4 border rounded-sm border-gray-700"
                    
                    />
                    </div>
                    <div className="w-full h-[250px] mb-8">
                    <label for="message" class="leading-7 text-sm text-gray-600"
                     onChange={(e) => setMessage(e.target.value)}
                     value={message}
                     
                     >Message</label>
                     <textarea id="message" name="message" class="w-full h-[250px]  rounded-sm border border-gray-700    text-base outline-none text-gray-700 py-1 px-3  leading-6 hover:border-2"></textarea>
                     
                    </div>
                    <button  className="leading-7 bg-blue-500 w-full hover:bg-blue-300 px-2 py-4 rounded-sm text-white flex justify-center mx-auto w-1/3 hover:drop-shadow-md hover:transform hover:-translate-y-1  transition-transform duration-300 cursor-pointer">
                        Send
                    </button>
                   
                 </form>
               </div>
        </section>
    )
}
export default Contact;