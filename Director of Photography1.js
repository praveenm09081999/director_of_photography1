function getArtisticPhotographCount(N, C, X, Y) {
    // Write your code here
    let indexA = []
    let indexB = []
    let indexP = []
    let artisticCase = 0
    for(let i=0;i<N;i++){
      if(C[i] === "A") indexA.push(i)
      else if(C[i] === "B") indexB.push(i)
      else if(C[i] === "P") indexP.push(i)
    }
    for (let A in indexA) {
      for (let B in indexB){
        for(let P in indexP){
          if((indexP[P] < indexA[A] && indexA[A] < indexB[B])) {
            if(indexA[A] - indexP[P] >= X && indexA[A] - indexP[P] <= Y && indexB[B] - indexA[A] >= X && indexB[B] - indexA[A] <= Y) artisticCase = artisticCase + 1
        } else if ((indexP[P] > indexA[A] && indexA[A] > indexB[B])){
            if(indexP[P] - indexA[A] >= X && indexP[P] - indexA[A] <= Y && indexA[A] - indexB[B] >= X && indexA[A] - indexB[B] <= Y) artisticCase = artisticCase + 1
        }
        }
      }
    }
    return artisticCase;
  }

  console.log(getArtisticPhotographCount(8,".PBAAP.B",1,3))