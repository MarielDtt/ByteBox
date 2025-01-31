/* eslint-disable @next/next/no-img-element */
export function CircleComponent() {
    return (
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 justify-center"> 
    
        <div className="text-center">
          <div className="bg-div h-44 w-44 rounded-full flex items-center justify-center mx-auto"> 
       
            <img 
              src="./Notebook.png" 
              alt="Notebook" 
              className="w-28 sm:w-36 object-contain" 
              /> 
          </div>
          <button 
            className="mt-4 text-sm font-semibold text-neutral-950"> 
            Computadoras
          </button>
        </div>
  
     
        <div className="text-center">
          <div className="bg-div h-44 w-44 rounded-full flex items-center justify-center mx-auto">
            <img 
              src="./Celulares.png" 
              alt="Celulares" 
              className="w-28 sm:w-36 object-contain" 
              /> 
          </div>
          <button 
            className="mt-4 text-sm font-semibold text-neutral-950"> 
            Celulares
          </button>
        </div>
  
  
        <div className="text-center">
          <div className="bg-div h-44 w-44 rounded-full flex items-center justify-center mx-auto">
            <img 
              src="./Relojes.png" 
              alt="Relojes" 
              className="w-28 sm:w-36 object-contain" 
              /> 
          </div>
          <button 
            className="mt-4 text-sm font-semibold text-neutral-950"> 
            Relojes Inteligentes
          </button>
        </div>
  
 
        <div className="text-center">
          <div className="bg-div h-44 w-44 rounded-full flex items-center justify-center mx-auto">
            <img 
              src="./Accesorios.png" 
              alt="Accesorios" 
              className="w-28 sm:w-36 object-contain" 
              />
          </div>
          <button 
            className="mt-4 text-sm font-semibold text-neutral-950"> 
            Accesorios
          </button>
        </div>
      </div>
    );
  }
  