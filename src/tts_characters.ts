// TTS キャラクター定義

export interface TtsCharacter {
  id: string;
  name: string;
  voiceName: string; // Gemini TTS ボイス名
  stylePrompt: string; // 読み上げスタイル指示（system_instruction として送信）
}

export const TTS_CHARACTERS: TtsCharacter[] = [
  {
    id: "chobi",
    name: "ちょビ（先生）",
    voiceName: "Despina",
    stylePrompt:
      "終始にこにこしているような、柔らかく楽しげなトーンで読み上げてください",
  },
  {
    id: "naruko",
    name: "なるこ（生徒）",
    voiceName: "Kore",
    stylePrompt:
      "元気で明るい声で、好奇心いっぱいに読み上げてください",
  },
];

export function getCharacter(id: string): TtsCharacter {
  const char = TTS_CHARACTERS.find((c) => c.id === id);
  if (!char) {
    throw new Error(`キャラクター "${id}" が見つかりません`);
  }
  return char;
}
