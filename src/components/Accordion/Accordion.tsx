"use client";
import * as React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import Typography from "../Typography";
import Badge from "../Badge/Badge";

interface AccordionDemoProps {
  title: string;
}
const AccordionDemo: React.FC<AccordionDemoProps> = ({ title }) => (
  <div className="flex flex-col justify-center items-center">
    <Badge label="what do you want to know?" variant="pink" />
    <Typography
      as="h4"
      variant="h4"
      className="mt-3 mb-10 max-w-lg text-center"
    >
      {title}
    </Typography>
    <Accordion.Root
      className=" w-[450px] flex flex-col gap-6"
      type="single"
      collapsible
    >
      <AccordionItem
        value="item-1"
        className="rounded-lg border-2 border-black shadow-[0px_4px_0px_0px_#050505]"
      >
        <Typography as="span" variant="labelL">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
        </Typography>
        <div>
          <AccordionContent className="bg-yellow-light p-1 ">
            Yes. It adheres to the WAI-ARIA design pattern.Yes. It adheres to
            the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design
            pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It
            adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </div>
      </AccordionItem>

      <AccordionItem
        value="item-2"
        className="rounded-lg border-2 border-black shadow-[0px_4px_0px_0px_#050505]"
      >
        <Typography as="span" variant="labelL">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
        </Typography>
        <div>
          <AccordionContent className="bg-yellow-light p-1 ">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </div>
      </AccordionItem>

      <AccordionItem
        value="item-3"
        className="rounded-lg border-2 border-black shadow-[0px_4px_0px_0px_#050505]"
      >
        <Typography as="span" variant="labelL">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
        </Typography>
        <div>
          <AccordionContent className="bg-yellow-light p-1 ">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </div>
      </AccordionItem>
      <AccordionItem
        value="item-4"
        className="rounded-lg border-2 border-black shadow-[0px_4px_0px_0px_#050505]"
      >
        <Typography as="span" variant="labelL">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
        </Typography>
        <div>
          <AccordionContent className="bg-yellow-light p-1 ">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </div>
      </AccordionItem>
      <AccordionItem
        value="item-5"
        className="rounded-lg border-2 border-black shadow-[0px_4px_0px_0px_#050505]"
      >
        <Typography as="span" variant="labelL">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
        </Typography>
        <div>
          <AccordionContent className="bg-yellow-light p-1 ">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </div>
      </AccordionItem>
    </Accordion.Root>
  </div>
);

const AccordionItem: React.FC<Accordion.AccordionItemProps> = React.forwardRef<
  HTMLDivElement,
  Accordion.AccordionItemProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={classNames(
      "focus-within:white mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]",
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));

const AccordionTrigger: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={classNames(
        "text-textColor  hover:bg-white group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon
        className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent: React.FC<React.HTMLAttributes<HTMLDivElement>> =
  React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ children, className, ...props }, forwardedRef) => (
      <Accordion.Content
        className={classNames(
          "text-textColor bg-white data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="py-[15px] px-5">{children}</div>
      </Accordion.Content>
    )
  );

export default AccordionDemo;
