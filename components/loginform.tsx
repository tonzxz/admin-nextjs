// components/MyForm.tsx
"use client";
import React from "react";
import { useState } from "react";
import Button from "../components/button";
import { useRouter } from "next/navigation";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("Error: Please try again.");
      return;
    }

    try {
      // const resUserExists = await fetch("api/userExists", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({ email }),
      // });

      // const { user } = await resUserExists.json();

      // if (user) {
      //   setError("User already exists.");
      //   return;
      // }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      if (res.ok) {
        setUsername(""); // Clear username input
        setEmail(""); // Clear email input
        setPassword(""); // Clear password input
        setError("");
        router.push("/pages/login_route");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.error("Error During Registration: ", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mt-10 gap-x-6 gap-y-8 flex flex-col">
          <div>
            <label className="block text-sm font-light leading-6 text-white-900">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-light leading-6 text-white-900"
            >
              Email:
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              autoComplete="off"
              value={email}
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-light leading-6 text-white-900"
            >
              Password:
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              autoComplete="off"
              value={password}
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {error && (
          <div className="bg-red-500 text-white p-4 rounded-xl shadow-md">
            <p className="font-semibold text-sm">{error}</p>
          </div>
        )}
        <div className="flex justify-center items-center pb-5 pt-8 pt">
          <Button
            onSubmit={handleSubmit}
            type="submit"
            className=" bg-slate-900 hover:bg-slate-900 text-white font-small py-2 px-8 rounded-3xl"
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
