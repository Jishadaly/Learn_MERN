class Graph {
   constructor() {
      this.adjecentList = {}
   }

   addVertex(vertex) {
      if (!this.adjecentList[vertex]) {
         this.adjecentList[vertex] = new Set()
      }
   }

   addEdges(vertex1, vertex2) {
      if (!this.adjecentList[vertex1]) {
         this.addVertex(vertex1)
      }
      if (!this.adjecentList[vertex2]) {
         this.addVertex(vertex2)
      }
      this.adjecentList[vertex1].add(vertex2)
      this.adjecentList[vertex2].add(vertex1)
   }

   removeEdges() {
      this.adjecentList[vertex1].delete(vertex2)
      this.adjecentList[vertex2].delete(vertex1)
   }

   deleteVertex(vertex) {
      if (!this.adjecentList[vertex]) {
         return null
      }

      for (let adjucentVertex in this.adjecentList[vertex]) {
         this.removeEdges(adjucentVertex, vertex)
      }
      delete this.adjecentList[vertex]
   }

   dfs(startVertex, visited = {}) {
      if (!this.adjecentList[startVertex]) {
         return
      }

      console.log(startVertex)
      visited[startVertex] = true

      for (let neighbor of this.adjecentList[startVertex]) {

         if (!visited[neighbor]) {
            this.dfs(neighbor, visited)
         }
      }
   }

   bfs(startVertex) {
      const queue = [startVertex]
      const visited = { [startVertex]: true }


      while (queue.length) {
         let curr = queue.shift()
         console.log(curr)

         for (let neighbor of this.adjecentList[curr]) {
            if (!visited[neighbor]) {
               visited[neighbor] = true;
               queue.push(neighbor)
            }
         }
      }
   }

}

const graph = new Graph()
graph.addEdges("A", "B")
graph.addEdges("A", "B")
graph.addEdges("A", "B")
graph.dfs('B')
graph.bfs('A')