import Image from "next/image";
import React from "react";

const SignInPage = () => {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 bg-gray-400 p-8 rounded-xl shadow-lg mx-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcom to the JobBoard
          </h2>
          <p className="text-gray-100">
            Sign in to post jobs or apply for opportunities
          </p>
        </div>

        <div className="mt-8">
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-gray-200 hover:bg-gray-300 transition-colors duration-200 cursor-pointer">
            <Image src={"/github.png"} alt="github" width={20} height={20} />
            <span className="text-base font-medium">Continue with Github</span>
          </button>
        </div>

        <div className="mt-6 text-center text-sm text-gray-300">
          By signing in, you agree to our
          <a href="#" className="text-indigo-600 hover:text-indigo-500"> Terms of Service </a>
          and <a href="#" className="text-indigo-600 hover:text-indigo-500"> Privacy Policy </a>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
