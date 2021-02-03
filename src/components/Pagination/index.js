import React, { useState } from 'react';
import PropTypes, { any } from 'prop-types';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container } from './styles';

export default function Pagination({ pagination }) {
  function getPages() {
    const pages = [1];

    for (let i = 2; i <= pagination.lastPage; i++) {
      pages.push(i);
    }

    return pages;
  }

  const [page, setPage] = useState(1);
  const [pages] = useState(getPages());

  function changePage(value) {
    let newValue = page + value;

    if (newValue <= 0) {
      newValue = 1;
    }

    if (newValue > pages[pages.length - 1]) {
      newValue = page;
    }

    setPage(newValue);
  }

  return (
    <Container>
      <div>
        <MdChevronLeft size={18} onClick={() => changePage(-1)} />
        {pages.map((number, key) => (
          <button
            type="button"
            key={key}
            className={page === number ? 'select' : ''}
            onClick={() => setPage(number)}
          >
            {number}
          </button>
        ))}
        <MdChevronRight size={18} onClick={() => changePage(+1)} />
      </div>
      <div className="limit">
        <span>Exibição por página</span>
        <select>
          <option>20</option>
        </select>
      </div>
    </Container>
  );
}

Pagination.propTypes = {
  pagination: PropTypes.objectOf(any).isRequired,
};
