import { BsCloudCheck } from "react-icons/bs";
import { Id } from "../../../../convex/_generated/dataModel";
import { useRef, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";

interface DocumentInputProps {
  title: string;
  id: Id<"documents">;
}

export const DocumentInput = ({ title, id }: DocumentInputProps) => {
  const [value, setValue] = useState(title);
  const [isError, setIsError] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const mutate = useMutation(api.documents.updateById);

  return (
    <div className="flex items-center gap-2">
      {isEditing ? (
        <span className="invisible whitespace-pre px-1.5 text-lg">
            {value || " "}
            <input ref={inputRef}
            value={value}
            onChange={() => {}}
            className="absolute inset-0 text-lg text-black px-1.5 bg-transparent truncate"/>
        </span>
      ) : (
        <span className="text-lg px-1.5 cursor-pointer truncate">
            {title}
            </span>
      )}

      <BsCloudCheck />
    </div>
  );
};
