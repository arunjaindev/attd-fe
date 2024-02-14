import { useState } from "react";
import { postReq } from "../../services/api";
import Navbar from "../../SharedComponents/Navbar";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    const info = {
      username: email,
      password: password,
    };
    const response = await postReq("/login", info);

    console.log(response);
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="bg-white border-2 w-1/4 h-1/2 rounded-lg absolute top-60 right-60 py-4 px-4">
        <div className="font-medium text-3xl py-2">Sign In to your account</div>
        <form id="form" onSubmit={submitHandler}>
          <div className="py-2 mt-4">
            <label htmlFor="email" className="text-lg font-medium">
              Your Email
            </label>
            <input
              name="email"
              autoComplete="on"
              id="email"
              value={email}
              type="email"
              className="border rounded-lg py-1 px-2 w-full text-lg mt-2"
              placeholder="john.doe@example.com"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="py-2 mt-4">
            <label htmlFor="password" className="text-lg font-medium">
              Password
            </label>
            <input
              name="password"
              autoComplete="on"
              id="password"
              value={password}
              type="password"
              className="border rounded-lg py-1 px-2 w-full text-lg mt-2"
              placeholder="••••••••"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="mt-6 border rounded-lg text-lg px-8 py-1 bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
