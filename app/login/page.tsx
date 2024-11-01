import Link from "next/link"

export default function Login() {
  return (
    <section className="bg-gradient-to-b from-green-600 to-green-700 min-h-screen grid gap-8 md:grid-cols-2">
      <div className="flex justify-center items-center">
          <h1 className="font-extrabold text-9xl text-left md:mb-40">XPense</h1>
        </div>
      <div>
          <form className="rounded-lg bg-green-900 text-center m-8 mt-4 mb-8 p-4 md:mt-32 xl:mr-32" action="">
            <h1 className="text-2xl text-gray-100 font-bold md:text-4xl">Account Login</h1><hr className="rounded-full bg-gray-100 m-4 md:h-2" />
            <input required placeholder="Username" type="username" className="border-4 border-green-950 rounded-2xl bg-green-900 text-lg text-gray-100 m-4 p-2" /><br />
            <input required placeholder="Password" type="password" className="border-4 border-green-950 rounded-2xl bg-green-900 text-lg text-gray-100 m-4 p-2"/><br />
            <input type="submit" value="LOGIN" className="bg-green-800 rounded-md text-lg text-gray-100 font-bold m-4 w-40 p-2 hover:bg-green-600 transition ease-out duration-500"/><br />
            <Link rel="stylesheet" href="/login/forgotpassword" className="underline text-blue-100"> Forgot password?</Link><hr className="rounded-full bg-gray-100 m-3 md:h-1" />
            <h2 className="text-lg text-gray-100 font-semibold">Don't have an account yet?</h2><br />
            <Link rel="stylesheet" href="/register" className=" bg-blue-900 rounded-full text-xl text-gray-100 font-semibold p-2" >SIGN IN </Link>
          </form>
      </div>
    </section>
  );
}
