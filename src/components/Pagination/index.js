import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container } from './styles';

export default function Pagination({ page, setPage, lastPage }) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const pagesArray = [];

    for (let i = 1; i <= lastPage; i++) {
      pagesArray.push(i);
    }

    setPages(pagesArray);
  }, [lastPage]);

  return (
    <Container>
      <div>
        <MdChevronLeft size={18} />
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
        <MdChevronRight size={18} />
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
  page: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  setPage: PropTypes.oneOfType([PropTypes.func]).isRequired,
};
