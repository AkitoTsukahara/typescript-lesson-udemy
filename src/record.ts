export {};

// Record<K, T>
type Prefectures = 'Tokyo' | 'Chiba' | 'Yokohama' | 'Shiga';
type Covid19InfectionInfo = {
    kaniji_name: string;
    confirmed_cases: number;
};

const covid19Japan: Record<Prefectures, Covid19InfectionInfo> = {
    Tokyo: {kaniji_name: '東京', confirmed_cases: 2000 },
    Chiba: {kaniji_name: '千葉', confirmed_cases: 500 },
    Yokohama: {kaniji_name: '横浜', confirmed_cases: 1000 },
    Shiga: {kaniji_name: '滋賀', confirmed_cases: 100 },
}