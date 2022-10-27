import React from 'react';
import classnames from 'classnames';

import { NEXT_TEXT, PREV_TEXT } from '../../constants/pagination';

import { usePagination, DOTS } from '../../hooks/usePagination';

import { Button } from '../Button';
import Image from 'next/image';

const Pagination = props => {
  const {
    onPageChange,
    totalPages,
    siblingCount = 1,
    currentPage,
    className
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalPages,
    siblingCount
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange({ updatedPageNo: currentPage + 1 });
  };

  const onPrevious = () => {
    onPageChange({ updatedPageNo: currentPage - 1 });
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div
      className={classnames('flex justify-center items-center gap-12', className)}
    >
      {
        currentPage !== 1 && (
          <Button className='flex items-center justify-center' onClick={onPrevious} variant='secondary'><div className='rotate-90 transition-transform'><Image src='/images/black_dropdown.png' width='14' height='6' /></div><p className='pl-4'>{ PREV_TEXT }</p></Button>
        )
      }
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <span>...</span>;
        }

        return (
          <span className={classnames({
            'bg-blue-2 text-white-1': pageNumber === currentPage,
            'text-gray-4 border-gray-4 border-1': pageNumber !== currentPage
          }, 'text-16 p-8 desktop:cursor-pointer bg-white-1 flex justify-center items-center rounded-full w-[50px] h-[50px]')} onClick={() => onPageChange({ updatedPageNo: pageNumber })}>{pageNumber}</span>
        );
      })}
      { currentPage !== lastPage && (
        <Button className='flex items-center justify-center' onClick={onNext} variant='secondary'><p className='pr-4'>{ NEXT_TEXT }</p><div className='-rotate-90 transition-transform'><Image src='/images/black_dropdown.png' width='14' height='6' /></div></Button>
      )}
    </div>
  );
};

export default Pagination;
