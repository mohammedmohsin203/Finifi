"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Separator } from "./ui/separator";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Field must be at least 2 characters.",
  }),
});

export function InputForm(data: z.infer<typeof FormSchema>) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Vendor form sent to the vendor and stage moved to “awaiting vendor details”",

    });
  }

  return (
    <>
      {" "}
      <main className="flex items-center justify-center flex-row">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Enter Email Address</FormLabel>
                  <FormControl>
                    <Input className="bg-[#EBF5FF]" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>CC Mail</FormLabel>
                  <FormControl>
                    <Input className="bg-[#EBF5FF]" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Email Template </FormLabel>
                  <FormControl>
                    <Input className="bg-[#EBF5FF]" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <aside className="h-[100%] w-[50%] border-black border-[1px] rounded-sm m-4 translate-y-[-0.75rem]">
          <div className="text-black m-2">Vendor Registration</div>
          <Separator className="my-2" />
          <div className="w-full h-full text-black p-2">
            Hi Name,
            <br /><br/>
            Hope all is well at your end
            <br /><br/>
            Pls fill the vendor form shared with Thanks for your time and
            consideration
            <br /><br/>
            Best Regards,
          </div>
        </aside>
      </main>
    </>
  );
}
