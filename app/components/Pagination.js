import React from 'react';
import Button from './Button';

const Pagination = ({totalPages, limit, prevPage, nextPage, page, sort}) => {

  return (
    <>
        {totalPages > 1 ?
            <div className='flex justify-center items-center gap-4'>
                {
                page > 1 ? 
                <a href={`?limit=${limit}&page=${prevPage}&sort=${sort}`}>
                    <Button>
                    Anterior
                    </Button>
                </a> : totalPages === 1 ? "" : (
                <div className='opacity-50'>
                <Button>
                    Anterior
                </Button>
                </div>)
                }
                {
                page < totalPages ? 
                <a href={`?limit=${limit}&page=${nextPage}&sort=${sort}`}>
                    <Button>
                    Siguiente
                    </Button>
                </a> : totalPages === 1 ? "" : (
                <div className='opacity-50'>
                    <Button>
                    Siguiente
                    </Button>
                </div>
                )
                }
            </div>
        : "" }
    </>
  )
}; export default Pagination;