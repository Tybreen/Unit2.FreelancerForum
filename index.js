const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
  { name: "Tyler", price: 10, occupation: "programmer" },
  { name: "Maddie", price: 38, occupation: "marketing" }
];

const freelancersInSite = [
  { name: "Tyler", price: 10, occupation: "programmer" },
  { name: "Maddie", price: 38, occupation: "marketing" }
];

const findAverage = (array) => {
  const freelancersPrices = array.map((freelancer) => freelancer.price);
  const freelancersTotal = freelancersPrices.reduce((total, next) => total + next);
  return Math.round(freelancersTotal / array.length);
}


const render = () => {

  const freelancersAverage = findAverage(freelancersInSite);

  const averageTag = document.querySelector(`#averagePrice`);
  averageTag.innerText = `The average starting price is ${freelancersAverage}`;


  const nameUL = document.querySelector(`#name > ul`);
  const occupationUL = document.querySelector(`#occupation > ul`);
  const startingPriceUL = document.querySelector(`#startingPrice > ul`);
  
  const freelancerNames = freelancersInSite.map((freelancer) => freelancer.name);
  const freelancerOccupations = freelancersInSite.map((freelancer) => freelancer.occupation);
  const freelancerPrices = freelancersInSite.map((freelancer) => freelancer.price);

  const freelancerNameTags = freelancerNames.map((fName) => {
    const currentElement = document.createElement(`li`);
    currentElement.innerText = fName;
    return currentElement;
  });
  const freelancerOccupationTags = freelancerOccupations.map((fOccupation) => {
    const currentElement = document.createElement(`li`);
    currentElement.innerText = fOccupation;
    return currentElement;
  });
  const freelancerPriceTags = freelancerPrices.map((fPrice) => {
    const currentElement = document.createElement(`li`);
    currentElement.innerText = `$${fPrice}`;
    return currentElement;
  });

  nameUL.replaceChildren(...freelancerNameTags);
  occupationUL.replaceChildren(...freelancerOccupationTags);
  startingPriceUL.replaceChildren(...freelancerPriceTags);

}



const addFreelancer = () => {

  

  let currentFreelancer = freelancers[Math.floor(Math.random() * freelancers.length)];
  let inSiteAlready = freelancersInSite.find((freelancer) => freelancer.name === currentFreelancer.name);

  while(true) {
    if(inSiteAlready === undefined) {
      freelancersInSite.push(currentFreelancer);
      break;
    }
    else {
      currentFreelancer = freelancers[Math.floor(Math.random() * freelancers.length)];
      inSiteAlready = freelancersInSite.find((freelancer) => freelancer.name === currentFreelancer.name);
    }
  }

  if(freelancersInSite.length >= freelancers.length) {
    clearInterval(myInterval);
  }

  render();
}

render();

const myInterval = setInterval(addFreelancer, 5000);
