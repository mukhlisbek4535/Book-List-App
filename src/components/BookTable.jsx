import React, { useState } from "react";

const BookTable = ({ books }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  if (!books || books.length === 0) {
    return <p className="text-gray-500">No books generated yet.</p>;
  }

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-300 text-sm text-left">
        <thead className="bg-gray-100 text-gray-700 font-semibold">
          <tr>
            <th className="border px-3 py-2">#</th>
            <th className="border px-3 py-2">Title</th>
            <th className="border px-3 py-2">Author</th>
            <th className="border px-3 py-2">Publisher</th>
            <th className="border px-3 py-2">ISBN</th>
            <th className="border px-3 py-2">Likes</th>
            <th className="border px-3 py-2">Reviews</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <React.Fragment key={book.index}>
              <tr
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() =>
                  setExpandedIndex(
                    expandedIndex === book.index ? null : book.index
                  )
                }
              >
                <td className="border px-3 py-2">{book.index}</td>
                <td className="border px-3 py-2">{book.title}</td>
                <td className="border px-3 py-2">{book.author}</td>
                <td className="border px-3 py-2">{book.publisher}</td>
                <td className="border px-3 py-2">{book.isbn}</td>
                <td className="border px-3 py-2">{book.likes}</td>
                <td className="border px-3 py-2">{book.reviews.length}</td>
              </tr>

              {expandedIndex === book.index && (
                <tr>
                  <td
                    colSpan={7}
                    className="bg-gray-50 px-4 py-4 text-sm text-gray-700"
                  >
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center relative">
                        <div className="relative">
                          <img
                            src={book.cover}
                            alt={book.title}
                            className="w-28 h-40 object-cover rounded"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs px-2 py-1 rounded-b">
                            <div className="font-semibold truncate">
                              {book.title}
                            </div>
                            <div className="italic text-[10px] truncate">
                              by {book.author}
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          ❤️ {book.likes} likes
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="mb-3">
                          By <strong className="italic">{book.author}</strong>
                        </h3>
                        <h4 className="font-medium mb-2">Reviews:</h4>
                        {book.reviews.length === 0 ? (
                          <p className="italic text-gray-400">
                            No reviews available.
                          </p>
                        ) : (
                          <ul className="list-disc pl-5 space-y-1">
                            {book.reviews.map((review, i) => (
                              <li key={i}>
                                <strong>{review.text}</strong> <br />
                                {`- ${review.author}`}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
