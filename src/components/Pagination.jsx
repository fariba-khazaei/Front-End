const Pagination = ({ page, total, onChange }) => {
  return (
    <div className="flex text-lg text-white opacity-80 pb-6 gap-4 justify-center mt-6">
      <button
        className={`${page === 1 ? "opacity-20" : "cursor-pointer"}`}
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        Prev
      </button>
      <span className="underline">
        {page} / {total}
      </span>
      <button
        className={`${page === total ? "opacity-20" : "cursor-pointer"}`}
        disabled={page === total}
        onClick={() => onChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
