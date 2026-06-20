import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/userContext";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

class About extends Component {
    constructor(props) {
        super(props);
        console.log("parent constructor");
        this.state = {
            profileData: {
                name: "Balamurugan N",
                title: "React Developer | Full Stack Enthusiast",
                location: "Sivakasi, India",
                email: "balamurugan@example.com",
                bio: "Passionate about building scalable web applications with modern technologies. Currently learning React, Redux, and building projects with Namaste React.",
                github: "https://github.com/balamurugan-fullstack",
                linkedin: "https://linkedin.com/in/balamurugan",
                twitter: "https://twitter.com/bala2023dev",
                skills: ["React", "Redux", "Tailwind CSS", "JavaScript", "REST APIs", "Testing", "Git"],
                experience: [
                    {
                        title: "React Development",
                        description: "Building dynamic web applications with React, Redux, and modern CSS frameworks"
                    },
                    {
                        title: "Full Stack Learning",
                        description: "Learning complete web development stack including frontend and backend technologies"
                    },
                    {
                        title: "Problem Solving",
                        description: "Strong focus on writing clean, efficient, and maintainable code"
                    }
                ]
            }
        };
    }

    componentDidMount() {
        console.log("parent componentDidMount ");
    }

    componentDidUpdate() {
        console.log("parent component did update");
    }

    componentWillUnmount() {
        console.log("parent is unmounted");
    }

    render() {
        console.log("parent render");
        const { profileData } = this.state;
        const profileImage = "https://avatars.githubusercontent.com/u/183606553?s=400&u=538bc68b6443c1d1711208ba7915bea16098c15b&v=4";

        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
                {/* Header Section with Profile Card */}
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden mb-8">
                        {/* Cover Banner */}
                        <div className="h-32 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"></div>

                        {/* Profile Section */}
                        <div className="px-6 md:px-12 pb-8">
                            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 -mt-16 mb-6">
                                {/* Profile Picture */}
                                <div className="flex-shrink-0">
                                    <img
                                        src={profileImage}
                                        alt={profileData.name}
                                        className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg object-cover"
                                    />
                                </div>

                                {/* Profile Info */}
                                <div className="flex-1 pt-4">
                                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-2">
                                        {profileData.name}
                                    </h1>
                                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-3 font-semibold">
                                        {profileData.title}
                                    </p>
                                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4">
                                        <FaMapMarkerAlt />
                                        <span>{profileData.location}</span>
                                    </div>

                                    {/* Social Links */}
                                    <div className="flex gap-4 flex-wrap">
                                        <a
                                            href={profileData.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition duration-300"
                                        >
                                            <FaGithub size={18} />
                                            GitHub
                                        </a>
                                        <a
                                            href={profileData.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition duration-300"
                                        >
                                            <FaLinkedin size={18} />
                                            LinkedIn
                                        </a>
                                        <a
                                            href={`mailto:${profileData.email}`}
                                            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-300"
                                        >
                                            <FaEnvelope size={18} />
                                            Email
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Bio Section */}
                            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                                <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                                    {profileData.bio}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Logged In User Context */}
                    <UserContext.Consumer>
                        {({ loggedInUser }) => (
                            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
                                <p className="text-gray-600 dark:text-gray-400 mb-2">Currently Logged In:</p>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                                    {loggedInUser || "Guest User"}
                                </h2>
                            </div>
                        )}
                    </UserContext.Consumer>

                    {/* Skills Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Technical Skills</h2>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {profileData.skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-gray-700 dark:to-gray-600 px-6 py-3 rounded-lg text-center font-semibold text-gray-800 dark:text-white hover:shadow-lg transition duration-300 transform hover:scale-105"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">What I Do</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {profileData.experience.map((exp, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg p-6 hover:shadow-lg transition duration-300"
                                >
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                                        {exp.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Footer Info */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-500 dark:text-gray-400">
                            Learning and Building with ❤️ | Built with React & Node JS
                        </p>
                    </div>
                </div>

                {/* Original Components Section */}
                <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Learning Components</h2>
                        
                        {/* User Components */}
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Class & Functional Components</h3>
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Functional Component */}
                                <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6">
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Functional Component:</h4>
                                    <User name={"Balamurugan"} location={"Sivakasi"} />
                                </div>

                                {/* Class Component */}
                                <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-6">
                                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Class Component:</h4>
                                    <UserClass name={"Balamurugan class"} location={"Sivakasi class"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// const About = () => {
//     return (
//         <div>
//             <h1>This is my About component</h1>
//             <p>This my learning charge of react using namaste react</p>

//             {/* <User name={"Balamurugan"} location={"Sivakasi"} /> */}
//             <UserClass name={"Balamurugan class"} location={"Sivakasi class"} />
//         </div>
//     )
// };

export default About;