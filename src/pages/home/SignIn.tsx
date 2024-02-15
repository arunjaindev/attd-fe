import { useState } from "react";
import { postReq } from "../../services/api";
import Navbar from "../../SharedComponents/Navbar";
import img from "/home/arun/attd-fe/src/assets/bg.png";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
    const info = {
      username: email,
      password: password,
    };
    await postReq("/login", info);
  }

  return (
    <div className="w-100vw h-100vh">
      <Navbar />
      <img src={img} alt="home-bg" className="pt-20 pl-40 w-3/5" />
      <div className="bg-white border-2 w-1/4 h-1/2 rounded-lg absolute top-60 right-60 py-4 px-4">
        <div className="font-medium text-3xl py-2">Sign In to your account</div>
        <form id="form" onSubmit={submitHandler}>
          <div className="pt-4 pb-2">
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

          <div className="pb-2 pt-4">
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

          <div className="pt-6">
            <button
              type="submit"
              className="border rounded-lg text-lg px-8 py-1 bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
