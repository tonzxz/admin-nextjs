import Button from "./button";

const Login: React.FC = () => {
  return (
    <div>
      <form>
        <div className=" mt-10 gap-x-6 gap-y-8 flex flex-col">
          <div className="w-96">
            <label className="block text-sm font-light leading-6 text-white-900">
              Username:
            </label>
            <input
              type="text"
              id="username"
              value="username"
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
              type="password"
              id="password"
              autoComplete="off"
              value="password"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="flex justify-center items-center pb-2 pt-8">
          <Button
            type="submit"
            className=" bg-slate-900 hover:bg-slate-900 text-white font-small py-2 px-5 rounded-3xl"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
