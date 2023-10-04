async function getAllTodos(){
    await fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
        
        method: "POST",
        body: JSON.stringify([]),
        headers: {
          "Content-Type": "application/json"
        }
      })

    const response = await fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
        method: "GET",
        // body: JSON.stringify(todos),
        headers: {
          "Content-Type": "application/json"
        }
      })
      
      const data = await response.json();
      console.log(data); 
      return data;
}

async function updateTodos(a){
    await fetch('https://assets.breatheco.de/apis/fake/todos/user/alesanchezr', {
        
        method: "PUT",
        // body: JSON.stringify(todoToUpdate),
        body: JSON.stringify(a),
        headers: {
          "Content-Type": "application/json"
        }
    })
}

export{getAllTodos,updateTodos}