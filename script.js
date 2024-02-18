/*
    1. Define arrays for possible names.
    2. Define arrays for possible occupations..
    3. Define arrays for an initial array of freelancers.
 */

const names = ["Alice", "Bob", "Carol", "James", "Gordon", "Lisa", "Kviv"];
const occupations = [
  "Writer",
  "Teacher",
  "Programmer",
  "QA",
  "Therapist",
  "Plumber",
  "Doctor"
];
let freelancers = [
  { name: "Alice", occupation: "Writer", startingPrice: 30 },
  { name: "Bob", occupation: "Teacher", startingPrice: 50 },
  { name: "Kviv", occupation: "Doctor", startingPrice: 90 }
];

/*
    1. Write a function to render the initial freelancer data into the table.
*/

function renderFreelancers() {
  const table = document.getElementById("freelancerTable");
  // Clear existing table rows , we need to clear the existing row becuase we dont want repeted rows on forum
  
    table.innerHTML =
      "<tr><th>Name</th><th>Occupation</th><th>Starting Price</th></tr>";

  // Populate table with freelancer data
  freelancers.forEach((freelancer) => {
    const row = table.insertRow();
    row.insertCell(0).textContent = freelancer.name;
    row.insertCell(1).textContent = freelancer.occupation;
    row.insertCell(2).textContent = `$${freelancer.startingPrice}`;
  });
}
/*
    2. Write a function to generate a new random freelancer.
*/

function generateRandomFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const randomStartingPrice = Math.floor(Math.random() * 100) + 1; // Random starting price between 1 and 100

  return {
    name: randomName,
    occupation: randomOccupation,
    startingPrice: randomStartingPrice
  };
}

/*
    4.Write a function to calculate the average starting price
*/
function calculateAverageStartingPrice() {
  const totalStartingPrice = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.startingPrice,
    0
  );
  return freelancers.length > 0 ? totalStartingPrice / freelancers.length : 0;
}
/*
    5. Update the displayed message with the average starting price
*/

function updateAvergeMessage() {
  const averageStartingPrice = calculateAverageStartingPrice();
  const message = document.getElementById("averageMessage");
  message.textContent = `Average Starting Price: $${averageStartingPrice.toFixed(
    2
  )}`;
}

renderFreelancers();

/*
    3. Call the function to generate a new freelancer in an interval.
*/
setInterval(() => {
  const newFreelancer = generateRandomFreelancer();
  freelancers.push(newFreelancer);
  renderFreelancers();
  updateAvergeMessage();
}, 3000);
