

const titles = [
    "The Shawshank Redemption (1994)",
    "The Godfather (1994)",
    "The Dark Knight (2008)",
    "The Godfather: Part II (1974)",
    "The Lord of the Rings: The Return of the King (2003)",
    "Pulp Fiction (1994)",
    "Schindler's List (1993)",
    "12 Angry Men (1957)",
    "Inception (2010)",
    "Fight Club (1999)"
];

let ratings = [
    "9.3",
    "9.2",
    "9.0",
    "9.0",
    "8.9",
    "8.9",
    "8.9",
    "8.9",
    "8.8",
    "8.8",
]

const summaries = [
    "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
    "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
    "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more."
];

const links = [
    "https://www.imdb.com/title/tt0111161/?ref_=adv_li_tt",
    "https://www.imdb.com/title/tt0068646/?ref_=adv_li_tt",
    "https://www.imdb.com/title/tt0468569/?ref_=adv_li_tt",
    "https://www.imdb.com/title/tt0071562/?ref_=adv_li_tt",
    "https://www.imdb.com/title/tt0167260/?ref_=adv_li_tt",
    "https://www.imdb.com/title/tt0110912/?ref_=adv_li_tt",
    "https://www.imdb.com/title/tt0108052/?ref_=adv_li_tt",
    "https://www.imdb.com/title/tt0050083/?ref_=adv_li_tt",
    "https://www.imdb.com/title/tt1375666/?ref_=adv_li_tt",
    "https://www.imdb.com/title/tt0137523/?ref_=adv_li_tt"
];

document.addEventListener('DOMContentLoaded', function () {
      let htmlCode = "";
      for (let i = 0; i < titles.length; i++) {
          htmlCode = 
            `
                <tr>
                <td><a href='${links[i]}'>${titles[i]}</a></td>
                <td>${summaries[i]}</td>
                <td>${ratings[i]}</td>
                </tr>
            `
      }
  
      let tableBody = document.getElementById("tableBody");
      tableBody.innerHTML = htmlCode;
  });
