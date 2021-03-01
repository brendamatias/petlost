import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { Container } from './styles';

export default function Pagination({
  page,
  setPage,
  lastPage,
  limit,
  setLimit,
}) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const pagesArray = [1];

    for (let i = 2; i <= lastPage; i += 1) {
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
        <select
          name="limit"
          value={limit}
          onChange={e => {
            setLimit(e.target.value);
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </Container>
  );
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.oneOfType([PropTypes.func]).isRequired,
  lastPage: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  setLimit: PropTypes.oneOfType([PropTypes.func]).isRequired,
};
