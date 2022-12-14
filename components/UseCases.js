import Example from "./Example";
import SecurityIcon from '@mui/icons-material/Security';
const UseCases = () => {
    return (
        <div className="min-h-screen overflow-hidden bg-gray-200 p-5 sm:p-20 flex flex-col justify-center items-center">
           <header className="text-gray-600 text-5xl text-center body-font">See Frifty in Action</header>
          <Example 
           heading='Experience the future of search π'
        desc='Easy to use widgets right under your search bar.'
          url={'/demo.mp4'}

          />
          <Example rev={true}
           heading='Without changing your behavior π
           '
           url={'/demo1.mp4'}
           //desc='Frifty does the heavy lifting so that you enjoy the convenience without changing a thing.'
          />
          <Example
           heading='Or compromising on privacy π€«'
           url={'/demo2.mp4'}
           desc='We donβt collect any emails or IDs. Just your search history and your preferences.'
          />
        </div>
    );
}

export default UseCases;