import React from "react";

class Pagination extends React.Component {
  render() {
    return (
      <ul class="pagination">
        <li class="page-item">
          <span class="page-link">Previous</span>
        </li>
        <li class="page-item">
          <span class="page-link">1</span>
        </li>
        <li class="page-item active" aria-current="page">
          <span class="page-link">
            2<span class="sr-only">(current)</span>
          </span>
        </li>
        <li class="page-item">
          <span class="page-link">3</span>
        </li>
        <li class="page-item">
          <span class="page-link">4</span>
        </li>
        <li class="page-item">
          <span class="page-link">5</span>
        </li>
        <li class="page-item">
          <span class="page-link">Next</span>
        </li>
      </ul>
    );
  }
}

export default Pagination;
