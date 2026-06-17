import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            console.log("Form Submitted:", formData);
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => {
                setSubmitted(false);
            }, 3000);
        } else {
            alert("Please fill all fields");
        }
    };

    return(
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
                <h1 className="text-4xl font-bold text-center mb-2 text-gray-800 dark:text-white">Contact Us</h1>
                <p className="text-center text-gray-600 dark:text-gray-400 mb-8">We'd love to hear from you!</p>
                
                {submitted && (
                    <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md text-center">
                        Message sent successfully! We'll get back to you soon.
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Name</label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white p-3 rounded-md focus:outline-none focus:border-blue-500 transition" 
                            placeholder="Enter Your Name" 
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white p-3 rounded-md focus:outline-none focus:border-blue-500 transition" 
                            placeholder="Enter Your Email" 
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2">Message</label>
                        <textarea 
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="w-full border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white p-3 rounded-md focus:outline-none focus:border-blue-500 transition" 
                            placeholder="Enter Your Message"
                            rows="4"
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-md transition duration-300 transform hover:scale-105"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;