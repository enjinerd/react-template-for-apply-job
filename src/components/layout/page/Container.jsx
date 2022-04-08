import clsx from 'clsx';
import React from 'react';

const Container = React.forwardRef(({ className, children, ...rest }, ref) => {
  const containerStyles = 'w-full sm:max-w-xl mx-auto';
  return (
    <div className={clsx(containerStyles, className)} ref={ref} {...rest}>
      {children}
    </div>
  );
});

export default Container;
