import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'flex-center shrink-0 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-neutral-25 rounded-full text-sm-medium text-neutral-950 hover:shadow-[0_0_17px_rgba(255,255,255,0.9)]  hover:bg-neutral-25 active:bg-primary-100 transition-all duration-400 ease cursor-pointer',

        secondary:
          'bg-primary-300 rounded-full text-neutral-25 text-sm-medium md:text-md-medium hover:shadow-[0_0_17px_rgba(102,0,235,0.6)] transition-all duration-400 ease cursor-pointer',

        link: 'text-md-medium text-primary-300 hover:underline hover:text-primary-200 active:text-primary-100 transition-colors duration-300  cursor-pointer',
      },
      size: {
        default: 'h-12 px-11.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
