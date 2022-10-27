import React from 'react';

const Blog = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <div className="text-start md:text-center">
                        <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">Informative
                            <br className='block md:hidden' /> Daily Blogs</h1>

                        <p className="max-w-lg mx-auto mt-4 text-gray-800 dark:text-slate-400">
                            Visiting this page regularly will help you increase your understating with your own abilities. How many new skills are daily appearing in market? You can find those information on this page. <br />Thanks me later!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8">
                        <div>
                            <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt="CORS" />

                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <div className="font-semibold text-gray-800 dark:text-white md:text-xl">
                                    What is CORS?
                                </div>

                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                    CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API
                                </p>

                                <p className="mt-3 text-sm text-blue-500">27 October 2022</p>
                            </div>
                        </div>
                        <div>
                            <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="firebase" />

                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <div className="font-semibold text-gray-800 dark:text-white md:text-xl">
                                    Why are you using <code className='btn btn-sm btn-warning'>`firebase`?</code>
                                    <br /> What other options do you have to implement authentication?
                                </div>

                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">
                                    Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more...
                                    <h4 className='mt-3 text-sm text-gray-500 dark:text-gray-300'>
                                        Other options of <code>Implementing Authentication</code> are-
                                        <ul>
                                            <ol>1. Supabase</ol>
                                            <ol>2. Kuzzle</ol>
                                            <ol>3. Back4App</ol>
                                        </ul>
                                    </h4>
                                </p>

                                <p className="mt-3 text-sm text-blue-500">27 October 2022</p>
                            </div>
                        </div>
                        <div>
                            <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1459347268516-3ed71100e718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="private" />

                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <div className="font-semibold text-gray-800 dark:text-white md:text-xl">
                                    How does the private route work?
                                </div>

                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                    The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                                </p>

                                <p className="mt-3 text-sm text-blue-500">27 October 2022</p>
                            </div>
                        </div>
                        <div>
                            <img className="relative z-10 object-cover w-full rounded-md h-96" src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="private" />

                            <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900">
                                <div className="font-semibold text-gray-800 dark:text-white md:text-xl">
                                    What is Node? How does Node work?
                                </div>

                                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                    Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021.
                                    <br/> How <code>Node</code> works -
                                    <span className='pt-3'>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.</span>
                                </p>

                                <p className="mt-3 text-sm text-blue-500">27 October 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;