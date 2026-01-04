"use client";

import { Loader2Icon, SparklesIcon } from "lucide-react";
import { FormField } from "../forms/FormField";
import { Button } from "../ui/button";
import { addProductAction } from "@/lib/products/ProductAction";
import { useActionState } from "react";

const initialState = {
  success: false,
  error: {},
  message: "",
};

export default function ProductSubmitForm() {
  const [state, formAction, isPending] = useActionState(
    addProductAction,
    initialState
  );

  return (
    <form className="space-y-6" action={formAction}>
      <FormField
        label="Product Name"
        name="name"
        id="name"
        placeholder="My Awesome Product"
        required
        onChange={() => {}}
        error=""
      />
      <FormField
        label="Slug"
        name="slug"
        id="slug"
        placeholder="my-awesome-project"
        required
        onChange={() => {}}
        error=""
        helperText="URL-friendly version of your product name"
      />
      <FormField
        label="Tagline"
        name="tagline"
        id="tagline"
        placeholder="A brief, catchy description"
        required
        onChange={() => {}}
        error=""
      />
      <FormField
        label="Description"
        name="descrption"
        id="description"
        placeholder="Tell us about your product..."
        required
        onChange={() => {}}
        error=""
        textarea
      />
      <FormField
        label="Website URL"
        name="websiteUrl"
        id="websireUrl"
        placeholder="https://yourproduct.com"
        required
        onChange={() => {}}
        error=""
        helperText="Enter your product's website or landing page"
      />
      <FormField
        label="Tags"
        name="tags"
        id="tags"
        placeholder="AI, productivity, SaaS"
        required
        onChange={() => {}}
        error=""
        helperText="Comma-separated tags (e.g., AI, SaaS, Productivity)"
      />

      <Button type="submit" size={"lg"} className="w-full cursor-pointer">
        {isPending ? (
          <Loader2Icon className="size-4 animate-spin" />
        ) : (
          <>
            <SparklesIcon className="size-4" />
            Submit Product
          </>
        )}
      </Button>
    </form>
  );
}
