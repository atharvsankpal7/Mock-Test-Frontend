interface Subject {
  subjectName: string; // Name of the subject
  topics: string[]; // Topics for this subject
}

export interface TopicList {
  subjects: Subject[]; // List of subjects, each with a name and topics
}

export const EducationLevel = {
  Undergraduate: "undergraduate",
  JuniorCollege: "juniorCollege",
} as const;

export type EducationLevel =
  (typeof EducationLevel)[keyof typeof EducationLevel];

export interface TSubjectList {
  domain: string;
  subjects: Subject[];
}

export interface TCustomizedTestProps {
  onBack: () => void;
  subjects: TSubjectList[];
}

export enum TUnderGraduateTestCategories {
  GATE = "Gate",
  COMPANY_SPECIFIC = "Company Specific",
  CUSTOM = "Custom",
}