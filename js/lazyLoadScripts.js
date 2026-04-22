// Script loader utility
const scriptLoader = {
    loadedScripts: new Set(),
    loadingPromises: new Map(),
  
    load(src) {
      // If script is already loaded, return resolved promise
      if (this.loadedScripts.has(src)) {
        return Promise.resolve();
      }
  
      // If script is currently loading, return existing promise
      if (this.loadingPromises.has(src)) {
        return this.loadingPromises.get(src);
      }
  
      // Create new promise for script loading
      const promise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
  
        script.onload = () => {
          this.loadedScripts.add(src);
          this.loadingPromises.delete(src);
          script.dispatchEvent(new CustomEvent('scriptLoaded', { detail: { src } }));
          resolve();
        };
  
        script.onerror = (error) => {
          this.loadingPromises.delete(src);
          reject(new Error(`Failed to load script: ${src}`));
        };
  
        document.body.appendChild(script);
      });
  
      // Store the loading promise
      this.loadingPromises.set(src, promise);
      return promise;
    },
    // Load multiple scripts
    loadMultiple(scripts, options = {}) {
        const {
        parallel = true,     // Load scripts in parallel or series
        stopOnError = false, // Stop loading if one script fails
        timeout = 30000     // Timeout in milliseconds
        } = options;

        // Convert string or array-like to array
        const scriptArray = Array.isArray(scripts) ? scripts : [scripts];

        if (parallel) {
        // Load all scripts in parallel
        return Promise.race([
            Promise.all(
            scriptArray.map(src => 
                this.load(src)
                .catch(error => {
                    if (stopOnError) {
                    throw error;
                    }
                    console.warn(`Failed to load script ${src}:`, error);
                    return null; // Continue with other scripts
                })
            )
            ),
            new Promise((_, reject) => 
            setTimeout(() => reject(new Error('Script loading timeout')), timeout)
            )
        ]);
        } else {
        // Load scripts sequentially
        return scriptArray.reduce(async (promise, src) => {
            try {
            await promise; // Wait for previous script
            return await this.load(src);
            } catch (error) {
            if (stopOnError) {
                throw error;
            }
            console.warn(`Failed to load script ${src}:`, error);
            return promise; // Continue with next script
            }
        }, Promise.resolve());
        }
    }
};

  
  // Function to setup click-triggered script loading
  function setupClickScriptLoader(elementId, scriptSrc, callback) {
    
    const element = document.getElementById(elementId);
    if (!element) {
      console.error(`Element with ID '${elementId}' not found`);
      return;
    }
   
    element.addEventListener('click', async (event) => {
      try {
        // Optional: Disable the element while loading
        element.disabled = true;
        
        // Add loading state if needed
        element.classList.add('loading');
        
        // Load the script
        await scriptLoader.load(scriptSrc);
        
        // Execute callback if provided
        if (callback && typeof callback === 'function') {
          callback();
        }
      } catch (error) {
        console.error('Script loading failed:', error);
      } finally {
        // Remove loading state
        element.classList.remove('loading');
        element.disabled = false;
      }
    });
  }
 

  window.addEventListener("DOMContentLoaded", (event) => {
    // const resources = [
    //     '/assets/scripts/search.min.js',
    //     '/assets/scripts/nav.min.js',
    //   ];
    //   setTimeout(() =>{
        // scriptLoader.loadMultiple(resources, {
        //   parallel: false,
        //   stopOnError: false
        // });
    // },[2000])
  });

  // Example usage:
  /* 
  
    const resources = [
        '/assets/scripts/search.min.js',
        '/assets/scripts/nav.min.js',
    ];
    scriptLoader.loadMultiple(resources, {
        parallel: false,
        stopOnError: false
    });
    
    */
//  setupClickScriptLoader('myButton', '/path/to/script.js', () => {
//    console.log('Script loaded and ready!');
//  });