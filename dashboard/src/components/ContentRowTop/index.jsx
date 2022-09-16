import ContentRowMovies from "./ContentRowMovies";
import Genres from "./Genres";
import LastMovie from "./LastMovie";

function ContentRowTop() {
  // atributo label for -> htmlFor
  // class -> className
  // <img src="" alt=""> -> <img src="" alt="" />
  // <hr className="sidebar-divider my-0" > -> <hr className="sidebar-divider my-0" />

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
      </div>

      <ContentRowMovies />

      <div className="row">
        <LastMovie />
        <Genres />
      </div>
    </div>
  );
}

export default ContentRowTop;
