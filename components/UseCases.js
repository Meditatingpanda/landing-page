import Example from "./Example";

const UseCases = () => {
    return (
        <div className="min-h-screen bg-gray-200 p-5 sm:p-20 flex flex-col justify-center items-center">
           <header className="text-gray-600 text-5xl text-center body-font">See Frifty in Action</header>
          <Example 
           heading='Experience the future of search 🚀'
        desc='Easy to use widgets right under your search bar.'

          />
          <Example rev={true}
           heading='Without changing your behavior 😄
           '
           desc='Frifty does the heavy lifting so that you enjoy the convenience without changing a thing.'
          />
          <Example
           heading='Or compromising on privacy 🛟
          
           '
           desc=' We don’t collect any emails or IDs. We only capture your search history and your preferences in order to keep making awesome widgets for you. And we don’t even share that with any other third party.'
          />
        </div>
    );
}

export default UseCases;