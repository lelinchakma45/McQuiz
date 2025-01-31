import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    page: string;
}

const Breadcrumbs = ({ page }: HeaderProps) => {
    return (
        <div className="flex items-center justify-center gap-8 pt-20 text-white">
            <Link to="" className="text-white no-underline">
                <div>
                    <p className="text-lg font-medium">Home</p>
                </div>
            </Link>
            <div>
                <i className="bi bi-chevron-right"></i>
            </div>
            <Link to="" className="text-white no-underline">
                <div>
                    <p className="text-lg font-medium">{page}</p>
                </div>
            </Link>
        </div>
    );
};

export default Breadcrumbs;