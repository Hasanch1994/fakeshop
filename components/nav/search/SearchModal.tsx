import Image from "next/image";

const SearchModal = () => {
  return (
    <>
      <label htmlFor="search-modal" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </label>

      <input type="checkbox" id="search-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box space-y-5 ">
          <div className="flex flex-col">
            <div className="relative p-3">
              <form>
                <input
                  autoFocus
                  type="text"
                  placeholder="search here"
                  className="input input-bordered absolute left-0 top-1/2 -translate-y-1/2 w-4/5"
                />
              </form>
              <label
                htmlFor="search-modal"
                className="btn btn-circle btn-sm bg-transparent border-none text-dark_ iconHover absolute right-0 top-1/2 -translate-y-1/2"
              >
                ✕
              </label>
            </div>

            <div className="divider"></div>

            <div className="space-y-3">
              <h3>Recent</h3>
              <ul>
                <li className="searchItemStyle">
                  <Image
                    alt="document"
                    src={"icons/document.svg"}
                    width={18}
                    height={18}
                  />
                  Samsung 4k 55 1390Model
                </li>
                <li className="searchItemStyle">
                  <Image
                    alt="document"
                    src={"icons/document.svg"}
                    width={18}
                    height={18}
                  />
                  Samsung 4k 55 1390Model
                </li>{" "}
                <li className="searchItemStyle">
                  <Image
                    alt="document"
                    src={"icons/document.svg"}
                    width={18}
                    height={18}
                  />
                  Samsung 4k 55 1390Model
                </li>{" "}
                <li className="searchItemStyle">
                  <Image
                    alt="document"
                    src={"icons/document.svg"}
                    width={18}
                    height={18}
                  />
                  Samsung 4k 55 1390Model
                </li>{" "}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
