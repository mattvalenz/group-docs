"use client";

import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import { LucideIcon, PrinterIcon, Redo2Icon, SpellCheckIcon, Undo2Icon } from "lucide-react";

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}

const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify center rouded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80"
      )}
    >
      <Icon className="size-4" />
    </button>
  );
};

export const Toolbar = () => {
  const { editor } = useEditorStore();

  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => editor?.chain().undo().run(),
      },
      {
        label:"Redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().redo().run(),
      },
      {
        label:"Print",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label:"Spell Check",
        icon: SpellCheckIcon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck")
          editor?.view.dom.setAttribute("spellcheck", current === "false" ? "true" : "false")
        }
      },
    ],
  ];

  return (
    <div className=" bg-[#e2e2e2] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  );
};
