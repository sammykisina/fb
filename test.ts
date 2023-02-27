import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   {isAuthenticated ? (
        <main className="flex h-full flex-col rounded-[2rem]">
          {/* the post creation initializer */}
          <PostCreate />

          {/* posts */}
          <div className="h-[40rem] w-full  overflow-y-scroll border-t-0  scrollbar-hide">
            {isFetchingAllPosts ? (
              <div className="flex h-full items-center justify-center">
                <SpinnerLoader color="fill-orange" />
              </div>
            ) : posts?.length > 0 ? (
              <div className="flex flex-col items-center justify-center gap-3 py-3 px-2 md:px-16">
                {posts?.map((post: PostType, postIndex: number) => (
                  <Post key={postIndex} post={post} />
                ))}
              </div>
            ) : (
              <div className="flex h-full items-center justify-center">
                <span>No Posts Yet.</span>
              </div>
            )}
          </div>
        </main>
      ) : (
        <section className="flex h-full flex-col items-center justify-center rounded-[2rem] border  border-primary/10 px-2">
          <Logo logoStyles="text-[3rem]" dotStyles="w-2 h-2 bg-orange" />

          <div className="mt-5 flex flex-col gap-2">
            <p className="text-center text-2xl font-semibold">
              Find New Friends <br /> With FB3!
            </p>

            <p className="text-center text-lg text-primary/50">
              With FB3 you will find new friends <br /> from various countries
              and regions <br /> for free and with ease.
            </p>
          </div>

          <div className="mt-16 w-full xs:w-fit">
            <NavLink
              route={{ to: "/auth/login", name: "Get Started" }}
              fullWidth={true}
              type="large"
              active="activeLink"
            />
          </div>
        </section>
      )}
  )
}

export default App
