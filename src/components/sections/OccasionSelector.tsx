type Occasion = {
  id: string;
  label: string;
  description?: string;
  icon?: string;
};

const OCCASIONS: Occasion[] = [
  {
    id: "birthday",
    label: "Aniversário",
    description: "Cartões e convites de aniversário",
  },
  { id: "invitation", label: "Convite", description: "Convites com RSVP" },
  {
    id: "graduation",
    label: "Formatura",
    description: "Parabéns pela conquista",
  },
  {
    id: "christmas",
    label: "Natal / Fim de ano",
    description: "Cartões festivos",
  },
  {
    id: "thankyou",
    label: "Agradecimento",
    description: "Notas de agradecimento",
  },
  {
    id: "other",
    label: "Outra ocasião",
    description: "Personalize como quiser",
  },
];

export default function OccasionSelector({
  onSelect,
}: {
  onSelect: (id: string) => void;
}) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {OCCASIONS.map((o) => (
        <button
          key={o.id}
          onClick={() => onSelect(o.id)}
          className="card-shell p-6 text-left hover:scale-105 transition-transform"
          aria-label={o.label}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-xl font-bold">
              🎉
            </div>
            <div className="flex-1">
              <div className="font-semibold text-lg">{o.label}</div>
              <p className="text-sm text-heading-3 mt-1">{o.description}</p>
            </div>
            <div className="text-heading-2">➜</div>
          </div>
        </button>
      ))}
    </div>
  );
}
