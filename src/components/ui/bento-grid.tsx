import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-[100%] md:w-[480px] md:lg:grid-cols-4 lg:w-[966px] xl:w-[1280px] lg:grid-cols-8 lg:grid-rows-16 xl:grid-cols-9 xl:grid-rows-8 gap-4 md:gap-8",
        className,
      )}
    >
      {children}
    </div>
  );
};

interface BentoCardProps {
  name: string;
  className: string;
  background: ReactNode;
  Icon?: ReactNode;
  description: string;
  href: string;
  cta: string;
}

interface BentoCardOnlyBGProps {
  className: string;
  background: ReactNode;
  isButton?: boolean;
  href?: string;
}

// interface BentoCardButtonProps {
//   className: string;
//   background: ReactNode;
// }

const BentoCardOnlyBg = ({ className, background, isButton, href }: BentoCardOnlyBGProps) => {  
  if (!href) {
    return (<div 
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    {background}
    {isButton ? <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />:null}
  </div>)
  }
return (<Link 
    href={href}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    {background}
    {isButton ? <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />:null}
  </Link>)
}

const BentoCardNormal = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className,
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      {/* {!!Icon ? <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" /> : null} */}
      {Icon}
      <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-400">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>)

const BentoCard = (props: BentoCardOnlyBGProps | BentoCardProps) => {

  // if (props == typeof BentoCardOnlyBGProps)

  const {
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
    isButton
  } = { name: null, Icon: null, description: null, cta: null, isButton: false, ...props }

  const bgOnly = !name && !Icon && !description && !cta;

  if (bgOnly) {
    return <BentoCardOnlyBg
      className={className}
      background={background}
      isButton={isButton} href={href} />
  }
  return <BentoCardNormal
    name={name} className={className}
    background={background} Icon={Icon} description={description}
    href={href} cta={cta} />

  // if (noBg) {
  //   return (
  //     <div
  //       className={cn(
  //         "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
  //         // light styles
  //         "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
  //         // dark styles
  //         "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
  //         className,
  //       )}
  //     >
  //       <div>{background}</div>
  //       {/* <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" /> */}
  //     </div>
  //   )
  // }

  // return (
  //   <div
  //     key={name}
  //     className={cn(
  //       "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
  //       // light styles
  //       "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
  //       // dark styles
  //       "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
  //       className,
  //     )}
  //   >
  //     <div>{background}</div>
  //     <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
  //       {/* {!!Icon ? <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" /> : null} */}
  //       {Icon}
  //       <h3 className="text-lg font-semibold text-neutral-700 dark:text-neutral-300">
  //         {name}
  //       </h3>
  //       <p className="max-w-lg text-neutral-400">{description}</p>
  //     </div>

  //     <div
  //       className={cn(
  //         "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
  //       )}
  //     >
  //       <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
  //         <a href={href}>
  //           {cta}
  //           <ArrowRightIcon className="ml-2 h-4 w-4" />
  //         </a>
  //       </Button>
  //     </div>
  //     <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  //   </div>)
}

export { BentoCard, BentoGrid };
