let dataArray = []

async function getData() {
    const url = "data.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      
      const json = await response.json();

      //This gives us an Array we can access outside of this. 
      for(let i = 0; i < json.length; i++){
        dataArray[i] = json[i]
      }
      
      
    } catch (error) {
      console.error(error.message);
    }
  }

  getData()