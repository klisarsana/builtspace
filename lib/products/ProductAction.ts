"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import { productSchema } from "./ProductValidation";
import { products } from "@/db/schema";
import { db } from "@/db";
import z from "zod";
import { FormState } from "@/types";


export const addProductAction = async (
  prevState: FormState,
  formData: FormData
) => {
  console.log(formData);

  // Auth
  try {
    const { userId, orgId } = await auth();

    if (!userId) {
      return {
        success: false,
        message: "You must be signed in to submit a product",
      };
    }

    if (!orgId) {
      return {
        success: false,
        message: "You must be a member of an organization to submit a product",
      };
    }

    // Data
    const user = await currentUser();
    const userEmail = user?.primaryEmailAddress?.emailAddress || "anonymous";
    const rawFormData = Object.fromEntries(formData.entries());

    // Validate the data
    const validateData = productSchema.safeParse(rawFormData);

    if (!validateData.success) {
      console.log(validateData.error.flatten().fieldErrors);
      return {
        success: false,
        errors: validateData.error.flatten().fieldErrors,
        message: "Invalid Data",
      };
    }

    const { name, slug, tagline, description, websiteUrl, tags } =
      validateData.data;

    const tagsArray = tags ? tags.filter((tag) => typeof tag === "string") : [];

    // Transform the Data
    await db.insert(products).values({
      name,
      slug,
      tagline,
      description,
      websiteUrl,
      tags: tagsArray,
      status: "pending",
      submittedBy: userEmail,
      organizationId: orgId,
      userId,
    });

    return {
      success: true,
      message: "Product Submitted successfully! It will be reviewed shortly",
    };
  } catch (error) {
    console.error(error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
        message: "Validation failed. Please check the form",
      };
    }

    return {
      success: false,
      errors: error,
      message: "Failed to submit product",
    };
  }
};
