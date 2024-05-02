// class Graph {
//   constructor(){
//     this.adjecentList = {}
//   }

//   addVertex(vertex){
//      if (!this.adjecentList[vertex]) {
//        this.adjecentList[vertex] = new Set()
//      } 
//   }
  
//   addEdges(vertex1 , vertex2){
//     if (!this.adjecentList[vertex1]) {
//        this.addVertex(vertex1)
//     }
//     if (!this.adjecentList[vertex2]) {
//        this.addVertex(vertex2)
//     }

//     this.adjecentList[vertex1].add(vertex2)
//     this.adjecentList[vertex2].add(vertex1)

//   }

//   deleteEdges(vertex1 , vertex2){
//      this.adjecentList[vertex1].delete(vertex2)
//      this.adjecentList[vertex2].delete(vertex1)
    
//   }

//   deletevertex(vertex){
//     if (!this.adjecentList[vertex]) {
//       return null
//     }
//     for(let adjecentVertex in this.adjecentList){
//       this.deleteEdges(vertex ,adjecentVertex )
//     }
//     delete this.adjecentList[vertex]
//   }
  
// dfs(startIndex , visited = {}){
//   if (!this.adjecentList[startIndex]) {
//     return 
//   }
//   console.log(startIndex);
//   visited[startIndex] = true
//   for(let neighbor of this.adjecentList[startIndex]){
//      if (!visited[neighbor]) {
//        this.dfs(neighbor , visited)
//      }
//   }
// }

// bfs(startIndex){
//   const  queue = [startIndex]
//   const visited = {[startIndex] : true}

//   while(queue.length > 0 ){
//     const currentVertex = queue.shift()
//     console.log(currentVertex);

//     for(const neighbor of this.adjecentList[currentVertex]){
//       if (!visited[neighbor]) {
//         visited[neighbor] = true
//         queue.shift(neighbor)
//         }
//       }
//     }
//   }
// }

// const graph = new Graph()

// graph.addEdges("A" , "B")
// graph.addEdges("A" , "B")
// graph.addEdges("A" , "B")

class Graph {
  constructor(){
     this.adjecentList = {}
  }

  addVertex(vertex){
    if (!this.adjecentList[vertex]) {
      this.adjecentList[vertex] = new Set();
    }
  }

  addEdge(vertex1 , vertex2){
    if (!this.adjecentList[vertex1]) {
       this.addVertex(vertex1)
    }
    
    if (!this.adjecentList[vertex2]) {
      this.addVertex(vertex2)
   }

   this.adjecentList[vertex1].add(vertex2);
   this.adjecentList[vertex2].add(vertex1)

  }
  deleteEdge(vertex1 , vertex2){
     this.adjecentList[vertex1].delete(vertex2)
     this.adjecentList[vertex2].delete(vertex1)
  }

  deleteVertex(vertex){
    if (!this.adjecentList[vertex]) {
       return false
    }

    for(let adjecentElemnt in this.adjecentList){
       this.deleteEdge(vertex , adjecentElemnt)
    }

    delete this.adjecentList[vertex];
  }
}
