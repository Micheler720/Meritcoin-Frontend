import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { TableStyle, Pagination, LimitePerPage, TableFilter } from './styles';

interface TableProps {
  limitPerPage?: number;
  totalItens?: number;
  filterPlaceholder?: string;
  handleFilterTable?(filter: string): void;
}

const Table: React.FC<TableProps> = ({
  limitPerPage,
  totalItens,
  children,
  filterPlaceholder,
  handleFilterTable,
}) => {
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pages, setPages] = useState<number[] | never>([]);
  const totalPages = useMemo(() => {
    if (totalItens && limitPerPage) {
      return Math.ceil(totalItens / limitPerPage);
    }
    return 0;
  }, [totalItens, limitPerPage]);

  useEffect(() => {
    if (totalItens && limitPerPage) {
      const arrayPages = [];
      let i = 1;
      while (i <= totalPages) {
        arrayPages.push(i);
        i += 1;
      }
      setPages(arrayPages);
    }
  }, [limitPerPage, totalItens, totalPages]);

  const handleNextPage = useCallback(() => {
    if (pageCurrent < totalPages) {
      setPageCurrent(state => state + 1);
    }
  }, [pageCurrent, totalPages]);

  const handlePreviousPage = useCallback(() => {
    if (pageCurrent > 1) {
      setPageCurrent(state => state - 1);
    }
  }, [pageCurrent]);

  return (
    <>
      <TableFilter>
        {limitPerPage && (
          <LimitePerPage>
            <option>10</option>
            <option>20</option>
            <option>30</option>
            <option>50</option>
          </LimitePerPage>
        )}
        {filterPlaceholder && handleFilterTable && (
          <div>
            <FaSearch size={20} />
            <input
              type="text"
              name="FilterTable"
              placeholder={filterPlaceholder}
              onChange={e => {
                handleFilterTable(e.target.value);
              }}
            />
          </div>
        )}
      </TableFilter>
      <TableStyle>{children}</TableStyle>
      {limitPerPage && totalItens && (
        <Pagination>
          <strong>
            Qtd:
            {totalItens}
          </strong>
          <br />
          <div>
            <button type="button" onClick={handlePreviousPage}>
              <MdNavigateBefore size={25} />
            </button>
            {pages.map(page => (
              <button
                type="button"
                key={page}
                onClick={() => setPageCurrent(page)}
                className={pageCurrent === page ? 'pageCurrent' : ''}
              >
                {page}
              </button>
            ))}
            <button type="button" onClick={handleNextPage}>
              <MdNavigateNext size={25} />
            </button>
          </div>
        </Pagination>
      )}
    </>
  );
};

export default Table;
