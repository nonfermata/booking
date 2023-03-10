import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import RoomBrief from '../../common/roomBrief/roomBrief';
import Loader from '../../common/loader/loader';
import Pagination from '../../common/pagination/pagination';
import Filters from '../filters';
import { paginate } from '../../../utils/paginate';
import { useRooms } from '../../../hooks/useRooms';
import { getFilters } from '../../../../redux/filtersReducer';
import getFilteredRooms from '../../../utils/getFilteredRooms';
import cross from '../../common/svg/cross';
import classes from './rooms.module.css';

const Rooms = () => {
    const { rooms } = useRooms();
    const filters = useSelector(getFilters());
    const filteredRooms = filters ? getFilteredRooms(rooms, filters) : rooms;
    const filtersTitleStyle =
        rooms.length !== filteredRooms.length
            ? { fontWeight: '500', color: 'var(--orange-color' }
            : {};
    const [currentPage, setCurrentPage] = useState(1);
    const [filtersClass, setFiltersClass] = useState('hidden');
    const handlePageChange = (page) => {
        window.scrollBy(0, -10000);
        setCurrentPage(page);
    };
    const pageSize = 4;
    useEffect(() => {
        setCurrentPage(1);
    }, [filters]);
    if (filteredRooms) {
        const count = filteredRooms.length;
        const roomsCrops = paginate(filteredRooms, currentPage, pageSize);
        const paginationBlock = (
            <Pagination
                count={count}
                pageSize={pageSize}
                currentPage={currentPage}
                pageChange={handlePageChange}
            />
        );
        return (
            <>
                <div className={classes.filtersBlock}>
                    <div
                        className={classes.filtersBlockTitle}
                        onClick={() => setFiltersClass('')}
                        style={filtersTitleStyle}
                    >
                        Фильтры
                    </div>
                    <div className={classes.filtersWrap + ' ' + filtersClass}>
                        <div className={classes.closeFiltersWrap}>
                            <div
                                className={classes.closeFilters}
                                onClick={() => setFiltersClass('hidden')}
                            >
                                {cross}
                            </div>
                        </div>
                        <Filters />
                    </div>
                </div>
                <div className='mainTitle'>Наши номера</div>
                <div className={classes.mobilePagination}>
                    {paginationBlock}
                </div>
                {count > 0 ? (
                    <div className={classes.roomsWrap}>
                        {roomsCrops.map((room) => (
                            <RoomBrief
                                key={room._id}
                                parent='rooms'
                                {...room}
                            />
                        ))}
                    </div>
                ) : (
                    <div className='noContent'>
                        С такими параметрами{' '}
                        <span className='no_wrap'>номеров нет.</span>
                    </div>
                )}
                {paginationBlock}
            </>
        );
    }
    return <Loader />;
};

export default Rooms;
