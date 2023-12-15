import LoginForm from "../components/loginform";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <main className="flex min-h-screen flex-row items-center content-center justify-center gap-24 p-24">
        <div className="p-8">
          <h1 className="animate-bounce text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-center pb-14">
            Admin Template
          </h1>

          <div className="grid grid-cols-2 gap-10 relative z-0">
            <div>
              <a href="https://tailwindcss.com/" target="_blank">
                <Image
                  src="/tailwind.png"
                  alt="tailwind logo"
                  className="animate-bounce ml-10 logo tailwind"
                  width="125"
                  height="125"
                />
              </a>
            </div>
            <div>
              <a href="https://www.typescriptlang.org/" target="_blank">
                <Image
                  src="/typescript.png"
                  alt="ts logo"
                  color="black"
                  className="animate-bounce ml-11 logo typescript"
                  width="115"
                  height="115"
                />
              </a>
            </div>
            <div className="animate-bounce logo react">
              <a href="https://react.dev" target="_blank">
                <Image
                  src="/react.png"
                  alt="react logo"
                  color="black"
                  className="animate-spin ml-3 logo react"
                  width="175"
                  height="175"
                />
              </a>
            </div>
            <div>
              <a href="https://nextjs.org/" target="_blank">
                <Image
                  src="/next.png"
                  alt="next logo"
                  className="animate-bounce logo next"
                  width="200"
                  height="200"
                />
              </a>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="bg-white rounded-3xl p-10 shadow-2xl w-2/5">
          <h1 className="text-center font-black text-3xl">Register</h1>
          <LoginForm />
        </div>
      </main>
    </section>
  );
}
