import { TextFlip } from "@/shared/components/blocks/text-flip";

const roles = [
  {
    _id: "role-1",
    text: "Ingeniero en Sistemas y Tecnologías de la Información Industrial",
  },
  { _id: "role-2", text: "Desarrollador Full Stack" },
];

export function WhoAmITextFlip() {
  return (
    <TextFlip className="h-9.5 max-w-96 font-mono text-sm font-medium text-mauve-700 dark:text-mauve-200">
      {roles.map((role) => (
        <span key={role._id} className="block">
          {role.text}
        </span>
      ))}
    </TextFlip>
  );
}
