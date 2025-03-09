// 定义类型
export interface UserInfo {
  name: string;
  gender: string;
  birthDate: string;
  solarDate: string;
  lunarDate: string;
}

export interface ElementAnalysis {
  yearPillar: string;
  monthPillar: string;
  dayPillar: string;
  hourPillar: string;
  elements: {
    heaven: string;
    earth: string;
  }[];
}

export interface DestinyReport {
  basicInfo: UserInfo;
  elements: ElementAnalysis;
  personalityTraits: {
    strengths: string[];
    weaknesses: string[];
    workStyle: string;
  };
} 