import Head from "next/head";
import { useUser } from "@clerk/nextjs";
import { SignInButton, SignOutButton } from "@clerk/nextjs";

import { api } from "@/utils/api";

import DidgYaListItem from "@/components/DidgYaListItem";

export default function Home() {
  const user = useUser();

  const { data } = api.didgya.getAll.useQuery();
  console.log("🚀 ~ Home ~ data:", data)

  return (
    <>
      <Head>
        <title>DidgYa</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            <span className="text-primary-light dark:text-primary-dark">Didg</span><span className="text-supporting-light dark:text-supporting-dark">Ya</span>
          </h1>
          <div className="tracking-tight max-w-lg text-center text-xl">
            Did you do it? Did you experience it? 
            <span className="font-bold mx-1.5">
            <span className="text-primary-light dark:text-primary-dark">Didg</span><span className="text-supporting-light dark:text-supporting-dark">Ya</span>
            </span>
            is an app designed to simplify the way you track various things that happen in your life.
          </div>
          <div className="bg-primary-light dark:bg-primary-dark text-text-dark dark:text-text-dark rounded-lg shadow-2xl px-4 py-2 font-bold text-2xl hover:bg-primary-light/60 hover:dark:bg-primary-dark/60 cursor-pointer">
            {!user.isSignedIn && <SignInButton/>}
            {!!user.isSignedIn && <SignOutButton/>}
          </div>
          <div className="flex flex-col items-center justify-start w-full h-fit gap-1">
            {data?.map((didgya) => (
              <DidgYaListItem 
              key={didgya.id}
              {...didgya} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
