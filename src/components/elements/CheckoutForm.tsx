import React, { useState } from "react";
import StepNavigation from "../elements/StepNavigation";
import { useNavigate } from "react-router";

interface FormData {
  occasion: string;
  design: string;
  plan: string;
  title: string;
  message: string;
  photos: string[];
  music: string;
  musicUrl?: string;
}

const OCCASIONS = [
  { id: "casamento", label: "Casamento", emoji: "💒" },
  { id: "namoro", label: "Relacionamento", emoji: "💑" },
  { id: "aniversario", label: "Aniversário", emoji: "🎂" },
  { id: "amigo", label: "Melhor Amigo", emoji: "👫" },
];

const DESIGNS = [
  { id: "ghibli", label: "Ghibli", emoji: "🎬" },
  { id: "romantic", label: "Romântico", emoji: "🌹" },
  { id: "minimal", label: "Minimalista", emoji: "✨" },
  { id: "festive", label: "Festivo", emoji: "🎉" },
];

const MUSIC_OPTIONS = [
  { id: "none", label: "Sem música", emoji: "🔇" },
  { id: "spotify", label: "Spotify", emoji: "🎵" },
  { id: "youtube", label: "YouTube", emoji: "▶️" },
  { id: "deezer", label: "Deezer", emoji: "🎧" },
  { id: "amazon", label: "Amazon Music", emoji: "🛒" },
];

const PLANS = [
  {
    id: "basic",
    label: "Básico",
    price: "R$14,99",
    features: "1 ano, 1 foto, sem música",
    maxPhotos: 1,
    allowMusic: false,
  },
  {
    id: "premium",
    label: "Premium",
    price: "R$35",
    features: "Pra sempre, 3 fotos, com música",
    maxPhotos: 3,
    allowMusic: true,
  },
];

