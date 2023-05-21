import React from "react";

interface sortType {
  id: number;
  name: string;
}

const data: sortType[] = [
  {
    id: 1,
    name: "Newest",
  },
  {
    id: 2,
    name: "Oldest",
  },
  {
    id: 3,
    name: "Featured",
  },
];

const SortProducts = () => {
  return (
    <div className="dropdown cursor-pointer">
      <button tabIndex={0} className="m-1 bg-white rounded-lg p-2">
        Sort By: <span className="text-dark_ font-medium">Newest</span>
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-3"
      >
        {data.map((item) => (
          <li key={item.id}>
            <a>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortProducts;
