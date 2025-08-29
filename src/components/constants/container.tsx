/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    ref?: any
}

const Container: React.FC<ContainerProps> = ({ children, className, ref, ...props }) => {
    return (
        <div
            className={clsx(
                "px-5 xl:px-10 4xl:px-20 py-5 xl:py-10 3xl:py-20",
                className
            )}
            ref={ref}
            {...props}
        >
            {children}
        </div>
    );
};

export default Container;