interface CheckoutFormProps {
  onSubmit?: (data: FormData) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ onSubmit }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    occasion: "",
    design: "",
    plan: "basic",
    title: "",
    message: "",
    photos: [],
    music: "none",
    musicUrl: "",
  });

  // Get plan details
  const currentPlan = PLANS.find((p) => p.id === formData.plan)!;

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const remainingSlots = currentPlan.maxPhotos - formData.photos.length;
      const filesToAdd = Array.from(files).slice(0, remainingSlots);

      filesToAdd.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData((prev) => ({
            ...prev,
            photos: [...prev.photos, reader.result as string],
          }));
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const navigate = useNavigate();

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Save site data to localStorage and navigate to generated page
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
    try {
      localStorage.setItem(`mylove4you_site_${id}`, JSON.stringify(formData));
    } catch (e) {
      console.error("Failed to save site data:", e);
    }

    if (onSubmit) {
      onSubmit(formData);
    }

    navigate(`/site/${id}`);
  };

  const isNextDisabled = () => {
    switch (currentStep) {
      case 1:
        return !formData.occasion;
      case 2:
        return !formData.design;
      case 3:
        return !formData.plan;
      case 4:
        return (
          !formData.title || !formData.message || formData.photos.length === 0
        );
      case 5:
        return (
          currentPlan.allowMusic &&
          formData.music !== "none" &&
          !formData.musicUrl
        );
      default:
        return false;
    }
  };

  const [previewIndex, setPreviewIndex] = useState(0);
  const previewTimerRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (formData.photos.length <= 1) return;
    previewTimerRef.current = window.setInterval(() => {
      setPreviewIndex((i) =>
        formData.photos.length ? (i + 1) % formData.photos.length : 0
      );
    }, 3000);
    return () => {
      if (previewTimerRef.current)
        window.clearInterval(previewTimerRef.current);
    };
  }, [formData.photos]);

  // Preview Component (reused in mobile and desktop)
  const PreviewComponent = () => (
    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8">
      <div className="text-white font-medium mb-6 text-lg md:text-xl">
        Prévia do seu site 👀
      </div>

      {/* Browser Mockup */}
      <div className="bg-slate-900 rounded-lg border border-slate-700 overflow-hidden shadow-2xl">
        {/* Browser Header */}
        <div className="bg-slate-900 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-slate-800 rounded px-3 py-1 text-xs text-gray-400">
              loveyuu.com/
              {formData.title?.toLowerCase().replace(/\s+/g, "-") || "seu-site"}
            </div>
          </div>
        </div>

        {/* Preview Content */}
        <div className="bg-gradient-to-br from-slate-900 via-red-900/20 to-orange-900/20 p-6 min-h-96 flex flex-col items-center justify-center space-y-4">
          {/* Photo Preview */}
          {formData.photos.length > 0 ? (
            <div className="w-full max-w-xs relative">
              {formData.photos.map((p, i) => (
                <img
                  key={i}
                  src={p}
                  alt={`preview-${i}`}
                  className={`absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg border-2 border-pink-500/30 transition-opacity duration-700 ${
                    i === previewIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                />
              ))}

              {formData.photos.length > 1 && (
                <div className="absolute left-2 top-1/2 -translate-y-1/2">
                  <button
                    onClick={() =>
                      setPreviewIndex(
                        (idx) =>
                          (idx - 1 + formData.photos.length) %
                          formData.photos.length
                      )
                    }
                    className="bg-black/40 text-white p-2 rounded-full"
                    aria-label="Anterior"
                  >
                    ‹
                  </button>
                </div>
              )}
              {formData.photos.length > 1 && (
                <div className="absolute right-2 top-1/2 -translate-y-1/2">
                  <button
                    onClick={() =>
                      setPreviewIndex(
                        (idx) => (idx + 1) % formData.photos.length
                      )
                    }
                    className="bg-black/40 text-white p-2 rounded-full"
                    aria-label="Próxima"
                  >
                    ›
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="w-full max-w-xs aspect-square bg-gradient-to-br from-red-600 to-orange-600 rounded-lg shadow-lg border-2 border-pink-500/30 flex items-center justify-center">
              <span className="text-white/50 text-5xl">📷</span>
            </div>
          )}

          {/* Title Preview */}
          {formData.title && (
            <div className="text-center w-full">
              <h2 className="text-2xl font-bold text-white">
                {formData.title}
              </h2>
            </div>
          )}

          {/* Message Preview */}
          {formData.message && (
            <div className="bg-slate-800/70 backdrop-blur-sm rounded-lg p-4 border border-pink-500/20 w-full">
              <p className="text-white text-center text-sm leading-relaxed line-clamp-3">
                {formData.message}
              </p>
            </div>
          )}

          {/* Music Indicator */}
          {formData.music !== "none" && formData.musicUrl && (
            <div className="text-xs text-green-400 flex items-center gap-2 mt-2">
              <span>🎵</span>
              <span>
                Com música:{" "}
                {MUSIC_OPTIONS.find((m) => m.id === formData.music)?.label}
              </span>
            </div>
          )}

          {/* Placeholder when empty */}
          {!formData.title &&
            !formData.message &&
            formData.photos.length === 0 && (
              <div className="text-center text-gray-500">
                <p className="text-sm">
                  Preencha o formulário para ver a prévia
                </p>
              </div>
            )}

          {/* Design Badge */}
          {formData.design && (
            <div className="text-xs text-gray-400 mt-4">
              Estilo: {DESIGNS.find((d) => d.id === formData.design)?.label}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Preview - Top */}
        <div className="lg:hidden mb-8">
          <PreviewComponent />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 md:p-8 h-fit lg:sticky lg:top-8">
            {/* Step 1: Escolher tipo de ocasião */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Qual é a ocasião? 🎉
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base">
                    Escolha o tipo de ocasião para seu site
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {OCCASIONS.map((occ) => (
                    <button
                      key={occ.id}
                      onClick={() =>
                        setFormData({ ...formData, occasion: occ.id })
                      }
                      className={`p-3 md:p-4 rounded-lg font-medium transition-all text-center text-sm md:text-base ${
                        formData.occasion === occ.id
                          ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white"
                          : "bg-slate-700 text-gray-300 hover:bg-slate-600"
                      }`}
                    >
                      <div className="text-2xl md:text-3xl mb-1 md:mb-2">
                        {occ.emoji}
                      </div>
                      {occ.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Escolher design */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Escolha o design 🎨
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base">
                    Selecione o estilo do seu site
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {DESIGNS.map((design) => (
                    <button
                      key={design.id}
                      onClick={() =>
                        setFormData({ ...formData, design: design.id })
                      }
                      className={`p-3 md:p-4 rounded-lg font-medium transition-all text-center text-sm md:text-base ${
                        formData.design === design.id
                          ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white"
                          : "bg-slate-700 text-gray-300 hover:bg-slate-600"
                      }`}
                    >
                      <div className="text-2xl md:text-3xl mb-1 md:mb-2">
                        {design.emoji}
                      </div>
                      {design.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Escolher plano */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Escolha seu plano 💳
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base">
                    Selecione o plano ideal para você
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {PLANS.map((plan) => (
                    <button
                      key={plan.id}
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          plan: plan.id,
                          photos: prev.photos.slice(0, plan.maxPhotos),
                          music: plan.allowMusic ? prev.music : "none",
                          musicUrl: plan.allowMusic ? prev.musicUrl : "",
                        }));
                      }}
                      className={`p-4 md:p-6 rounded-lg text-left transition-all border-2 text-sm md:text-base ${
                        formData.plan === plan.id
                          ? "border-pink-500 bg-slate-700"
                          : "border-slate-600 bg-slate-700/50 hover:border-slate-500"
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-white">
                            {plan.label}
                          </h3>
                          <p className="text-xl md:text-2xl font-bold text-pink-500 mt-2">
                            {plan.price}
                          </p>
                        </div>
                        <div className="text-2xl md:text-3xl">
                          {plan.id === "basic" ? "🧸" : "💝"}
                        </div>
                      </div>
                      <p className="text-xs md:text-sm text-gray-300">
                        {plan.features}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Preencher conteúdo */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Conteúdo do seu site ✍️
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base">
                    Preencha o título, mensagem e fotos (máx{" "}
                    {currentPlan.maxPhotos})
                  </p>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm md:text-base">
                    Título
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                    placeholder="Ex: Nosso Amor..."
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm md:text-base">
                    Mensagem
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Escreva sua mensagem especial..."
                    rows={4}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 resize-none text-sm md:text-base"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm md:text-base">
                    Fotos ({formData.photos.length}/{currentPlan.maxPhotos})
                  </label>
                  <label
                    className={`flex items-center justify-center gap-2 md:gap-3 w-full py-4 md:py-6 bg-slate-700 border-2 border-dashed rounded-lg transition-colors ${
                      formData.photos.length >= currentPlan.maxPhotos
                        ? "border-gray-600 cursor-not-allowed opacity-50"
                        : "border-pink-500 cursor-pointer hover:bg-slate-600"
                    }`}
                  >
                    <span className="text-xl md:text-2xl">📷</span>
                    <span className="text-white font-medium text-sm md:text-base">
                      Escolher fotos (máx {currentPlan.maxPhotos})
                    </span>
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handlePhotoUpload}
                      disabled={formData.photos.length >= currentPlan.maxPhotos}
                      className="hidden"
                    />
                  </label>
                  {formData.photos.length > 0 && (
                    <div
                      className={`grid gap-2 md:gap-4 mt-4 ${
                        currentPlan.maxPhotos === 1
                          ? "grid-cols-1"
                          : "grid-cols-3"
                      }`}
                    >
                      {formData.photos.map((photo, idx) => (
                        <div key={idx} className="relative">
                          <img
                            src={photo}
                            alt={`Photo ${idx + 1}`}
                            className="w-full h-24 md:h-32 object-cover rounded-lg border border-slate-600"
                          />
                          <button
                            onClick={() =>
                              setFormData({
                                ...formData,
                                photos: formData.photos.filter(
                                  (_, i) => i !== idx
                                ),
                              })
                            }
                            className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 md:w-6 h-5 md:h-6 flex items-center justify-center text-white text-xs md:text-sm"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 5: Escolher música */}
            {currentStep === 5 && currentPlan.allowMusic && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Música para o site 🎵
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base">
                    Escolha uma música do Spotify ou deixe sem som
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-3 md:gap-4">
                  {MUSIC_OPTIONS.map((music) => (
                    <button
                      key={music.id}
                      onClick={() => {
                        setFormData((prev) => ({
                          ...prev,
                          music: music.id,
                          musicUrl: music.id === "none" ? "" : prev.musicUrl,
                        }));
                      }}
                      className={`p-4 md:p-6 rounded-lg font-medium transition-all text-center text-sm md:text-base ${
                        formData.music === music.id
                          ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white"
                          : "bg-slate-700 text-gray-300 hover:bg-slate-600"
                      }`}
                    >
                      <div className="text-2xl md:text-3xl mb-2">
                        {music.emoji}
                      </div>
                      {music.label}
                    </button>
                  ))}
                </div>

                {/* Music URL Input (generic for providers) */}
                {formData.music !== "none" && (
                  <div className="space-y-3">
                    <label className="block text-white font-medium text-sm md:text-base">
                      Cole o link da música (
                      {
                        MUSIC_OPTIONS.find((m) => m.id === formData.music)
                          ?.label
                      }
                      )
                    </label>
                    <input
                      type="url"
                      value={formData.musicUrl || ""}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          musicUrl: e.target.value,
                        }))
                      }
                      placeholder={
                        formData.music === "spotify"
                          ? "https://open.spotify.com/track/..."
                          : formData.music === "youtube"
                          ? "https://youtu.be/... or https://www.youtube.com/watch?v=..."
                          : formData.music === "deezer"
                          ? "https://www.deezer.com/track/..."
                          : formData.music === "amazon"
                          ? "Link público do Amazon Music (se disponível)"
                          : ""
                      }
                      className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 md:px-4 py-2 md:py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 text-sm md:text-base"
                    />
                    <p className="text-xs md:text-sm text-gray-400">
                      📌 Dica: Abra a música no provedor selecionado, clique em
                      "Compartilhar" e copie o link
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Step 5: Sem música (Plano Básico) */}
            {currentStep === 5 && !currentPlan.allowMusic && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Música 🎵
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base">
                    Upgrade para o plano Premium para adicionar músicas do
                    Spotify
                  </p>
                </div>
                <div className="bg-slate-700/50 rounded-lg p-6 text-center">
                  <p className="text-white mb-4">
                    O plano Básico não inclui suporte a músicas.
                  </p>
                  <button
                    onClick={() => setCurrentStep(3)}
                    className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all text-sm md:text-base"
                  >
                    Upgrade para Premium
                  </button>
                </div>
              </div>
            )}

            {/* Step 6: Revisar e Finalizar */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Revise seus dados 👀
                  </h2>
                  <p className="text-gray-400 text-sm md:text-base">
                    Verifique tudo antes de ir para o pagamento
                  </p>
                </div>

                <div className="bg-slate-700/50 rounded-lg p-4 md:p-6 space-y-3 md:space-y-4 text-sm md:text-base">
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm">Ocasião</p>
                    <p className="text-white font-medium">
                      {OCCASIONS.find((o) => o.id === formData.occasion)?.label}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm">Design</p>
                    <p className="text-white font-medium">
                      {DESIGNS.find((d) => d.id === formData.design)?.label}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm">Plano</p>
                    <p className="text-white font-medium">
                      {PLANS.find((p) => p.id === formData.plan)?.label}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm">Título</p>
                    <p className="text-white font-medium">{formData.title}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm">Mensagem</p>
                    <p className="text-white font-medium line-clamp-2">
                      {formData.message}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm">Fotos</p>
                    <p className="text-white font-medium">
                      {formData.photos.length} foto(s) selecionada(s)
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm">Música</p>
                    <p className="text-white font-medium">
                      {formData.music !== "none" && formData.musicUrl
                        ? `${
                            MUSIC_OPTIONS.find((m) => m.id === formData.music)
                              ?.label
                          } 🎵`
                        : "Sem música"}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-8 md:mt-12">
              <StepNavigation
                currentStep={currentStep}
                totalSteps={6}
                onNext={handleNext}
                onPrevious={handlePrevious}
                isNextDisabled={isNextDisabled()}
                isPreviousDisabled={currentStep === 1}
              />
            </div>
          </div>

          {/* Right: Preview (Desktop only) */}
          <div className="hidden lg:block">
            <PreviewComponent />
          </div>
        </div>

        {/* Mobile Preview - Bottom */}
        <div className="lg:hidden mt-8">
          <PreviewComponent />
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
