import React, { useEffect, useState, useRef, useCallback } from "react";
import Controls from "../components/Controls";
import BookTable from "../components/BookTable";
import { generateBooks } from "../lib/generateBooks";

const BookGeneratorPage = () => {
  const [region, setRegion] = useState("en");
  const [seed, setSeed] = useState(42);
  const [avgLikes, setAvgLikes] = useState(3.7);
  const [avgReviews, setAvgReviews] = useState(4.7);
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef(null);

  const handleRandomSeed = () => {
    const randomSeed = Math.floor(Math.random() * 1000000);
    setSeed(randomSeed);
    setCurrentPage(1);
    setBooks([]);
  };

  const loadBooks = useCallback(() => {
    const newBooks = generateBooks({
      seed,
      page: currentPage,
      region,
      avgLikes,
      avgReviews,
      count: currentPage === 1 ? 20 : 10,
    });

    if (newBooks.length === 0) {
      setHasMore(false);
    }

    setBooks((prevBooks) =>
      currentPage === 1 ? newBooks : [...prevBooks, ...newBooks]
    );
  }, [seed, region, avgLikes, avgReviews, currentPage]);

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [books, hasMore]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">📚 Book Data Generator</h2>

      <Controls
        region={region}
        setRegion={setRegion}
        seed={seed}
        setSeed={setSeed}
        onRandomizeSeed={handleRandomSeed}
        avgLikes={avgLikes}
        setAvgLikes={setAvgLikes}
        avgReviews={avgReviews}
        setAvgReviews={setAvgReviews}
      />

      <BookTable books={books} />
      {hasMore && (
        <div
          ref={observerRef}
          className="w-full text-center py-4 text-gray-500"
        >
          Loading more books...
        </div>
      )}
    </div>
  );
};

export default BookGeneratorPage;
