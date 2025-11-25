import { useState } from 'react';

export default function Create() {
  const [formData, setFormData] = useState({
    plan: '1ano',
    name: '',
    relationship: '',
    message: '',
    photo: null as string | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          photo: reader.result as string
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log('Creating site with data:', formData);
    alert('Site criado com sucesso! 💕');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navbar */}
      <nav className="border-b border-slate-700/50 bg-slate-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">❤️</span>
              </div>
              <span className="text-white font-bold text-xl">LoveYuu</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Preços</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Perguntas Frequentes</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Como Fazer</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
              <button className="px-4 py-2 bg-white text-slate-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                🇧🇷 PT
              </button>
              <button className="text-gray-300 hover:text-white transition-colors">usEN</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Form */}
          <div>
            <h1 className="text-5xl font-bold text-white mb-2">Quase lá!</h1>
            <p className="text-gray-400 mb-8">Preencha os dados para criar seu contador</p>

            <div className="space-y-6">
              {/* Plan Selection */}
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setFormData({...formData, plan: '1ano'})}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                    formData.plan === '1ano'
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                      : 'bg-slate-800 text-gray-400 border border-slate-700'
                  }`}
                >
                  1ano, 1 foto e sem música - R$29
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({...formData, plan: 'premium'})}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                    formData.plan === 'premium'
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                      : 'bg-slate-800 text-gray-400 border border-slate-700'
                  }`}
                >
                  Pra sempre, 3 fotos e com música - R$49
                </button>
              </div>

              {/* Name */}
              <div>
                <label className="block text-white font-medium mb-2">Nome do casal:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Digite o nome do casal"
                  className="w-full bg-slate-800 border border-pink-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-400"
                />
              </div>

              {/* Relationship Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">Início do relacionamento:</label>
                  <input
                    type="date"
                    name="relationship"
                    value={formData.relationship}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-400"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">&nbsp;</label>
                  <input
                    type="time"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-400"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white font-medium mb-2">Mensagem:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Escreva sua mensagem aqui..."
                  rows={6}
                  className="w-full bg-slate-800 border border-pink-500 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-400 resize-none"
                />
              </div>

              {/* Photo Upload */}
              <div>
                <label className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-slate-800 border-2 border-dashed border-pink-500 rounded-lg cursor-pointer hover:bg-slate-700 transition-colors">
                  <span className="text-2xl">📷</span>
                  <span className="text-white font-medium">Escolher foto do casal</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Right Side - Preview */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <span className="text-white font-medium">Como vai ficar 👇</span>
            </div>

            {/* Browser Mockup */}
            <div className="bg-slate-800 rounded-t-2xl border border-slate-700 overflow-hidden shadow-2xl">
              {/* Browser Header */}
              <div className="bg-slate-900 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-slate-800 rounded px-3 py-1 text-sm text-gray-400">
                    loveyuu.com/{formData.name || 'seu-nome'}
                  </div>
                </div>
              </div>

              {/* Preview Content */}
              <div className="bg-gradient-to-br from-slate-900 via-red-900/20 to-orange-900/20 p-8 min-h-[500px] flex flex-col items-center justify-center">
                {/* Photo Preview */}
                <div className="w-full max-w-sm mb-8">
                  {formData.photo ? (
                    <img
                      src={formData.photo}
                      alt="Preview"
                      className="w-full rounded-2xl shadow-2xl border-4 border-pink-500/30"
                    />
                  ) : (
                    <div className="aspect-[3/4] bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl shadow-2xl border-4 border-pink-500/30 flex items-center justify-center">
                      <span className="text-white/50 text-6xl">📷</span>
                    </div>
                  )}
                </div>

                {/* Name Preview */}
                {formData.name && (
                  <div className="text-center mb-4">
                    <h2 className="text-3xl font-bold text-white mb-2">{formData.name}</h2>
                  </div>
                )}

                {/* Message Preview */}
                {formData.message && (
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 max-w-md border border-pink-500/20">
                    <p className="text-white text-center leading-relaxed">{formData.message}</p>
                  </div>
                )}

                {/* Placeholder when empty */}
                {!formData.name && !formData.message && !formData.photo && (
                  <div className="text-center text-gray-500">
                    <p className="text-lg">Preencha o formulário para ver a prévia</p>
                  </div>
                )}
              </div>
            </div>

            {/* Create Button */}
            <div className="mt-8">
              <button 
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-4 px-6 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-pink-500/30"
              >
                Criar nosso site
              </button>
              <p className="text-center text-gray-400 text-sm mt-4">
                Revise todos os dados antes de criar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}