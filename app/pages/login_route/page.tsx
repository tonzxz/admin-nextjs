import Login from "@/components/login";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center content-center justify-center p-24">
      <div className="background"></div>
      <div className="bg-white shadow-xl rounded-3xl p-8">
        <h1 className="text-center font-black text-3xl">Login</h1>
        <Login />
      </div>
    </main>
  );
}
