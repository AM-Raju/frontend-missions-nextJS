import Footer from '@/components/shared/Footer';
import React, { ReactNode } from 'react';

const DashboardLayout = ({children}: {children:ReactNode}) => {
    return (
        <div>
            <div>
                <Footer></Footer>
            </div>
            {children}
        </div>
    );
};

export default DashboardLayout;