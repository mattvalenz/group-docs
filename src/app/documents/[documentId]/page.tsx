import { auth } from "@clerk/nextjs/server";
import { preloadQuery, usePreloadedQuery } from "convex/nextjs";

import React from "react";
import { Id } from "../../../../convex/_generated/dataModel";
import { Document } from "./document";
import { api } from "../../../../convex/_generated/api";

interface DocumentIdPageProps {
  params: Promise<{ documentId: Id<"documents"> }>;
}
const DocumentIdPage = async ({ params }: DocumentIdPageProps) => {

  const { documentId } = await params;
  const { getToken } = await auth();
  const token = await getToken({ template: "convex" }) ?? undefined;

  if (!token){
    throw new Error("Unauthorized")
  }

  const preloadedDocument = await preloadQuery(
    api.documents.getById,
    { id: documentId },
    { token }
  )

  return <Document />;
};

export default DocumentIdPage;
