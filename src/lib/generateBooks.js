import { fakerEN, fakerFR, fakerDE } from "@faker-js/faker";
import seedrandom from "seedrandom";
import { bookTitles, reviewTexts } from "./booksData";

export function generateBooks({
  seed,
  page = 1,
  region = "en",
  avgLikes = 3.5,
  avgReviews = 2.5,
  count = 20,
}) {
  const combinedSeed = `${seed}-${page}`;
  const rng = seedrandom(combinedSeed);

  const localeMap = {
    en: fakerEN,
    fr: fakerFR,
    de: fakerDE,
  };

  const faker = localeMap[region] || fakerEN;

  const books = [];

  const baseIndex = page === 1 ? 0 : 20 + (page - 2) * 10;

  for (let i = 0; i < count; i++) {
    const index = baseIndex + i + 1;

    const titles = bookTitles[region] || bookTitles["en"];
    const title = titles[Math.floor(rng() * titles.length)];

    const author = `${faker.person.firstName()} ${faker.person.lastName()}`;
    const publisher = faker.company.name();
    const isbn = faker.number
      .int({ min: 1000000000000, max: 9999999999999 })
      .toString();

    const likes = Math.round(avgLikes + rng() * 2);

    const reviewCount =
      rng() < avgReviews - Math.floor(avgReviews)
        ? Math.ceil(avgReviews)
        : Math.floor(avgReviews);
    const reviews = Array.from({ length: reviewCount }, () => ({
      author: `${faker.person.firstName()} ${faker.person.lastName()}`,
      text: (reviewTexts[region] || reviewTexts["en"])[
        Math.floor(rng() * (reviewTexts[region] || reviewTexts["en"]).length)
      ],
    }));

    books.push({
      index,
      title,
      author,
      publisher,
      isbn,
      likes,
      reviews,
      cover: `https://picsum.photos/seed/${seed}-${page}-${i}/200/300`,
    });
  }

  return books;
}
