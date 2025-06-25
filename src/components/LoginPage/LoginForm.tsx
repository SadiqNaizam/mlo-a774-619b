"use client";

import React from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(1, {
    message: "Password cannot be empty.",
  }),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    setIsLoading(true);
    console.log("Form submitted:", data);
    setTimeout(() => {
      setIsLoading(false);
      form.reset();
    }, 1500);
  };

  const inputClassName = "border-0 border-b-2 border-secondary rounded-none px-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-b-primary transition-all h-10";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-muted-foreground font-normal">Email Address</FormLabel>
              <FormControl>
                <Input 
                  {...field}
                  type="email"
                  className={inputClassName} 
                  disabled={isLoading}
                  autoComplete="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="space-y-1">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-muted-foreground font-normal">Password</FormLabel>
                <FormControl>
                  <Input 
                    {...field}
                    type="password"
                    className={inputClassName}
                    disabled={isLoading}
                    autoComplete="current-password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end">
            <Button variant="link" type="button" className="p-0 h-auto text-sm font-normal text-primary hover:no-underline">
              Forgot Password
            </Button>
          </div>
        </div>
        <Button 
          type="submit" 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 rounded-lg text-base"
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
      </form>
    </Form>
  );
};

export default LoginForm;
