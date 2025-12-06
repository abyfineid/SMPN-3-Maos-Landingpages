import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from "../types";

const SYSTEM_INSTRUCTION = `
Kamu adalah Asisten Virtual Cerdas untuk SMP Negeri 3 Maos. 
Tugasmu adalah menjawab pertanyaan calon siswa, orang tua, dan pengunjung website dengan ramah, sopan, dan informatif.

Informasi Sekolah:
- Nama: SMP Negeri 3 Maos
- Lokasi: Jl. Raya Maos No. 123, Cilacap, Jawa Tengah.
- Visi: Terwujudnya Peserta Didik yang Beriman, Bertaqwa, Berprestasi, dan Berbudaya Lingkungan.
- Program Unggulan: Kelas Tahfidz, Pramuka Inti, Tim Robotik, dan Ekstrakurikuler Olahraga (Voli & Futsal).
- PPDB (Pendaftaran): Dibuka bulan Juni-Juli setiap tahun. Syarat: Nilai Rapor SD, KK, Akte Kelahiran.
- Fasilitas: Lab Komputer Modern, Perpustakaan Digital, Masjid Sekolah, Lapangan Olahraga Luas, Free WiFi Area.
- Jam Sekolah: Senin-Jumat (07.00 - 15.30 WIB).

Gunakan Bahasa Indonesia yang baik dan benar namun tetap luwes.
Jika ditanya tentang hal diluar konteks sekolah, arahkan kembali pembicaraan ke topik pendidikan atau sekolah secara halus.
Jawaban harus ringkas (maksimal 3 paragraf pendek).
`;

export const sendMessageToGemini = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  try {
    // Inisialisasi Lazy: Cek API Key di dalam fungsi, bukan di top-level file
    // Ini mencegah error "API Key must be set" yang membuat halaman blank saat load
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      console.error("API Key not found in environment variables");
      return "Maaf, sistem AI sedang tidak dapat diakses (Konfigurasi API Key hilang). Hubungi administrator.";
    }

    const ai = new GoogleGenAI({ apiKey });
    const model = 'gemini-2.5-flash';
    
    // Construct the prompt with history context
    // In a real production app, we would use ai.chats.create for stateful history,
    // but for this stateless service call pattern, we simulate context via system instruction + recent messages.
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: model,
      contents: [
        ...history.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        })),
        {
          role: 'user',
          parts: [{ text: newMessage }]
        }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Maaf, saya tidak dapat memproses permintaan Anda saat ini.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Maaf, terjadi gangguan koneksi pada sistem AI kami. Silakan coba lagi nanti.";
  }
};