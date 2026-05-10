"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (password === "mama123") {
      document.cookie = "site_password=mama123; path=/";
      router.push("/");
    } else {
      alert("Incorrect password");
      setPassword("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      
      {/* soft glowing background */}
      <div className="absolute h-72 w-72 rounded-full bg-pink-500/20 blur-3xl animate-pulse top-10 left-10" />
      <div className="absolute h-72 w-72 rounded-full bg-purple-500/20 blur-3xl animate-pulse bottom-10 right-10" />

      {/* card */}
      <div className="relative z-10 w-[90%] max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl shadow-2xl">
        
        <h1 className="text-center text-3xl font-semibold tracking-wide">
          🌸 Memory Garden
        </h1>

        <p className="mt-2 text-center text-sm text-white/60">
          Enter the password to unlock the memories
        </p>

        <input
          type="password"
          placeholder="Enter password..."
          className="mt-6 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:border-pink-400"
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          value={password}
          autoFocus
        />

        <button
          onClick={handleLogin}
          className="mt-5 w-full rounded-lg bg-white text-black py-3 font-medium transition hover:bg-pink-100"
        >
          Enter Garden
        </button>

        <p className="mt-4 text-center text-xs text-white/40">
          A private space of memories 💌
        </p>
      </div>
    </div>
  );
}